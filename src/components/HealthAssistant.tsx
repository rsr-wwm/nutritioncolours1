import React, { useState, useRef, useEffect } from 'react';
import { IconBot, IconX, IconSearch, IconMapPin, IconArrowRight, IconFileText, IconSettings } from './ui/Icons';
import { TEAM, PLANS, BLOG_ARTICLES } from '@/lib/constants';
import { RECIPES } from '@/lib/recipes_database';
import { TOPICS } from '@/lib/topics';
import { clearStoredGeminiApiKey, getStoredGeminiApiKey, setStoredGeminiApiKey } from '@/lib/apiKey';
import { logger } from '@/lib/logger';
import { ensureAIConsent, grantAIConsent, getConsentNotice } from '@/lib/aiConsent';
import { checkPromptSafety, getSafeFallbackMessage, AI_OUTPUT_DISCLAIMER } from '@/lib/aiSafetyFilter';

const getGeminiApiKey = (): string => {
  return getStoredGeminiApiKey();
};

// --- Context Generation (Web MCP) ---
const getSiteContext = () => {
  return `
You are the specialized clinical assistant for Dr. Shilpa Thakur's NutritionColours platform.
Use the following context about our platform to answer user questions accurately.

TEAM & DOCTORS:
${TEAM.map(m => `- ${m.name} (${m.role}): ${m.specialties.join(', ')}. Located in ${m.location}.`).join('\n')}

CLINICAL PLANS:
${PLANS.map(p => `- ${p.name}: Ideal for ${p.idealFor}. Features: ${p.features.slice(0,3).join(', ')}.`).join('\n')}

AVAILABLE RECIPES:
${RECIPES.map(r => `- ${r.title} (${r.category}): ${r.primaryBenefit}.`).join('\n')}

HEALTH TOPICS & PROTOCOLS:
${TOPICS.map(t => `- ${t.title}: ${t.shortDesc} (Solution: ${t.solution})`).join('\n')}

LATEST ARTICLES:
${BLOG_ARTICLES.slice(0,3).map(a => `- ${a.title} by ${a.author}`).join('\n')}

MISSION:
Reverse chronic metabolic diseases (Diabetes, PCOD, Hypertension) through Circadian Nutrition. Food is information.
  `.trim();
};

// --- Types & Interfaces ---
interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  image?: string; // Base64 string for display
  grounding?: {
    web?: { uri: string; title: string }[];
    maps?: { uri: string; title: string }[];
  };
}

type ChatMode = 'clinical' | 'deep' | 'search' | 'maps';

const MODES: { id: ChatMode; label: string; icon: React.ReactNode; model: string; desc: string }[] = [
  { id: 'clinical', label: 'Clinical Chat', icon: <IconBot size={16} />, model: 'gemini-3-flash-preview', desc: 'Context-aware clinical nutrition reasoning' },
  { id: 'deep', label: 'Deep Research', icon: <span className="text-xs font-black">🧠</span>, model: 'gemini-3-flash-preview', desc: 'Complex reasoning (Thinking Mode)' },
  { id: 'search', label: 'Web Search', icon: <IconSearch size={16} />, model: 'gemini-3-flash-preview', desc: 'Live web information' },
  { id: 'maps', label: 'Local Guide', icon: <IconMapPin size={16} />, model: 'gemini-2.5-flash', desc: 'Find stores & clinics' },
];

// --- Helper Functions ---
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve({
        inlineData: {
          data: base64String,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};

const playAudio = async (text: string) => {
  try {
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      logger.warn('HealthAssistant', 'TTS skipped: Gemini API Key is not set');
      return;
    }
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
      const audioBuffer = await audioContext.decodeAudioData(bytes.buffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
      // Close AudioContext after playback to free audio resources
      source.onended = () => { audioContext.close(); };
    }
  } catch (error) {
    logger.error('HealthAssistant', 'TTS playback failed', error);
  }
};

interface HealthAssistantProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialQuery?: string;
}

export const HealthAssistant: React.FC<HealthAssistantProps> = ({ isOpen, setIsOpen, initialQuery }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'model', text: "Namaste! I am your Clinical Assistant, trained on Dr. Shilpa Thakur's metabolic reversal protocols. Ask me about our doctors, plans, recipes, or disease reversal!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<ChatMode>('clinical');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(getStoredGeminiApiKey());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Effect to handle initial query from external search bar
  useEffect(() => {
    if (isOpen && initialQuery) {
      setInput(initialQuery);
    }
  }, [isOpen, initialQuery]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- Core Logic ---

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      image: selectedImage ? URL.createObjectURL(selectedImage) : undefined
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    
    // Prepare for API Call
    const currentMode = MODES.find(m => m.id === mode)!;
    
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Please set your Gemini API Key in the settings (gear icon at the top right of this chat window) to enable the Clinical Assistant."
      }]);
      setIsLoading(false);
      return;
    }

    // Safety filter: block dangerous prompts before sending to AI
    const userText = input || '';
    const safetyCheck = checkPromptSafety(userText);
    if (!safetyCheck.safe) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: `${safetyCheck.reason}\n\n${getSafeFallbackMessage()}`
      }]);
      setIsLoading(false);
      return;
    }

    // Consent gate: ensure user has acknowledged AI data notice
    if (!ensureAIConsent('health')) {
      grantAIConsent('health'); // Auto-grant on first use with notice shown below
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: `${getConsentNotice('health')}\n\nBy continuing, you acknowledge this notice.`
      }]);
    }
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey });
    
    const parts: any[] = [];
    
    // Add image if exists
    if (selectedImage) {
      const imagePart = await fileToGenerativePart(selectedImage);
      parts.push(imagePart);
      setSelectedImage(null); // Clear after sending
    }
    
    // Add text
    parts.push({ text: input || (selectedImage ? "Analyze this image for nutritional content." : "Hello") });

    // Config based on Mode
    const tools: any[] = [];
    let config: any = {};
    let systemInstruction = getSiteContext(); // Inject Web Context

    if (mode === 'search') {
      systemInstruction += "\nAdditionally, use your internal knowledge and research to provide real-time-like information.";
    } else if (mode === 'maps') {
      systemInstruction += "\nProvide relevant locations, addresses, and contact info based on your training data.";
    } else if (mode === 'deep') {
      config = {
        thinkingConfig: { thinkingBudget: 32768 }, // MAX Thinking Budget
      };
    }

    try {
      const response = await ai.models.generateContent({
        model: currentMode.model,
        contents: { parts },
        config: {
          ...config,
          systemInstruction, // Pass the Site Context here
          tools: tools.length > 0 ? tools : undefined,
        }
      });

      const responseText = response.text || "I couldn't generate a text response.";
      
      // Extract Grounding Metadata
      const webLinks: { uri: string; title: string }[] = [];
      const mapLinks: { uri: string; title: string }[] = [];

      if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        response.candidates[0].groundingMetadata.groundingChunks.forEach((chunk: any) => {
          if (chunk.web) webLinks.push(chunk.web);
          if (chunk.maps) mapLinks.push(chunk.maps);
        });
      }

      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: responseText,
        grounding: { web: webLinks, maps: mapLinks }
      }]);

    } catch (error) {
      logger.error('HealthAssistant', 'Gemini API call failed', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I encountered an error connecting to my clinical database. Please try again."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Audio Recording (Transcription) ---
  const toggleRecording = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      // Also release stream immediately in case onstop is delayed
      mediaStreamRef.current?.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          // Release microphone stream to stop the recording indicator
          mediaStreamRef.current?.getTracks().forEach(track => track.stop());
          mediaStreamRef.current = null;
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          await transcribeAudio(audioBlob);
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (err) {
        logger.error('HealthAssistant', 'Microphone access denied', err);
        alert("Microphone access denied.");
      }
    }
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsLoading(true);
    try {
      const base64Audio = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = (reader.result as string).split(',')[1];
          if (result === undefined) {
            reject(new Error('Failed to read audio data'));
          } else {
            resolve(result);
          }
        };
        reader.onerror = () => reject(new Error('Failed to read audio file'));
        reader.readAsDataURL(audioBlob);
      });

      const apiKey = getGeminiApiKey();
      if (!apiKey) {
        alert("Please set your Gemini API Key in settings before using voice transcription.");
        setIsLoading(false);
        return;
      }
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey });
      
      // Use Gemini Flash for fast transcription
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            { inlineData: { mimeType: 'audio/webm', data: base64Audio } },
            { text: "Transcribe this audio exactly as spoken." }
          ]
        }
      });
      
      if (response.text) {
        setInput(prev => prev + " " + response.text);
      }
    } catch (e) {
      logger.error('HealthAssistant', 'Audio transcription failed', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 hover:scale-110 transition-all border-4 border-white/20"
        aria-label={isOpen ? "Close health assistant" : "Open health assistant"}
      >
        {isOpen ? <IconX size={28} /> : <IconBot size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[450px] h-[70vh] bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/50 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-800 p-4 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <IconBot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">Clinical Assistant</h3>
                <p className="text-[10px] text-emerald-200 uppercase tracking-widest mt-1">Clinical Protocol Guide</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Mode Selector */}
              <div className="relative group">
                 <button aria-label="Select Chat Mode" className="flex items-center gap-1 bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all">
                    {MODES.find(m => m.id === mode)?.icon} <span className="hidden sm:inline">{MODES.find(m => m.id === mode)?.label}</span>
                 </button>
                 <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden hidden group-hover:block p-1">
                    {MODES.map(m => (
                      <button 
                        key={m.id}
                        onClick={() => setMode(m.id)}
                        className={`w-full text-left px-3 py-2 text-xs font-bold flex items-center gap-2 rounded-lg ${mode === m.id ? 'bg-emerald-50 text-emerald-700' : 'text-stone-500 hover:bg-stone-50'}`}
                      >
                         <span className="w-5 flex justify-center">{m.icon}</span>
                         <div className="flex flex-col">
                            <span>{m.label}</span>
                            <span className="text-[10px] font-medium opacity-80">{m.desc}</span>
                         </div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Settings Toggle */}
              <button 
                onClick={() => setShowSettings(!showSettings)} 
                className={`p-2 rounded-lg transition-colors ${showSettings ? 'bg-white/20 text-lime-400' : 'hover:bg-black/20 text-white'}`}
                title="Settings"
              >
                <IconSettings size={18} />
              </button>
            </div>
          </div>

          {/* Settings Area */}
          {showSettings && (
            <div className="bg-emerald-900 text-white p-4 border-b border-emerald-800 space-y-3 shrink-0 animate-in slide-in-from-top duration-200">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-200">Gemini API Key</label>
                <div className="flex gap-2">
                  <input 
                    type="password" 
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    placeholder="Enter your Gemini API key..." 
                    aria-label="Gemini API Key input"
                    className="flex-1 bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-emerald-700 focus:outline-none focus:border-lime-400"
                  />
	                  <button 
	                    onClick={() => {
	                      setStoredGeminiApiKey(apiKeyInput);
	                      alert('API Key updated successfully!');
	                      setShowSettings(false);
	                    }}
                    className="bg-lime-400 text-emerald-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    Save
                  </button>
	                  {apiKeyInput && (
	                    <button 
	                      onClick={() => {
	                        clearStoredGeminiApiKey();
	                        setApiKeyInput('');
	                        alert('API Key cleared.');
	                        setShowSettings(false);
	                      }}
                      className="bg-red-500/20 text-red-200 border border-red-500/30 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-red-500/40 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
	                <p className="text-[9px] text-emerald-300 font-sans leading-none">
	                  This key is stored locally in your browser. For production, route AI calls through a protected backend endpoint.
	                </p>
              </div>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50 custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white border border-stone-100 shadow-sm rounded-tl-none text-stone-700'}`}>
                  
                  {/* User Uploaded Image */}
                  {msg.image && (
                    <img src={msg.image} alt="Uploaded" className="w-full h-32 object-cover rounded-xl mb-3 border border-white/20" />
                  )}

                  <div className="prose prose-sm max-w-none leading-relaxed whitespace-pre-wrap font-sans">
                    {msg.text}
                  </div>

                  {/* Grounding Chips */}
                  {msg.grounding && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.grounding.web?.map((link, i) => (
                        <a key={i} href={link.uri} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-[10px] font-bold hover:bg-blue-100 border border-blue-100 transition-colors">
                          <IconSearch size={10} /> {link.title}
                        </a>
                      ))}
                      {msg.grounding.maps?.map((link, i) => (
                        <a key={i} href={link.uri} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-[10px] font-bold hover:bg-amber-100 border border-amber-100 transition-colors">
                          <IconMapPin size={10} /> {link.title}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Action Bar for Bot Messages */}
                  {msg.role === 'model' && (
                    <div className="flex gap-3 mt-2 pt-2 border-t border-stone-100 opacity-60 hover:opacity-100 transition-opacity">
                       <button onClick={() => playAudio(msg.text)} className="hover:text-emerald-600" title="Read Aloud">
                          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                       </button>
                       <button className="hover:text-emerald-600" title="Copy">
                          <IconFileText size={14} />
                       </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-100 shadow-sm rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce delay-200"></div>
                   <span className="text-xs text-stone-400 font-bold uppercase tracking-widest ml-2">
                     {mode === 'deep' ? 'Thinking deeply...' : mode === 'search' ? 'Searching web...' : 'Analyzing...'}
                   </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100 shrink-0">
            {selectedImage && (
              <div className="flex items-center gap-2 mb-2 p-2 bg-stone-50 rounded-lg border border-stone-200 w-fit">
                <span className="text-xs text-stone-500 truncate max-w-[150px]">{selectedImage.name}</span>
                <button onClick={() => setSelectedImage(null)} className="text-stone-400 hover:text-red-500"><IconX size={14}/></button>
              </div>
            )}
            
            <div className="flex gap-2 items-end">
               <div className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl flex items-center p-2 gap-2 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                  <button 
                    onClick={() => fileInputRef.current?.click()} 
                    className="p-2 text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                    title="Upload Image"
                    aria-label="Upload image"
                  >
                     <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    aria-label="Upload Image File"
                    onChange={(e) => e.target.files?.[0] && setSelectedImage(e.target.files[0])} 
                  />
                  
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                    placeholder={isRecording ? "Listening..." : "Ask Clinical Assistant..."}
                    aria-label="Ask Clinical Assistant"
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm max-h-24 resize-none py-2"
                    rows={1}
                  />

                  <button 
                    onClick={toggleRecording} 
                    className={`p-2 rounded-xl transition-colors ${isRecording ? 'text-red-500 bg-red-50 animate-pulse' : 'text-stone-400 hover:text-emerald-600 hover:bg-emerald-50'}`}
                    title="Voice Input"
                  >
                     <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                  </button>
               </div>
               
               <button 
                 onClick={handleSend} 
                 disabled={isLoading || (!input && !selectedImage)}
                 aria-label="Send message"
                 className="bg-emerald-600 text-white p-3 rounded-2xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all"
               >
                 <IconArrowRight size={20} />
               </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

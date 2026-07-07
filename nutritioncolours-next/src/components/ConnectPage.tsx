import React, { useState, useEffect } from 'react';
import { 
  IconWhatsApp, IconFacebook, IconTwitter, IconYouTube,
  IconInstagram, IconLinkedIn, IconPinterest, IconQuora, IconTikTok, IconMail, IconUser,
  IconCheck, IconHeart, IconSave, IconPlus, IconRefresh, IconWand
} from './ui/Icons';
import { SectionHeading } from './ui/SectionHeading';
import { logger } from '@/lib/logger';
import { safeJsonParse } from '@/lib/safeUtils';
import { TESTIMONIALS } from '@/lib/constants';

interface Comment {
  author: string;
  text: string;
  timestamp: string;
}

interface Post {
  id: string;
  author: string;
  avatar: string;
  condition: string;
  content: string;
  likes: number;
  liked: boolean;
  bookmarked: boolean;
  comments: Comment[];
  timestamp: string;
}

const DEFAULT_POSTS: Post[] = [
  {
    id: '1',
    author: 'Aravind Swamy',
    avatar: '👨‍💼',
    condition: 'Type 2 Diabetes Reversal',
    content: 'Reversed my Type 2 Diabetes in 5 months! Just got my lab reports back and my HbA1c dropped from 8.4 to 5.6. Dr. Shilpa\'s circadian plate rules work miracles. Completely off metformin now! The key was moving carbs to early daylight hours.',
    likes: 42,
    liked: false,
    bookmarked: false,
    comments: [
      { author: 'Meera Nair', text: 'Incredible progress! Did you follow the 10-hour eating window strictly?', timestamp: '2h ago' },
      { author: 'Dr. Shilpa Thakur', text: 'Splendid results, Aravind! Autophagy and insulin sensitivity reset perfectly when we align with the circadian clock. Keep it up!', timestamp: '1h ago' }
    ],
    timestamp: '3h ago'
  },
  {
    id: '2',
    author: 'Priyanka Sharma',
    avatar: '👩‍⚕️',
    condition: 'PCOD Remission',
    content: 'Regular cycles after 8 years of polycystic ovarian struggle! Circumsolar macro-shifting made all the difference. Consuming high complex carbs only at lunch cured my afternoon energy slumps and completely killed my midnight sweet cravings.',
    likes: 38,
    liked: false,
    bookmarked: false,
    comments: [
      { author: 'Rajesh K.', text: 'This is inspiring! My daughter is going through the same.', timestamp: '4h ago' }
    ],
    timestamp: '5h ago'
  },
  {
    id: '3',
    author: 'Amit Joshi',
    avatar: '👨‍💻',
    condition: 'MASLD / Fatty Liver Recovery',
    content: 'Down 14kg and my Grade 2 Fatty Liver has been reversed back to healthy Grade 0. Dr. Shilpa\'s chronobiology guidelines are absolute gold. Not counting calories, simply eating in sync with the sun cycle!',
    likes: 29,
    liked: false,
    bookmarked: false,
    comments: [],
    timestamp: '1d ago'
  }
];

export const ConnectPage = () => {
  const [activeTab, setActiveTab] = useState<'hub' | 'circles' | 'channels'>('hub');
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostText, setNewPostText] = useState('');
  const [newPostCondition, setNewPostCondition] = useState('General Health');
  const [newPostAuthor, setNewPostAuthor] = useState('');
  const [newPostAvatar, setNewPostAvatar] = useState('😊');
  const [circleFilter, setCircleFilter] = useState<'All' | 'Metabolic' | 'Hormonal' | 'Gut' | 'Longevity'>('All');
  
  const [newCommentText, setNewCommentText] = useState<{ [postId: string]: string }>({});
  const [showCommentInput, setShowCommentInput] = useState<{ [postId: string]: boolean }>({});
  
  // Newsletter subscription handler
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    
    if (!email) return;

    const resultMsg = `Success! Registered "${email}" for the NutritionColours weekly health dosage.`;
    
    // Check if invoked by an AI agent helper (WebMCP support)
    const nativeEvent = event.nativeEvent as any;
    if (nativeEvent && nativeEvent.agentInvoked && typeof nativeEvent.respondWith === 'function') {
      nativeEvent.respondWith(Promise.resolve(resultMsg));
    } else {
      alert(resultMsg);
    }
  };

  // Load posts from LocalStorage or initialize with defaults
  useEffect(() => {
    const stored = localStorage.getItem('nutritioncolours_hub_posts');
    const parsed = safeJsonParse<Post[] | null>(stored, null);
    if (parsed) {
      setPosts(parsed);
    } else {
      setPosts(DEFAULT_POSTS);
      localStorage.setItem('nutritioncolours_hub_posts', JSON.stringify(DEFAULT_POSTS));
    }
  }, []);

  // Save posts to LocalStorage
  const savePosts = (updatedPosts: Post[]) => {
    setPosts(updatedPosts);
    localStorage.setItem('nutritioncolours_hub_posts', JSON.stringify(updatedPosts));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim() || !newPostAuthor.trim()) {
      alert("Please fill in both your name and post content.");
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      author: newPostAuthor,
      avatar: newPostAvatar,
      condition: newPostCondition,
      content: newPostText,
      likes: 0,
      liked: false,
      bookmarked: false,
      comments: [],
      timestamp: 'Just now'
    };

    const updated = [newPost, ...posts];
    savePosts(updated);
    setNewPostText('');
    setNewPostAuthor('');
  };

  const handleLikePost = (postId: string) => {
    const updated = posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          liked: !p.liked,
          likes: p.liked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    });
    savePosts(updated);
  };

  const handleBookmarkPost = (postId: string) => {
    const updated = posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          bookmarked: !p.bookmarked
        };
      }
      return p;
    });
    savePosts(updated);
  };

  const handleAddComment = (postId: string) => {
    const commentText = newCommentText[postId];
    if (!commentText || !commentText.trim()) return;

    const updated = posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              author: 'You (Patient Member)',
              text: commentText.trim(),
              timestamp: 'Just now'
            }
          ]
        };
      }
      return p;
    });

    savePosts(updated);
    setNewCommentText(prev => ({ ...prev, [postId]: '' }));
    setShowCommentInput(prev => ({ ...prev, [postId]: false }));
  };

  const socialLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/917696160133', icon: <IconWhatsApp size={32} />, stats: 'Private Group', desc: 'Direct support & clinical health hacks.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Facebook', url: 'https://www.facebook.com/shiputh', icon: <IconFacebook size={32} />, stats: '40,000+', desc: 'Community discussions & daily healing tips.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Instagram', url: 'https://www.instagram.com/drshilpa_nutritioncolours', icon: <IconInstagram size={32} />, stats: '30,000+', desc: 'Quick health tips & patient success stories.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-shilpa-phd/', icon: <IconLinkedIn size={32} />, stats: '30,000+', desc: 'Professional insights on medical nutrition.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'YouTube', url: 'https://www.youtube.com/@nutritioncolours_drshilpa', icon: <IconYouTube size={32} />, stats: '15,000+', desc: 'In-depth clinical deep dives & lectures.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Twitter', url: 'https://twitter.com/shilpathakur', icon: <IconTwitter size={32} />, stats: '5,000+', desc: 'Breaking health news & metabolic research.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Quora', url: 'https://www.quora.com/profile/Dr-Shilpa-Thakur-Phd', icon: <IconQuora size={32} />, stats: '20,000+', desc: 'Q&A on complex metabolic reversals.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Pinterest', url: 'https://pinterest.com/NutritionColours', icon: <IconPinterest size={32} />, stats: 'Monthly Pins', desc: 'Visual diet charts & recipe infographics.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'TikTok', url: 'https://tiktok.com/@drshilpathakur', icon: <IconTikTok size={32} />, stats: 'Trending Health', desc: 'Short-form metabolic recovery tips.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
  ];

  return (
    <div className="py-24 animate-in fade-in bg-stone-50/20">
      <SectionHeading title="Join The Tribe" subtitle="Community" isMain={true} />

      {/* Tabs Selector */}
      <div className="relative z-10 flex justify-center gap-6 mb-12 border-b border-stone-150/50 max-w-2xl mx-auto pb-1 px-4">
        <button 
          onClick={() => setActiveTab('hub')} 
          className={`pb-3 text-xs md:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'hub' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-stone-400 hover:text-stone-600'}`}
        >
          Medicine-Free Hub
        </button>
        <button 
          onClick={() => setActiveTab('circles')} 
          className={`pb-3 text-xs md:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'circles' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-stone-400 hover:text-stone-600'}`}
        >
          Support Circles
        </button>
        <button 
          onClick={() => setActiveTab('channels')} 
          className={`pb-3 text-xs md:text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'channels' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-stone-400 hover:text-stone-600'}`}
        >
          Connect & Channels
        </button>
      </div>
      
      {activeTab === 'hub' ? (
        <div className="max-w-4xl mx-auto px-6 space-y-12 animate-in fade-in slide-in-from-bottom-8">
          
          {/* Post Creator Panel */}
          <div className="bg-white rounded-[40px] shadow-xl border border-stone-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full">
                Share Reversal Journey
              </span>
            </div>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-stone-400 ml-1 block mb-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Meera Nair" 
                    aria-label="Your Name"
                    value={newPostAuthor}
                    onChange={(e) => setNewPostAuthor(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 p-3 rounded-2xl outline-none focus:border-emerald-500 text-stone-700 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-stone-400 ml-1 block mb-1">Status/Topic</label>
                  <select 
                    value={newPostCondition}
                    onChange={(e) => setNewPostCondition(e.target.value)}
                    aria-label="Status or Topic"
                    className="w-full bg-stone-50 border border-stone-200 p-3 rounded-2xl outline-none focus:border-emerald-500 text-stone-700 text-xs font-bold"
                  >
                    <option value="General Health">General Health</option>
                    <option value="Diabetes Reversal">Diabetes Reversal</option>
                    <option value="PCOD Balance">PCOD Balance</option>
                    <option value="Gut Healing">Gut Healing</option>
                    <option value="Fatty Liver Remission">Fatty Liver Remission</option>
                    <option value="Weight Loss Success">Weight Loss Success</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-stone-400 ml-1 block mb-1">Your Experience / Success Note</label>
                <textarea 
                  placeholder="Share a milestone, a chronobiology recipe swap, or a question for the tribe..." 
                  aria-label="Your Experience or Success Note"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  rows={3}
                  className="w-full bg-stone-50 border border-stone-200 p-4 rounded-3xl outline-none focus:border-emerald-500 text-stone-700 text-sm leading-relaxed"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {['😊', '💪', '🥗', '⚡', '😇'].map(av => (
                    <button 
                      key={av} 
                      type="button" 
                      onClick={() => setNewPostAvatar(av)}
                      className={`text-2xl p-2 rounded-xl border transition-all ${newPostAvatar === av ? 'bg-emerald-50 border-emerald-300 scale-110' : 'bg-transparent border-transparent'}`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
                <button 
                  type="submit" 
                  className="bg-emerald-650 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-[10px] px-6 py-3.5 rounded-2xl transition-all shadow-md flex items-center gap-2"
                >
                  <IconPlus size={14} /> Publish Post
                </button>
              </div>
            </form>
          </div>

          {/* Hub Posts Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-[40px] shadow-lg border border-stone-100 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50/30 to-transparent rounded-bl-full pointer-events-none"></div>

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl">
                      {post.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-base">{post.author}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-100/50 text-emerald-800 px-2.5 py-0.5 rounded-full">
                          {post.condition}
                        </span>
                        <span className="text-[10px] text-stone-400 font-medium">{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleBookmarkPost(post.id)}
                    className={`p-2 rounded-xl transition-all ${post.bookmarked ? 'text-emerald-600 bg-emerald-50' : 'text-stone-300 hover:bg-stone-50'}`}
                    title="Bookmark"
                  >
                    <IconSave size={16} />
                  </button>
                </div>

                {/* Content */}
                <p className="text-stone-700 text-sm leading-relaxed mb-6 font-medium">
                  {post.content}
                </p>

                {/* Action Row */}
                <div className="flex justify-between items-center border-t border-b border-stone-50 py-3 mb-6">
                  <button 
                    onClick={() => handleLikePost(post.id)}
                    className={`flex items-center gap-2 text-xs font-bold transition-all px-4 py-2 rounded-xl ${post.liked ? 'text-red-500 bg-red-50' : 'text-stone-500 hover:bg-stone-50'}`}
                  >
                    <IconHeart size={16} /> {post.likes} Likes
                  </button>
                  <button 
                    onClick={() => setShowCommentInput(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                    className="flex items-center gap-2 text-xs font-bold text-stone-500 hover:bg-stone-50 px-4 py-2 rounded-xl transition-all"
                  >
                    💬 {post.comments.length} Comments
                  </button>
                </div>

                {/* Comments Section */}
                {post.comments.length > 0 && (
                  <div className="space-y-4 bg-stone-50/50 rounded-3xl p-6 border border-stone-100/35 mb-4">
                    {post.comments.map((comment, cIdx) => (
                      <div key={cIdx} className="space-y-1.5 border-b border-stone-100/40 last:border-0 pb-3 last:pb-0">
                        <div className="flex justify-between items-center">
                          <span className={`text-[10px] font-black uppercase tracking-wider ${comment.author === 'Dr. Shilpa Thakur' ? 'text-emerald-800' : 'text-stone-500'}`}>
                            {comment.author} {comment.author === 'Dr. Shilpa Thakur' && '✔ (Verified Practitioner)'}
                          </span>
                          <span className="text-[9px] text-stone-400 font-medium">{comment.timestamp}</span>
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed font-semibold">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Comment Input */}
                {showCommentInput[post.id] && (
                  <div className="flex gap-2 items-center mt-4">
                    <input 
                      type="text" 
                      placeholder="Write a supportive comment..." 
                      value={newCommentText[post.id] || ''}
                      onChange={(e) => setNewCommentText(prev => ({ ...prev, [post.id]: e.target.value }))}
                      className="flex-1 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl text-xs outline-none focus:border-emerald-500 text-stone-700"
                    />
                    <button 
                      onClick={() => handleAddComment(post.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-[9px] px-4 py-3 rounded-xl shadow-sm transition-all"
                    >
                      Post
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : activeTab === 'circles' ? (
        <div className="max-w-6xl mx-auto px-6 space-y-12 animate-in fade-in slide-in-from-bottom-8">
          {/* Circles Folder Selector */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'Metabolic', title: 'Metabolic Reversal', icon: '⚡', desc: 'Type 2 Diabetes, Fatty Liver, Weight Recovery', color: 'border-emerald-100 bg-emerald-50/30' },
              { id: 'Hormonal', title: 'Hormonal & PCOS', icon: '🧬', desc: 'PCOS, Thyroid, Cortisol & Cycle Alignment', color: 'border-purple-100 bg-purple-50/20' },
              { id: 'Gut', title: 'Gut & Microbiome', icon: '🌱', desc: 'IBS, Acid Reflux, SIBO & Digestion Rebuild', color: 'border-lime-100 bg-lime-50/20' },
              { id: 'Longevity', title: 'Longevity & Immune', icon: '🧠', desc: 'Autoimmune support, Cardiac health & Cellular age', color: 'border-blue-100 bg-blue-50/20' }
            ].map(circle => (
              <button
                key={circle.id}
                onClick={() => setCircleFilter(circleFilter === circle.id ? 'All' : circle.id as any)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-44 ${circleFilter === circle.id ? 'bg-emerald-950 text-white border-emerald-950 shadow-md scale-[1.02]' : `bg-white text-emerald-950 ${circle.color} hover:border-emerald-200`}`}
              >
                <div className="text-3xl">{circle.icon}</div>
                <div className="space-y-1">
                  <h4 className="font-black text-sm uppercase tracking-wider">{circle.title}</h4>
                  <p className={`text-[10px] leading-tight ${circleFilter === circle.id ? 'text-emerald-300' : 'text-stone-500'}`}>{circle.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-100 flex items-center justify-between shadow-sm">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 ml-2">
              Circle: {circleFilter === 'All' ? 'All Support Circles' : `${circleFilter} Support Circle`}
            </span>
            {circleFilter !== 'All' && (
              <button onClick={() => setCircleFilter('All')} className="text-xs font-bold text-stone-400 hover:text-stone-600 uppercase tracking-widest px-3 py-1 bg-stone-50 rounded-lg">
                Show All
              </button>
            )}
          </div>

          {/* Quick Circle Poster */}
          <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm space-y-4">
            <h4 className="text-xs font-black text-emerald-800 uppercase tracking-widest">Share in {circleFilter === 'All' ? 'General Hub' : `${circleFilter} Circle`}</h4>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your name..."
                value={newPostAuthor}
                onChange={(e) => setNewPostAuthor(e.target.value)}
                className="bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs font-bold outline-none focus:border-emerald-500 text-stone-700 w-1/4"
              />
              <input
                type="text"
                placeholder={`Ask or share success about ${circleFilter === 'All' ? 'your journey' : circleFilter.toLowerCase() + ' reversal'}...`}
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                className="flex-1 bg-stone-50 border border-stone-100 px-4 py-3 rounded-xl text-xs outline-none focus:border-emerald-500 text-stone-700"
              />
              <button
                onClick={(e) => {
                  const defaultCondition = circleFilter === 'All' ? 'General Health' : circleFilter === 'Metabolic' ? 'Diabetes Reversal' : circleFilter === 'Hormonal' ? 'PCOD Balance' : circleFilter === 'Gut' ? 'Gut Healing' : 'General Health';
                  const prevCondition = newPostCondition;
                  setNewPostCondition(defaultCondition);
                  handleCreatePost(e);
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-[9px] px-6 py-3 rounded-xl transition-all"
              >
                Post
              </button>
            </div>
          </div>

          {/* Circle Feed */}
          <div className="space-y-6">
            {posts.filter(p => {
              if (circleFilter === 'All') return true;
              const cond = p.condition.toLowerCase();
              if (circleFilter === 'Metabolic') {
                return cond.includes('diabetes') || cond.includes('fatty liver') || cond.includes('metabolic') || cond.includes('weight');
              }
              if (circleFilter === 'Hormonal') {
                return cond.includes('pcod') || cond.includes('pcos') || cond.includes('thyroid') || cond.includes('hormon');
              }
              if (circleFilter === 'Gut') {
                return cond.includes('gut') || cond.includes('ibs') || cond.includes('reflux') || cond.includes('digestion');
              }
              if (circleFilter === 'Longevity') {
                return cond.includes('autoimmune') || cond.includes('heart') || cond.includes('immune') || cond.includes('longevity');
              }
              return false;
            }).length > 0 ? (
              posts.filter(p => {
                if (circleFilter === 'All') return true;
                const cond = p.condition.toLowerCase();
                if (circleFilter === 'Metabolic') {
                  return cond.includes('diabetes') || cond.includes('fatty liver') || cond.includes('metabolic') || cond.includes('weight');
                }
                if (circleFilter === 'Hormonal') {
                  return cond.includes('pcod') || cond.includes('pcos') || cond.includes('thyroid') || cond.includes('hormon');
                }
                if (circleFilter === 'Gut') {
                  return cond.includes('gut') || cond.includes('ibs') || cond.includes('reflux') || cond.includes('digestion');
                }
                if (circleFilter === 'Longevity') {
                  return cond.includes('autoimmune') || cond.includes('heart') || cond.includes('immune') || cond.includes('longevity');
                }
                return false;
              }).map((post) => (
                <div key={post.id} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl">
                        {post.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-950 text-sm">{post.author}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[8px] font-black uppercase tracking-widest bg-emerald-100/50 text-emerald-800 px-2 py-0.5 rounded-full">
                            {post.condition}
                          </span>
                          <span className="text-[9px] text-stone-400 font-medium">{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleBookmarkPost(post.id)}
                      className={`p-2 rounded-xl transition-all ${post.bookmarked ? 'text-emerald-600 bg-emerald-50' : 'text-stone-300 hover:bg-stone-50'}`}
                    >
                      <IconSave size={14} />
                    </button>
                  </div>
                  <p className="text-stone-750 text-xs md:text-sm leading-relaxed mb-4">
                    {post.content}
                  </p>
                  <div className="flex justify-between items-center border-t border-stone-50 pt-3">
                    <button 
                      onClick={() => handleLikePost(post.id)}
                      className={`flex items-center gap-1.5 text-xs font-bold transition-all ${post.liked ? 'text-red-500' : 'text-stone-450 hover:text-stone-600'}`}
                    >
                      <IconHeart size={14} /> {post.likes} Likes
                    </button>
                    <button 
                      onClick={() => setShowCommentInput(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                      className="text-xs font-bold text-stone-450 hover:text-stone-600"
                    >
                      💬 {post.comments.length} Comments
                    </button>
                  </div>

                  {post.comments.length > 0 && (
                    <div className="space-y-3 bg-stone-50/50 rounded-2xl p-4 mt-4 border border-stone-100/35">
                      {post.comments.map((comment, cIdx) => (
                        <div key={cIdx} className="space-y-1 border-b border-stone-100/40 last:border-0 pb-2 last:pb-0">
                          <div className="flex justify-between items-center">
                            <span className={`text-[8px] font-black uppercase tracking-wider ${comment.author === 'Dr. Shilpa Thakur' ? 'text-emerald-800' : 'text-stone-500'}`}>
                              {comment.author} {comment.author === 'Dr. Shilpa Thakur' && '✔'}
                            </span>
                            <span className="text-[8px] text-stone-400">{comment.timestamp}</span>
                          </div>
                          <p className="text-xs text-stone-700 leading-relaxed font-semibold">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {showCommentInput[post.id] && (
                    <div className="flex gap-2 items-center mt-3">
                      <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        value={newCommentText[post.id] || ''}
                        onChange={(e) => setNewCommentText(prev => ({ ...prev, [post.id]: e.target.value }))}
                        className="flex-1 bg-stone-50 border border-stone-200 px-3 py-2 rounded-xl text-xs outline-none focus:border-emerald-500"
                      />
                      <button 
                        onClick={() => handleAddComment(post.id)}
                        className="bg-emerald-600 text-white font-black uppercase tracking-widest text-[8px] px-3 py-2 rounded-lg"
                      >
                        Post
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-12 text-center bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                <span className="text-4xl block">💬</span>
                <h4 className="font-black text-emerald-950 brand-font uppercase tracking-wider">No posts in this circle yet</h4>
                <p className="text-stone-500 text-xs max-w-xs mx-auto">Be the first to share a question or a success story under the {circleFilter} support circle!</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-right-8">
          <div className="max-w-4xl mx-auto px-6 text-center mb-16">
             <p className="text-2xl text-stone-600 mb-12 leading-relaxed">
                Connect directly with our clinical channels, secure support groups, and daily wellness logs managed directly under Dr. Shilpa Thakur\'s protocol.
             </p>
             <div className="flex justify-center gap-6 flex-wrap mb-20">
                <a href="https://wa.me/917696160133" className="flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{ backgroundColor: 'var(--color-primary)' }}>
                   <IconWhatsApp size={24} /> Join WhatsApp Group
                </a>
                <a href="https://facebook.com/groups/NutritionColours" className="flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{ backgroundColor: 'var(--color-accent)' }}>
                   <IconFacebook size={24} /> Facebook Community
                </a>
             </div>
          </div>

          {/* Social Media Grid */}
          <section className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex flex-col items-center text-center p-8 bg-white rounded-[40px] border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${link.color}`}
                >
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-stone-400 mb-6 transition-all duration-300 bg-stone-50 group-hover:bg-transparent group-hover:scale-110 group-hover:text-emerald-600">
                    {link.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-black text-emerald-950 text-base brand-font group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{link.name}</span>
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">{link.stats}</span>
                  </div>
                  <p className="mt-4 text-sm text-stone-500 leading-relaxed font-medium">
                    {link.desc}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Testimonials Preview */}
      <section className="bg-stone-50 py-24 border-y border-stone-100 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <span className="text-emerald-600 font-black uppercase tracking-widest text-xs">Real Stories</span>
               <h2 className="text-3xl font-black text-emerald-950 brand-font mt-2">Voices of Healing</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {TESTIMONIALS.slice(0, 3).map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-white hover:border-emerald-100 transition-colors">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-600">
                           <IconUser size={20} />
                        </div>
                        <div>
                           <p className="font-bold text-emerald-950">{t.name}</p>
                           <p className="text-xs text-emerald-600 uppercase tracking-widest">{t.condition}</p>
                        </div>
                     </div>
                     <p className="text-stone-600 italic text-base leading-relaxed">&quot;{t.text}&quot;</p>
                  </div>
               ))}
            </div>
         </div>
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-lime-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
         </div>
      </section>

      {/* Newsletter / CTA - Enhanced with vibrant border */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
         <div className="relative rounded-[40px] p-1 bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-600 shadow-2xl shadow-emerald-900/20">
             <div className="grid md:grid-cols-2 gap-12 bg-emerald-950 rounded-[38px] p-12 text-white overflow-hidden relative texture-dark">
                <div className="relative z-10 flex flex-col justify-center">
                   <div className="inline-block px-3 py-1 rounded-md bg-lime-400/20 text-lime-400 text-xs font-black uppercase tracking-widest w-fit mb-4 border border-lime-400/30">
                      Newsletter
                   </div>
                   <h2 className="text-4xl font-black brand-font mb-4 text-white">The Weekly Dose</h2>
                   <p className="text-emerald-200 mb-8 text-xl font-bold leading-relaxed italic">Get Dr. Shilpa&apos;s latest clinical insights, therapeutic recipes, and community success stories delivered to your inbox every Friday.</p>
                   <form 
                      data-toolname="subscribe-newsletter"
                      data-tooldescription="Subscribe to the NutritionColours newsletter for weekly metabolic health insights, recipes, and success stories."
                      data-toolautosubmit
                      onSubmit={handleSubscribe}
                      className="flex gap-4 flex-col sm:flex-row w-full"
                   >
                      <input 
                         type="email" 
                         name="email"
                         required
                         aria-label="Newsletter Email"
                         data-toolparamdescription="The subscriber email address."
                         placeholder="Enter your email address" 
                         className="flex-1 bg-emerald-900/50 border border-emerald-800 rounded-xl px-6 py-4 text-white placeholder:text-emerald-600 focus:outline-none focus:border-lime-400 focus:bg-emerald-900/80 transition-all" 
                      />
                      <button type="submit" className="bg-lime-400 text-emerald-950 font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]">Subscribe</button>
                   </form>
                   <p className="mt-4 text-xs text-emerald-600 uppercase tracking-wide">No spam. Unsubscribe anytime.</p>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                   <div className="grid grid-cols-2 gap-4 opacity-30 animate-pulse" style={{animationDuration: '4s'}}>
                      <div className="w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                      <div className="w-40 h-40 bg-lime-400/20 rounded-full blur-xl"></div>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-emerald-800/30 rounded-full flex items-center justify-center border border-emerald-700/50 backdrop-blur-sm">
                            <IconMail size={80} className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                        </div>
                   </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

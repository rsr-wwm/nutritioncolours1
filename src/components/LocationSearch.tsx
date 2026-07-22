import React, { useState, useMemo } from 'react';
import { LOCATIONS_DATA } from '../lib/locationsData';
import { INTERNATIONAL_COUNTRIES } from '../lib/internationalData';
import { IconSearch, IconMapPin, IconX, IconArrowRight, IconPhone, IconMail } from './ui/Icons';
import { GeospatialMap } from './GeospatialMap';
import { useViewerTracker } from './ViewerTracker';
import { SYNONYM_DICTIONARY, tokenize, slugify } from '../lib/directoryUtils';

const highlightText = (text: string, searchTerms: string[]) => {
  if (!text || !searchTerms || searchTerms.length === 0) return <span>{text}</span>;
  
  const sortedTerms = [...searchTerms]
    .filter(t => t.length > 1)
    .sort((a, b) => b.length - a.length);

  if (sortedTerms.length === 0) return <span>{text}</span>;

  const escapedTerms = sortedTerms.map(t => t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');

  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = regex.test(part);
        return isMatch ? (
          <mark key={i} className="bg-lime-200 text-emerald-950 font-black px-0.5 rounded shadow-sm">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

export const LocationSearch: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  const { trackInteraction } = useViewerTracker();
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = React.useDeferredValue(searchQuery);
  const [selectedCountry, setSelectedCountry] = useState<string>('India');
  const [selectedState, setSelectedState] = useState<string>('');

  const locationsByState = useMemo(() => {
    const grouped: Record<string, typeof LOCATIONS_DATA> = {};
    LOCATIONS_DATA.forEach(loc => {
      if (!grouped[loc.state]) grouped[loc.state] = [];
      grouped[loc.state].push(loc);
    });
    return grouped;
  }, []);

  const { filteredLocations, activeSearchTerms } = useMemo(() => {
    if (!deferredSearchQuery) return { filteredLocations: [], activeSearchTerms: [] };
    const query = deferredSearchQuery.toLowerCase().trim();
    const queryTokens = tokenize(query);
    if (queryTokens.length === 0) return { filteredLocations: [], activeSearchTerms: [] };

    const expandedTerms = new Set<string>();
    queryTokens.forEach(token => {
      expandedTerms.add(token);
      if (SYNONYM_DICTIONARY[token]) {
        SYNONYM_DICTIONARY[token].forEach(syn => expandedTerms.add(syn));
      }
    });
    const termArray = Array.from(expandedTerms);

    const totalDocs = LOCATIONS_DATA.length + INTERNATIONAL_COUNTRIES.length;
    const termDocCounts: Record<string, number> = {};
    termArray.forEach(term => {
      let count = 0;
      LOCATIONS_DATA.forEach(loc => {
        const docText = `${loc.city} ${loc.state} ${loc.pincode} ${(loc.healthIssues || []).join(' ')} ${loc.commonStaples || ''}`.toLowerCase();
        if (docText.includes(term)) count++;
      });
      INTERNATIONAL_COUNTRIES.forEach(loc => {
        const docText = `${loc.city} ${loc.country} ${loc.pincode} ${(loc.healthIssues || []).join(' ')} ${loc.commonStaples || ''}`.toLowerCase();
        if (docText.includes(term)) count++;
      });
      termDocCounts[term] = count;
    });

    const idfs: Record<string, number> = {};
    termArray.forEach(term => {
      idfs[term] = Math.log(1 + totalDocs / (termDocCounts[term] || 1));
    });

    const localScored = LOCATIONS_DATA.map(loc => {
      let score = 0;
      let matchedReason = '';
      const matchedIssues: string[] = [];
      let matchedStaples = false;

      termArray.forEach(term => {
        const idf = idfs[term];
        let tf = 0;

        const cityLower = loc.city.toLowerCase();
        if (cityLower === term) tf += 15.0;
        else if (cityLower.startsWith(term)) tf += 8.0;
        else if (cityLower.includes(term)) tf += 4.0;

        if (loc.pincode === term) tf += 12.0;
        else if (loc.pincode.includes(term)) tf += 6.0;

        const stateLower = loc.state.toLowerCase();
        if (stateLower === term) tf += 8.0;
        else if (stateLower.includes(term)) tf += 4.0;

        if (loc.healthIssues) {
          loc.healthIssues.forEach((issue: string) => {
            if (issue.toLowerCase().includes(term)) {
              tf += 3.0;
              if (!matchedIssues.includes(issue)) {
                matchedIssues.push(issue);
              }
            }
          });
        }

        if (loc.commonStaples && loc.commonStaples.toLowerCase().includes(term)) {
          tf += 2.0;
          matchedStaples = true;
        }

        score += tf * idf;
      });

      if (score > 0) {
        if (matchedIssues.length > 0) {
          matchedReason = `Specialized in: ${matchedIssues.slice(0, 2).join(', ')}`;
        } else if (matchedStaples) {
          matchedReason = `Adapts to regional staples: ${loc.commonStaples}`;
        } else {
          matchedReason = `Active remote hub in ${loc.state}`;
        }
      }

      return {
        ...loc,
        country: 'India',
        score,
        matchReason: matchedReason
      };
    }).filter(loc => loc.score > 0);

    const intlScored = INTERNATIONAL_COUNTRIES.map(loc => {
      let score = 0;
      let matchedReason = '';
      const matchedIssues: string[] = [];
      let matchedStaples = false;

      termArray.forEach(term => {
        const idf = idfs[term];
        let tf = 0;

        const cityLower = loc.city.toLowerCase();
        if (cityLower === term) tf += 15.0;
        else if (cityLower.startsWith(term)) tf += 8.0;
        else if (cityLower.includes(term)) tf += 4.0;

        if (loc.pincode === term) tf += 12.0;
        else if (loc.pincode.includes(term)) tf += 6.0;

        const countryLower = loc.country.toLowerCase();
        if (countryLower === term) tf += 8.0;
        else if (countryLower.includes(term)) tf += 4.0;

        if (loc.healthIssues) {
          loc.healthIssues.forEach((issue: string) => {
            if (issue.toLowerCase().includes(term)) {
              tf += 3.0;
              if (!matchedIssues.includes(issue)) {
                matchedIssues.push(issue);
              }
            }
          });
        }

        if (loc.commonStaples && loc.commonStaples.toLowerCase().includes(term)) {
          tf += 2.0;
          matchedStaples = true;
        }

        score += tf * idf;
      });

      if (score > 0) {
        if (matchedIssues.length > 0) {
          matchedReason = `Specialized in: ${matchedIssues.slice(0, 2).join(', ')}`;
        } else if (matchedStaples) {
          matchedReason = `Adapts to regional staples: ${loc.commonStaples}`;
        } else {
          matchedReason = `Active outreach hub in ${loc.country}`;
        }
      }

      return {
        state: loc.country,
        city: loc.city,
        pincode: loc.pincode,
        id: `${loc.id}/${slugify(loc.city)}`,
        country: loc.country,
        score,
        matchReason: matchedReason
      };
    }).filter(loc => loc.score > 0);

    const combined = [...localScored, ...intlScored]
      .sort((a, b) => b.score - a.score || a.city.localeCompare(b.city))
      .slice(0, 15);

    return { filteredLocations: combined, activeSearchTerms: termArray };
  }, [deferredSearchQuery]);

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="badge-clinical inline-block shadow-sm">
            Regional Outreach Network
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 mb-4 brand-font leading-tight">
            Remote Consultation & Service Areas
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Find if your city is covered by NutritionColours remote metabolic services. Enter your city name or pincode to unlock regional chronobiology guides and local dietary calibrations.
          </p>
        </div>

        <div className="card-standard max-w-xl mx-auto space-y-4">
          <div className="flex gap-2 items-center bg-canvas border border-default rounded-2xl p-2 focus-within:border-interactive focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
            <span className="text-stone-500 ml-2"><IconSearch size={20} /></span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by City, State, or Pincode (e.g. Amritsar, Attili, 133001)..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-stone-850 font-semibold"
              aria-label="Search by City, State, or Pincode"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-2 text-stone-500 hover:text-stone-800" aria-label="Clear Search">
                <IconX size={16} />
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="divide-y divide-stone-100 max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in duration-200">
              {filteredLocations.length > 0 ? (
                filteredLocations.map(loc => (
                  <a 
                    key={loc.id} 
                    href={`/clinic/${loc.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      trackInteraction('click', `Search result clicked: ${loc.city}`);
                      navigate(`clinic/${loc.id}`);
                    }} 
                    className="p-4 hover:bg-stone-50 transition-all flex items-center justify-between cursor-pointer group block"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-800 group-hover:scale-110 transition-transform"><IconMapPin size={16} /></span>
                      <div className="flex flex-col">
                        <div className="font-bold text-emerald-950">
                          {highlightText(loc.city, activeSearchTerms)} Outreach Zone
                        </div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider">
                          {highlightText(loc.state, activeSearchTerms)} (PIN: {highlightText(loc.pincode, activeSearchTerms)})
                        </span>
                        {(loc as any).matchReason && (
                          <span className="badge-clinical mt-1">
                            ✨ {highlightText((loc as any).matchReason, activeSearchTerms)}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-stone-500 group-hover:text-emerald-800 transition-colors"><IconArrowRight size={14} /></span>
                  </a>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-stone-500 font-bold uppercase tracking-wider">
                  No remote outreach zone found for this code. We still provide full virtual consultation coverage globally—contact our central desk.
                </div>
              )}
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-[32px] text-white p-8 shadow-xl relative overflow-hidden border border-emerald-900">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400 opacity-5 rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">Outreach Network Density</span>
              <h2 className="text-3xl font-bold brand-font">1,040+ Remote Outreach & Service Coverage Zones</h2>
              <p className="text-xs text-emerald-200/80 leading-relaxed font-semibold">
                NutritionColours provides synchronized chronic disease reversal protocols from Maharashtra and Punjab to Andhra Pradesh. By customizing clinical plant-nutrition according to local dietary staples, soil mineral content, and regional timing habits, we maximize success rates and cellular recovery metrics.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                   <div className="text-xl font-bold text-lime-400">1044</div>
                   <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">Cities Covered</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                   <div className="text-xl font-bold text-lime-400">26+</div>
                   <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">States Serviced</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                   <div className="text-xl font-bold text-lime-400">99.8%</div>
                   <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">PWA Uptime</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <GeospatialMap 
                selectedCountry={selectedCountry} 
                onSelectCountry={setSelectedCountry} 
              />
              <div className="sr-only-spatial-map" aria-live="polite">
                <h3>Remote Service Areas &amp; Demographic Targets</h3>
                <ul vocab="https://schema.org/" typeof="ProfessionalService">
                  <li property="areaServed" content="Delhi NCR Hub"><strong>India (Delhi NCR Hub):</strong> Supports management of <span property="description">circadian dysregulation</span>, vitamin B12 deficits, and <span property="description">fatty liver (MASLD)</span> using Ceylon Cinnamon &amp; Ragi flatbread swaps.</li>
                  <li property="areaServed" content="Dubai Hub"><strong>United Arab Emirates (Dubai Hub):</strong> Targets <span property="description">visceral adiposity</span> and <span property="description">insulin resistance</span>. Swaps high glycemic carbohydrates for Moringa infusions and daylight-restricted meals.</li>
                  <li property="areaServed" content="London Hub"><strong>United Kingdom (London Hub):</strong> Supports management of vitamin D deficiency, <span property="description">metabolic syndrome</span>, and intracellular lipid blocks. Promotes sprouted grains and sunset dining constraints.</li>
                  <li property="areaServed" content="New York Hub"><strong>United States (New York Hub):</strong> Targets <span property="description">type 2 diabetes</span> and <span property="description">hyperinsulinemia</span>. Recommends organic tempeh swaps and cortisol-aligned breakfast.</li>
                  <li property="areaServed" content="Riyadh Hub"><strong>Saudi Arabia (Riyadh Hub):</strong> Supports management of postprandial glucose surges and cardiovascular risk. Promotes whole-grain pearl barley and daytime fasting swap methods.</li>
                  <li property="areaServed" content="Manama Hub"><strong>Bahrain (Manama Hub):</strong> Supports management of <span property="description">dyslipidemia</span> and <span property="description">metabolic syndrome</span>. Supports early-dinner constraints and stevia-cardamom teas.</li>
                  <li property="areaServed" content="Singapore Hub"><strong>Singapore Hub:</strong> Targets <span property="description">pre-diabetes</span> and postprandial fat storing. Promotes brown/millet rice swaps and daylight fat intake timing.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="card-standard max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🌐</span>
            <div>
              <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest block mb-1">Outreach Country</label>
              <select 
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState('');
                  trackInteraction('click', `Country selection changed to: ${e.target.value}`);
                }}
                className="bg-transparent font-bold text-emerald-950 text-base focus:outline-none border-b border-dashed border-emerald-800 py-1"
                aria-label="Select Outreach Country"
              >
                <option value="India">India (1,040+ Coverage Zones)</option>
                {INTERNATIONAL_COUNTRIES.map(c => (
                  <option key={c.id} value={c.country}>{c.country}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-xs text-stone-500 font-bold uppercase tracking-wider">
            {selectedCountry === 'India' 
              ? 'Showing 26 States & 1,040+ Remote Outreach Zones' 
              : `Showing Primary Metabolic Reversal Hub in ${selectedCountry}`}
          </div>
        </div>

        {selectedCountry !== 'India' && (() => {
          const match = INTERNATIONAL_COUNTRIES.find(c => c.country === selectedCountry);
          if (!match) return null;
          return (
            <div className="card-premium max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
              <div className="flex justify-between items-start gap-4 flex-wrap">
                <div className="flex gap-4 items-center">
                  <span className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl"><IconMapPin size={24} /></span>
                  <div>
                    <h3 className="text-2xl font-black text-emerald-950 brand-font">{match.city} Service Zone</h3>
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">{match.country} Outreach Hub</p>
                  </div>
                </div>
                <span className="badge-clinical">
                  Active Outreach Hub
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed font-semibold">
                This hub serves as the central virtual onboarding and metabolic assessment center for residents of **{match.country}**. Through localized circadian food modifications and live consultations, we support remote chronic reversal paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center items-start border-t border-divider pt-6 text-xs font-bold text-stone-500 uppercase tracking-wider w-full">
                <span>ZIP/POSTAL CODE: {match.pincode}</span>
                <a 
                  href={`/clinic/${match.id}/${slugify(match.city)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`clinic/${match.id}/${slugify(match.city)}`);
                  }}
                  className="btn-primary flex items-center gap-2 text-center"
                >
                  View Regional Diet Tips <IconArrowRight size={12} />
                </a>
              </div>
            </div>
          );
        })()}

        {selectedCountry === 'India' && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold text-emerald-950 brand-font">Directory by Region</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(locationsByState).sort().map(state => (
              <div 
                key={state} 
                className="card-standard cursor-pointer"
                onClick={() => {
                  setSelectedState(selectedState === state ? '' : state);
                  trackInteraction('click', `State accordion clicked: ${state}`);
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-700 font-bold">📍</span>
                    <span className="text-sm font-bold text-stone-850">{state}</span>
                  </div>
                  <span className="badge-clinical font-semibold py-1">
                    {locationsByState[state].length} Cities
                  </span>
                </div>

                {selectedState === state && (
                  <div className="mt-4 pt-4 border-t border-divider max-h-48 overflow-y-auto custom-scrollbar space-y-2 text-xs font-semibold text-stone-500 animate-in slide-in-from-top-4 duration-300">
                    {locationsByState[state].sort((a,b) => a.city.localeCompare(b.city)).map(loc => (
                      <a 
                        key={loc.id} 
                        href={`/clinic/${loc.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          trackInteraction('click', `City directory clicked: ${loc.city}`);
                          navigate(`clinic/${loc.id}`);
                        }}
                        className="flex justify-between items-center py-1.5 px-2 hover:bg-stone-50 hover:text-emerald-700 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{loc.city}</span>
                        <span className="font-mono text-[10px] text-stone-500">PIN: {loc.pincode}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        )}

      </div>
    </div>
  );
};

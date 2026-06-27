import React, { useEffect, useRef, useState, useMemo } from 'react';
import { IconMapPin } from './Icons';

interface GeospatialMapProps {
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
  circadianPhase?: string;
}

interface GlobePin {
  id: string;
  name: string;
  country: string;
  city: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  z: number;
  healthIssue: string;
  produceSwap: string;
}

// Pre-calculated pins for key outreach regions
const CLINIC_PINS: GlobePin[] = [
  {
    id: 'india',
    name: 'Delhi NCR Hub',
    country: 'India',
    city: 'New Delhi',
    lat: 28.7041,
    lng: 77.1025,
    x: 0, y: 0, z: 0, // Computed at runtime
    healthIssue: 'Circadian Dysregulation & Fatty Liver (MASLD)',
    produceSwap: 'Ceylon Cinnamon & Ragi flatbread swaps'
  },
  {
    id: 'uae',
    name: 'Dubai Hub',
    country: 'United Arab Emirates',
    city: 'Dubai',
    lat: 25.2048,
    lng: 55.2708,
    x: 0, y: 0, z: 0,
    healthIssue: 'Visceral Adiposity & Insulin Resistance',
    produceSwap: 'Moringa infusions & daytime fasting adjustments'
  },
  {
    id: 'uk',
    name: 'London Hub',
    country: 'United Kingdom',
    city: 'London',
    lat: 51.5074,
    lng: -0.1278,
    x: 0, y: 0, z: 0,
    healthIssue: 'Vitamin D Deficits & Saturated Fat Intracellular Blockage',
    produceSwap: 'Almond flour bread & sunset dining restrictions'
  },
  {
    id: 'usa',
    name: 'New York Hub',
    country: 'United States',
    city: 'New York',
    lat: 40.7128,
    lng: -74.0060,
    x: 0, y: 0, z: 0,
    healthIssue: 'Hyperinsulinemia & Processed Meat Loading',
    produceSwap: 'Organic Tempeh swaps & morning cortisol-aligned meals'
  },
  {
    id: 'saudi',
    name: 'Riyadh Hub',
    country: 'Saudi Arabia',
    city: 'Riyadh',
    lat: 24.7136,
    lng: 46.6753,
    x: 0, y: 0, z: 0,
    healthIssue: 'Postprandial Hyperglycemia & Sugar Loading',
    produceSwap: 'Whole-grain Pearl Barley swaps & daylight date restrictions'
  },
  {
    id: 'bahrain',
    name: 'Manama Hub',
    country: 'Bahrain',
    city: 'Manama',
    lat: 26.2285,
    lng: 50.5860,
    x: 0, y: 0, z: 0,
    healthIssue: 'Metabolic Syndrome & Dyslipidemia',
    produceSwap: 'Stevia herbal teas & early-dinner constraints'
  },
  {
    id: 'singapore',
    name: 'Singapore Hub',
    country: 'Singapore',
    city: 'Singapore',
    lat: 1.3521,
    lng: 103.8198,
    x: 0, y: 0, z: 0,
    healthIssue: 'Pre-diabetes & Postprandial Fat Storing',
    produceSwap: 'Brown/Millet rice swaps & early fat intake hours'
  }
];

// Helper to convert Lat/Lng to 3D Cartesian coordinates on unit sphere
const latLngToVector = (lat: number, lng: number) => {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return {
    x: -Math.sin(phi) * Math.sin(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.cos(theta)
  };
};

// Compute pin vectors
CLINIC_PINS.forEach(pin => {
  const vec = latLngToVector(pin.lat, pin.lng);
  pin.x = vec.x;
  pin.y = vec.y;
  pin.z = vec.z;
});

export const GeospatialMap: React.FC<GeospatialMapProps> = ({
  selectedCountry,
  onSelectCountry,
  circadianPhase = 'midday'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPin, setHoveredPin] = useState<GlobePin | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Rotation angles (in radians)
  const rotYRef = useRef(0);
  const rotXRef = useRef(0.2); // slight downward tilt initially

  const targetRotYRef = useRef<number | null>(null);
  const targetRotXRef = useRef<number | null>(null);

  // Mouse interaction state
  const isDraggingRef = useRef(false);
  const startMouseRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const lastActiveTimeRef = useRef(Date.now());

  // Generate sphere dots using golden spiral (sunflower) algorithm
  const sphereDots = useMemo(() => {
    const dots: { x: number; y: number; z: number }[] = [];
    const count = 450;
    for (let i = 0; i < count; i++) {
      const theta = Math.acos(-1 + (2 * i) / count);
      const phi = Math.sqrt(count * Math.PI) * theta;
      dots.push({
        x: Math.cos(phi) * Math.sin(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(theta)
      });
    }
    return dots;
  }, []);

  // Update target rotation when selectedCountry changes in parent dropdown
  useEffect(() => {
    if (!selectedCountry) return;
    const pin = CLINIC_PINS.find(p => p.country.toLowerCase() === selectedCountry.toLowerCase());
    if (pin) {
      // Find rotation to center this pin at (0, 0, 1) facing the viewer
      targetRotYRef.current = -Math.atan2(pin.x, pin.z);
      targetRotXRef.current = -Math.asin(pin.y);
      lastActiveTimeRef.current = Date.now();
    }
  }, [selectedCountry]);

  // Main Canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 320;
    let height = 320;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 320;
      height = rect.height || 320;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;

      const now = Date.now();
      const idleTime = now - lastActiveTimeRef.current;

      // Handle automatic camera interpolation or auto-rotation
      if (isDraggingRef.current) {
        // user is dragging, do nothing
      } else if (targetRotYRef.current !== null && targetRotXRef.current !== null) {
        // Fly-to transition: interpolate rotation towards target
        const diffY = targetRotYRef.current - rotYRef.current;
        const diffX = targetRotXRef.current - rotXRef.current;

        // Wrap angle difference between -PI and PI for shortest route rotation
        const shortDiffY = Math.atan2(Math.sin(diffY), Math.cos(diffY));
        const shortDiffX = Math.atan2(Math.sin(diffX), Math.cos(diffX));

        rotYRef.current += shortDiffY * 0.08;
        rotXRef.current += shortDiffX * 0.08;

        if (Math.abs(shortDiffY) < 0.005 && Math.abs(shortDiffX) < 0.005) {
          rotYRef.current = targetRotYRef.current;
          rotXRef.current = targetRotXRef.current;
          targetRotYRef.current = null;
          targetRotXRef.current = null;
        }
      } else if (idleTime > 4000) {
        // Slow auto-rotation after 4 seconds of inactivity
        rotYRef.current += 0.003;
      }

      // Pre-compute sin/cos for rotation matrices
      const cosY = Math.cos(rotYRef.current);
      const sinY = Math.sin(rotYRef.current);
      const cosX = Math.cos(rotXRef.current);
      const sinX = Math.sin(rotXRef.current);

      // Define circadian accent color based on theme
      let accentColor = 'rgba(16, 185, 129, 0.8)'; // Emerald
      if (circadianPhase === 'dawn') accentColor = 'rgba(245, 158, 11, 0.8)'; // Amber
      else if (circadianPhase === 'dusk') accentColor = 'rgba(234, 88, 12, 0.8)'; // Orange
      else if (circadianPhase === 'night') accentColor = 'rgba(99, 102, 241, 0.8)'; // Indigo/Violet

      const isDark = document.documentElement.classList.contains('dark');
      const baseDotColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(6, 78, 59, 0.12)';

      // 1. Render passive globe surface dots
      sphereDots.forEach(dot => {
        // Rotate Y
        const x1 = dot.x * cosY - dot.z * sinY;
        const z1 = dot.x * sinY + dot.z * cosY;
        // Rotate X (tilt)
        const y2 = dot.y * cosX - z1 * sinX;
        const z2 = dot.y * sinX + z1 * cosX;

        // Depth perspective scale
        const scale = (z2 + 2) / 3;
        const projX = centerX + x1 * radius * scale;
        const projY = centerY - y2 * radius * scale;

        // Opacity based on z-depth (dots on the back are faint, front are bright)
        const opacity = z2 > 0 ? 0.3 + z2 * 0.45 : 0.07 + (z2 + 1) * 0.15;
        const size = z2 > 0 ? 1.5 + z2 * 1.5 : 1.0;

        ctx.fillStyle = z2 > 0 && Math.abs(x1) < 0.85 && Math.abs(y2) < 0.85
          ? accentColor.replace('0.8', opacity.toFixed(2))
          : baseDotColor;

        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, 2 * Math.PI);
        ctx.fill();
      });

      // 2. Render clinic hub pins with pulsing hotspots
      let currentHovered: GlobePin | null = null;
      const pulseVal = (Math.sin(now / 200) + 1) / 2;

      CLINIC_PINS.forEach(pin => {
        // Rotate Y
        const x1 = pin.x * cosY - pin.z * sinY;
        const z1 = pin.x * sinY + pin.z * cosY;
        // Rotate X
        const y2 = pin.y * cosX - z1 * sinX;
        const z2 = pin.y * sinX + z1 * cosX;

        // Only render pin if it is on the facing side of the globe
        if (z2 > 0) {
          const scale = (z2 + 2) / 3;
          const projX = centerX + x1 * radius * scale;
          const projY = centerY - y2 * radius * scale;

          // Is mouse hovering near this projected coordinate?
          const rect = canvas.getBoundingClientRect();
          const mouseX = startMouseRef.current.x - rect.left;
          const mouseY = startMouseRef.current.y - rect.top;

          const dist = Math.hypot(projX - mouseX, projY - mouseY);
          const isPinHovered = dist < 14;

          const isSelected = selectedCountry.toLowerCase() === pin.country.toLowerCase();

          // Outer pulsing ring
          ctx.strokeStyle = isSelected ? 'rgba(163, 230, 53, 0.9)' : accentColor;
          ctx.lineWidth = isSelected ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.arc(projX, projY, 5 + (isPinHovered ? 6 : 4) + pulseVal * 4, 0, 2 * Math.PI);
          ctx.stroke();

          // Inner solid core
          ctx.fillStyle = isSelected ? '#a3e635' : '#10b981';
          ctx.beginPath();
          ctx.arc(projX, projY, isPinHovered ? 5.5 : 4, 0, 2 * Math.PI);
          ctx.fill();

          // Draw small white inner core for contrast
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(projX, projY, 1.5, 0, 2 * Math.PI);
          ctx.fill();

          // Draw floating clean labels
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(2, 44, 34, 0.85)';
          ctx.font = isSelected ? 'bold 10px Inter, sans-serif' : '9px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(pin.city, projX, projY - 12);

          if (isPinHovered) {
            currentHovered = pin;
            setTooltipPos({
              x: rect.left + projX,
              y: rect.top + projY - 20
            });
          }
        }
      });

      // Update hovered pin state safely
      if (currentHovered !== hoveredPin) {
        setHoveredPin(currentHovered);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [sphereDots, selectedCountry, hoveredPin, circadianPhase]);

  // Touch & Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    startMouseRef.current = { x: e.clientX, y: e.clientY };
    startRotRef.current = { x: rotXRef.current, y: rotYRef.current };
    lastActiveTimeRef.current = Date.now();
    targetRotYRef.current = null;
    targetRotXRef.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    // Keep track of client coordinate for hover detection even when not dragging
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      startMouseRef.current = { x: e.clientX, y: e.clientY };
    }

    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - startMouseRef.current.x;
    const deltaY = e.clientY - startMouseRef.current.y;

    // Scale rotations based on drag length
    rotYRef.current = startRotRef.current.y + deltaX * 0.008;
    rotXRef.current = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, startRotRef.current.x + deltaY * 0.008));
    lastActiveTimeRef.current = Date.now();
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      lastActiveTimeRef.current = Date.now();
    }
  };

  const handleCanvasClick = () => {
    if (hoveredPin) {
      onSelectCountry(hoveredPin.country);
      lastActiveTimeRef.current = Date.now();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[340px] aspect-square flex items-center justify-center select-none">
      
      {/* 3D Visual Depth Halo Behind Canvas */}
      <div className="absolute inset-4 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[40px] pointer-events-none"></div>
      
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-[320px] h-[320px] cursor-grab active:cursor-grabbing outline-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onClick={handleCanvasClick}
        aria-label="Interactive 3D Clinic Locations Globe"
        role="img"
      />

      {/* Floating Spatial Hover Card (Glassmorphic & Tactile 3D styling) */}
      {hoveredPin && (
        <div
          style={{
            position: 'fixed',
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: 'translate(-50%, -100%)',
            pointerEvents: 'none',
            zIndex: 9999
          }}
          className="bg-white/85 dark:bg-emerald-950/95 backdrop-blur-md border border-stone-200/50 dark:border-emerald-700/50 p-4 rounded-2xl shadow-xl w-60 text-xs space-y-2 pointer-events-none animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center gap-2 text-emerald-900 dark:text-lime-300 font-black uppercase tracking-wider">
            <IconMapPin size={14} />
            <span>{hoveredPin.name}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Regional Focus</span>
            <p className="text-stone-700 dark:text-stone-300 font-medium leading-normal">{hoveredPin.healthIssue}</p>
          </div>
          <div className="pt-1.5 border-t border-stone-100 dark:border-emerald-800/40">
            <span className="text-[10px] font-bold text-emerald-700 dark:text-lime-400 uppercase tracking-widest block">Produce Swap Option</span>
            <p className="text-stone-600 dark:text-stone-400 font-semibold italic">{hoveredPin.produceSwap}</p>
          </div>
          <p className="text-[8px] font-bold text-stone-400 text-center uppercase tracking-widest pt-1">Click pin to load details</p>
        </div>
      )}
    </div>
  );
};

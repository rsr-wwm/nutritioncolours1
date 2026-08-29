import React, { useState, useEffect } from 'react';

/**
 * Strictly typed component for MDX/Astro. 
 * Prevents XSS as all inputs are explicitly handled by React (Safe-Sink).
 */
export default function CircadianMealClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const hour = currentTime.getHours();
  let phase = "Resting/Fasting";
  let medicalAdvice = "Insulin sensitivity is lowest. Avoid high glycemic index foods.";

  if (hour >= 8 && hour < 14) {
    phase = "Peak Digestion";
    medicalAdvice = "Insulin sensitivity is highest. Optimal window for complex carbohydrates.";
  } else if (hour >= 14 && hour < 20) {
    phase = "Maintenance";
    medicalAdvice = "Moderate insulin sensitivity. Favor proteins and healthy fats.";
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white text-black my-4">
      <h3 className="text-xl font-bold mb-2">Circadian Health Monitor</h3>
      <p><strong>Current Local Phase:</strong> {phase}</p>
      <p><strong>Clinical Note:</strong> {medicalAdvice}</p>
      <div className="text-xs text-gray-500 mt-2 border-t pt-2">
        {"Evidence: ::claim{#circadian-insulin}::"}
      </div>
    </div>
  );
}

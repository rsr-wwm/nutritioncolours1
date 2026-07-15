import { LOCATIONS_DATA } from './locationsData';
import { INTERNATIONAL_COUNTRIES } from './internationalData';

// Helper to get deterministic seed value
function getDeterministicValue(seed: string, key: string, min: number, max: number): number {
  let hash = 0;
  const str = seed + key;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const range = max - min + 1;
  return min + Math.abs(hash % range);
}

// Replicate the exact getCoordinates logic from LocalDirectory.tsx
export function getCoordinates(city: string, state: string, country: string) {
  let baseLat = 20.5937;
  let baseLng = 78.9629;
  
  if (country === 'India') {
    const stateBases: Record<string, [number, number]> = {
      'Punjab': [31.1471, 75.3412],
      'Haryana': [29.0588, 76.0856],
      'Delhi': [28.7041, 77.1025],
      'Maharashtra': [19.7515, 75.7139],
      'Karnataka': [15.3173, 75.7139],
      'Tamil Nadu': [11.1271, 78.6569],
      'Kerala': [10.8505, 76.2711],
      'Andhra Pradesh': [15.9129, 79.7400],
      'Telangana': [18.1124, 79.0193],
      'West Bengal': [22.9868, 87.8550],
      'Gujarat': [22.2587, 71.1924],
      'Rajasthan': [27.0238, 74.2179],
      'Uttar Pradesh': [26.8467, 80.9462]
    };
    if (stateBases[state]) {
      [baseLat, baseLng] = stateBases[state];
    }
  } else {
    const countryBases: Record<string, [number, number]> = {
      'United States': [37.0902, -95.7129],
      'United Kingdom': [55.3781, -3.4360],
      'Saudi Arabia': [23.8859, 45.0792],
      'United Arab Emirates': [23.4241, 53.8478],
      'Bahrain': [25.9304, 50.6377],
      'Kuwait': [29.3117, 47.4818],
      'Qatar': [25.3548, 51.1839],
      'Oman': [21.5125, 55.9233]
    };
    if (countryBases[country]) {
      [baseLat, baseLng] = countryBases[country];
    }
  }
  
  const latOffset = (getDeterministicValue(city, 'lat', 100, 999) - 500) / 10000;
  const lngOffset = (getDeterministicValue(city, 'lng', 100, 999) - 500) / 10000;
  
  return {
    latitude: baseLat + latOffset,
    longitude: baseLng + lngOffset
  };
}

// Haversine formula to compute distance in km
export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Return nearest location nodes
export function getNearestLocations(currentCity: string, currentStateOrCountry: string, isIntl: boolean, limit = 5) {
  const currentCoords = getCoordinates(currentCity, currentStateOrCountry, isIntl ? currentStateOrCountry : 'India');
  
  const dataset = isIntl ? INTERNATIONAL_COUNTRIES : LOCATIONS_DATA;
  
  const distances = dataset
    .filter(loc => loc.city.toLowerCase() !== currentCity.toLowerCase())
    .map(loc => {
      const locCountry = isIntl ? (loc as any).country : 'India';
      const locState = isIntl ? (loc as any).country : (loc as any).state;
      const coords = getCoordinates(loc.city, locState, locCountry);
      const distance = getDistance(currentCoords.latitude, currentCoords.longitude, coords.latitude, coords.longitude);
      return {
        city: loc.city,
        stateOrCountry: locState,
        slug: loc.city.toLowerCase().replace(/\s+/g, '-'),
        distance
      };
    });
    
  return distances.sort((a, b) => a.distance - b.distance).slice(0, limit);
}

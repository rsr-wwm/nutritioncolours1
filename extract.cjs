const fs = require('fs');

const content = fs.readFileSync('src/components/LocalDirectory.tsx', 'utf-8');
const lines = content.split('\n');

const toExport = lines.slice(11, 637); // 0-indexed, so 11 is line 12, 637 is line 638
let newContent = `import React from 'react';\n\n` + toExport.join('\n');

newContent = newContent.replace('const slugify', 'export const slugify');
newContent = newContent.replace('const TRANSLATIONS', 'export const TRANSLATIONS');
newContent = newContent.replace('const SYNONYM_DICTIONARY', 'export const SYNONYM_DICTIONARY');
newContent = newContent.replace('const tokenize', 'export const tokenize');
newContent = newContent.replace('const highlightText', 'export const highlightText');
newContent = newContent.replace('const getDeterministicValue', 'export const getDeterministicValue');
newContent = newContent.replace('const getDeterministicLandmarks', 'export const getDeterministicLandmarks');
newContent = newContent.replace('interface CarrierInfo', 'export interface CarrierInfo');
newContent = newContent.replace('const getCarrierQuality', 'export const getCarrierQuality');
newContent = newContent.replace('const getCoordinates', 'export const getCoordinates');
newContent = newContent.replace('const getCountryMeta', 'export const getCountryMeta');
newContent = newContent.replace('const DEFAULT_DIET', 'export const DEFAULT_DIET');
newContent = newContent.replace('const solvePoW', 'export const solvePoW');

fs.writeFileSync('src/lib/directoryUtils.tsx', newContent);

const newLocalDir = lines.slice(0, 11).join('\n') + `\nimport {
  slugify,
  TRANSLATIONS,
  SYNONYM_DICTIONARY,
  tokenize,
  highlightText,
  getDeterministicValue,
  getDeterministicLandmarks,
  CarrierInfo,
  getCarrierQuality,
  getCoordinates,
  getCountryMeta,
  INTERNATIONAL_DIETS,
  REGIONAL_DIETS,
  DEFAULT_DIET,
  solvePoW
} from '../lib/directoryUtils';\n` + lines.slice(637).join('\n');

fs.writeFileSync('src/components/LocalDirectory.tsx', newLocalDir);
console.log('Extraction complete');

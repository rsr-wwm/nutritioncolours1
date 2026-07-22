export const SYNONYM_DICTIONARY: Record<string, string[]> = {
  'sugar': ['diabetes', 'hba1c', 'insulin', 'hyperglycemia'],
  'diabetes': ['sugar', 'hba1c', 'insulin', 'diabetic'],
  'heart': ['cardio', 'hypertension', 'blood pressure', 'bp', 'cholesterol', 'cardiovascular'],
  'bp': ['blood pressure', 'hypertension', 'heart', 'cardio'],
  'hypertension': ['blood pressure', 'bp', 'heart', 'cardio'],
  'liver': ['masld', 'nafld', 'fatty liver', 'hepatic', 'cirrhosis'],
  'fatty liver': ['masld', 'nafld', 'liver', 'hepatic'],
  'joints': ['arthritis', 'osteoarthritis', 'rheumatoid', 'inflammation', 'joint pain'],
  'arthritis': ['joints', 'osteoarthritis', 'rheumatoid', 'joint pain'],
  'pcos': ['pcod', 'hormonal', 'fertility', 'ovary', 'polycystic'],
  'pcod': ['pcos', 'hormonal', 'fertility', 'ovary', 'polycystic'],
  'kidney': ['ckd', 'renal', 'creatinine', 'filtration'],
  'obesity': ['weight', 'fat', 'bmi', 'overweight'],
  'weight': ['obesity', 'fat', 'bmi', 'overweight']
};

export const tokenize = (text: string): string[] => {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
};

export const slugify = (text: string): string => {
  return text.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, '');
};

export const solvePoW = async (challenge: string, difficulty: number = 3): Promise<number> => {
  const prefix = '0'.repeat(difficulty);
  let nonce = 0;
  while (true) {
    const data = new TextEncoder().encode(challenge + nonce);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    if (hashHex.startsWith(prefix)) {
      return nonce;
    }
    nonce++;
  }
};

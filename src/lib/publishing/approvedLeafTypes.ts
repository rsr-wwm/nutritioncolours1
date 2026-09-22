export interface ClaimRef {
  id: string;
  approvedText: string;
  sourceIds: string[];
  evidenceGrade?: string;
  uncertainty?: string;
}

export interface SourceRef {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishedAt?: string;
  accessedAt: string;
}

export interface AnswerBlock {
  id?: string;
  text: string;
  claimIds: string[];
}

export interface LeafTable {
  id?: string;
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface LeafSection {
  id: string;
  heading: string;
  blocks: Array<AnswerBlock & { id: string }>;
  table?: LeafTable;
}

export interface KeyTakeaway {
  id: string;
  text: string;
}

export interface LeafHeroImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LeafContent {
  schemaVersion: 1;
  stableId: string;
  pageKind: 'health' | 'food';
  entityType: string;
  directAnswer: AnswerBlock;
  urgentHelp?: AnswerBlock;
  keyTakeaways?: KeyTakeaway[];
  sections: LeafSection[];
  faqs?: Array<{ id: string; question: string; answer: AnswerBlock }>;
  heroImage?: LeafHeroImage;
}

export interface PublicIdentity {
  id: string;
  displayName: string;
  profilePath?: string;
  sameAs?: string[];
}

export interface ApprovedLeaf {
  stableId: string;
  pageKind: 'health' | 'food';
  tier: 1 | 2;
  entityType: string;
  canonicalName: string;
  canonicalPath: string;
  seoTitle: string;
  metaDescription: string;
  aliases: string[];
  substantiveModified: string;
  lastReviewed: string | null;
  reviewExpires: string | null;
  taxonomy: Array<{ id: string; label: string; pageKind: 'health' | 'food' }>;
  author: PublicIdentity;
  reviewer: PublicIdentity | null;
  reviewEvent: { id: string; reviewedAt: string; expiresAt: string; scopeSummary?: string } | null;
  claims: ClaimRef[];
  sources: SourceRef[];
  content: LeafContent;
}

export interface ApprovedLeafRegistry {
  schemaVersion: 1;
  purpose: string;
  records: ApprovedLeaf[];
}

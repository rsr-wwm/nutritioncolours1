/**
 * LucideIcon.tsx — Unified Lucide icon bridge for React components
 *
 * Usage:
 *   import LucideIcon from '@/components/LucideIcon';
 *   <LucideIcon name="ArrowRight" size={20} className="text-emerald-600" />
 *
 * All Lucide icon names use PascalCase (e.g. "ArrowRight", "CheckCircle").
 * Tree-shaken — only imported icons ship to the client bundle.
 */
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface Props extends LucideProps {
  name: keyof typeof LucideIcons;
}

export default function LucideIcon({ name, size = 20, className = '', ...rest }: Props) {
  const Icon = LucideIcons[name] as React.FC<LucideProps>;
  if (!Icon) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[LucideIcon] Icon "${name}" not found in lucide-react`);
    }
    return null;
  }
  return <Icon size={size} className={className} aria-hidden="true" {...rest} />;
}

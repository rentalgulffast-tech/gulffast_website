import Link from 'next/link';
import type { ReactNode } from 'react';

interface PillProps {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost';
  className?: string;
  target?: string;
  rel?: string;
}

const BASE =
  'inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(.22,.8,.3,1)] hover:-translate-y-0.5';

const VARIANTS: Record<'solid' | 'ghost', string> = {
  solid: 'bg-accent-strong text-white shadow-[0_6px_18px_-6px_rgba(180,83,9,0.5)] hover:shadow-[0_12px_26px_-8px_rgba(180,83,9,0.6)]',
  ghost: 'bg-transparent text-primary border-[1.5px] border-border hover:border-primary'
};

export default function Pill({ href, children, variant = 'solid', className = '', target, rel }: PillProps) {
  return (
    <Link href={href} target={target} rel={rel} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}

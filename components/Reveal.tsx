'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'article';
  /**
   * Render visible on first paint with no reveal animation. Use for
   * above-the-fold content that must not wait on hydration or the
   * IntersectionObserver (e.g. the homepage hero).
   */
  immediate?: boolean;
}

const DELAY_CLASS: Record<0 | 1 | 2 | 3, string> = {
  0: '',
  1: 'reveal-d1',
  2: 'reveal-d2',
  3: 'reveal-d3'
};

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  immediate = false
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      queueMicrotask(() => setInView(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const Tag = as;

  // Above-the-fold: no reveal class means no opacity:0, so it paints
  // immediately without waiting for JS to hydrate.
  if (immediate) {
    return <Tag className={className || undefined}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${DELAY_CLASS[delay]} ${inView ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}

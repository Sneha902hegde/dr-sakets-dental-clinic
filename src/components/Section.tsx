import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  children?: ReactNode;
  className?: string;
};

/** Standard section wrapper with optional heading block. */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
  className = '',
}: Props) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || subtitle) && (
          <Reveal
            className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="section-title mt-4 text-balance">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

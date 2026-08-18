import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '../Reveal';
import { orthodonticsIntro } from '../../data/treatments';

export default function WhatIsOrthodontics() {
  return (
    <section id="understanding" className="py-20 sm:py-24" aria-label="What is Orthodontic Treatment">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Illustration */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-primary-400/25 to-accent-400/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink-100">
                <img
                  src={orthodonticsIntro.image}
                  alt="Orthodontic consultation at Dr. Saket's Dental Clinic"
                  className="h-[24rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-card ring-1 ring-ink-100 backdrop-blur">
                <p className="text-sm font-bold text-ink-900">Gentle, guided tooth movement</p>
                <p className="text-xs text-primary-600">Designed around your biology</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">{orthodonticsIntro.eyebrow}</span>
              <h2 className="section-title mt-4 text-balance">{orthodonticsIntro.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">{orthodonticsIntro.lead}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-7 space-y-3">
                {orthodonticsIntro.points.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <div>
                      <span className="text-sm font-semibold text-ink-900">{p.title}.</span>{' '}
                      <span className="text-sm leading-relaxed text-ink-500">{p.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

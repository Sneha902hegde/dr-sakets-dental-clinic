import { Lightbulb, BadgeCheck, Sparkles } from 'lucide-react';
import { Reveal } from '../Reveal';
import { innovation } from '../../data/about';

export default function Innovation() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent-600/15 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300 ring-1 ring-white/15">
                <Lightbulb className="h-3.5 w-3.5" />
                Innovation & Research
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {innovation.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
                {innovation.text}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/15 px-4 py-2 text-sm font-medium text-accent-300 ring-1 ring-accent-400/20">
                  <BadgeCheck className="h-4 w-4" />
                  {innovation.badge}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-ink-200 ring-1 ring-white/10">
                  <Sparkles className="h-4 w-4" />
                  {innovation.fullForm}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Visual placeholder */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-md">
              {/* Innovation-themed illustration placeholder — replace with custom graphic */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-700/40 to-accent-700/30 p-10 ring-1 ring-white/10">
                <div className="flex h-48 flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20">
                    <Sparkles className="h-10 w-10 text-accent-300" />
                  </div>
                  <p className="mt-5 text-2xl font-bold text-white">{innovation.name}</p>
                  <p className="mt-1 text-sm text-ink-300">{innovation.fullForm}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

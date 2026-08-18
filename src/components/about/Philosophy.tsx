import { Heart, CheckCircle2 } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../Reveal';
import { philosophy } from '../../data/about';

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sticky heading */}
          <div className="lg:col-span-1">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                <Heart className="h-3.5 w-3.5" />
                Philosophy of Care
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                {philosophy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">{philosophy.intro}</p>
            </Reveal>
          </div>

          {/* Principle cards */}
          <div className="lg:col-span-2">
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {philosophy.principles.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="card card-hover h-full p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                      <div>
                        <h3 className="text-sm font-semibold text-ink-900">{p.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{p.text}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  GraduationCap, Sparkles, Award, Globe, Microscope, UserRound, HeartHandshake, Cpu, Stethoscope,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../Reveal';
import { useScrollTo } from '../../hooks/useScrollTo';
import { whyChooseSaket } from '../../data/treatments';

const icons = [GraduationCap, Sparkles, Award, Globe, Microscope, UserRound, HeartHandshake, Cpu];

export default function WhyChooseSaket() {
  const toSection = useScrollTo();
  return (
    <section id="why" className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Portrait */}
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-primary-400/30 to-accent-400/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Dr. Saket Sai Rallabhandi, MDS Orthodontist"
                  className="h-[28rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-card ring-1 ring-ink-100 backdrop-blur">
                <p className="text-sm font-bold text-ink-900">Dr. Saket Sai Rallabhandi</p>
                <p className="text-xs text-primary-600">MDS Orthodontics · F-PFA (USA)</p>
              </div>
            </div>
          </Reveal>

          {/* Copy + grid */}
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow">{whyChooseSaket.eyebrow}</span>
              <h2 className="section-title mt-4 text-balance">{whyChooseSaket.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">{whyChooseSaket.subtitle}</p>
            </Reveal>

            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChooseSaket.points.map((p, i) => {
                const Icon = icons[i] ?? Stethoscope;
                return (
                  <StaggerItem key={p.title}>
                    <div className="card card-hover group flex h-full items-start gap-3.5 p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-snug text-ink-900">{p.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-ink-500">{p.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <button onClick={() => toSection('#book')} className="btn-primary">
                  Book a Consultation
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

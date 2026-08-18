import { GraduationCap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { doctor } from '../data/clinic';
import { useSectionNav } from '../hooks/useSectionNav';

export default function MeetYourDoctor() {
  const toSection = useSectionNav();
  return (
    <section id="doctor" className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Image */}
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-primary-400/30 to-accent-400/30 blur-2xl" />
              {/* Doctor photo placeholder — replace with Dr. Saket Rallabhandi's photo */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Dr. Saket Rallabhandi, Orthodontist at Dr. Saket's Dental Clinic"
                  className="h-[28rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-card ring-1 ring-ink-100 backdrop-blur">
                <p className="text-sm font-bold text-ink-900">{doctor.name}</p>
                <p className="text-xs text-primary-600">{doctor.credentials}</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow">Meet Your Doctor</span>
              <h2 className="section-title mt-4 text-balance">
                Your smile is in <span className="text-primary-700">expert hands</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">{doctor.bio}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700">
                  <GraduationCap className="h-4 w-4" /> MDS Orthodontics
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent-50 px-4 py-2 text-sm font-medium text-accent-700">
                  <Award className="h-4 w-4" /> F-PFA (USA)
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {doctor.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <button onClick={() => toSection('#contact')} className="btn-primary">
                  Know More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

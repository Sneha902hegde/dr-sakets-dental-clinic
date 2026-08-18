import { motion } from 'framer-motion';
import { Trophy, Users, Target, Heart } from 'lucide-react';
import { Reveal } from '../Reveal';
import { beyondDentistry } from '../../data/about';

const valueIcons = [Target, Users, Trophy, Heart];

export default function BeyondDentistry() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-ink-50 py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-primary-200/25 blur-3xl" />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Relaxed portrait */}
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-accent-400/30 to-primary-400/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink-100">
                <img
                  src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Dr. Saket Sai Rallabhandi — life beyond dentistry"
                  className="h-[26rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-card ring-1 ring-ink-100 backdrop-blur"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-sm font-bold text-ink-900">Captain · Basketball & Football</p>
                <p className="text-xs text-primary-600">Represented MCODS in six sports</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow">{beyondDentistry.eyebrow}</span>
              <h2 className="section-title mt-4 text-balance">{beyondDentistry.title}</h2>
            </Reveal>

            <div className="mt-6 space-y-5">
              {beyondDentistry.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <p className="text-[0.95rem] leading-[1.85] text-ink-500">{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Values row */}
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {beyondDentistry.values.map((value, i) => {
                  const Icon = valueIcons[i % valueIcons.length];
                  return (
                    <span
                      key={value}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-soft ring-1 ring-ink-100"
                    >
                      <Icon className="h-4 w-4 text-accent-500" strokeWidth={1.8} />
                      {value}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

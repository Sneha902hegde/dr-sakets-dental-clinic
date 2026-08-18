import { motion } from 'framer-motion';
import {
  CalendarPlus, Stethoscope, ScanLine, ClipboardList,
  Braces, CalendarCheck, Smile, ArrowDown,
} from 'lucide-react';
import Section from '../Section';
import { useScrollTo } from '../../hooks/useScrollTo';
import { smileJourney } from '../../data/treatments';

const icons = [CalendarPlus, Stethoscope, ScanLine, ClipboardList, Braces, CalendarCheck, Smile];

export default function SmileJourney() {
  const toSection = useScrollTo();
  return (
    <Section
      id="journey"
      eyebrow="Your Smile Journey"
      title="From first consultation to confident smile"
      subtitle="A clear, step-by-step path — so you always know what comes next, and why."
      className="bg-white"
    >
      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical spine */}
        <div className="pointer-events-none absolute left-[1.65rem] top-2 bottom-2 hidden w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-200 sm:block" />

        <ol className="space-y-6">
          {smileJourney.map((s, i) => {
            const Icon = icons[i] ?? Smile;
            const last = i === smileJourney.length - 1;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-5"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-ink-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>
                <div className={`flex-1 rounded-2xl p-5 ${last ? 'bg-accent-50 ring-1 ring-accent-200' : 'bg-ink-50 ring-1 ring-ink-100'}`}>
                  <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.text}</p>
                </div>
                {!last && (
                  <ArrowDown className="pointer-events-none absolute left-[2.05rem] top-full -translate-y-3 text-ink-200" />
                )}
              </motion.li>
            );
          })}
        </ol>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <button onClick={() => toSection('#book')} className="btn-primary">
            <CalendarPlus className="h-4 w-4" />
            Begin Your Journey
          </button>
        </motion.div>
      </div>
    </Section>
  );
}

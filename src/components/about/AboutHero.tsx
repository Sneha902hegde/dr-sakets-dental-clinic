import { motion } from 'framer-motion';
import { CalendarPlus, GraduationCap, ShieldCheck, Award } from 'lucide-react';
import { aboutDoctor } from '../../data/about';
import { useSectionNav } from '../../hooks/useSectionNav';

const qualificationIcons = [GraduationCap, Award, ShieldCheck];

export default function AboutHero() {
  const toSection = useSectionNav();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-ink-50 pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-5">
        {/* Portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-sm lg:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-400/30 to-accent-400/30 blur-2xl" />
            {/* Doctor portrait placeholder — replace with Dr. Saket's professional photo */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink-100">
              <img
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Dr. Saket Sai Rallabhandi, Orthodontist"
                className="h-[32rem] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-card ring-1 ring-ink-100 backdrop-blur"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-sm font-bold text-ink-900">MDS, F-PFA (USA)</p>
              <p className="text-xs text-primary-600">Orthodontist & Smile Designer</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="lg:col-span-3">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Dr. Saket
          </motion.span>

          <motion.h1
            className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Meet Dr. Saket
            <br />
            <span className="bg-gradient-to-r from-primary-700 to-accent-500 bg-clip-text text-transparent">
              Sai Rallabhandi
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {aboutDoctor.heroSub}
          </motion.p>

          {/* Qualifications */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {aboutDoctor.qualifications.map((q, i) => {
              const Icon = qualificationIcons[i] ?? GraduationCap;
              return (
                <span
                  key={q}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-soft ring-1 ring-ink-100"
                >
                  <Icon className="h-4 w-4 text-primary-600" />
                  {q}
                </span>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button onClick={() => toSection('#cta')} className="btn-primary">
              <CalendarPlus className="h-4 w-4" />
              Book an Appointment
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

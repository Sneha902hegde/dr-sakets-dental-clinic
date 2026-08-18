import { motion } from 'framer-motion';
import { CalendarPlus, Phone, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { callLink } from '../data/clinic';
import { useSectionNav } from '../hooks/useSectionNav';

export default function Hero() {
  const toSection = useSectionNav();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-ink-50 pt-24 pb-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeartHandshake className="h-3.5 w-3.5" />
            Welcome to your dental home in Aundh, Pune
          </motion.span>

          <motion.h1
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Healthy Smiles.
            <br />
            <span className="bg-gradient-to-r from-primary-700 to-accent-500 bg-clip-text text-transparent">
              Confident Lives.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-ink-500"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Step into a space designed around your comfort.
            <br className="hidden sm:block" />
            At Dr. Saket's Orthodontic & Multispeciality Dental Clinic, gentle hands and
            advanced technology come together to give your family healthy, confident smiles —
            the kind you'll love to share.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button onClick={() => toSection('#contact')} className="btn-primary">
              <CalendarPlus className="h-4 w-4" />
              Book Appointment
            </button>
            <a href={callLink} className="btn-outline">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink-600">Trusted by 1000+ patients</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-ink-600">
              <ShieldCheck className="h-4 w-4 text-accent-500" />
              Sterile & Safe
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-400/30 to-accent-400/30 blur-2xl" />
            {/* Premium dental imagery placeholder — replace with clinic photo */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink-100">
              <img
                src="https://images.pexels.com/photos/6683392/pexels-photo-6683392.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Dental care at Dr. Saket's Orthodontic & Multispeciality Dental Clinic"
                className="h-[26rem] w-full object-cover sm:h-[32rem]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -left-4 top-10 rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-ink-100 backdrop-blur sm:-left-8"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-2xl font-bold text-primary-700">10+ yrs</p>
              <p className="text-xs font-medium text-ink-500">Of Excellence</p>
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-10 rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-ink-100 backdrop-blur sm:-right-8"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-2xl font-bold text-accent-600">MDS</p>
              <p className="text-xs font-medium text-ink-500">F-PFA (USA)</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

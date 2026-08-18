import { motion } from 'framer-motion';
import { CalendarPlus, Phone, MessageCircle } from 'lucide-react';
import { callLink, whatsappLink } from '../data/clinic';
import { Reveal } from './Reveal';
import { useScrollTo } from '../hooks/useScrollTo';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

/** Final CTA band reused across treatment + contact pages. */
export default function FinalCTA({ eyebrow, title, subtitle }: Props) {
  const toSection = useScrollTo();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.06]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary-400/30 blur-3xl" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-200 ring-1 ring-white/15 backdrop-blur">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-100 sm:text-lg">{subtitle}</p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <button onClick={() => toSection('#book')} className="btn bg-accent-400 text-white shadow-soft hover:bg-accent-500 hover:-translate-y-0.5">
              <CalendarPlus className="h-4 w-4" />
              Book Appointment
            </button>
            <a href={callLink} className="btn bg-white text-primary-800 shadow-soft hover:bg-primary-50 hover:-translate-y-0.5">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={whatsappLink("Hello! I'd like to book an appointment at Dr. Saket's Dental Clinic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe5b] hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

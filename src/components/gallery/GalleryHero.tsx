import { motion } from 'framer-motion';
import { CalendarPlus, MessageCircle, Images } from 'lucide-react';
import { whatsappLink } from '../../data/clinic';
import { useSectionNav } from '../../hooks/useSectionNav';
import { galleryHero } from '../../data/gallery';

export default function GalleryHero() {
  const toSection = useSectionNav();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-ink-50 pt-32 pb-20 sm:pt-36 sm:pb-24"
      aria-label="Gallery"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />

      <div className="container-page relative text-center">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Images className="h-3.5 w-3.5" />
          {galleryHero.eyebrow}
        </motion.span>

        <motion.h1
          className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          See the Smiles{' '}
          <span className="bg-gradient-to-r from-primary-700 to-accent-500 bg-clip-text text-transparent">
            We Create
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {galleryHero.subtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <button onClick={() => toSection('#book')} className="btn-primary">
            <CalendarPlus className="h-4 w-4" />
            Book Appointment
          </button>
          <a
            href={whatsappLink("Hello! I'd like to book an appointment at Dr. Saket's Dental Clinic.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

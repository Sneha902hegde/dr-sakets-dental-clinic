import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';
import { clinic } from '../data/clinic';

export type Review = {
  name: string;
  rating: number;
  text: string;
  when: string;
};

export const reviews: Review[] = [
  {
    name: 'Aditi Sharma',
    rating: 5,
    text: 'I got my clear aligners here and the results exceeded my expectations. Dr. Saket explained every step and the clinic is spotless. Highly recommend for orthodontic treatment!',
    when: 'Clear Aligners · Aundh, Pune',
  },
  {
    name: 'Rohan Deshpande',
    rating: 5,
    text: 'I was terrified of root canals but the single-sitting RCT was completely painless. The staff is warm and professional. I felt at ease throughout the entire procedure.',
    when: 'Root Canal · Baner, Pune',
  },
  {
    name: 'Meera Nair',
    rating: 5,
    text: 'My 6-year-old actually looks forward to her dental visits now! The pediatric care is so gentle and friendly. Thank you for making it stress-free for both of us.',
    when: 'Pediatric Dentistry · Pashan, Pune',
  },
  {
    name: 'Kunal Mehta',
    rating: 5,
    text: 'Got two dental implants after years of hiding my smile. The whole process was smooth and the results look completely natural. Truly life-changing experience!',
    when: 'Dental Implants · Aundh, Pune',
  },
  {
    name: 'Sneha Patil',
    rating: 5,
    text: 'My veneers and whitening gave me the smile I always dreamed of. The cosmetic work is truly artistic. I get compliments all the time now. Thank you, Dr. Saket!',
    when: 'Smile Makeover · Wakad, Pune',
  },
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const r = reviews[index];

  return (
    <section id="testimonials" className="bg-ink-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Patient Testimonials</span>
          <h2 className="section-title mt-4 text-balance">
            Loved by patients across Pune
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            Real stories from real smiles. Here's what our patients say about their experience.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[20rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card p-8 sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-10 w-10 text-primary-200" />
                  <span className="text-xs font-medium text-blue-500">Google Review</span>
                </div>
                <div className="mt-3 flex text-amber-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-sm font-bold text-white">
                    {getInitials(r.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{r.name}</p>
                    <p className="text-xs text-ink-400">{r.when}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft ring-1 ring-ink-200 transition-all hover:bg-primary-50 hover:ring-primary-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary-600' : 'w-2 bg-ink-300 hover:bg-ink-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft ring-1 ring-ink-200 transition-all hover:bg-primary-50 hover:ring-primary-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <a
              href={clinic.socials.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
            >
              Read all reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

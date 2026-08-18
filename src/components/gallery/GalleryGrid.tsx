import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import {
  galleryItems,
  galleryFilters,
  type GalleryCategory,
} from '../../data/gallery';
import { Reveal } from '../Reveal';

type FilterId = GalleryCategory | 'all';

export default function GalleryGrid() {
  const [active, setActive] = useState<FilterId>('all');

  const filtered = useMemo(
    () => (active === 'all' ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="gallery-grid" className="bg-ink-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Explore</span>
          <h2 className="section-title mt-4 text-balance">A visual tour of our clinic</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            Browse our spaces, technology and the smiles we've helped create. Select a category to explore.
          </p>
        </Reveal>

        {/* Filter tabs */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-2.5">
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active === f.id
                    ? 'bg-primary-700 text-white shadow-soft'
                    : 'bg-white text-ink-600 ring-1 ring-ink-200 hover:bg-primary-50 hover:text-primary-700 hover:ring-primary-200'
                }`}
                aria-pressed={active === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink-100 ${item.span ?? ''}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`${item.height ?? 'h-64 sm:h-72'} w-full object-cover transition-transform duration-500 group-hover:scale-110`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    <Camera className="h-4 w-4 text-accent-300" />
                    {item.label}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-10 text-center">
          <p className="text-xs text-ink-400">
            Images shown are illustrative placeholders and will be replaced with clinic photographs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

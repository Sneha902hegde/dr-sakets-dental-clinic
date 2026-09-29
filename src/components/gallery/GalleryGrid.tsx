import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  galleryItems,
  galleryFilters,
  type GalleryCategory,
  type GalleryItem,
} from '../../data/gallery';
import { Reveal } from '../Reveal';

type FilterId = GalleryCategory | 'all';

export default function GalleryGrid() {
  const [active, setActive] = useState<FilterId>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === 'all' ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active],
  );

  const openLightbox = useCallback((item: GalleryItem) => {
    const idx = filtered.findIndex((i) => i.id === item.id);
    if (idx >= 0) setLightboxIndex(idx);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
                className={`group relative cursor-pointer overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink-100 ${item.span ?? ''}`}
                onClick={() => openLightbox(item)}
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
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-10 text-center">
          <p className="text-xs text-ink-400">
            Event and continuing education photographs are shown with permission; other gallery categories will be updated with clinic photographs.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous button */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next button */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            <motion.figure
              key={current.id}
              className="relative max-h-[85vh] max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.image}
                alt={current.alt}
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-white/90">
                <Camera className="h-4 w-4 text-accent-300" />
                {current.label}
                {filtered.length > 1 && (
                  <span className="ml-3 text-white/50">
                    {lightboxIndex! + 1} / {filtered.length}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';
const images = [
  { id: 1, span: 'sm:col-span-2', h: 'h-64 sm:h-80' },
  { id: 2, span: '', h: 'h-64 sm:h-80' },
  { id: 3, span: '', h: 'h-64 sm:h-80' },
  { id: 4, span: 'sm:col-span-2', h: 'h-64 sm:h-80' },
  { id: 5, span: '', h: 'h-64 sm:h-80' },
  { id: 6, span: '', h: 'h-64 sm:h-80' },
];

const photoPaths = [
  '/images/gallery/WhatsApp_Image_2026-09-29_at_3.09.26_PM.jpeg',
  '/images/Dr_Saket_Rallabhandi.jpg',
  '/images/about/dr_saket_football.jpg',
  '/images/clinic-photo-1.webp',
  '/images/clinic-photo-2.webp',
  '/images/gallery/WhatsApp_Image_2026-09-29_at_3.09.26_PM.jpeg',
];

export default function SmileGallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Smile Gallery</span>
          <h2 className="section-title mt-4 text-balance">
            Smiles we've had the joy of creating
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            A glimpse of the transformations and moments from our clinic.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {images.map((item, i) => (
            <StaggerItem
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink-100 ${item.span}`}
            >
              {/* Smile gallery image placeholder — replace with clinic before/after photos */}
              <img
                src={photoPaths[i]}
                alt={`Smile gallery ${item.id}`}
                className={`${item.h} w-full object-cover transition-transform duration-500 group-hover:scale-110`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 text-center">
          <a href="/gallery" className="btn-primary">
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

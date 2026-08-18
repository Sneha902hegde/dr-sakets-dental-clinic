import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { useSectionNav } from '../hooks/useSectionNav';

const images = [
  { id: 1, span: 'sm:col-span-2', h: 'h-64 sm:h-80' },
  { id: 2, span: '', h: 'h-64 sm:h-80' },
  { id: 3, span: '', h: 'h-64 sm:h-80' },
  { id: 4, span: 'sm:col-span-2', h: 'h-64 sm:h-80' },
  { id: 5, span: '', h: 'h-64 sm:h-80' },
  { id: 6, span: '', h: 'h-64 sm:h-80' },
];

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const photoIds = [6683392, 6597709, 6234600, 6234552, 1571460, 4173251];

export default function SmileGallery() {
  const toSection = useSectionNav();
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
                src={px(photoIds[i])}
                alt={`Smile gallery ${item.id}`}
                className={`${item.h} w-full object-cover transition-transform duration-500 group-hover:scale-110`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 text-center">
          <button onClick={() => toSection('#contact')} className="btn-primary">
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

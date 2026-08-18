import { motion } from 'framer-motion';
import Section from '../Section';
import { useScrollTo } from '../../hooks/useScrollTo';

const cases = [
  { before: 6683392, after: 1571460, label: 'Crowding corrected' },
  { before: 6597709, after: 4173251, label: 'Overbite resolved' },
  { before: 6234600, after: 6234552, label: 'Spacing closed' },
];

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export default function BracesGallery() {
  const toSection = useScrollTo();
  return (
    <Section
      id="gallery"
      eyebrow="Before & After"
      title="Smile transformations from our clinic"
      subtitle="A glimpse of the outcomes we work toward together — every plan is personalised, and your result will be too."
      className="bg-white"
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card card-hover group overflow-hidden"
          >
            <div className="grid grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={px(c.before)}
                  alt={`Before orthodontic treatment — ${c.label}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink-900/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={px(c.after)}
                  alt={`After orthodontic treatment — ${c.label}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent-400 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  After
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 p-5">
              <p className="text-sm font-semibold text-ink-900">{c.label}</p>
              <span className="text-xs text-ink-400">Illustrative result</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button onClick={() => toSection('#book')} className="btn-primary">
          Start your transformation
        </button>
      </div>
    </Section>
  );
}

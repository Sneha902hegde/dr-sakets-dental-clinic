import { motion } from 'framer-motion';
import Section from '../Section';
import BeforeAfterSlider from '../BeforeAfterSlider';
import { useScrollTo } from '../../hooks/useScrollTo';

type Case = {
  label: string;
  before: string;
  after: string;
  midlines?: [before: number, after: number];
};

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const cases: Case[] = [
  {
    label: 'Overbite corrected',
    before: '/images/braces/Before_overbite.jpg',
    after: '/images/braces/After_overbite.JPG',
    midlines: [0.5, 0.5],
  },
  {
    label: 'Crowding corrected',
    before: '/images/braces/deep_bite_correction.jpeg',
    after: '/images/braces/braces_doctor_pune.jpg',
    midlines: [0.505, 0.6],
  },
  { label: 'Spacing closed', before: px(6234600), after: px(6234552) },
];

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
            {c.midlines ? (
              <BeforeAfterSlider
                before={c.before}
                after={c.after}
                beforeAlt={`Before orthodontic treatment — ${c.label}`}
                afterAlt={`After orthodontic treatment — ${c.label}`}
                beforeMidline={c.midlines[0]}
                afterMidline={c.midlines[1]}
              />
            ) : (
              <div className="grid grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={c.before}
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
                    src={c.after}
                    alt={`After orthodontic treatment — ${c.label}`}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent-400 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    After
                  </span>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between gap-3 p-5">
              <p className="text-sm font-semibold text-ink-900">{c.label}</p>
              <span className="text-xs text-ink-400">
                {c.midlines ? 'Drag to compare' : 'Illustrative result'}
              </span>
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

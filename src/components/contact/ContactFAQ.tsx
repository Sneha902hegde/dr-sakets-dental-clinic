import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { useScrollTo } from '../../hooks/useScrollTo';
import { contactFaqs } from '../../data/contact';

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="card overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-ink-900">{q}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-accent-400 text-white' : 'bg-primary-50 text-primary-700'}`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500 sm:px-6 sm:pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toSection = useScrollTo();
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Good to know before you visit"
      subtitle="The questions patients ask us most. If yours isn't here, just call or message — we're happy to help."
      className="bg-ink-50"
    >
      <Stagger className="mx-auto mt-12 max-w-3xl space-y-4">
        {contactFaqs.map((f, i) => (
          <StaggerItem key={f.q}>
            <FaqItem
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-10 text-center">
        <button onClick={() => toSection('#book')} className="btn-primary">
          Still have a question? Ask us
        </button>
      </div>
    </Section>
  );
}

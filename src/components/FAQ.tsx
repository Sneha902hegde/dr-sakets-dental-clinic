import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';

const faqs = [
  {
    q: 'Do I need a referral to book an appointment?',
    a: 'No referral is needed. You can book directly via call, WhatsApp, or our contact form. We welcome new patients of all ages.',
  },
  {
    q: 'Are root canal treatments painful?',
    a: 'Not at all. We use modern rotary endodontic technology and gentle anesthesia, making root canals virtually painless — often completed in a single sitting.',
  },
  {
    q: 'How long does orthodontic treatment take?',
    a: 'Treatment duration varies by case complexity. Braces typically take 12–24 months, while clear aligners can be shorter for mild cases. Dr. Saket will give you a precise timeline at consultation.',
  },
  {
    q: 'Are dental implants safe and long-lasting?',
    a: 'Yes. Dental implants are a well-established, safe solution. With proper care, they can last decades — often a lifetime. We use computer-guided placement for precision and comfort.',
  },
  {
    q: 'What are your clinic timings?',
    a: 'We are open daily from 10:00 AM to 9:00 PM, making it easy to schedule visits before or after work and school.',
  },
  {
    q: 'Do you treat children?',
    a: 'Absolutely. We offer gentle pediatric dentistry in a warm, child-friendly environment, including preventive care, fluoride, sealants and early orthodontic assessments.',
  },
];

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      eyebrow="FAQ"
      title="Questions, answered"
      subtitle="Everything you need to know before your visit. Can't find your question? Just reach out — we're happy to help."
      className="bg-white"
    >
      <Stagger className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((f, i) => (
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
    </Section>
  );
}

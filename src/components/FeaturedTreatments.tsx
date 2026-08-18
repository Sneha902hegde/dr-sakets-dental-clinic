import { Braces, Sparkles, Bone, Activity, Wand2, Baby, ArrowRight } from 'lucide-react';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';
import { useNav, type Page } from '../hooks/useNav';

const treatments: { icon: typeof Braces; name: string; text: string; page: Page }[] = [
  {
    icon: Braces,
    name: 'Orthodontics & Braces',
    text: 'Metal, ceramic and self-ligating braces to straighten teeth and correct bites with precision.',
    page: 'braces',
  },
  {
    icon: Sparkles,
    name: 'Clear Aligners',
    text: 'Invisible, removable aligners that discreetly transform your smile — no wires, no hassle.',
    page: 'aligners',
  },
  {
    icon: Bone,
    name: 'Dental Implants',
    text: 'Permanent, natural-looking replacements for missing teeth that restore function and confidence.',
    page: 'dental-implants',
  },
  {
    icon: Activity,
    name: 'Root Canal Treatment',
    text: 'Painless, single-sitting root canals using rotary endodontics to save your natural teeth.',
    page: 'root-canal-treatment',
  },
  {
    icon: Wand2,
    name: 'Smile Makeovers',
    text: 'Veneers, whitening and cosmetic artistry tailored to your facial aesthetics for a radiant smile.',
    page: 'smile-makeover',
  },
  {
    icon: Baby,
    name: 'Pediatric Dentistry',
    text: 'Gentle, friendly dental care designed for children in a warm and playful environment.',
    page: 'pediatric-dentistry',
  },
];

export default function FeaturedTreatments() {
  const { navigate } = useNav();
  return (
    <Section
      id="services"
      eyebrow="Featured Treatments"
      title="Comprehensive care, beautifully delivered"
      subtitle="From braces to implants and smile makeovers, every treatment is crafted with precision and personalized to your needs."
      className="bg-white"
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <StaggerItem key={t.name}>
            <div className="card card-hover group flex h-full flex-col p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                <t.icon className="h-7 w-7" strokeWidth={1.9} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{t.name}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{t.text}</p>
              <button
                onClick={() => navigate(t.page)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-500"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

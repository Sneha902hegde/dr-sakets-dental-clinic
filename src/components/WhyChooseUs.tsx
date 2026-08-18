import {
  Clock,
  Wallet,
  Smile,
  UserRound,
  HeartPulse,
  ThumbsUp,
} from 'lucide-react';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';

const reasons = [
  {
    icon: UserRound,
    title: 'Expert Specialist Team',
    text: 'Orthodontists and specialists under one roof for comprehensive, coordinated care.',
  },
  {
    icon: Smile,
    title: 'Painless Dentistry',
    text: 'Gentle techniques and a calming environment that make every visit stress-free.',
  },
  {
    icon: HeartPulse,
    title: 'Advanced Technology',
    text: 'Modern equipment for safer, faster and more precise dental treatment.',
  },
  {
    icon: ThumbsUp,
    title: 'Proven Results',
    text: 'A track record of beautiful, lasting smiles trusted by families across Pune.',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    text: 'Open 10 AM – 9 PM so dental care fits seamlessly into your busy schedule.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    text: 'Clear, upfront estimates with no hidden costs and flexible payment options.',
  },
];

export default function WhyChooseUs() {
  return (
    <Section
      id="about"
      eyebrow="Why Choose Us"
      title="Dental care that puts you first"
      subtitle="We blend clinical excellence with genuine warmth so every visit leaves you smiling — in comfort and in confidence."
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <StaggerItem key={r.title}>
            <div className="card card-hover group h-full p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-400 group-hover:text-white">
                <r.icon className="h-7 w-7" strokeWidth={1.9} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{r.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{r.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

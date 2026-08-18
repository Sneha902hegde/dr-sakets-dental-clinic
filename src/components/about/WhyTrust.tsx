import {
  GraduationCap,
  Microscope,
  Lightbulb,
  Cpu,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sofa,
} from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { trustReasons } from '../../data/about';

const icons = [
  GraduationCap, Microscope, Lightbulb, Cpu,
  Eye, HeartHandshake, ShieldCheck, Sofa,
];

export default function WhyTrust() {
  return (
    <Section
      id="why-trust"
      eyebrow="Why Patients Trust Dr. Saket"
      title="Eight reasons families choose us"
      subtitle="Trust is earned through expertise, transparency and genuine care — here's what you can expect from your very first visit."
    >
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustReasons.map((r, i) => {
          const Icon = icons[i] ?? GraduationCap;
          return (
            <StaggerItem key={r.title}>
              <div className="card card-hover group h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-400 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-ink-900">{r.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">{r.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

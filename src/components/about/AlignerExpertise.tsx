import { BadgeCheck, Sparkles, ScanLine, Layers } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { aligners } from '../../data/about';

const icons = [Sparkles, ScanLine, Layers, BadgeCheck];

export default function AlignerExpertise() {
  return (
    <Section
      id="aligners"
      eyebrow="Aligner Expertise"
      title="Certified across leading aligner systems"
      subtitle="Dr. Saket holds certifications across the world's most trusted clear aligner platforms — so you get the right system for your smile, not a one-size-fits-all approach."
      className="bg-white"
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {aligners.map((a, i) => {
          const Icon = icons[i] ?? BadgeCheck;
          return (
            <StaggerItem key={a.name}>
              <div className="card card-hover group h-full p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{a.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{a.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

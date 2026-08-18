import { Globe, Users, Stethoscope } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { memberships } from '../../data/about';

const icons = [Globe, Users, Stethoscope];

export default function Memberships() {
  return (
    <Section
      id="memberships"
      eyebrow="Professional Memberships"
      title="Active in the orthodontic community"
      subtitle="Dr. Saket stays connected with leading national and international dental bodies — keeping his practice at the forefront of the field."
      className="bg-white"
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
        {memberships.map((m, i) => {
          const Icon = icons[i] ?? Globe;
          return (
            <StaggerItem key={m.name}>
              {/* Organization logo card placeholder — replace with actual logos */}
              <div className="card card-hover group flex h-full flex-col items-center p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{m.name}</h3>
                <p className="mt-1 text-sm text-ink-400">{m.sub}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

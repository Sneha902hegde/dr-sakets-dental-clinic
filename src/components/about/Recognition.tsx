import { Award, Mic, Globe, Users, UserCog, Trophy, ShieldCheck, Crown } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { recognition } from '../../data/about';

const icons = [Award, Mic, Globe, Users, UserCog, Trophy, ShieldCheck, Crown];

export default function Recognition() {
  return (
    <Section
      id="recognition"
      eyebrow="Highlights & Recognition"
      title="Achievements that speak for themselves"
      subtitle="From a patented invention to international recognition and leadership roles — a testament to Dr. Saket's commitment to advancing orthodontics."
    >
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {recognition.map((r, i) => {
          const Icon = icons[i] ?? Award;
          return (
            <StaggerItem key={r.title}>
              <div className="card card-hover group h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-400 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-ink-900">{r.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-400">{r.sub}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

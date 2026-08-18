import {
  Layers, MoveHorizontal, ChevronDown, ChevronUp,
  Move3d, SeparatorHorizontal, ArrowUpRight, Anchor, Ruler, HelpCircle,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { conditions } from '../../data/treatments';

const iconMap: Record<string, LucideIcon> = {
  Layers, MoveHorizontal, ChevronDown, ChevronUp,
  Move3d, SeparatorHorizontal, ArrowUpRight, Anchor, Ruler,
};

export default function ConditionsWeTreat() {
  return (
    <Section
      id="conditions"
      eyebrow="Conditions We Treat"
      title="Bites and smiles we correct every day"
      subtitle="Orthodontic care is about more than appearance — it improves how your teeth work and how your face grows. These are the concerns Dr. Saket treats most often."
      className="bg-ink-50"
    >
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.map((c) => {
          const Icon = iconMap[c.icon] ?? HelpCircle;
          return (
            <StaggerItem key={c.title}>
              <div className="card card-hover group flex h-full flex-col p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 text-primary-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{c.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

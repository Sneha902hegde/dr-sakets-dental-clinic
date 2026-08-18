import {
  Utensils, Brush, CalendarClock, Siren, Shield, Repeat, HelpCircle,
} from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { useScrollTo } from '../../hooks/useScrollTo';
import { lifeWithBraces } from '../../data/treatments';

const icons = [Utensils, Brush, CalendarClock, Siren, Shield, Repeat];

export default function LifeWithBraces() {
  const toSection = useScrollTo();
  return (
    <Section
      id="life"
      eyebrow="Life with Braces"
      title="Comfortable care, every day of treatment"
      subtitle="Braces fit easily into everyday life. A few simple habits keep your treatment on track and your smile healthy from start to finish."
      className="bg-ink-50"
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lifeWithBraces.map((item, i) => {
          const Icon = icons[i] ?? HelpCircle;
          return (
            <StaggerItem key={item.title}>
              <div className="card card-hover group flex h-full flex-col p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <div className="mt-10 text-center">
        <button onClick={() => toSection('#book')} className="btn-primary">
          Have a question about braces?
        </button>
      </div>
    </Section>
  );
}

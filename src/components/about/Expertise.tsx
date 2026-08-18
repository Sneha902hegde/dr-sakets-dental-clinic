import { Braces, Smile, Sparkles, Bone, TrendingUp, Wand2, Stethoscope } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem } from '../Reveal';
import { expertise } from '../../data/about';

const icons = [Braces, Smile, Sparkles, Bone, TrendingUp, Wand2, Stethoscope];

export default function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Areas of Expertise"
      title="Comprehensive orthodontic & dental expertise"
      subtitle="From traditional braces to advanced aligners and dentofacial orthopedics — a full spectrum of care under one roof."
      className="bg-white"
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e, i) => {
          const Icon = icons[i] ?? Stethoscope;
          return (
            <StaggerItem key={e.name}>
              <div className="card card-hover group h-full p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{e.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{e.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

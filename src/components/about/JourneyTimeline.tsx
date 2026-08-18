import { GraduationCap, Microscope, Heart, CheckCircle2 } from 'lucide-react';
import Section from '../Section';
import { Reveal } from '../Reveal';
import { timeline } from '../../data/about';

const icons = [GraduationCap, Microscope, Heart];

export default function JourneyTimeline() {
  return (
    <Section
      id="journey"
      eyebrow="A Journey of Excellence"
      title="Education that shaped an expert"
      subtitle="From a strong foundation in Manipal to advanced orthodontic specialization and craniofacial training — every step built deeper expertise."
    >
      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 sm:left-8" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const Icon = icons[i] ?? GraduationCap;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Node */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-ink-100 sm:h-16 sm:w-16">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.9} />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                      {item.phase}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-600">{item.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.text}</p>

                    {item.points.length > 0 && (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-sm text-ink-600">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

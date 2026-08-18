import { CheckCircle2, ArrowRight, BadgeCheck } from 'lucide-react';
import Section from '../Section';
import { Stagger, StaggerItem, Reveal } from '../Reveal';
import { useScrollTo } from '../../hooks/useScrollTo';
import { braceTypes } from '../../data/treatments';

export default function TypesOfBraces() {
  const toSection = useScrollTo();
  return (
    <Section
      id="types"
      eyebrow="Types of Braces"
      title="The right braces for every smile and lifestyle"
      subtitle="From time-tested metal braces to discreet ceramic and self-ligating options, each is chosen to match your case, your comfort and your preferences."
      className="bg-white"
    >
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
        {braceTypes.map((b) => (
          <StaggerItem key={b.name}>
            <div className="card card-hover group flex h-full flex-col overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={b.image}
                  alt={`${b.name} at Dr. Saket's Dental Clinic`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-primary-100 backdrop-blur">
                  {b.tag}
                </span>
                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">{b.name}</h3>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-ink-500">{b.summary}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex gap-2.5">
                    <dt className="flex shrink-0 items-center gap-1.5 font-semibold text-ink-700">
                      <BadgeCheck className="h-4 w-4 text-accent-500" /> Suitable for
                    </dt>
                    <dd className="text-ink-500">{b.suitableFor}</dd>
                  </div>
                  <div className="flex gap-2.5">
                    <dt className="shrink-0 font-semibold text-ink-700">Appearance</dt>
                    <dd className="text-ink-500">{b.appearance}</dd>
                  </div>
                  <div className="flex gap-2.5">
                    <dt className="shrink-0 font-semibold text-ink-700">Considerations</dt>
                    <dd className="text-ink-500">{b.considerations}</dd>
                  </div>
                </dl>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {b.advantages.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-xs text-ink-600">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => toSection('#book')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-500"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-ink-500">
          Not sure which option is right for you? Dr. Saket will recommend the best fit after your
          consultation — based on your case, not a one-size-fits-all answer.
        </p>
      </Reveal>
    </Section>
  );
}

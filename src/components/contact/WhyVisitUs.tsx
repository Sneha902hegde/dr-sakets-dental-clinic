import {
  GraduationCap, Cpu, UserRound, HeartHandshake, ShieldCheck, MapPin,
} from 'lucide-react';
import { whyVisit } from '../../data/contact';
import { Reveal, Stagger, StaggerItem } from '../Reveal';

const icons = [GraduationCap, Cpu, UserRound, HeartHandshake, ShieldCheck, MapPin];

export default function WhyVisitUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Visit Us?</span>
          <h2 className="section-title mt-4 text-balance">Care designed around you</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            From your first call to your final result, every detail is built around your comfort, safety and smile.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyVisit.map((item, i) => {
            const Icon = icons[i] ?? GraduationCap;
            return (
              <StaggerItem key={item.title}>
                <div className="card card-hover group flex h-full items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

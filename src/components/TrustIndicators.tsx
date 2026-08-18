import { Award, Microscope, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Stagger, StaggerItem } from './Reveal';

const indicators = [
  {
    icon: Award,
    title: 'Experienced Orthodontist',
    text: 'Led by Dr. Saket Rallabhandi, MDS, F-PFA (USA) with over a decade of clinical excellence.',
  },
  {
    icon: Microscope,
    title: 'Advanced Digital Dentistry',
    text: 'Intra-oral scanning, digital X-rays and 3D planning for precise, comfortable treatment.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Sterilization Protocols',
    text: 'Hospital-grade hygiene and single-use instruments for your complete safety and peace of mind.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Patient Care',
    text: 'Every treatment plan is tailored to you — with empathy, transparency and genuine warmth.',
  },
];

export default function TrustIndicators() {
  return (
    <section className="relative z-10 -mt-8 pb-8">
      <div className="container-page">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card card-hover group h-full p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <item.icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

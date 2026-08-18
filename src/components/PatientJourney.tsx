import { CalendarPlus, Stethoscope, ClipboardList, Smile } from 'lucide-react';
import Section from './Section';
import { Stagger, StaggerItem } from './Reveal';

const steps = [
  {
    icon: CalendarPlus,
    title: 'Book Appointment',
    text: 'Reach out via call, WhatsApp or our form. Pick a time that suits you.',
  },
  {
    icon: Stethoscope,
    title: 'Consultation',
    text: 'A thorough examination and honest assessment of your dental health.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Treatment',
    text: 'A tailored plan designed around your goals, comfort and timeline.',
  },
  {
    icon: Smile,
    title: 'Smile with Confidence',
    text: 'Walk out with a healthy, beautiful smile you are proud to share.',
  },
];

export default function PatientJourney() {
  return (
    <Section
      eyebrow="Patient Journey"
      title="Your path to a confident smile"
      subtitle="A simple, seamless experience designed around your comfort — from first call to final smile."
      className="bg-white"
    >
      <div className="relative mt-14">
        {/* Connecting line */}
        <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 lg:block" />

        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-ink-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                    <s.icon className="h-7 w-7" strokeWidth={1.9} />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-ink-500">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

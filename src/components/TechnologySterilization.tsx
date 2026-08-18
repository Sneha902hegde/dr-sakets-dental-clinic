import { ScanLine, ShieldCheck, Sparkles, Wind } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';

const features = [
  {
    icon: ScanLine,
    title: 'Digital Intra-oral Scanning',
    text: 'Comfortable, radiation-free digital impressions for precise, predictable outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Rotary Endodontics',
    text: 'Advanced rotary tools for faster, cleaner and virtually painless root canals.',
  },
  {
    icon: Wind,
    title: 'Modern Sterilization Bay',
    text: 'Autoclave sterilization and sealed single-use kits for every patient, every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Infection Control Protocols',
    text: 'Hospital-grade surface disinfection and strict cross-contamination prevention.',
  },
];

export default function TechnologySterilization() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent-600/15 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300 ring-1 ring-white/15">
                Technology & Sterilization
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Advanced technology, uncompromising safety
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                We invest in the latest dental technology and hold ourselves to the highest
                sterilization standards — so you can relax knowing your care is precise,
                comfortable and completely safe.
              </p>
            </Reveal>
          </div>

          {/* Feature grid */}
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group h-full rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:bg-white/[0.1] hover:ring-accent-400/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300 transition-all group-hover:bg-accent-400 group-hover:text-white">
                    <f.icon className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

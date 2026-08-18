import { MapPin } from 'lucide-react';
import { clinic } from '../../data/clinic';
import { Reveal } from '../Reveal';

export default function ContactMap() {
  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Find Us</span>
          <h2 className="section-title mt-4 text-balance">Right in the heart of Aundh</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            We're easy to reach — located at Sayali Garden on Nagras Road, Wireless Colony, Aundh, Pune.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-100">
            {/* Google Maps embed placeholder — replace src with clinic-specific embed */}
            <iframe
              title="Dr. Saket's Dental Clinic location on Google Maps"
              src={clinic.mapEmbed}
              className="h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-primary-700 shadow-soft ring-1 ring-ink-100 backdrop-blur">
              <MapPin className="h-4 w-4 text-accent-500" />
              Dr. Saket's Dental Clinic
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

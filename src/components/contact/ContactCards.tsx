import { Phone, MessageCircle, Clock, MapPin, Navigation } from 'lucide-react';
import { clinic, callLink, whatsappLink } from '../../data/clinic';
import { Reveal } from '../Reveal';

export default function ContactCards() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <Reveal>
            <div className="card card-hover h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                <Phone className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold text-ink-900">Phone</p>
              <a href={callLink} className="mt-1 block text-base font-medium text-ink-700 hover:text-primary-700">
                {clinic.phone}
              </a>
              <p className="mt-1 text-xs text-ink-400">Mon – Sun, call to book</p>
            </div>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={0.08}>
            <div className="card card-hover h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#1ebe5b]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold text-ink-900">WhatsApp</p>
              <a
                href={whatsappLink("Hello! I'd like to book an appointment at Dr. Saket's Dental Clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-base font-medium text-ink-700 hover:text-[#1ebe5b]"
              >
                {clinic.phone}
              </a>
              <p className="mt-1 text-xs text-ink-400">Quick replies during clinic hours</p>
            </div>
          </Reveal>

          {/* Clinic Hours */}
          <Reveal delay={0.16}>
            <div className="card card-hover h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Clock className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold text-ink-900">Clinic Hours</p>
              <ul className="mt-2 space-y-1.5">
                {clinic.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3 text-xs">
                    <span className="text-ink-500">{h.day}</span>
                    <span className="text-right font-medium text-ink-700">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.24}>
            <div className="card card-hover h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold text-ink-900">Location</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">{clinic.address}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800"
              >
                <Navigation className="h-3.5 w-3.5" />
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

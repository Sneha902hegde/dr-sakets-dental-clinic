import { MapPin, Phone, MessageCircle, Clock, Navigation, CalendarPlus } from 'lucide-react';
import { clinic, callLink, whatsappLink } from '../data/clinic';
import { Reveal } from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title mt-4 text-balance">
            Let's get you smiling
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            Book an appointment, ask a question, or just say hello. We'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-2">
            <Reveal>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Our Address</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{clinic.address}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Phone</p>
                    <a href={callLink} className="mt-1 block text-sm text-ink-500 hover:text-primary-700">{clinic.phone}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#1ebe5b]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">WhatsApp</p>
                    <a
                      href={whatsappLink("Hello! I'd like to book an appointment at Dr. Saket's Dental Clinic.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-ink-500 hover:text-[#1ebe5b]"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-semibold text-ink-900">Clinic Timings</p>
                    <ul className="mt-2 space-y-1.5">
                      {clinic.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-3 text-sm text-ink-500">
                          <span>{h.day}</span>
                          <span className="text-right font-medium text-ink-700">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary flex-1">
                  <CalendarPlus className="h-4 w-4" />
                  Book Appointment
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-100">
              <iframe
                title="Dr. Saket's Dental Clinic location on Google Maps"
                src={clinic.mapEmbed}
                className="h-[26rem] w-full border-0 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

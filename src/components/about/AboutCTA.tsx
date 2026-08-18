import { CalendarPlus, Phone, MessageCircle } from 'lucide-react';
import { Reveal } from '../Reveal';
import { callLink, whatsappLink } from '../../data/clinic';
import { useSectionNav } from '../../hooks/useSectionNav';

export default function AboutCTA() {
  const toSection = useSectionNav();
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-700 to-primary-900 px-8 py-16 text-center shadow-card sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.06]" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary-400/30 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Your Smile Deserves Expert Care
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-100 sm:text-lg">
                Experience personalized orthodontic and comprehensive dental care in a welcoming
                environment designed around your comfort.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappLink("Hello! I'd like to book an appointment with Dr. Saket.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe5b] hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={callLink} className="btn bg-white text-primary-700 shadow-soft hover:bg-ink-50 hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <button onClick={() => toSection('#contact')} className="btn bg-accent-400 text-white shadow-soft hover:bg-accent-500 hover:-translate-y-0.5">
                  <CalendarPlus className="h-4 w-4" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

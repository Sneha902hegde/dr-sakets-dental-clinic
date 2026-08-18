import { motion } from 'framer-motion';
import { Siren, Phone, MessageCircle } from 'lucide-react';
import { callLink, whatsappLink } from '../../data/clinic';
import { Reveal } from '../Reveal';

export default function EmergencyBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-50 via-white to-amber-50 px-8 py-12 shadow-soft ring-1 ring-rose-100 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-soft">
                  <Siren className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                    Dental Emergency?
                  </p>
                  <h2 className="mt-2 text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
                    In pain or swelling? Don't wait — call us now.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-600 sm:text-base">
                    If you have severe toothache, a broken tooth, facial swelling or dental trauma,
                    call the clinic directly. Dr. Saket will guide you on immediate steps and arrange
                    a prompt visit.
                  </p>
                </div>
              </div>

              <motion.div
                className="flex flex-col gap-3 sm:flex-row lg:flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <a href={callLink} className="btn bg-rose-500 text-white shadow-soft hover:bg-rose-600 hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={whatsappLink("Hello! I have a dental emergency and need urgent advice.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe5b] hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

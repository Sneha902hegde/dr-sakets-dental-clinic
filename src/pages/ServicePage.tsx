import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { services, type ServiceContent, type ServiceKey } from '../data/services';
import { clinic, whatsappLink } from '../data/clinic';
import { useNav, type Page } from '../hooks/useNav';
import { Reveal } from '../components/Reveal';

type ServicePageProps = { serviceKey: ServiceKey };

type PageSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

function PageSection({ eyebrow, title, subtitle, children, className = '' }: PageSectionProps) {
  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title mt-4 text-balance">{title}</h2>
          {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ items, className = '' }: { items: { title: string; text: string }[]; className?: string }) {
  return (
    <div className={`mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.06} className="h-full">
          <article className="card card-hover h-full p-6 sm:p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
              <Check className="h-5 w-5" strokeWidth={2.4} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function Hero({ service }: { service: ServiceContent }) {
  const { navigate } = useNav();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-primary-200/40 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" />{service.eyebrow}</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">{service.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => navigate('contact')} className="btn-primary"><ClipboardCheck className="h-4 w-4" /> Book an Appointment</button>
            <a href={whatsappLink(`Hello! I would like to know more about ${service.eyebrow}.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
          <p className="mt-6 text-sm font-medium text-primary-700">Serving families in Aundh and across Pune</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className={`relative flex min-h-[22rem] items-end overflow-hidden rounded-[2rem] bg-gradient-to-br ${service.accent} p-7 shadow-card sm:min-h-[30rem]`}>
            <div className="absolute inset-0 bg-dots opacity-10" />
            <div className="absolute right-8 top-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur"><Stethoscope className="h-9 w-9" /></div>
            <div className="relative max-w-sm rounded-2xl bg-white/10 p-5 text-white ring-1 ring-white/20 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Image placeholder</p>
              <p className="mt-2 text-lg font-semibold">{service.imageLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">Replace this space with an approved clinic or treatment photograph.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Journey({ items }: { items: ServiceContent['journey'] }) {
  return (
    <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-primary-100 lg:block" />
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.08} className="relative">
          <article className="card h-full p-6">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-lg font-bold text-white shadow-soft">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="mt-5 text-lg font-bold text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function Faqs({ items }: { items: ServiceContent['faqs'] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {items.map((item, index) => (
        <Reveal key={item.q} delay={index * 0.05}>
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100">
            <button onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left" aria-expanded={open === index}>
              <span className="font-semibold text-ink-900">{item.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary-700 transition-transform ${open === index ? 'rotate-180' : ''}`} />
            </button>
            {open === index && <div className="px-5 pb-5 text-sm leading-relaxed text-ink-500">{item.a}</div>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Related({ service }: { service: ServiceContent }) {
  const { navigate } = useNav();
  return (
    <PageSection eyebrow="Explore More" title="Related treatments" className="bg-ink-50">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {service.related.map((item) => (
          <button key={item.route} onClick={() => item.key ? navigate(item.key as Page) : navigate(item.route.slice(1) as Page)} className="group flex items-center justify-between rounded-2xl bg-white p-5 text-left shadow-soft ring-1 ring-ink-100 transition-all hover:-translate-y-1 hover:ring-primary-200">
            <span className="font-semibold text-ink-800">{item.label}</span><ArrowRight className="h-5 w-5 text-primary-600 transition-transform group-hover:translate-x-1" />
          </button>
        ))}
      </div>
    </PageSection>
  );
}

function AppointmentCta({ service }: { service: ServiceContent }) {
  const { navigate } = useNav();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="container-page relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-200 ring-1 ring-white/15">Begin your smile journey</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">Let’s talk about your {service.eyebrow.toLowerCase()} needs</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-100 sm:text-lg">Book a consultation at Dr. Saket’s clinic in Aundh, Pune. Treatment suitability is determined after a clinical evaluation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><button onClick={() => navigate('contact')} className="btn bg-accent-400 text-white hover:bg-accent-500"><ClipboardCheck className="h-4 w-4" /> Book Appointment</button><a href={clinic.phoneHref} className="btn bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"><HeartPulse className="h-4 w-4" /> Call the Clinic</a></div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicePage({ serviceKey }: ServicePageProps) {
  const service = services[serviceKey];
  useEffect(() => { window.scrollTo(0, 0); document.title = `${service.eyebrow} | Dr. Saket’s Dental Clinic`; }, [service]);
  return (
    <>
      <Hero service={service} />
      <PageSection eyebrow="A thoughtful start" title={service.whatTitle} subtitle={service.intro} className="bg-white">
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-primary-50 p-7 text-center text-base leading-relaxed text-primary-900 ring-1 ring-primary-100 sm:p-10">{service.what}</div>
      </PageSection>
      <PageSection eyebrow="Is this for you?" title={service.audienceTitle} subtitle="A consultation helps determine what is clinically appropriate for your needs.">
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{service.audience.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100"><ShieldCheck className="h-5 w-5 shrink-0 text-primary-600" /><span className="text-sm font-medium text-ink-700">{item}</span></div>)}</div>
      </PageSection>
      <PageSection eyebrow="Your options" title={service.optionsTitle} className="bg-ink-50"><CardGrid items={service.options} /></PageSection>
      {service.extra && <PageSection eyebrow="Special focus" title={service.extraTitle ?? 'More to know'}><CardGrid items={service.extra} /></PageSection>}
      <PageSection eyebrow="Why patients value a clear plan" title="Care that is personal, precise and reassuring"><CardGrid items={service.benefits} /></PageSection>
      <PageSection eyebrow="What to expect" title="Your treatment journey" className="bg-primary-50"><Journey items={service.journey} /></PageSection>
      <PageSection eyebrow="Questions answered" title="Frequently asked questions" className="bg-ink-50"><Faqs items={service.faqs} /></PageSection>
      <Related service={service} />
      <AppointmentCta service={service} />
    </>
  );
}

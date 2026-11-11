import { useEffect } from 'react';
import { ArrowRight, HeartHandshake, Layers3, ShieldCheck, UsersRound } from 'lucide-react';
import { useNav, type Page } from '../hooks/useNav';
import Section from '../components/Section';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import AboutCTA from '../components/about/AboutCTA';
import Contact from '../components/Contact';

const teamProfiles = [
  {
    name: 'Dr. Saket Rallabhandi',
    role: 'Orthodontist',
    text: 'Orthodontic and dentofacial expertise with a focus on thoughtful planning, clear communication and confident smiles.',
    page: 'our-team-dr-saket' as Page,
  },
  {
    name: 'Dr. Sneha Hegde',
    role: 'Prosthodontist',
    text: 'Restorative care for missing, damaged and worn teeth, including crowns, bridges, dentures and rehabilitation.',
    page: 'our-team-dr-sneha' as Page,
  },
  {
    name: 'Dr. Aheli Pal',
    role: 'Oral & Maxillofacial Surgeon',
    text: 'Surgical consultation for impacted teeth, oral surgical conditions, facial trauma and jaw-related concerns.',
    page: 'our-team-dr-aheli' as Page,
  },
];

const principles = [
  {
    title: 'Patient-centred care',
    text: 'We listen carefully, explain options clearly and shape treatment around each patient’s needs, comfort and goals.',
    icon: HeartHandshake,
  },
  {
    title: 'Ethical recommendations',
    text: 'Our advice is grounded in clinical judgment, honest communication and what is genuinely appropriate for your oral health.',
    icon: ShieldCheck,
  },
  {
    title: 'Personalised planning',
    text: 'Every smile and every case is different. We build considered plans rather than relying on a one-size-fits-all pathway.',
    icon: Layers3,
  },
];

export default function AboutPage() {
  const { navigate } = useNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-28 h-[30rem] w-[30rem] rounded-full bg-primary-200/35 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Our Clinic</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Comprehensive care, thoughtfully brought together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Dr. Saket’s Orthodontic & Multispeciality Dental Clinic in Aundh, Pune brings together orthodontics, restorative dentistry, oral surgery and specialist care under one roof.
            </p>
            <button onClick={() => navigate('contact')} className="btn-primary mt-8">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-300/30 to-accent-300/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-card ring-1 ring-ink-100">
              <img src="/images/clinic-photo-1.webp" alt="Welcoming interior of Dr. Saket’s dental clinic in Aundh" className="h-[24rem] w-full rounded-[1.5rem] object-cover sm:h-[30rem]" />
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="A considered approach" title="A clinic built around complete oral health" subtitle="Our clinic is designed for patients who value clear guidance, coordinated expertise and care that feels personal from the first conversation.">
        <div className="mx-auto mt-12 max-w-4xl space-y-5 text-center text-base leading-relaxed text-ink-500 sm:text-lg">
          <p>Dental care is rarely about one isolated tooth or one single appointment. We look at the wider picture: your oral health, bite, function, appearance, comfort and long-term maintenance.</p>
          <p>That broader perspective allows us to discuss treatment in a connected way, whether you are exploring orthodontics, replacing missing teeth, considering oral surgery or seeking help with a complex dental concern.</p>
        </div>
      </Section>

      <Section eyebrow="Our philosophy" title="Thoughtful treatment begins with trust" className="bg-ink-50">
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map(({ title, text, icon: Icon }) => (
            <StaggerItem key={title}>
              <article className="card card-hover h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section eyebrow="Multidisciplinary care" title="The right expertise, working together" subtitle="Exceptional dentistry is a collaborative effort. Each person contributes a specialised perspective while keeping the patient’s overall plan in view.">
        <Reveal className="mx-auto mt-12 max-w-4xl rounded-3xl bg-primary-50 p-8 text-center ring-1 ring-primary-100 sm:p-10">
          <UsersRound className="mx-auto h-10 w-10 text-primary-700" strokeWidth={1.6} />
          <p className="mt-5 text-base leading-relaxed text-primary-950 sm:text-lg">The orthodontist, prosthodontist, oral surgeon, specialist consultants, dental assistants and laboratory technicians work through shared communication and careful sequencing. Together, they help plan and deliver comprehensive treatment with precision, efficiency and continuity.</p>
        </Reveal>
      </Section>

      <Section id="team" eyebrow="Meet our team" title="The people behind every smile" subtitle="Explore the individual expertise that supports our clinic’s multidisciplinary approach." className="bg-ink-50">
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {teamProfiles.map((profile, index) => (
            <Reveal key={profile.page} delay={index * 0.08} className="h-full">
              <button onClick={() => navigate(profile.page)} className="group flex h-full w-full flex-col rounded-3xl bg-white p-6 text-left shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-ink-100 via-stone-100 to-primary-50 text-ink-300 ring-1 ring-ink-100">
                  <UsersRound className="h-12 w-12" strokeWidth={1.2} />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">{profile.role}</p>
                <h3 className="mt-2 text-xl font-bold text-ink-900">{profile.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{profile.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">View profile <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <AboutCTA />
      <Contact />
    </>
  );
}

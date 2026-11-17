import { useEffect } from 'react';
import { ArrowRight, Baby, HeartPulse, UserRound } from 'lucide-react';
import { useNav, type Page } from '../hooks/useNav';
import Section from '../components/Section';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import Contact from '../components/Contact';

type ConsultantProfile = {
  name: string;
  role: string;
  text: string;
  image?: string;
  icon: typeof UserRound;
  page: Page;
};

const consultants: ConsultantProfile[] = [
  {
    name: 'Dr. Aheli Pal',
    role: 'Oral & Maxillofacial Surgeon',
    text: 'Surgical consultation for impacted teeth, oral surgical conditions, facial trauma and jaw-related concerns.',
    image: '/images/about/oral_surgeon_in_aundh,_nagras_road.jpeg',
    icon: UserRound,
    page: 'our-team-dr-aheli',
  },
  {
    name: 'Consultant Pedodontist',
    role: 'Children’s Dentistry',
    text: 'Gentle, age-appropriate care supporting healthy growth, positive dental visits and confident habits for children.',
    icon: Baby,
    page: 'pediatric-dentistry',
  },
  {
    name: 'Consultant Endodontist',
    role: 'Root Canal & Tooth Preservation',
    text: 'Specialist support for diagnosing and treating concerns affecting the inside of the tooth, with a focus on preserving natural teeth where possible.',
    icon: HeartPulse,
    page: 'root-canal-treatment',
  },
];

export default function ConsultantsPage() {
  const { navigate } = useNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-28 h-[30rem] w-[30rem] rounded-full bg-primary-200/35 blur-3xl" />
        <div className="container-page relative text-center">
          <Reveal className="mx-auto max-w-3xl">
            <span className="eyebrow">Our Consultants</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Specialist expertise, brought together for you.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              Our consultants add focused expertise to your care, working alongside the clinic team when your treatment benefits from a specialist perspective.
            </p>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Meet our consultants" title="The right specialist at the right stage" subtitle="Explore the areas of care supported by our consultant team." className="bg-ink-50">
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {consultants.map((consultant) => {
            const Icon = consultant.icon;
            return (
              <StaggerItem key={consultant.name} className="h-full">
                <button
                  onClick={() => navigate(consultant.page)}
                  className="group flex h-full w-full flex-col rounded-3xl bg-white p-6 text-left shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  {consultant.image ? (
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50 ring-1 ring-ink-100">
                      <img src={consultant.image} alt={consultant.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 via-white to-accent-50 text-primary-500 ring-1 ring-primary-100">
                      <Icon className="h-12 w-12" strokeWidth={1.4} />
                    </div>
                  )}
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">{consultant.role}</p>
                  <h2 className="mt-2 text-xl font-bold text-ink-900">{consultant.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{consultant.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">Explore this care <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Contact />
    </>
  );
}

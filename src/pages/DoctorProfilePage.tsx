import { useEffect } from 'react';
import { ArrowRight, CalendarPlus, Check, Phone, UserRound } from 'lucide-react';
import { useNav, type Page } from '../hooks/useNav';
import { doctorProfiles, type DoctorProfileKey } from '../data/team';
import { clinic, callLink } from '../data/clinic';
import Section from '../components/Section';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import JourneyTimeline from '../components/about/JourneyTimeline';
import Innovation from '../components/about/Innovation';
import AlignerExpertise from '../components/about/AlignerExpertise';
import Recognition from '../components/about/Recognition';
import Philosophy from '../components/about/Philosophy';
import Expertise from '../components/about/Expertise';
import WhyTrust from '../components/about/WhyTrust';
import Memberships from '../components/about/Memberships';
import BeyondDentistry from '../components/about/BeyondDentistry';
import Contact from '../components/Contact';

type DoctorProfilePageProps = { doctorKey: DoctorProfileKey };

export default function DoctorProfilePage({ doctorKey }: DoctorProfilePageProps) {
  const { navigate } = useNav();
  const profile = doctorProfiles[doctorKey];
  const isSaket = doctorKey === 'saket';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doctorKey]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm lg:order-2">
            {profile.image ? (
              <img
                src={profile.image}
                alt={`${profile.name}, ${profile.role}`}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-card ring-1 ring-ink-100"
              />
            ) : (
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-100 via-stone-100 to-primary-50 shadow-card ring-1 ring-ink-100">
                <div className="flex aspect-[4/5] items-center justify-center text-ink-300">
                  <UserRound className="h-20 w-20" strokeWidth={1.1} />
                </div>
              </div>
            )}
          </Reveal>
          <Reveal className="lg:order-1">
            <span className="eyebrow">Our Team · {profile.role}</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">{profile.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">{profile.intro}</p>
            <button onClick={() => navigate('contact')} className="btn-primary mt-8"><CalendarPlus className="h-4 w-4" /> Book an Appointment</button>
          </Reveal>
        </div>
      </section>

      {isSaket ? (
        <>
          <Section eyebrow="Professional focus" title="Orthodontic care shaped around the individual" subtitle={profile.philosophy}>
            <ProfileAreas areas={profile.areas} />
          </Section>
          <JourneyTimeline />
          <Innovation />
          <AlignerExpertise />
          <Recognition />
          <Philosophy />
          <Expertise />
          <WhyTrust />
          <Memberships />
          <BeyondDentistry />
        </>
      ) : (
        <>
          <Section eyebrow="Clinical focus" title={`Areas of expertise in ${profile.role.toLowerCase()}`} subtitle={profile.philosophy}>
            <ProfileAreas areas={profile.areas} />
            {profile.education && (
              <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-primary-50 p-7 ring-1 ring-primary-100 sm:p-9">
                <h2 className="text-xl font-bold text-ink-900">Education</h2>
                <ul className="mt-5 space-y-3">
                  {profile.education.map((qualification) => (
                    <li key={qualification} className="flex gap-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Section>
          <Section eyebrow="A patient-centred approach" title="Care that is clear, considered and personal" className="bg-ink-50">
            <Reveal className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-ink-100 sm:p-10">
              <p className="text-base leading-relaxed text-ink-500 sm:text-lg">{profile.philosophy}</p>
            </Reveal>
          </Section>
        </>
      )}

      <Section eyebrow="Explore related care" title="Continue exploring your options">
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.related.map((item) => (
            <button key={item.page} onClick={() => navigate(item.page as Page)} className="group flex items-center justify-between rounded-2xl bg-white p-5 text-left shadow-soft ring-1 ring-ink-100 transition-all hover:-translate-y-1 hover:ring-primary-200">
              <span className="font-semibold text-ink-800">{item.label}</span><ArrowRight className="h-5 w-5 text-primary-600 transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-page relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <span className="eyebrow !text-accent-200">Visit our clinic in Aundh</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">Let’s discuss your dental care</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-100 sm:text-lg">Meet our team at {clinic.shortName} and receive clear guidance after a clinical evaluation.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={() => navigate('contact')} className="btn bg-accent-400 text-white hover:bg-accent-500"><CalendarPlus className="h-4 w-4" /> Book Appointment</button>
              <a href={callLink} className="btn bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"><Phone className="h-4 w-4" /> Call the Clinic</a>
            </div>
          </Reveal>
        </div>
      </section>
      <Contact />
    </>
  );
}

function ProfileAreas({ areas }: { areas: string[] }) {
  return (
    <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => (
        <StaggerItem key={area}>
          <div className="flex h-full items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100">
            <Check className="h-5 w-5 shrink-0 text-primary-600" />
            <span className="text-sm font-medium text-ink-700">{area}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

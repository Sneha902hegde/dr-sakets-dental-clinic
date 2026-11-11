import { useEffect } from 'react';
import { ArrowRight, Award, BookOpen, CalendarPlus, Check, GraduationCap, Phone, Stethoscope, UserRound } from 'lucide-react';
import { useNav, type Page } from '../hooks/useNav';
import { doctorProfiles, type DoctorProfileKey, type DoctorProfile } from '../data/team';
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
  const isSneha = doctorKey === 'sneha';

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
            {profile.introParagraphs && (
              <div className="mt-5 max-w-2xl space-y-4">
                {profile.introParagraphs.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink-500">{para}</p>
                ))}
              </div>
            )}
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
      ) : isSneha ? (
        <SnehaProfileSections profile={profile} />
      ) : (
        <>
          <Section eyebrow="Clinical focus" title={`Areas of expertise in ${profile.role.toLowerCase()}`} subtitle={profile.philosophy}>
            <ProfileAreas areas={profile.areas} />
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

function SnehaProfileSections({ profile }: { profile: DoctorProfile }) {
  return (
    <>
      {/* Education */}
      <Section eyebrow="Academic Background" title="Education & Qualifications" className="bg-white">
        <Stagger className="mx-auto mt-12 max-w-4xl grid gap-5 sm:grid-cols-2">
          {profile.education?.map((edu) => (
            <StaggerItem key={edu.degree}>
              <div className="flex h-full gap-5 rounded-3xl bg-primary-50 p-7 ring-1 ring-primary-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                  <GraduationCap className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-base font-bold text-ink-900">{edu.degree}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{edu.institution}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Clinical Interests */}
      <Section eyebrow="Scope of Practice" title="Areas of Clinical Interest">
        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.areas.map((area) => (
            <StaggerItem key={area}>
              <div className="flex h-full items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100">
                <Stethoscope className="h-5 w-5 shrink-0 text-primary-600" strokeWidth={1.8} />
                <span className="text-sm font-medium text-ink-700">{area}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Research & Academic Contributions */}
      <Section eyebrow="Scholarly Work" title="Research & Academic Contributions" className="bg-ink-50">
        <Reveal className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink-100 sm:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <BookOpen className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <p className="text-base leading-relaxed text-ink-500 sm:text-lg">{profile.researchNote}</p>
          </div>
        </Reveal>
      </Section>

      {/* Professional Affiliations & Editorial Contributions */}
      <Section eyebrow="Membership & Editorial Role" title="Professional Affiliations & Editorial Contributions">
        <Stagger className="mt-12 mx-auto max-w-4xl grid gap-5 sm:grid-cols-3">
          {profile.affiliations?.map((aff) => (
            <StaggerItem key={`${aff.name}-${aff.role}`}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-7 text-center shadow-soft ring-1 ring-ink-100">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <Award className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-bold text-ink-900">{aff.name}</h3>
                <span className="mt-2 inline-block w-fit mx-auto rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">{aff.role}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Philosophy */}
      <Section eyebrow="Treatment Philosophy" title="Restoring more than teeth" className="bg-ink-50">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-ink-100 sm:p-10">
          <p className="text-base leading-relaxed text-ink-500 sm:text-lg">{profile.philosophy}</p>
        </Reveal>
      </Section>
    </>
  );
}

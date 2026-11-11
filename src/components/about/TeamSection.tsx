import { UserRound } from 'lucide-react';
import Section from '../Section';
import { Reveal } from '../Reveal';

type Consultant = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

const consultants: Consultant[] = [
  {
    name: 'Dr. Aheli Pal',
    role: 'Oral & Maxillofacial Surgeon',
    bio: 'Dr. Aheli Pal is a Board-Certified Oral and Maxillofacial Surgeon with an MDS in Oral & Maxillofacial Surgery from Datta Meghe Institute of Medical Sciences, Wardha. Her clinical expertise includes the management of impacted teeth, oral surgical conditions, facial trauma and conditions affecting the jaws and facial structures. She brings a thoughtful, patient-centred approach to surgical care.',
  },
  {
    name: 'Dr. Sneha Hegde',
    role: 'Prosthodontist',
    image: '/images/Prosthodontist_in_Aundh.jfif',
    bio: 'Dr. Sneha Hegde is a Prosthodontist specialising in the restoration and replacement of missing or damaged teeth. Her areas of expertise include crowns, bridges, dentures, implant-supported restorations and full-mouth rehabilitation. With a keen eye for detail and a focus on functional and aesthetic outcomes, she believes in creating personalised treatment plans that restore comfort, confidence and natural-looking smiles.',
  },
  {
    name: 'Consultant – Paediatric Dentistry',
    role: 'Pedodontist',
    bio: 'Our paediatric dental consultant focuses on the oral health of infants, children and adolescents. With an emphasis on preventive care, early diagnosis and age-appropriate treatment, the aim is to create positive dental experiences and encourage healthy oral habits from an early age.',
  },
  {
    name: 'Consultant – Endodontics',
    role: 'Endodontist',
    bio: 'Our endodontic consultant specialises in diagnosing and managing conditions affecting the dental pulp and surrounding tissues. With a focus on preserving natural teeth through appropriate root canal treatment and other endodontic procedures, the aim is to provide precise, carefully planned care.',
  },
];

export default function TeamSection() {
  return (
    <Section
      id="team"
      eyebrow="The people behind your care"
      title="The Team Behind Every Smile"
      subtitle="Every successful dental treatment is supported by a wonderful team working together behind the scenes."
      className="bg-ink-50"
    >
      <Reveal className="mx-auto mt-8 max-w-4xl text-center">
        <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
          From our dedicated dental assistants who ensure smooth clinical care and patient comfort, to skilled dental laboratory technicians who help bring precision to every restoration, and experienced specialist consultants who contribute their expertise to individual cases, every member plays an important role. We believe exceptional dentistry is a collaborative effort built on communication, precision and a shared commitment to patient care.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {consultants.map((consultant, index) => (
          <Reveal key={consultant.name} delay={index * 0.06} className="h-full">
            <article className="grid h-full gap-6 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6 md:grid-cols-[132px_1fr] md:items-start">
              {consultant.image ? (
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top ring-1 ring-ink-100"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Consultant portrait placeholder"
                  className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-ink-100 via-stone-100 to-primary-50 text-ink-300 ring-1 ring-ink-100"
                >
                  <UserRound className="h-12 w-12" strokeWidth={1.25} />
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">{consultant.role}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight text-ink-900">{consultant.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{consultant.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

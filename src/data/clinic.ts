export const clinic = {
  name: "Dr. Saket's Orthodontic & Multispeciality Dental Clinic",
  shortName: "Dr. Saket's Dental Clinic",
  tagline: 'Healthy Smiles. Confident Lives.',
  area: 'Aundh, Pune, Maharashtra, India',
  phone: '+91 9972804333',
  phoneHref: 'tel:+919972804333',
  whatsapp: '919972804333',
  email: 'drsaket.ralla@gmail.com',
  address: '2, A Wing, Sayali Garden, Nagras Road, Ward No. 8, Wireless Colony, Aundh, Pune, Maharashtra – 411067',
  addressShort: 'Sayali Garden, Nagras Road, Wireless Colony, Aundh, Pune – 411067',
  mapEmbed: 'https://www.google.com/maps?q=Sayali+Garden+Nagras+Road+Wireless+Colony+Aundh+Pune+411067&output=embed',
  mapDirections: 'https://www.google.com/maps/dir/?api=1&destination=Sayali+Garden+Nagras+Road+Wireless+Colony+Aundh+Pune+411067',
  timings: '10:00 AM – 1:00 PM & 5:00 PM – 9:00 PM',
  hours: [
    { day: 'Monday', time: 'By appointment only' },
    { day: 'Tuesday – Sunday', time: '10:00 AM – 1:00 PM & 5:00 PM – 9:00 PM' },
  ],
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    google: 'https://google.com/maps',
  },
};

export const doctor = {
  name: 'Dr. Saket Sai Rallabhandi',
  shortName: 'Dr. Saket Rallabhandi',
  credentials: 'MDS, F-PFA (USA)',
  primaryQualifications: [
    'BDS (Manipal)',
    'MDS – Orthodontics & Dentofacial Orthopedics',
    'F-PFA (USA)',
  ],
  bio: 'A passionate orthodontist and smile designer, Dr. Saket Rallabhandi brings precision, warmth, and an unwavering commitment to patient-centred care. With advanced training in the USA and years of clinical excellence, he blends artistry with evidence-based dentistry to craft confident, lasting smiles for every patient.',
  highlights: [
    'Advanced orthodontic & clear aligner specialist',
    'Fellowship from the Pierre Fauchard Academy, USA',
    'Patient-first, comfort-driven approach',
    'Precision smile design & digital dentistry',
  ],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

export const callLink = clinic.phoneHref;

type NavChild = { label: string; to: string };
type NavLink = { label: string; to: string; children?: NavChild[] };

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/#services',
    children: [
      { label: 'Braces & Orthodontics', to: '/braces' },
      { label: 'Clear Aligners', to: '/aligners' },
      { label: 'Dental Implants', to: '/dental-implants' },
      { label: 'Root Canal Treatment', to: '/root-canal-treatment' },
      { label: 'Smile Makeover', to: '/smile-makeover' },
      { label: 'Cosmetic Dentistry', to: '/cosmetic-dentistry' },
      { label: 'Pediatric Dentistry', to: '/pediatric-dentistry' },
      { label: 'Preventive Dentistry', to: '/preventive-dentistry' },
      { label: 'Crowns & Bridges', to: '/crowns-and-bridges' },
      { label: 'Dentures', to: '/dentures' },
      { label: 'Gum Treatment', to: '/gum-treatment' },
      { label: 'Wisdom Tooth Removal', to: '/wisdom-tooth-removal' },
      { label: 'Full Mouth Rehabilitation', to: '/full-mouth-rehabilitation' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

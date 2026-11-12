export type GalleryCategory =
  | 'clinic'
  | 'technology'
  | 'smile-transformations'
  | 'team'
  | 'events';

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  label: string;
  alt: string;
  image: string;
  /** Tailwind span helper for masonry rhythm: '' | 'sm:col-span-2' | 'sm:row-span-2' */
  span?: string;
  /** Tailwind height class for varied tile heights */
  height?: string;
  before?: string;
  after?: string;
  beforeMidline?: number;
  afterMidline?: number;
  afterZoom?: number;
  imageFit?: 'cover' | 'contain';
};

export const galleryFilters: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'clinic', label: 'Clinic' },
  { id: 'technology', label: 'Technology' },
  { id: 'smile-transformations', label: 'Smile Transformations' },
  { id: 'team', label: 'Team' },
  { id: 'events', label: 'Events & CE' },
];

export const galleryItems: GalleryItem[] = [
  // Clinic
  { id: 'clinic-reception', category: 'clinic', label: 'Reception Area', alt: 'Reception area at Dr. Saket\'s Dental Clinic', image: '/images/clinic-photos/Reception_Area.jpeg', span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'clinic-lounge', category: 'clinic', label: 'Waiting Area', alt: 'Comfortable waiting area at Dr. Saket\'s Dental Clinic', image: '/images/clinic-photos/waiting_area.jpeg', height: 'h-64 sm:h-72' },
  { id: 'clinic-operatory', category: 'clinic', label: 'Treatment Operatory', alt: 'Treatment operatory at Dr. Saket\'s Dental Clinic', image: '/images/clinic-photos/Operatory_room.jpeg', span: 'sm:row-span-2', height: 'h-72 sm:h-[34rem]' },

  // Technology
  { id: 'tech-scanner', category: 'technology', label: 'Intraoral Scanning', alt: 'Intraoral scanning in the dental clinic', image: '/images/gallery/Intraoral_Scanning.jpeg', span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'tech-imaging', category: 'technology', label: 'Soft Tissue Diode Laser', alt: 'Soft tissue diode laser equipment', image: '/images/gallery/soft_tissue_diode_laser.jpeg', height: 'h-64 sm:h-72' },
  { id: 'tech-equipment', category: 'technology', label: 'System B Obturation System', alt: 'System B obturation system equipment', image: '/images/gallery/System_B_obturation_system.jpeg', height: 'h-64 sm:h-72' },

  // Smile Transformations
  { id: 'smile-1', category: 'smile-transformations', label: 'Overbite Corrected', alt: 'Before and after orthodontic treatment for an overbite', image: '/images/braces/Before_overbite.jpg', before: '/images/braces/Before_overbite.jpg', after: '/images/braces/After_overbite copy.JPG', beforeMidline: 0.5, afterMidline: 0.5, afterZoom: 1.35, span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'smile-2', category: 'smile-transformations', label: 'Crowding Corrected', alt: 'Before and after orthodontic treatment for crowding', image: '/images/braces/deep_bite_correction.jpeg', before: '/images/braces/deep_bite_correction.jpeg', after: '/images/braces/braces_doctor_pune.jpg', beforeMidline: 0.505, afterMidline: 0.6, height: 'h-64 sm:h-72' },
  { id: 'smile-3', category: 'smile-transformations', label: 'Spacing Closed', alt: 'Before and after orthodontic treatment closing spacing', image: '/images/braces/IMG_1673_copy.jpg', before: '/images/braces/IMG_1673_copy.jpg', after: '/images/braces/IMG_8365_copy.jpg', beforeMidline: 0.5, afterMidline: 0.5, imageFit: 'contain', height: 'h-64 sm:h-72' },
  { id: 'smile-4', category: 'smile-transformations', label: 'Smile Makeover', alt: 'Before and after smile makeover', image: '/images/services/smile_make_over_in_aundh.jpeg', before: '/images/services/smile_make_over_in_aundh.jpeg', after: '/images/services/smile_designing_post_in_aundh.jpeg', beforeMidline: 0.46, afterMidline: 0.46, height: 'h-64 sm:h-72' },

  // Team
  { id: 'team-doctor', category: 'team', label: 'Dr. Saket Sai Rallabhandi', alt: 'Dr. Saket Sai Rallabhandi, Orthodontist', image: '/images/Dr_Saket_Rallabhandi.jpg', span: 'sm:row-span-2', height: 'h-72 sm:h-[34rem]' },

  // Events & Continuing Education
  {
    id: 'event-conf',
    category: 'events',
    label: 'Post-Graduation Convocation',
    alt: 'Dr. Saket at a post-graduation convocation ceremony',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUR_1371.JPG-kXz4w7UOU9ZbJSaYFo0nsOuv626R6n.jpeg',
    span: 'sm:col-span-2',
    height: 'h-72 sm:h-80',
  },
  { id: 'event-fellowship', category: 'events', label: 'Pierre Fauchard Fellowship', alt: 'Dr. Saket receiving his Pierre Fauchard Fellowship', image: '/images/about/Pierre_Fauchard_fellowship.jpeg', height: 'h-64 sm:h-72' },
  { id: 'event-rcse-endodontics', category: 'events', label: 'RCSE Endodontics', alt: 'RCSE Endodontics professional training', image: '/images/about/Rcse_endodontics.jpeg', height: 'h-64 sm:h-72' },
  {
    id: 'event-workshop',
    category: 'events',
    label: 'IDA Office Bearers Meeting',
    alt: 'Dental professionals at an IDA office bearers meeting',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-21%20at%201.01.17%20PM%20%283%29-1Ud7Hc0sMjuzsLUoSR0nGEZ4spB96W.jpeg',
    height: 'h-64 sm:h-72',
  },
  {
    id: 'event-lecture',
    category: 'events',
    label: 'IDA AGM',
    alt: 'Dental professionals gathered at an IDA annual general meeting',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-21%20at%201.01.17%20PM-lgVMXVIvJmd7biuU1c3qydZmUYP4QV.jpeg',
    height: 'h-64 sm:h-72',
  },
  {
    id: 'event-panel',
    category: 'events',
    label: 'IDA Pune West Presentation',
    alt: 'Dr. Saket presenting at an IDA Pune West professional event',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-21%20at%201.01.16%20PM%20%281%29-79FDnvqhT0NQIv2O4FGv4BSW21epYp.jpeg',
    height: 'h-64 sm:h-72',
  },
  {
    id: 'clinic-new-photo',
    category: 'clinic',
    label: 'Clinic Photo',
    alt: 'Dr. Saket\'s dental clinic',
    image: '/images/gallery/WhatsApp_Image_2026-09-29_at_3.09.26_PM.jpeg',
    span: 'sm:col-span-2',
    height: 'h-72 sm:h-80',
  },
];

export const galleryHero = {
  eyebrow: 'Gallery',
  title: 'See the Smiles We Create',
  subtitle:
    "Take a closer look at our modern clinic, advanced technology, patient-friendly environment, and smile transformations.",
};

export const galleryCta = {
  eyebrow: 'Visit Us',
  title: 'Experience Modern Dentistry in a Comfortable Environment',
  subtitle:
    'Step into a calm, contemporary space designed around your comfort — and meet the team that will care for your smile.',
};

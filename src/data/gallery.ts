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
};

export const galleryFilters: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'clinic', label: 'Clinic' },
  { id: 'technology', label: 'Technology' },
  { id: 'smile-transformations', label: 'Smile Transformations' },
  { id: 'team', label: 'Team' },
  { id: 'events', label: 'Events & CE' },
];

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const galleryItems: GalleryItem[] = [
  // Clinic
  { id: 'clinic-reception', category: 'clinic', label: 'Reception Area', alt: 'Reception area at Dr. Saket\'s Dental Clinic', image: '/images/clinic/Reception_Area.jpeg', span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'clinic-lounge', category: 'clinic', label: 'Waiting Area', alt: 'Comfortable waiting area at Dr. Saket\'s Dental Clinic', image: '/images/clinic/waiting_area.jpeg', height: 'h-64 sm:h-72' },
  { id: 'event-fellowship', category: 'events', label: 'Pierre Fauchard Fellowship', alt: 'Dr. Saket receiving his Pierre Fauchard Fellowship', image: '/images/clinic/about/Pierre_Fauchard_fellowship.jpeg', height: 'h-64 sm:h-72' },
  { id: 'clinic-operatory', category: 'clinic', label: 'Treatment Operatory', alt: 'Treatment operatory at Dr. Saket\'s Dental Clinic', image: '/images/clinic/Operatory_room.jpeg', span: 'sm:row-span-2', height: 'h-72 sm:h-[34rem]' },
  { id: 'event-rcse-endodontics', category: 'events', label: 'RCSE Endodontics', alt: 'RCSE Endodontics professional training', image: '/images/clinic/services/Rcse_endodontics.jpeg', height: 'h-64 sm:h-72' },

  // Technology
  { id: 'tech-scanner', category: 'technology', label: 'Intraoral Scanning', alt: 'Intraoral scanning in the dental clinic', image: '/images/gallery/Intraoral_Scanning.jpeg', span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'tech-imaging', category: 'technology', label: 'Soft Tissue Diode Laser', alt: 'Soft tissue diode laser equipment', image: '/images/gallery/soft_tissue_diode_laser.jpeg', height: 'h-64 sm:h-72' },
  { id: 'tech-equipment', category: 'technology', label: 'System B Obturation System', alt: 'System B obturation system equipment', image: '/images/gallery/System_B_obturation_system.jpeg', height: 'h-64 sm:h-72' },

  // Smile Transformations
  { id: 'smile-1', category: 'smile-transformations', label: 'Orthodontic Case', alt: 'Orthodontic before and after', image: px(6597709), span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'smile-2', category: 'smile-transformations', label: 'Cosmetic Case', alt: 'Cosmetic smile makeover', image: px(1571460), height: 'h-64 sm:h-72' },
  { id: 'smile-3', category: 'smile-transformations', label: 'Aligner Case', alt: 'Clear aligner transformation', image: px(4173251), height: 'h-64 sm:h-72' },
  { id: 'smile-4', category: 'smile-transformations', label: 'Crowding Corrected', alt: 'Crowding corrected', image: px(6234600), height: 'h-64 sm:h-72' },

  // Team
  { id: 'team-doctor', category: 'team', label: 'Doctor Portrait', alt: 'Dr. Saket Rallabhandi portrait', image: px(5452201), span: 'sm:row-span-2', height: 'h-72 sm:h-[34rem]' },
  { id: 'team-group', category: 'team', label: 'Team Photo', alt: 'Clinic team photo', image: px(6234552), height: 'h-64 sm:h-72' },
  { id: 'team-interaction', category: 'team', label: 'Patient Interaction', alt: 'Doctor with patient', image: px(4173251), height: 'h-64 sm:h-72' },

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

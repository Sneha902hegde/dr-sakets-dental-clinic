export type GalleryCategory =
  | 'clinic'
  | 'treatment-rooms'
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
  { id: 'treatment-rooms', label: 'Treatment Rooms' },
  { id: 'technology', label: 'Technology' },
  { id: 'smile-transformations', label: 'Smile Transformations' },
  { id: 'team', label: 'Team' },
  { id: 'events', label: 'Events & CE' },
];

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const galleryItems: GalleryItem[] = [
  // Clinic
  { id: 'clinic-reception', category: 'clinic', label: 'Reception', alt: 'Clinic reception area at Dr. Saket\'s Dental Clinic', image: px(6683392), span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'clinic-lounge', category: 'clinic', label: 'Waiting Lounge', alt: 'Comfortable waiting lounge', image: px(6597709), height: 'h-64 sm:h-72' },
  { id: 'clinic-consult', category: 'clinic', label: 'Consultation Room', alt: 'Consultation room', image: px(6234600), height: 'h-64 sm:h-72' },
  { id: 'clinic-operatory', category: 'clinic', label: 'Treatment Operatory', alt: 'Treatment operatory', image: px(6234552), span: 'sm:row-span-2', height: 'h-72 sm:h-[34rem]' },
  { id: 'clinic-sterilization', category: 'clinic', label: 'Sterilization Area', alt: 'Sterilization area', image: px(1571460), height: 'h-64 sm:h-72' },

  // Treatment Rooms
  { id: 'room-chair', category: 'treatment-rooms', label: 'Dental Chair', alt: 'Modern dental chair', image: px(4173251), span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'room-suite', category: 'treatment-rooms', label: 'Treatment Suite', alt: 'Treatment suite', image: px(6682750), height: 'h-64 sm:h-72' },
  { id: 'room-light', category: 'treatment-rooms', label: 'Operatory Light', alt: 'Operatory light and unit', image: px(3845625), height: 'h-64 sm:h-72' },

  // Technology
  { id: 'tech-scanner', category: 'technology', label: 'Intraoral Scanner', alt: 'Intraoral digital scanner', image: px(6682734), span: 'sm:col-span-2', height: 'h-72 sm:h-80' },
  { id: 'tech-imaging', category: 'technology', label: 'Digital Imaging', alt: 'Digital dental imaging', image: px(3779705), height: 'h-64 sm:h-72' },
  { id: 'tech-equipment', category: 'technology', label: 'Digital Equipment', alt: 'Advanced dental equipment', image: px(6683392), height: 'h-64 sm:h-72' },

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

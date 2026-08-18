import { clinic } from './clinic';
import { services, type ServiceKey } from './services';
import type { Page } from '../hooks/useNav';

/**
 * The official public address of the website.
 *
 * IMPORTANT: When the custom domain goes live, change ONLY this one line
 * (e.g. 'https://drsaketdentalclinic.com'). Every canonical tag, social
 * share link and the sitemap derive from this value, plus the matching URL
 * inside public/sitemap.xml and public/robots.txt.
 */
export const SITE_URL = 'https://dr-sakets-dental-clinic.vercel.app';

/** Image shown when the site is shared on WhatsApp, Facebook, Google, etc. */
export const OG_IMAGE = `${SITE_URL}/unnamed.webp`;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

const brand = clinic.shortName; // "Dr. Saket's Dental Clinic"

// Keep meta descriptions within the ~160 character range search engines show.
const clip = (text: string, max = 158) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;

const staticSeo: Record<'home' | 'about' | 'braces' | 'gallery' | 'contact', PageSeo> = {
  home: {
    title: `${clinic.name} | Dentist & Orthodontist in Aundh, Pune`,
    description:
      'Dr. Saket\u2019s dental clinic in Aundh, Pune offers braces, clear aligners, dental implants, root canals & smile makeovers. Gentle, patient-first care. Book today.',
    path: '/',
  },
  about: {
    title: `About Dr. Saket Rallabhandi | Orthodontist in Aundh, Pune`,
    description:
      'Meet Dr. Saket Rallabhandi (MDS, F-PFA USA), an orthodontist in Aundh, Pune offering warm, patient-first care with precision smile design and modern dentistry.',
    path: '/about',
  },
  braces: {
    title: `Braces & Orthodontics in Aundh, Pune | ${brand}`,
    description:
      'Braces & orthodontic treatment in Aundh, Pune at Dr. Saket\u2019s Dental Clinic. Gentle, expert care for children, teens and adults. Book a consultation today.',
    path: '/braces',
  },
  gallery: {
    title: `Smile Gallery | ${brand}, Aundh, Pune`,
    description:
      'See real smile transformations at Dr. Saket\u2019s Dental Clinic in Aundh, Pune. Browse our patient gallery and picture your confident, healthy new smile.',
    path: '/gallery',
  },
  contact: {
    title: `Contact & Book an Appointment | ${brand}, Aundh, Pune`,
    description:
      'Visit Dr. Saket\u2019s Dental Clinic in Aundh, Pune. Call +91 99728 04333 to book an appointment. Find our address, clinic hours, directions and WhatsApp booking.',
    path: '/contact',
  },
};

/** Returns the SEO details for the currently active page. */
export function seoForPage(page: Page): PageSeo {
  if (page in services) {
    const service = services[page as ServiceKey];
    return {
      title: `${service.eyebrow} in Aundh, Pune | ${brand}`,
      description: clip(service.subtitle),
      path: `/${page}`,
    };
  }
  return staticSeo[page as keyof typeof staticSeo] ?? staticSeo.home;
}

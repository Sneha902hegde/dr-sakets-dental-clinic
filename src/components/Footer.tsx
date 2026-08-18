import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MapPinned,
} from 'lucide-react';
import { clinic, navLinks } from '../data/clinic';
import { services, type ServiceKey } from '../data/services';

const serviceLinks: { label: string; route: string }[] = [
  { label: 'Orthodontics & Braces', route: '/braces' },
  { label: 'Clear Aligners', route: '/aligners' },
  { label: 'Dental Implants', route: '/dental-implants' },
  { label: 'Root Canal Treatment', route: '/root-canal-treatment' },
  { label: 'Smile Makeover', route: '/smile-makeover' },
  { label: 'Pediatric Dentistry', route: '/pediatric-dentistry' },
];

import { useNav } from '../hooks/useNav';

export default function Footer() {
  const { navigate, navigateToSection } = useNav();

  const go = (to: string) => {
    if (to.startsWith('/#')) {
      navigateToSection(to.slice(2));
    } else if (to === '/') {
      navigate('home');
    } else if (to === '/about') {
      navigate('about');
    } else if (to === '/gallery') {
      navigate('gallery');
    } else if (to === '/contact') {
      navigate('contact');
    } else if (to.slice(1) in services) {
      navigate(to.slice(1) as ServiceKey);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.04]" />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-white/20">
              <img src="/unnamed.webp" alt="" className="h-full w-full object-contain" />
            </span>
            <div className="leading-tight">
              <p className="text-base font-bold text-white">Dr. Saket's Dental</p>
              <p className="text-xs text-primary-300">Orthodontic & Multispeciality</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            Healthy smiles, confident lives. Advanced orthodontic and multispeciality dental
            care in Aundh, Pune led by Dr. Saket Rallabhandi.
          </p>
          {/* Social media placeholders */}
          <div className="mt-6 flex items-center gap-3">
            <a href={clinic.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all hover:bg-primary-600 hover:text-white">
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a href={clinic.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all hover:bg-primary-600 hover:text-white">
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a href={clinic.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all hover:bg-primary-600 hover:text-white">
              <Youtube className="h-4.5 w-4.5" />
            </a>
            <a href={clinic.socials.google} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all hover:bg-primary-600 hover:text-white">
              <MapPinned className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <button onClick={() => go(l.to)} className="text-left text-ink-400 transition-colors hover:text-primary-300">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((s) => (
              <li key={s.route}>
                <button onClick={() => go(s.route)} className="text-left text-ink-400 transition-colors hover:text-primary-300">
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span className="text-ink-400">{clinic.addressShort}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a href={clinic.phoneHref} className="text-ink-400 transition-colors hover:text-primary-300">{clinic.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a href={`mailto:${clinic.email}`} className="text-ink-400 transition-colors hover:text-primary-300">{clinic.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span className="text-ink-400">Mon: By appointment · Tue–Sun: 10 AM–1 PM & 5–9 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-ink-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>Crafted with care for healthy smiles in Aundh, Pune.</p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X, CalendarPlus, ChevronDown } from 'lucide-react';
import { navLinks } from '../data/clinic';
import { services, type ServiceKey } from '../data/services';
import { useNav, type Page } from '../hooks/useNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { page, navigate, navigateToSection } = useNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || page !== 'home';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith('/#')) {
      navigateToSection(to.slice(2));
    } else if (to === '/') {
      navigate('home');
    } else if (to === '/about') {
      navigate('about');
    } else if (to === '/braces') {
      navigate('braces');
    } else if (to === '/gallery') {
      navigate('gallery');
    } else if (to === '/contact') {
      navigate('contact');
    } else if (to.slice(1) in services) {
      navigate(to.slice(1) as ServiceKey);
    }
  };

  const isActive = (to: string) => {
    if (to === '/') return page === 'home';
    if (to === '/about') return page === 'about';
    if (to === '/braces') return page === 'braces';
    if (to === '/gallery') return page === 'gallery';
    if (to === '/contact') return page === 'contact';
    if (to.slice(1) in services) return page === to.slice(1);
    return false;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between py-3.5">
        {/* Logo */}
        <button onClick={() => navigate('home' as Page)} className="group flex items-center gap-3" aria-label="Dr. Saket's Dental Clinic home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink-100 transition-transform duration-300 group-hover:scale-105">
            <img src="/unnamed.webp" alt="" className="h-full w-full object-contain" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.95rem] font-bold tracking-tight text-ink-900">
              Dr. Saket's Orthodontic
            </span>
            <span className="text-[0.7rem] font-medium text-primary-600">
              & Multispeciality Dental Clinic
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.to} className="group relative">
                <button
                  onClick={() => handleNavClick(link.to)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    page === 'braces'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-ink-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[15rem] rounded-2xl bg-white p-2 shadow-card ring-1 ring-ink-100">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <button
                          onClick={() => handleNavClick(child.to)}
                          className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                            page === 'braces'
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-ink-700 hover:bg-primary-50 hover:text-primary-700'
                          }`
                          }
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.to}>
                <button
                  onClick={() => handleNavClick(link.to)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.to)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-ink-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button onClick={() => navigate('contact')} className="btn-primary !px-5 !py-2.5">
            <CalendarPlus className="h-4 w-4" />
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-ink-800 ring-1 ring-ink-200 backdrop-blur lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-[5rem] z-40 bg-ink-900/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="container-page relative z-50 pb-6">
            <div className="animate-fade-up rounded-3xl bg-white p-4 shadow-card ring-1 ring-ink-100">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <li key={link.to}>
                      <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {link.label}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {link.children.map((child) => (
                          <li key={child.to}>
                            <button
                              onClick={() => handleNavClick(child.to)}
                              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                                page === 'braces'
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-ink-700 hover:bg-primary-50 hover:text-primary-700'
                              }`}
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={link.to}>
                      <button
                        onClick={() => handleNavClick(link.to)}
                        className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                      >
                        {link.label}
                      </button>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-3 border-t border-ink-100 pt-4">
                <button onClick={() => { setOpen(false); navigate('contact'); }} className="btn-primary w-full">
                  <CalendarPlus className="h-4 w-4" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

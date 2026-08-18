import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BracesPage from './pages/BracesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import { NavContext, type Page } from './hooks/useNav';
import { useSeo } from './hooks/useSeo';
import { seoForPage } from './data/seo';
import { services, type ServiceKey } from './data/services';

// Map a real URL path (e.g. "/about" or "/dental-implants") to a page.
const pathToPage = (rawPath: string): Page => {
  const path = rawPath.replace(/\/+$/, '') || '/';
  if (path === '/about') return 'about';
  if (path === '/braces') return 'braces';
  if (path === '/gallery') return 'gallery';
  if (path === '/contact') return 'contact';
  const serviceKey = path.replace(/^\//, '') as ServiceKey;
  if (serviceKey in services) return serviceKey;
  return 'home';
};

// Map a page to its clean URL path (e.g. "about" -> "/about").
const pageToPath = (page: Page): string => {
  if (page === 'about') return '/about';
  if (page === 'braces') return '/braces';
  if (page === 'gallery') return '/gallery';
  if (page === 'contact') return '/contact';
  if (page in services) return `/${page}`;
  return '/';
};

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    typeof window !== 'undefined' ? pathToPage(window.location.pathname) : 'home'
  );

  const navigate = useCallback((next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.history.pushState(null, '', pageToPath(next));
  }, []);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      // If the section lives on the contact page (e.g. 'book'), go there first.
      const contactSections = ['book'];
      if (contactSections.includes(sectionId)) {
        setPage('contact');
        window.history.pushState(null, '', `/contact#${sectionId}`);
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }
      if (page !== 'home') {
        setPage('home');
        window.history.pushState(null, '', `/#${sectionId}`);
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.history.pushState(null, '', `/#${sectionId}`);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [page]
  );

  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useSeo(seoForPage(page));

  return (
    <NavContext.Provider value={{ page, navigate, navigateToSection }}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {page === 'about' ? <AboutPage />
            : page === 'braces' ? <BracesPage />
            : page === 'gallery' ? <GalleryPage />
            : page === 'contact' ? <ContactPage />
            : page in services ? <ServicePage serviceKey={page as ServiceKey} />
            : <HomePage />}
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </NavContext.Provider>
  );
}

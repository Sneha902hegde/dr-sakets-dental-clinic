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
import { services, type ServiceKey } from './data/services';

const hashToPage = (hash: string): Page => {
  if (hash === '#/about') return 'about';
  if (hash === '#/braces') return 'braces';
  if (hash === '#/gallery') return 'gallery';
  if (hash === '#/contact') return 'contact';
  const serviceKey = hash.replace(/^#\//, '') as ServiceKey;
  if (serviceKey in services) return serviceKey;
  return 'home';
};

const pageToHash = (page: Page): string => {
  if (page === 'about') return '#/about';
  if (page === 'braces') return '#/braces';
  if (page === 'gallery') return '#/gallery';
  if (page === 'contact') return '#/contact';
  if (page in services) return `#/${page}`;
  return '#/';
};

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    typeof window !== 'undefined' ? hashToPage(window.location.hash) : 'home'
  );

  const navigate = useCallback((next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.history.replaceState(null, '', pageToHash(next));
  }, []);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      // If the section lives on the contact page (e.g. 'book'), go there first.
      const contactSections = ['book'];
      if (contactSections.includes(sectionId)) {
        setPage('contact');
        window.history.replaceState(null, '', '#/contact');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }
      if (page !== 'home') {
        setPage('home');
        window.history.replaceState(null, '', '#/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [page]
  );

  useEffect(() => {
    const onPop = () => setPage(hashToPage(window.location.hash));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

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

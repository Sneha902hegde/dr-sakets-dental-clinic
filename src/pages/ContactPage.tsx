import { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactCards from '../components/contact/ContactCards';
import ContactMap from '../components/contact/ContactMap';
import AppointmentForm from '../components/contact/AppointmentForm';
import WhyVisitUs from '../components/contact/WhyVisitUs';
import ContactFAQ from '../components/contact/ContactFAQ';
import EmergencyBanner from '../components/contact/EmergencyBanner';
import FinalCTA from '../components/FinalCTA';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactMap />
      <AppointmentForm />
      <WhyVisitUs />
      <ContactFAQ />
      <EmergencyBanner />
      <FinalCTA
        eyebrow="Begin Your Smile Journey"
        title="Ready to Begin Your Smile Journey?"
        subtitle="Schedule your consultation with Dr. Saket and take the first step toward a healthier, more confident smile."
      />
    </>
  );
}

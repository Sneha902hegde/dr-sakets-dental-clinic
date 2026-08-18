import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedTreatments from '../components/FeaturedTreatments';
import MeetYourDoctor from '../components/MeetYourDoctor';
import PatientJourney from '../components/PatientJourney';
import TechnologySterilization from '../components/TechnologySterilization';
import SmileGallery from '../components/SmileGallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <WhyChooseUs />
      <FeaturedTreatments />
      <MeetYourDoctor />
      <PatientJourney />
      <TechnologySterilization />
      <SmileGallery />
      <FAQ />
      <Contact />
    </>
  );
}

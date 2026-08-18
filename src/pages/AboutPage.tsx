import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import JourneyTimeline from '../components/about/JourneyTimeline';
import Innovation from '../components/about/Innovation';
import AlignerExpertise from '../components/about/AlignerExpertise';
import Recognition from '../components/about/Recognition';
import Philosophy from '../components/about/Philosophy';
import Expertise from '../components/about/Expertise';
import WhyTrust from '../components/about/WhyTrust';
import Memberships from '../components/about/Memberships';
import BeyondDentistry from '../components/about/BeyondDentistry';
import AboutCTA from '../components/about/AboutCTA';
import Contact from '../components/Contact';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <JourneyTimeline />
      <Innovation />
      <AlignerExpertise />
      <Recognition />
      <Philosophy />
      <Expertise />
      <WhyTrust />
      <Memberships />
      <BeyondDentistry />
      <AboutCTA />
      <Contact />
    </>
  );
}

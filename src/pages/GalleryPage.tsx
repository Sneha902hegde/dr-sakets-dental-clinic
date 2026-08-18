import { useEffect } from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryCTA from '../components/gallery/GalleryCTA';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
    </>
  );
}

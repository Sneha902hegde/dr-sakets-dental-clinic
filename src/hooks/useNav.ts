import { createContext, useContext } from 'react';

export type Page =
  | 'home'
  | 'about'
  | 'braces'
  | 'gallery'
  | 'contact'
  | 'aligners'
  | 'dental-implants'
  | 'root-canal-treatment'
  | 'smile-makeover'
  | 'cosmetic-dentistry'
  | 'pediatric-dentistry'
  | 'preventive-dentistry'
  | 'crowns-and-bridges'
  | 'dentures'
  | 'gum-treatment'
  | 'wisdom-tooth-removal'
  | 'full-mouth-rehabilitation';

export type NavContextValue = {
  page: Page;
  navigate: (page: Page) => void;
  navigateToSection: (sectionId: string) => void;
};

export const NavContext = createContext<NavContextValue>({
  page: 'home',
  navigate: () => {},
  navigateToSection: () => {},
});

export const useNav = () => useContext(NavContext);

import { useNav } from '../hooks/useNav';

/** Navigate to a section hash on the home page (works from any page). */
export function useSectionNav() {
  const { navigateToSection } = useNav();
  return (hash: string) => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    navigateToSection(id);
  };
}

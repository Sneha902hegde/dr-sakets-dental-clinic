/** Smooth-scroll to an element on the current page by id. */
export function useScrollTo() {
  return (hash: string) => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

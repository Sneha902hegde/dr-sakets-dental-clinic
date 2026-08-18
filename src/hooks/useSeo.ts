import { useEffect } from 'react';
import { SITE_URL, OG_IMAGE, type PageSeo } from '../data/seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Keeps the document title, meta description, canonical link and social
 * share tags in sync with the page the visitor is currently viewing.
 */
export function useSeo(seo: PageSeo) {
  useEffect(() => {
    const canonical = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;

    document.title = seo.title;
    upsertMeta('name', 'title', seo.title);
    upsertMeta('name', 'description', seo.description);
    upsertLink('canonical', canonical);

    // Open Graph (WhatsApp, Facebook, LinkedIn)
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', OG_IMAGE);

    // Twitter / X
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);
  }, [seo]);
}

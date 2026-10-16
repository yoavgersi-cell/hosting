import type { Provider } from "@/lib/config";

const ORIGIN = "https://www.thetopwebhosting.com";

// Schema.org Organization entity for a reviewed provider. Linking each page to
// the company it is about (by name, official site and founding date) helps
// search and AI answer engines resolve the entity and cite the page for it.
export function providerEntity(p: Provider): Record<string, unknown> {
  return {
    "@type": "Organization",
    name: p.name,
    ...(p.websiteUrl && { url: p.websiteUrl, sameAs: [p.websiteUrl] }),
    ...(p.foundingYear && { foundingDate: p.foundingYear }),
    logo: `${ORIGIN}${p.logo}`,
  };
}

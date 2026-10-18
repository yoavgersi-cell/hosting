import Link from "next/link";
import { getConfig } from "@/lib/config-store";

// Single-site web hosting footer. Category links are absolute site routes. Popular
// comparisons are resolved from live config, so an entry that isn't a real
// battle is silently dropped (the footer never renders a dead link).
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Reviews",
    links: [
      { label: "Hostinger", href: "/reviews/hostinger" },
      { label: "Bluehost", href: "/reviews/bluehost" },
      { label: "Hosting.com", href: "/reviews/hosting-com" },
      { label: "Domain.com", href: "/reviews/domain-com" },
      { label: "BigRock", href: "/reviews/bigrock" },
      { label: "Network Solutions", href: "/reviews/network-solutions" },
      { label: "UltaHost", href: "/reviews/ultahost" },
      { label: "All Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "How to Choose Web Hosting", href: "/articles/how-to-choose-web-hosting" },
      { label: "What Is Web Hosting?", href: "/articles/what-is-web-hosting" },
      { label: "Web Hosting Cost", href: "/articles/how-much-does-web-hosting-cost" },
      { label: "Renewal Prices Explained", href: "/articles/web-hosting-renewal-prices-explained" },
      { label: "Shared vs VPS vs Cloud", href: "/articles/shared-vs-vps-vs-cloud-hosting" },
      { label: "How to Choose a Host", href: "/articles/how-to-choose-a-web-hosting-provider" },
      { label: "How to Migrate a Website", href: "/articles/how-to-migrate-your-website-to-a-new-host" },
      { label: "All Guides", href: "/articles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Rank", href: "/how-we-rank" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Contact", href: "/contact" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

async function featuredComparisons(): Promise<{ label: string; href: string }[]> {
  try {
    const cfg = await getConfig();
    const nameOf = (id: string) => cfg.providers.find((p) => p.id === id)?.name ?? id;
    return (cfg.battles ?? []).slice(0, 5).map((b) => ({
      label: b.matchupLabel || `${nameOf(b.provider1Id)} vs ${nameOf(b.provider2Id)}`,
      href: `/${b.slug}`,
    }));
  } catch {
    return [];
  }
}

export async function Footer() {
  const comparisons = await featuredComparisons();
  const columns = [
    ...COLUMNS,
    ...(comparisons.length > 0 ? [{ title: "Popular Comparisons", links: comparisons }] : []),
  ];

  return (
    <footer className="mt-auto border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand blurb */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[13px] leading-relaxed text-gray-500">
              <span className="font-bold"><span className="text-[#191919]">The Top</span> <span className="text-[#9B7FEE]">Web Hosting</span></span> is an independent comparison
              publisher for web hosting plans and providers.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-2.5 text-[12px] font-bold uppercase tracking-wider text-[#191919]">{col.title}</h2>
              <nav className="space-y-1.5">
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="block text-[13px] text-gray-500 hover:text-[#6A45C9]">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="mb-4 text-xs text-gray-500">
            <strong className="text-gray-500">Affiliate Disclosure:</strong> The Top Web Hosting may earn a commission
            when you click on links and make a purchase. This does not affect our rankings or reviews. We are
            committed to providing honest, independent comparisons to help you make informed decisions.
          </p>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] text-gray-500">
              &copy; {new Date().getFullYear()} The Top Web Hosting. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-500">
              thetopwebhosting.com is not a web hosting provider. Always check current pricing and renewal terms before buying.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

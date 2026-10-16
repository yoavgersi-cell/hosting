import { BookOpen } from "lucide-react";

// Authoritative outgoing citations, per vertical. Every entry is a real,
// verifiable source (company announcements, filings, the providers' own
// plan and pricing pages) - never invent or approximate a citation. Newest
// regulatory sources are listed first. Rendered as a "Sources" section on
// articles, reviews and comparisons so pages visibly ground their claims.
export interface MedicalSource {
  label: string;
  publisher: string;
  href: string;
}

export const SOURCES_BY_VERTICAL: Record<string, MedicalSource[]> = {
  "web-hosting": [
    {
      label: "Hostinger hosting plans",
      publisher: "Hostinger",
      href: "https://www.hostinger.com/web-hosting",
    },
    {
      label: "Bluehost shared hosting plans",
      publisher: "Bluehost",
      href: "https://www.bluehost.com/hosting/shared",
    },
    {
      label: "Hosting.com web hosting",
      publisher: "Hosting.com",
      href: "https://hosting.com/",
    },
    {
      label: "Domain.com web hosting",
      publisher: "Domain.com",
      href: "https://www.domain.com/hosting",
    },
    {
      label: "BigRock web hosting",
      publisher: "BigRock",
      href: "https://www.bigrock.in/web-hosting",
    },
    {
      label: "Network Solutions web hosting",
      publisher: "Network Solutions",
      href: "https://www.networksolutions.com/",
    },
    {
      label: "UltaHost shared hosting",
      publisher: "UltaHost",
      href: "https://ultahost.com/",
    },
  ],
};

// Compact citation list for the bottom of YMYL content pages. Renders nothing
// for verticals without a curated source list yet.
export function MedicalSources({ vertical }: { vertical: string }) {
  const sources = SOURCES_BY_VERTICAL[vertical];
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-[#6A45C9]" strokeWidth={2} />
        <h2 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#191919]">
          Sources &amp; references
        </h2>
      </div>
      <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
        Ownership facts on this page come from public records and company announcements. Pricing,
        plan and policy details come from each provider&apos;s published information. This content is
        for information only - always confirm current pricing and renewal terms before buying a plan.
      </p>
      <ol className="space-y-2">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
            <span className="shrink-0 font-semibold text-gray-500">{i + 1}.</span>
            <span className="text-gray-600">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#6A45C9] underline underline-offset-2 hover:text-[#4F2F9E]"
              >
                {s.label}
              </a>{" "}
              <span className="text-gray-500">- {s.publisher}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// One-line affiliate disclosure under the byline, above the first affiliate
// link (FTC: clear, conspicuous, before the links). Deliberately compact - the
// "not medical advice" disclaimer lives once at the bottom of these pages
// (SourcesMethodology footer, or the MedicalSources intro below) instead of
// being repeated here.
export function TrustDisclosure({ disclaimerHref }: { disclaimerHref: string }) {
  return (
    <p className="mt-2.5 max-w-[720px] text-[11.5px] leading-[1.55] text-gray-500 sm:mt-3 sm:text-[12px]">
      We may earn a commission from links on this page - it never affects our rankings (
      <a href={disclaimerHref} className="font-medium text-[#6A45C9] hover:underline">
        how we stay objective
      </a>
      ).
    </p>
  );
}

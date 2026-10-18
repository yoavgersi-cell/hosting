import { REVIEWERS, reviewerDisplayName, reviewerPath, reviewerPersonSchema } from "@/data/reviewers";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Award, BookOpen, Search, BarChart3 } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "About The Top Web Hosting - Mission, Team & Methodology" },
  description:
    "How thetopwebhosting.com independently ranks and reviews web hosting providers: our editorial methodology, review process and commitment to unbiased comparisons.",
  alternates: {
    canonical: "https://www.thetopwebhosting.com/about",
  },
};

export default async function AboutPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "thetopwebhosting.com",
    url: "https://www.thetopwebhosting.com",
    employee: [
      ...REVIEWERS.map(reviewerPersonSchema),
      ...experts.map((e) => ({
        "@type": "Person",
        name: e.credentials ? `${e.name}, ${e.credentials}` : e.name,
        jobTitle: e.role,
        description: e.bio,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            About The Top Web Hosting
          </h1>
          <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-gray-500">
            We help bloggers, businesses and first-time site owners make informed decisions
            about web hosting by independently comparing providers on real pricing,
            performance, features and support.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our Mission</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Web hosts advertise eye-catching prices of a few dollars a month - but every provider
            packages its plans differently. Renewal rates, term lengths, backup policies, resource
            limits and checkout upsells vary widely, and the fine print is where most
            disappointment starts.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            The Top Web Hosting exists to simplify this decision. We independently research,
            compare, and review every major provider so you can find the right fit for your
            website, budget, and skills - without spending hours doing the research yourself.
          </p>
        </section>

        {/* What we do - icons grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-[22px] font-bold text-[#191919]">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Search, title: "Research Providers", desc: "We evaluate every major web hosting provider on intro and renewal pricing, performance, features, and support." },
              { icon: BarChart3, title: "Compare Side by Side", desc: "Our comparison tools let you see exactly how providers differ on the factors that matter most to you." },
              { icon: BookOpen, title: "Educate Website Owners", desc: "Our articles and guides help you understand how hosting works, what it really costs, which type you need, and how to switch hosts." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#8A63E8]/5">
                  <Icon className="h-5 w-5 text-[#6A45C9]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1 text-[15px] font-bold text-[#191919]">{title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert review */}
        {REVIEWERS.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Expert review</h2>
          <div className="space-y-3">
            {REVIEWERS.map((r) => (
              <div key={r.slug} className="flex flex-col gap-4 rounded-xl border border-[#E5E5E5] bg-white p-5 sm:flex-row sm:items-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.image.webp} alt={`${r.name}, ${r.jobTitle}`} width={88} height={88} className="h-[88px] w-[88px] shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <p className="text-[16px] font-bold text-[#191919]">{reviewerDisplayName(r)}</p>
                  <p className="text-[13px] text-gray-500">{r.jobTitle} · {r.headline}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{r.shortBio}</p>
                  <p className="mt-3 flex flex-wrap gap-x-4 text-[13.5px] font-semibold">
                    <Link href={reviewerPath(r)} className="text-[#6A45C9] hover:underline">Full profile</Link>
                    <Link href="/editorial-policy" className="text-[#6A45C9] hover:underline">How we review</Link>
                    {r.linkedin && (
                      <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6A45C9] hover:underline">LinkedIn</a>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Editorial team */}
        <ExpertTeam experts={experts} />

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How We Rank Providers</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            Our rankings are based on a weighted evaluation across six core categories.
            We update our assessments regularly as companies change their pricing, plans,
            and renewal terms.
          </p>
          <div className="space-y-4">
            {[
              { category: "Pricing & Value", weight: "25%", desc: "Intro prices and required terms, renewal rates, add-on costs, and how transparent pricing is before checkout." },
              { category: "Performance & Reliability", weight: "20%", desc: "Storage type, caching and web server technology, data center locations, and uptime guarantees." },
              { category: "Features & Inclusions", weight: "20%", desc: "Free domain, SSL, email and backups, storage allowances, control panel and WordPress tools." },
              { category: "Customer Reputation", weight: "15%", desc: "Trustpilot ratings, complaint patterns, ownership and years in business." },
              { category: "Support", weight: "10%", desc: "24/7 chat and phone availability, response quality, knowledge base and free migrations." },
              { category: "Flexibility & Terms", weight: "10%", desc: "Hosting types to grow into, billing options, and money-back and cancellation terms." },
            ].map(({ category, weight, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="shrink-0 rounded bg-[#CDBDFB] px-2.5 py-1 text-[12px] font-bold text-[#2A1660]">{weight}</span>
                <div>
                  <p className="text-[14px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[13px] text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-[1.75] text-gray-600">
            Want the full picture? Read our detailed{" "}
            <Link href="/how-we-rank" className="font-semibold text-[#6A45C9] hover:underline">
              ranking &amp; review methodology
            </Link>{" "}
            - the factors we score, where our data comes from, and how we pick winners.
          </p>
        </section>

        {/* Editorial standards */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial Standards</h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Independence.</strong> Our editorial team operates
              independently. Provider rankings and reviews are determined by our evaluation criteria,
              not by commercial relationships.
            </p>
            <p>
              <strong className="text-[#191919]">Transparency.</strong> We clearly disclose that some
              providers compensate us through affiliate partnerships. This may affect how providers are
              displayed but does not influence our ratings or review content.
            </p>
            <p>
              <strong className="text-[#191919]">Fact-based.</strong> Our reviews are grounded in each
              provider&apos;s published plans, pricing and terms of service, plus customer feedback -
              not marketing claims.
            </p>
            <p>
              <strong className="text-[#191919]">Regular updates.</strong> We continuously review and
              update our rankings, reviews, and articles as providers change their offerings, prices
              are revised, and the market evolves.
            </p>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Users className="h-8 w-8 shrink-0 text-[#6A45C9]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6</p>
                <p className="text-[12px] text-gray-500">Weighted ranking categories</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Award className="h-8 w-8 shrink-0 text-[#6A45C9]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">{config.providers.length}</p>
                <p className="text-[12px] text-gray-500">Providers independently reviewed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Shield className="h-8 w-8 shrink-0 text-[#6A45C9]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6+</p>
                <p className="text-[12px] text-gray-500">In-depth guides published</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[15px] leading-[1.75] text-gray-600">
              The Top Web Hosting is not a web hosting provider and does not sell hosting directly. The
              information on this site is for general information and comparison purposes only. Web
              hosting prices, features, resource limits and renewal terms vary by provider, plan, term
              length and region, and change over time. The provider&apos;s terms - not our summary -
              determine what you get. Always confirm current pricing before you buy.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[16px] font-bold text-[#191919]">Ready to compare providers?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[44px] items-center justify-center rounded-lg bg-[#CDBDFB] px-6 text-[14px] font-bold text-[#2A1660] transition-colors hover:bg-[#BBA6F8]"
            >
              Compare Providers
            </Link>
            <Link
              href="/reviews"
              className="inline-flex h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-[14px] font-semibold text-[#191919] transition-colors hover:bg-gray-50"
            >
              Read Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Database, ShieldCheck, Scale, Trophy, RefreshCw, Check, X } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LastUpdated } from "@/components/last-updated";
import { CONTENT_LAST_UPDATED } from "@/lib/config";

export const revalidate = 60;

const CANONICAL = "https://www.thetopwebhosting.com/how-we-rank";

export const metadata: Metadata = {
  title: { absolute: "How We Rank Web Hosting Providers | The Top Web Hosting" },
  description:
    "How we rank web hosting providers: the 6 factors we score, where our data comes from, how we verify intro and renewal prices, and how we pick comparison winners.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How We Rank & Review Web Hosting Providers - Our Methodology",
    description:
      "The factors we score, where our data comes from, how we verify accuracy, and how we pick winners in our web hosting comparisons.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "https://www.thetopwebhosting.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const FACTORS = [
  { category: "Pricing & Value", weight: "25%", desc: "Intro prices and the term they require, renewal rates, add-on costs and how transparent pricing is before checkout - measured against what each plan actually includes." },
  { category: "Performance & Reliability", weight: "20%", desc: "Storage type (NVMe vs SSD), web server and caching technology, data center locations, uptime guarantees and any public outage history." },
  { category: "Features & Inclusions", weight: "20%", desc: "Free domain, SSL, email and backups, number of websites, storage allowances, control panel and one-click WordPress tools." },
  { category: "Customer Reputation", weight: "15%", desc: "Trustpilot ratings and volume, recurring complaint patterns, ownership and years in business." },
  { category: "Support", weight: "10%", desc: "24/7 live chat and phone availability, response quality, knowledge base depth and free migration help." },
  { category: "Flexibility & Terms", weight: "10%", desc: "Range of hosting types to grow into (cloud, VPS, dedicated), monthly vs multi-year billing, and money-back and cancellation terms." },
];

const METHOD_FAQS = [
  {
    question: "How often are prices updated?",
    answer:
      "Whenever a provider changes its published rates or plans. Hosting prices depend on the plan, term length, region and current promotion, so every figure on this site is an approximate starting point taken at our last check - always shown with its term and, where known, its renewal rate.",
  },
  {
    question: "Does affiliate status affect scores or rankings?",
    answer:
      "Partnerships can affect how companies are displayed, but never the facts we report - renewal prices, limits, upsells and ratings are stated the same way for partners and non-partners, including mixed or poor customer records.",
  },
  {
    question: "Why do some companies show no customer rating on your pages?",
    answer:
      "Because we could not confirm one, and we never invent or estimate a score. Where no reliable aggregate exists, our pages say so and rely on the provider's published plan details instead.",
  },
  {
    question: "How do you compare pricing between companies?",
    answer:
      "On the same basis wherever possible: a comparable plan tier, the term length the price requires, and the renewal rate that follows. A plan that is cheapest for the first term can be the most expensive over three or four years, so we always show both.",
  },
];

const SOURCES = [
  { icon: Database, title: "The companies' own materials", desc: "Plans, intro and renewal pricing, resource limits and policies come from each provider's website, checkout flow and terms of service - so what you read here matches what you'll see when you buy." },
  { icon: ClipboardCheck, title: "Customer reviews and complaints", desc: "We read Trustpilot and other review platforms to gauge real-world experience - speed, uptime, billing and support quality - not just marketing claims." },
  { icon: Scale, title: "In-house research", desc: "Our editors walk each provider's checkout, compare plans side by side at the same term length, and track how offers and renewal prices change over time." },
  { icon: ShieldCheck, title: "Public records and industry news", desc: "Hosting brands change hands often. We track acquisitions, rebrands, data incidents and policy changes - and report only what we can verify." },
];

export default async function HowWeRankPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How We Rank & Review Web Hosting Providers - Our Methodology",
    description:
      "Our full methodology for ranking and reviewing web hosting providers: the factors we score, where our data comes from, how we verify accuracy, and how we pick winners.",
    url: CANONICAL,
    ...pageReviewSchema("/how-we-rank"),
    publisher: { "@type": "Organization", name: "thetopwebhosting.com", url: "https://www.thetopwebhosting.com" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thetopwebhosting.com" },
      { "@type": "ListItem", position: 2, name: "How We Rank", item: CANONICAL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: METHOD_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How We Rank" }]} />
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            How We Rank &amp; Review Providers
          </h1>
          <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-gray-500">
            Every review and head-to-head comparison on this site is built on the same
            repeatable, price-and-terms-first process. Here&rsquo;s exactly how we evaluate each
            web hosting provider, where our information comes from, and how we keep it accurate.
          </p>
          <LastUpdated date={CONTENT_LAST_UPDATED} className="mt-4" />
          <MedicalReviewBar path="/how-we-rank" className="mt-4 max-w-[760px]" />
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Factors */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">The 6 factors we score</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            We rate every provider on a weighted evaluation across six core categories. The
            weighting reflects what matters most over the life of your website, not just on day one.
          </p>
          <div className="space-y-4">
            {FACTORS.map(({ category, weight, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="shrink-0 rounded bg-[#CDBDFB] px-2.5 py-1 text-[12px] font-bold text-[#2A1660]">{weight}</span>
                <div>
                  <p className="text-[14px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[13px] text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Price verification protocol */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How we verify prices</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Every price on this site comes from each provider&rsquo;s own published rates or checkout,
            and we record four things for each one: the plan tier, the term length the price requires,
            the renewal rate that follows, and the currency or region used. A number is never published
            without its condition.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            When a provider changes its published pricing, we re-verify against its site and every
            affected page - reviews, head-to-heads and cost guides - is revised, with the
            &ldquo;last updated&rdquo; date refreshed so you always know how current a figure is.
          </p>
        </section>

        {/* What moves a score - the published rubric */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">What earns points - and what costs them</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Within the six weighted factors, these are the specific signals that consistently move a
            provider up or down in our evaluations:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.06em] text-emerald-700">
                <Check className="h-4 w-4" strokeWidth={2.5} /> Earns points
              </p>
              <ul className="space-y-2 text-[14px] leading-relaxed text-gray-800">
                <li>Renewal prices shown clearly before checkout</li>
                <li>A large, public customer record (review volume + score)</li>
                <li>Automatic backups and free SSL included on entry plans</li>
                <li>NVMe storage, modern caching and a choice of data centers</li>
                <li>24/7 live support and free site migration</li>
                <li>Clean exit terms: a 30-day+ money-back guarantee and easy cancellation</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.06em] text-amber-700">
                <X className="h-4 w-4" strokeWidth={2.5} /> Costs points
              </p>
              <ul className="space-y-2 text-[14px] leading-relaxed text-gray-800">
                <li>Promotions with conditions buried in the fine print - we publish the condition next to every promo</li>
                <li>No published review aggregate - noted plainly in the review</li>
                <li>Renewal jumps that are hard to find before you pay</li>
                <li>Pre-ticked paid add-ons and aggressive upsells at checkout</li>
                <li>Backups or SSL sold as extras on entry plans</li>
                <li>A weak or mixed published review record - we cite the real number even for partners</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integrity rules - the house rules the content actually runs on */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our review-integrity rules</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="divide-y divide-gray-100 text-[14.5px] leading-[1.75] text-gray-600">
              <p className="p-5"><strong className="text-[#191919]">No invented ratings, ever.</strong> If a provider has no published customer-rating aggregate, our pages say exactly that - we never estimate or fabricate a score. Partner status doesn&rsquo;t change this: we openly discuss a partner&rsquo;s mixed reviews when that&rsquo;s the record.</p>
              <p className="p-5"><strong className="text-[#191919]">Every promo carries its regular rate.</strong> Promotional prices are always published alongside the regular rate and the condition (&ldquo;annual plan only&rdquo;, &ldquo;first year&rdquo;, &ldquo;48-month term&rdquo;), so a discounted headline never hides what you&rsquo;ll actually pay.</p>
              <p className="p-5"><strong className="text-[#191919]">Customer quotes are verified, not scraped.</strong> We quote customer reviews only when we have the real text, name and date as published - never paraphrases presented as quotes, and complaints included alongside praise.</p>
              <p className="p-5"><strong className="text-[#191919]">Feature claims cite the provider.</strong> Resource limits, backup schedules, guarantees and refund terms come from each provider&rsquo;s published plan pages or terms of service - never from ad copy.</p>
              <p className="p-5"><strong className="text-[#191919]">We don&rsquo;t republish what we can&rsquo;t verify.</strong> Claims circulating about providers - regulatory actions, corporate relationships - appear on our pages only after independent verification, no matter who they help or hurt.</p>
            </div>
          </div>
        </section>

        {/* Data sources */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Where our data comes from</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            Our evaluations only carry weight if the underlying information is real. We draw
            on four sources for every company:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SOURCES.map(({ icon: Icon, title, desc }) => (
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

        {/* Accuracy commitment */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How we keep it accurate</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="space-y-4 text-[15px] leading-[1.75] text-gray-600">
              <p>
                <strong className="text-[#191919]">We don&rsquo;t make things up.</strong> Prices,
                plans, limits and policies are taken from each company&rsquo;s own official sources.
                We don&rsquo;t invent figures, name features a provider doesn&rsquo;t offer, or
                attach claims that aren&rsquo;t supported.
              </p>
              <p>
                <strong className="text-[#191919]">We update when providers change.</strong> Pricing
                and offerings in this space move quickly. When a provider changes its plans, we revise
                the affected reviews and comparisons and refresh their &ldquo;last updated&rdquo; date.
              </p>
              <p>
                <strong className="text-[#191919]">We separate fact from experience.</strong> Objective
                details (price, renewal, features) are reported as fact; customer sentiment is
                clearly attributed to reviews; and our own take is presented as editorial analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Scoring */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How scoring works</h2>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            Each provider earns an overall score on a 10-point scale, translated into a plain-English
            label - from <strong className="text-[#191919]">Exceptional</strong> at the top through{" "}
            <strong className="text-[#191919]">Excellent</strong> and{" "}
            <strong className="text-[#191919]">Very Good</strong>. A score reflects the weighted result
            across the six factors above. Transparent pricing, generous included features, and
            consistently positive recent customer feedback move a score up; hidden renewal jumps, paid-only backups,
            or recurring billing and support complaints move it down.
          </p>
        </section>

        {/* Head-to-head winners */}
        <section className="mb-12">
          <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <Trophy className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" strokeWidth={2} />
            <div>
              <h2 className="mb-2 text-[22px] font-bold text-[#191919]">How we pick a winner</h2>
              <p className="text-[15px] leading-[1.75] text-gray-600">
                In a head-to-head comparison we score the two providers category by category -
                pricing, performance, features, support, and customer reputation. The
                provider that wins the majority of categories takes the matchup, and the advantage
                meter reflects how decisive that edge is. We always name the runner-up&rsquo;s genuine
                strengths, because the &ldquo;better&rdquo; provider still depends on what you value most.
              </p>
            </div>
          </div>
        </section>

        {/* Freshness */}
        <section className="mb-12">
          <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <RefreshCw className="mt-0.5 h-6 w-6 shrink-0 text-[#6A45C9]" strokeWidth={2} />
            <div>
              <h2 className="mb-2 text-[22px] font-bold text-[#191919]">Keeping reviews current</h2>
              <p className="text-[15px] leading-[1.75] text-gray-600">
                We continuously monitor provider pricing, plans, policy changes, and recent
                customer reviews, and revise our rankings, reviews, and comparisons as things change.
                Each review and comparison shows when it was last updated.
              </p>
            </div>
          </div>
        </section>

        {/* Independence */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial independence</h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Independent rankings.</strong> Our rankings and
              reviews are determined by the evaluation criteria on this page - not by commercial
              relationships.
            </p>
            <p>
              <strong className="text-[#191919]">Transparent about affiliates.</strong> Some providers
              compensate us through affiliate partnerships when you click through and sign up. This may
              affect how providers are displayed, but it does not influence our scores or the content of
              our reviews. See our{" "}
              <Link href="/disclaimer" className="font-semibold text-[#6A45C9] hover:underline">full disclaimer</Link>.
            </p>
          </div>
        </section>

        {/* Who's behind the reviews */}
        <ExpertTeam experts={experts} />

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[15px] leading-[1.75] text-gray-600">
              thetopwebhosting.com is not a web hosting provider and does not sell hosting directly. The
              information on this site is for general information and comparison purposes only. Prices,
              features, resource limits and renewal terms vary by provider, plan, term length and region, and
              change often. The provider&rsquo;s terms of service determine what you get - confirm current
              pricing before you buy.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Methodology FAQs</h2>
          <div className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {METHOD_FAQS.map((f, i) => (
              <div key={i} className="p-6">
                <h3 className="mb-2 text-[15.5px] font-bold text-[#191919]">{f.question}</h3>
                <p className="text-[14px] leading-[1.75] text-gray-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[16px] font-bold text-[#191919]">See the rankings in action</p>
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
              Read Our Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

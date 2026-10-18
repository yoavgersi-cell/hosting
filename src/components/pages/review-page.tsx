import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Users, Clock, Shield, Star, ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { latestUpdate, VERTICALS, NOINDEX_WL_REVIEW_SLUGS } from "@/lib/config";
import {
  type SiteContext,
  canonicalUrl,
  hubLink,
} from "@/lib/site-context";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProviderCta } from "@/components/provider-cta";
import { TrustpilotCarousel } from "@/components/trustpilot-carousel";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { LastUpdated } from "@/components/last-updated";
import { PromoPopup } from "@/components/promo-popup";
import { resolvePromoPopup } from "@/lib/promo-popups";
import { TrustDisclosure } from "@/components/medical-sources";
import { SourcesMethodology } from "@/components/sources-methodology";
import { ProductCarousel } from "@/components/product-carousel";
import { notFound } from "next/navigation";
import { REDDIT_COMMUNITY_FEEDBACK as REVIEW_COMMUNITY_FEEDBACK, RedditMark } from "@/components/reddit-community";
import { YoutubeReviewSection } from "@/components/youtube-review";
import { ReadableProse } from "@/components/prose";
import { ProviderAudit } from "@/components/provider-audit";
import { providerEntity } from "@/lib/schema";

// Per-provider SEO overrides, "is X legit?" trust blocks and extra FAQs for
// the web hosting reviews. Everything here is written from facts researched
// for src/lib/seeds/web-hosting.ts - keep it in step when a provider's
// plans, prices or terms change.

const REVIEW_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  hostinger: {
    title: "Hostinger Review (2026): Pricing, Renewals & Is It Worth It?",
    description:
      "Hostinger reviewed: Premium, Business and Cloud plans, intro vs renewal prices, hPanel, backups, speed and whether it's the best budget web host.",
  },
  bluehost: {
    title: "Bluehost Review (2026): Plans, Renewal Prices & WordPress",
    description:
      "Bluehost reviewed: Starter, Business and Pro plans, intro and renewal pricing, free domain, backups, WordPress tools and who it suits best.",
  },
  "hosting-com": {
    title: "Hosting.com Review (2026): The New A2 Hosting, Tested",
    description:
      "Hosting.com (formerly A2 Hosting) reviewed: shared, VPS and WordPress plans, LiteSpeed speed, cPanel, renewal prices and what changed after the rebrand.",
  },
  "domain-com": {
    title: "Domain.com Hosting Review (2026): Plans, Cost & Is It Good?",
    description:
      "Domain.com reviewed: web hosting plans, first-year pricing, paid email, the free domain and whether hosting your site with a registrar makes sense.",
  },
  bigrock: {
    title: "BigRock Review (2026): Hosting Plans, Prices in INR & Support",
    description:
      "BigRock reviewed: Linux, Windows, WordPress and VPS hosting, INR pricing and renewals, refund rules and who India's popular host suits.",
  },
  "network-solutions": {
    title: "Network Solutions Review (2026): Hosting Plans & Pricing",
    description:
      "Network Solutions reviewed: Starter, Essential and Premium hosting, pricing, what's included, US-only data centers and whether it's worth the price.",
  },
  ultahost: {
    title: "UltaHost Review (2026): NVMe Hosting, Pricing & Is It Legit?",
    description:
      "UltaHost reviewed: shared, WordPress and VPS plans, NVMe storage, cPanel, free backups, global data centers and how it compares to bigger hosts.",
  },
};

// Direct answers for the "Is X legit?" FAQ, built only from researched facts.
const REVIEW_LEGIT: Record<string, { verdict: string; signals: string[] }> = {
  hostinger: {
    verdict:
      "Yes - Hostinger is a real, independent hosting company founded in 2004 in Lithuania and one of the most-reviewed hosts on Trustpilot. Its lowest prices require a long prepaid term and renew at a much higher rate, and it trimmed some storage and email allowances in 2025, so check the current plan details before you buy.",
    signals: ["In business since 2004", "In-house hPanel control panel", "Data centers in North America, Europe, South America and Asia"],
  },
  bluehost: {
    verdict:
      "Yes - Bluehost has hosted websites since 2003 and is one of the core brands of Newfold Digital, one of the largest web presence companies in the world. It is a long-standing WordPress host. Expect upsells at checkout and renewal prices well above the intro rate.",
    signals: ["Founded 2003", "Owned by Newfold Digital", "Long-time WordPress-focused host"],
  },
  "hosting-com": {
    verdict:
      "Yes - Hosting.com is the new name of A2 Hosting, a US host operating since the early 2000s. World Host Group bought A2 in January 2025 and rebranded it to hosting.com in April 2025; the group also owns FastComet and Rocket.net. Because the rebrand is recent, check current plan names and guarantees on its site.",
    signals: ["Formerly A2 Hosting (early 2000s)", "Part of World Host Group since 2025", "cPanel and LiteSpeed-based plans"],
  },
  "domain-com": {
    verdict:
      "Yes - Domain.com is a long-running domain registrar owned by Newfold Digital, the same parent as Bluehost and Network Solutions. Hosting is a secondary product for it, and email is a paid add-on, so it suits people who want their domain and a simple site in one account.",
    signals: ["Long-running domain registrar", "Owned by Newfold Digital", "30-day money-back guarantee (reported)"],
  },
  bigrock: {
    verdict:
      "Yes - BigRock is one of India's best-known hosting and domain brands. It launched in 2010, was acquired by Endurance International Group in 2014 and is now part of Newfold Digital. Its refund policy only covers eligible first-time purchases, so read it before buying.",
    signals: ["Launched 2010 in India", "Part of Newfold Digital", "INR billing and local support"],
  },
  "network-solutions": {
    verdict:
      "Yes - Network Solutions is one of the oldest names on the internet, founded in 1979 and once the original .com registry operator. It is now owned by Newfold Digital. Its hosting is pricier than budget hosts and some features such as SSL are reserved for higher tiers, so compare plans carefully.",
    signals: ["Founded 1979", "Owned by Newfold Digital", "Domains, email and hosting in one account"],
  },
  ultahost: {
    verdict:
      "Yes - UltaHost is a real, operating host founded around 2018-2019 with NVMe-based shared, VPS and dedicated plans. It is a younger company with less public corporate information than the big brands, and its Trustpilot reviews are mixed, so take advantage of the 30-day money-back window to test it.",
    signals: ["NVMe storage on all plans (reported)", "cPanel on Linux plans", "30-day money-back guarantee"],
  },
};

const REVIEW_EXTRA_FAQS: Record<string, { question: string; answer: string }[]> = {
  hostinger: [
    {
      question: "How much does Hostinger cost after renewal?",
      answer:
        "Hostinger's intro prices (around $2-$3 a month for Premium) require a 48-month prepaid term. Reported renewal rates are around $10.99 a month for Premium and higher for Business and Cloud. Check the renewal price shown at checkout before you pay.",
    },
    {
      question: "Does Hostinger use cPanel?",
      answer:
        "No. Hostinger uses its own hPanel control panel on shared and cloud plans. It covers the same everyday tasks - domains, email, files, databases, WordPress installs and backups - with a simpler interface.",
    },
    {
      question: "Does Hostinger include backups?",
      answer: "Yes. Reported plan details show weekly backups on Premium and daily backups on Business and Cloud plans.",
    },
  ],
  bluehost: [
    {
      question: "What are Bluehost's plan names now?",
      answer:
        "Bluehost renamed its shared plans in 2025 to Starter, Business and Pro. Older articles may still mention Basic, Choice Plus or Online Store.",
    },
    {
      question: "How much does Bluehost cost after the first term?",
      answer:
        "Reported renewal rates for Starter are about $9.99 a month on a 36-month term, $11.99 on a 12-month term and $15.99 month-to-month, with Business and Pro renewing higher. Confirm on Bluehost's site before buying.",
    },
    {
      question: "Is the Bluehost free domain really free?",
      answer: "The domain is free for the first year on 12- and 36-month terms and must be claimed within 90 days. It then renews at the regular domain price.",
    },
  ],
  "hosting-com": [
    {
      question: "Is Hosting.com the same as A2 Hosting?",
      answer:
        "Yes. World Host Group acquired A2 Hosting in January 2025 and rebranded it to hosting.com in April 2025. a2hosting.com now redirects to hosting.com.",
    },
    {
      question: "Does Hosting.com use cPanel?",
      answer:
        "A2 Hosting's shared and managed VPS plans have historically used cPanel, and its faster tiers run LiteSpeed web servers. Check the current plan page to confirm features after the rebrand.",
    },
  ],
  "domain-com": [
    {
      question: "Does Domain.com include email with hosting?",
      answer: "Reportedly not on all plans - professional email is sold as an add-on from about $2.99 per user per month. Factor that into the total cost.",
    },
    {
      question: "Who owns Domain.com?",
      answer: "Domain.com is owned by Newfold Digital, which also owns Bluehost, Network Solutions and BigRock.",
    },
  ],
  bigrock: [
    {
      question: "Does BigRock offer a money-back guarantee?",
      answer:
        "BigRock offers a 30-day money-back guarantee on eligible first-time purchases. Renewals, combo offers, upgrades and add-ons are excluded, so read the refund policy before buying.",
    },
    {
      question: "Who owns BigRock?",
      answer: "BigRock was founded in 2010 as a Directi brand, acquired by Endurance International Group in 2014, and is now part of Newfold Digital.",
    },
  ],
  "network-solutions": [
    {
      question: "Does Network Solutions include an SSL certificate?",
      answer: "According to third-party reviews, a free SSL certificate is only included on Premium and higher tiers. On lower tiers it is a paid add-on.",
    },
    {
      question: "Where are Network Solutions' servers?",
      answer: "Third-party reviews report US-only data centers, which suits US audiences but is less ideal for visitors in Europe or Asia.",
    },
  ],
  ultahost: [
    {
      question: "Is UltaHost good for WordPress?",
      answer:
        "UltaHost offers managed WordPress plans on NVMe storage with cPanel, free SSL and backups (reported). It suits budget WordPress sites; test speed and support during the 30-day money-back period.",
    },
    {
      question: "Where are UltaHost's data centers?",
      answer: "UltaHost advertises a large global network, with third-party sources citing data centers in 15 to 30+ countries. You choose the location at signup.",
    },
  ],
};

export async function reviewMetadata(slug: string, ctx: SiteContext): Promise<Metadata> {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return { title: "Review Not Found" };

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return { title: "Review Not Found" };

  const override = REVIEW_SEO_OVERRIDES[slug];
  // Providers reviewed in more than one vertical (Ro, Maximus, PeterMD, Hims)
  // would otherwise emit identical <title>s on two URLs - a duplicate-title
  // signal. Their titles carry the vertical name to differentiate.
  const SHARED_REVIEW_PROVIDER_IDS = ["ro", "maximus", "petermd", "hims"];
  const verticalQualifier = SHARED_REVIEW_PROVIDER_IDS.includes(provider.id)
    ? ` ${VERTICALS.find((v) => v.id === ctx.vertical)?.name ?? ""}`.trimEnd() + " "
    : " ";
  const pageTitle =
    override?.title ?? `${provider.name}${verticalQualifier}Review 2026: Plans, Cost & Is It Worth It?`;
  const pageDescription = override?.description ?? review.shortSummary;

  // Operator policy (Aug 2026): provider reviews are indexable by default - the
  // goal is impressions across every vertical first. Exception (Sep 2026): thin
  // filler/unmonetized-brand reviews on weight-loss are noindex,follow so crawl
  // budget on the young hub concentrates on the money pages (see
  // NOINDEX_WL_REVIEW_SLUGS); "follow" keeps link equity flowing.
  const url = canonicalUrl(ctx, `/reviews/${slug}`);
  const isThinNoindex = ctx.vertical === "weight-loss" && NOINDEX_WL_REVIEW_SLUGS.has(slug);

  return {
    // Long review titles render without the " | The Top Web Hosting" suffix (SERP
    // cut-off ~60 characters); short ones keep it.
    title: pageTitle.length > 48 ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    robots: ctx.noindex
      ? { index: false, follow: false }
      : isThinNoindex
        ? { index: false, follow: true }
        : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "article",
    },
  };
}

export async function ReviewPageView({ slug, ctx }: { slug: string; ctx: SiteContext }) {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return notFound();

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return notFound();

  const legit = REVIEW_LEGIT[slug];

  // Site's own editorial rating for this provider (same scoring shown on the
  // homepage), keyed off its ranking position. Surfaced visibly on the page.
  // NOTE: intentionally NOT emitted as review/aggregateRating structured data -
  // re-publishing Trustpilot's aggregate and self-assigned editorial scores as
  // Product rating markup to earn SERP stars is a review-snippet policy risk
  // (and earned ~0 clicks per Search Appearance). The ratings remain visible as
  // page content; only the star-generating schema is removed.
  const rankIndex = config.ranking.providerOrder.indexOf(provider.id);
  const editorial =
    rankIndex >= 0
      ? config.ranking.positions[rankIndex] ??
        config.ranking.positions[config.ranking.positions.length - 1]
      : null;
  const editorialStars = editorial ? editorial.score / 2 : 0;
  const editorialFullStars = Math.floor(editorialStars);
  const editorialHasHalf = editorialStars % 1 >= 0.5;

  // Promo popup for this provider, if it has a registered creative.
  const promoPopup = resolvePromoPopup([provider]);

  // Note: we intentionally do NOT emit an AggregateOffer/price in the schema.
  // A structured price can surface in the SERP rich result and goes stale the
  // moment a provider changes pricing, so on-page pricing tables stay the single
  // source of truth and the search snippet carries no price.

  // Review/AggregateRating Product schema deliberately removed - see the note
  // on the editorial rating above. The visible on-page Trustpilot score and
  // editorial rating stay; we just don't request star rich snippets.

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl(ctx, `/reviews/${slug}`),
    url: canonicalUrl(ctx, `/reviews/${slug}`),
    name: `${provider.name} Review`,
    description: review.shortSummary,
    dateModified: latestUpdate(review.updatedAt),
    isPartOf: { "@type": "WebSite", name: "The Top Web Hosting", url: ctx.origin },
    about: providerEntity(provider),
    author: { "@type": "Organization", name: ctx.brandTeam, url: ctx.origin },
    ...pageReviewSchema(`/reviews/${slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl(ctx, "/") },
      { "@type": "ListItem", position: 2, name: "Reviews", item: canonicalUrl(ctx, "/reviews") },
      { "@type": "ListItem", position: 3, name: `${provider.name} Review`, item: canonicalUrl(ctx, `/reviews/${slug}`) },
    ],
  };

  // FAQ - real, query-shaped questions answered entirely from this review's
  // own researched content (pricing, plans, best-for, verdict). Powers
  // both the visible FAQ section and the FAQPage schema (rich results / PAA).
  const reviewFaqs = [
    { question: `Is ${provider.name} legit?`, answer: legit?.verdict ?? review.reviewIntro },
    { question: `How much does ${provider.name} cost?`, answer: review.pricingSummary },
    review.treatmentOptions?.length
      ? { question: `What plans does ${provider.name} offer?`, answer: `${provider.name} offers ${review.treatmentOptions.join(", ")}.` }
      : null,
    review.bestFor?.length
      ? { question: `Who is ${provider.name} best for?`, answer: `${provider.name} is best for ${review.bestFor.join("; ")}.` }
      : null,
    { question: `Is ${provider.name} worth it?`, answer: review.finalVerdict },
    // Extra FAQs are keyed by provider slug.
    ...(REVIEW_EXTRA_FAQS[slug] ?? []),
  ].filter((f): f is { question: string; answer: string } => !!f && !!f.answer);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: reviewFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const relatedBattles = (config.battles ?? []).filter(
    (b) => b.provider1Id === provider.id || b.provider2Id === provider.id
  );

  // This provider's own question cluster (is-X-legit / X-cost / X-alternatives)
  // - the highest-intent internal links a review can carry. Rendered only for
  // cluster articles that actually exist in the config.
  const clusterSlugs = [
    { slug: `is-${provider.id}-legit`, label: `Is ${provider.name} legit?` },
    { slug: `${provider.id}-cost`, label: `How much does ${provider.name} cost?` },
    { slug: `${provider.id}-plans`, label: `${provider.name} plans explained` },
    { slug: `${provider.id}-alternatives`, label: `Best ${provider.name} alternatives` },
  ].filter((c) => (config.articles ?? []).some((a) => a.slug === c.slug));

  // Related articles: actually related, not just the first three in the array.
  // Prefer articles that mention this provider (excluding its own cluster,
  // which has a dedicated box below), then fill with the newest guides.
  const clusterSet = new Set(clusterSlugs.map((c) => c.slug));
  const mentions = (a: { slug: string; title: string }) =>
    a.slug.includes(provider.id) || a.title.toLowerCase().includes(provider.name.toLowerCase());
  const nonCluster = (config.articles ?? []).filter((a) => !clusterSet.has(a.slug));
  const relatedArticles = [
    ...nonCluster.filter(mentions),
    ...nonCluster
      .filter((a) => !mentions(a))
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")),
  ].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: hubLink(ctx, "/") },
              { label: "Reviews", href: hubLink(ctx, "/reviews") },
              { label: `${provider.name} Review` },
            ]}
          />

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-[50px] w-[130px] shrink-0 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logo} alt={`${provider.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h1 className="text-[24px] font-bold text-[#191919] sm:text-[28px]">
                  {provider.name} Reviews
                </h1>
                <p className="mt-0.5 text-[14px] text-gray-700">
                  {provider.tagline}
                </p>
                <LastUpdated date={latestUpdate(review.updatedAt)} className="mt-1" />
                {editorial && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < editorialFullStars
                              ? "fill-[#FDB515] text-[#FDB515]"
                              : i === editorialFullStars && editorialHasHalf
                                ? "fill-[#FDB515]/50 text-[#FDB515]"
                                : "fill-gray-300 text-gray-500"
                          )}
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <span className="text-[14px] font-bold text-[#191919]">
                      {editorial.score}/10
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {editorial.label} - our rating
                    </span>
                  </div>
                )}
                {/* Desktop: byline inside the title column. Mobile renders it
                    full-width below the header row instead (see sm:hidden). */}
                <div className="hidden sm:block">
                  <MedicalReviewBar path={`/reviews/${slug}`} className="mt-3 max-w-[760px]" compact />
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <MedicalReviewBar path={`/reviews/${slug}`} schema={false} />
            </div>
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#CDBDFB] px-6 text-[14px] font-bold text-[#2A1660] transition-colors hover:bg-[#BBA6F8] sm:shrink-0"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
          <TrustDisclosure disclaimerHref={hubLink(ctx, "/disclaimer")} />
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">
        {/* Quick summary strip */}
        <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 sm:gap-6">
          {review.trustBadges && review.trustBadges.length > 0 ? (
            review.trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-[13px] text-gray-600">
                <Check className="h-4 w-4 text-emerald-500" strokeWidth={2} />
                {badge}
              </div>
            ))
          ) : (
            <>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Shield className="h-4 w-4 text-[#6A45C9]" strokeWidth={1.5} />
                Published Pricing
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Clock className="h-4 w-4 text-[#6A45C9]" strokeWidth={1.5} />
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Users className="h-4 w-4 text-[#6A45C9]" strokeWidth={1.5} />
                Ongoing Support
              </div>
            </>
          )}
        </div>

        {/* The Bottom Line - the verdict up top, so the answer to "is it worth
            it" doesn't hide at the bottom of the page. */}
        {review.finalVerdict && (
          <div className="mb-8 rounded-2xl border border-[#8A63E8]/20 bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.07em] text-[#6A45C9]">The bottom line</p>
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.8] text-gray-800" />
          </div>
        )}

        {/* This provider's products, shopping-style (weight-loss catalog only) */}
        {ctx.vertical === "weight-loss" && (
          <div className="mb-8">
            <ProductCarousel
              providers={config.providers}
              title={`${provider.name} products & prices`}
              subtitle="Published prices with their conditions - the whole card links to the provider."
              onlyProviderIds={[provider.id]}
              pageType="review"
              pageUrl={canonicalUrl(ctx, `/reviews/${slug}`)}
            />
          </div>
        )}

        {/* Intro */}
        <div className="mb-8">
          <ReadableProse text={review.reviewIntro} paragraphClassName="text-[16px] leading-[1.8] text-gray-600" />
        </div>

        {/* Is [brand] legit? - trust block for the "is X legit" query cluster */}
        {legit && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-emerald-50/50 px-6 py-4">
              <Shield className="h-5 w-5 text-emerald-600" strokeWidth={2} />
              <h2 className="text-[18px] font-bold text-[#191919]">
                Is {provider.name} legit?
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[15px] leading-[1.75] text-gray-600">
                {legit.verdict}
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {legit.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {signal}
                  </li>
                ))}
                {provider.trustpilotRating && provider.trustpilotReviewCount && (
                  <li className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    Rated {provider.trustpilotRating}/5 across {provider.trustpilotReviewCount} Trustpilot reviews
                  </li>
                )}
              </ul>
              <p className="mt-4 text-[12px] leading-relaxed text-gray-500">
                &ldquo;Legitimate&rdquo; here means a real, operating web hosting provider - not a
                guarantee of uptime or performance. What you get depends on your plan. Always
                confirm current pricing and renewal terms with the provider.
              </p>
            </div>
          </div>
        )}

        {/* Key Features + Pricing side by side on desktop */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Section title="Key Features">
            <ul className="space-y-2.5">
              {review.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Plans & Hosting Types">
            <ul className="space-y-2.5">
              {review.treatmentOptions.map((option) => (
                <li key={option} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A63E8]" />
                  {option}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Pricing */}
        <Section title="Pricing">
          {review.pricingPlans && review.pricingPlans.length > 0 && (
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              {review.pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-gray-200 bg-gray-50/60 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[15px] font-bold text-[#191919]">{plan.name}</h4>
                    {plan.cadence && (
                      <span className="rounded-full bg-[#8A63E8]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#6A45C9]">
                        {plan.cadence}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-500">{plan.medication}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-[28px] font-extrabold leading-none text-[#191919]">{plan.price}</span>
                    {plan.unit && <span className="text-[14px] font-semibold text-gray-500">{plan.unit}</span>}
                    {plan.regularPrice && (
                      <span className="text-[15px] font-medium text-gray-500 line-through">{plan.regularPrice}</span>
                    )}
                  </div>
                  {plan.regularPrice && (
                    <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                      Sale price
                    </span>
                  )}
                  {plan.highlights && plan.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {plan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          <ReadableProse text={review.pricingSummary} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
        </Section>

        {/* The The Top Web Hosting audit - verified-facts card. Registry-gated:
            providers whose data isn't fully verified render nothing. */}
        <ProviderAudit providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* How it works */}
        {review.howItWorks && review.howItWorks.length > 0 && (
          <Section title={`How ${provider.name} Works`}>
            <ol className="space-y-4">
              {review.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CDBDFB] text-[13px] font-bold text-[#2A1660]">
                    {i + 1}
                  </div>
                  <div>
                    {step.timing && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#6A45C9]">
                        {step.timing}
                      </span>
                    )}
                    <p className="text-[15px] font-bold text-[#191919]">{step.title}</p>
                    {step.detail && (
                      <p className="mt-0.5 text-[14px] leading-[1.65] text-gray-600">{step.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* Pros & Cons */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2">
            <div className="p-6 sm:border-r sm:border-gray-100">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
                </div>
                Pros
              </h3>
              <ul className="space-y-2.5">
                {review.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-100 p-6 sm:border-t-0">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-red-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                </div>
                Cons
              </h3>
              <ul className="space-y-2.5">
                {review.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={2} />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mb-6 rounded-xl border border-[#8A63E8]/10 bg-[#8A63E8]/[0.03] p-5 text-center sm:p-6">
          <p className="mb-3 text-[16px] font-bold text-[#191919]">
            Interested in {provider.name}?
          </p>
          <p className="mb-4 text-[13px] text-gray-500">
            Visit their site to see plans and pricing for your address.
          </p>
          <ProviderCta
            href={provider.affiliateUrl}
            providerName={provider.name}
            providerSlug={provider.id}
            pageType="review"
            sourceFlow="provider_review"
            className="inline-flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#CDBDFB] px-8 text-[14px] font-bold text-[#2A1660] transition-colors hover:bg-[#BBA6F8]"
          >
            Visit {provider.name}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </ProviderCta>
        </div>

        {/* Best For */}
        <Section title="Who It's Best For">
          <ul className="space-y-2.5">
            {review.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#6A45C9]" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Trustpilot Reviews */}
        {(provider.trustpilotReviews?.length ?? 0) > 0 && (
          <div className="mb-6">
            <TrustpilotCarousel
              providerName={provider.name}
              providerLogo={provider.logo}
              reviews={provider.trustpilotReviews!}
              rating={provider.trustpilotRating}
              reviewCount={provider.trustpilotReviewCount}
            />
          </div>
        )}

        {/* Community feedback - real Reddit threads, rendered Reddit-style.
            Each registry entry names the vertical its threads were captured
            for (legacy entries without one are weight-loss research), so the
            block renders only on the matching vertical. */}
        {REVIEW_COMMUNITY_FEEDBACK[slug] &&
          (REVIEW_COMMUNITY_FEEDBACK[slug].vertical ?? "weight-loss") === ctx.vertical && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <div className="mb-2 flex items-center gap-2.5">
              <RedditMark className="h-7 w-7 shrink-0" />
              <h2 className="text-[20px] font-bold text-[#191919]">
                What Reddit says about {provider.name}
              </h2>
            </div>
            <p className="mb-5 text-[14.5px] leading-relaxed text-gray-700">
              {REVIEW_COMMUNITY_FEEDBACK[slug].intro}
            </p>

            <div className="space-y-4">
              {REVIEW_COMMUNITY_FEEDBACK[slug].threads.map((t, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-[#FCFCFC] p-4 sm:p-5">
                  {/* Post header - the Reddit identity line */}
                  <div className="mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4500] text-[10px] font-bold text-white">
                      r/
                    </span>
                    {t.subreddit ? (
                      <>
                        <span className="font-bold text-[#191919]">{t.subreddit}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">u/{t.author}</span>
                      </>
                    ) : (
                      <span className="font-bold text-[#191919]">u/{t.author}</span>
                    )}
                    {t.age && (
                      <>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">{t.age}</span>
                      </>
                    )}
                  </div>

                  {t.title && (
                    <p className="mb-2 text-[15.5px] font-bold leading-snug text-[#191919]">{t.title}</p>
                  )}

                  <div className="space-y-2">
                    {t.body.map((para, j) => (
                      <p key={j} className="text-[13.5px] leading-[1.7] text-gray-600">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Vote / comment pills - only real counts, never estimates */}
                  {(t.upvotes !== undefined || t.commentCount !== undefined) && (
                    <div className="mt-3 flex items-center gap-2">
                      {t.upvotes !== undefined && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-bold text-gray-600">
                          <ArrowBigUp className="h-4 w-4 text-[#FF4500]" strokeWidth={2} />
                          {t.upvotes}
                          <ArrowBigDown className="h-4 w-4 text-gray-500" strokeWidth={2} />
                        </span>
                      )}
                      {t.commentCount !== undefined && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-gray-600">
                          <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                          {t.commentCount} comments
                        </span>
                      )}
                    </div>
                  )}

                  {/* Replies - threaded with the Reddit comment line */}
                  {t.replies && t.replies.length > 0 && (
                    <div className="mt-3 space-y-3 border-l-2 border-gray-200 pl-4">
                      {t.replies.map((r, j) => (
                        <div key={j}>
                          <div className="mb-1 flex items-center gap-1.5 text-[12px]">
                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gray-300 text-[9px] font-bold uppercase text-white">
                              {r.author.charAt(0)}
                            </span>
                            <span className="font-bold text-gray-800">u/{r.author}</span>
                          </div>
                          <p className="text-[13px] leading-[1.65] text-gray-600">{r.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-gray-100 pt-4 text-[14px] leading-relaxed text-gray-700">
              <span className="font-semibold text-[#191919]">The takeaway: </span>
              {REVIEW_COMMUNITY_FEEDBACK[slug].takeaway}
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-gray-500">
              Excerpts from public Reddit posts, lightly trimmed; vote and comment counts shown as
              captured at the time of review. Reddit is a trademark of Reddit, Inc. and is not
              affiliated with this site.
            </p>
          </div>
        )}

        {/* Independent YouTube review - registry-gated, one real video per
            provider, embedded click-to-load so the iframe never weighs on
            initial load. */}
        <YoutubeReviewSection providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* Final Verdict */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
            <h3 className="text-[18px] font-bold text-[#191919]">Final Verdict</h3>
          </div>
          <div className="p-6">
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#CDBDFB] text-[15px] font-bold text-[#2A1660] transition-colors hover:bg-[#BBA6F8] sm:w-auto sm:px-8"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
        </div>

        {/* FAQ */}
        {reviewFaqs.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
              <h2 className="text-[18px] font-bold text-[#191919]">
                {provider.name} Review: FAQs
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {reviewFaqs.map((f, i) => (
                <div key={i} className="p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-[#191919]">{f.question}</h3>
                  <p className="text-[14px] leading-[1.7] text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Related content */}
        {(relatedBattles.length > 0 || relatedArticles.length > 0) && (
          <div className="mb-6">
            <h3 className="mb-4 text-[18px] font-bold text-[#191919]">Related</h3>
            <div className="space-y-2">
              {relatedBattles.map((battle) => {
                const otherProvider = config.providers.find(
                  (p) => p.id === (battle.provider1Id === provider.id ? battle.provider2Id : battle.provider1Id)
                );
                return (
                  <Link
                    key={battle.slug}
                    href={hubLink(ctx, `/${battle.slug}`)}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#8A63E8]/30 hover:bg-[#8A63E8]/[0.02]"
                  >
                    <span className="text-[#6A45C9]">{provider.name} vs {otherProvider?.name}</span>
                    <span className="ml-auto text-[12px] text-gray-500">Compare</span>
                  </Link>
                );
              })}
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={hubLink(ctx, `/articles/${article.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#8A63E8]/30 hover:bg-[#8A63E8]/[0.02]"
                >
                  <span className="truncate">{article.title}</span>
                  <span className="ml-auto shrink-0 text-[12px] text-gray-500">{article.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Provider question cluster - the review's highest-intent internal links */}
        {clusterSlugs.length > 0 && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <h2 className="mb-1 text-[17px] font-bold text-[#191919]">
              More on {provider.name}
            </h2>
            <p className="mb-4 text-[13.5px] text-gray-500">
              The questions people ask before signing up - answered in depth.
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {clusterSlugs.map((c) => (
                <Link
                  key={c.slug}
                  href={hubLink(ctx, `/articles/${c.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-semibold text-[#6A45C9] transition-colors hover:border-[#8A63E8]/30 hover:bg-[#8A63E8]/[0.02]"
                >
                  <span className="truncate">{c.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        )}

        <SourcesMethodology
          ctx={ctx}
          providers={[{ id: provider.id, name: provider.name }]}
          headingLabel={provider.name}
          kind="review"
        />
      </div>

      {/* Mobile-only promo popup - shown on the provider's own review page when
          it has a registered creative (same once-per-session behavior as on
          comparisons). */}
      {promoPopup && (
        <PromoPopup
          spec={promoPopup}
          href={provider.affiliateUrl}
          position={rankIndex >= 0 ? rankIndex + 1 : undefined}
        />
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-[17px] font-bold text-[#191919]">{title}</h3>
      {children}
    </div>
  );
}

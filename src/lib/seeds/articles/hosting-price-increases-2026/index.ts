import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import { part7 } from "./part7";
import {
  budgets,
  cutCosts,
  extraFaqs,
  ourProviders,
  pricingGlossary,
  providerResponses,
  readNotice,
  timeline,
} from "./part8";
import {
  aiProducts,
  askAboutPricing,
  checkIncrease,
  checklist,
  crawlRatios,
  domainLockIn,
  moreFaqs,
  renewalEconomics,
  robotsTemplate,
  smallHosts,
  tooGoodDeals,
  topBots,
  vpsToManaged,
} from "./part9";

// Trending-topic guide: "Why Web Hosting Is Getting More Expensive in 2026
// (and How to Lock In a Low Price)". Researched October 2026 from market
// research (TrendForce, Counterpoint), provider announcements, Verisign SEC
// filings, IEA, AI company documentation and trade press - sources listed in
// the final section. Question-shaped headings feed FAQPage schema.

const [quickAnswer, whyExpensive, sharedYet, whichTypes] = part1;
const [ram, ssd, willFall] = part2;
const [providers, cheapVps, reachShared] = part3;
const [cpanel, plesk, licenseImpact] = part4;
const [domains, energy] = part5;
const [aiBots, botTypes, botControl, shouldBlock, hiddenWays] = part6;
const [lockIn, prepay, blackFriday, actNow, compareFairly, renewalRaise, outlook2027, ...rest] = part7;
const appendix = rest.slice(-2); // methodology + sources
const faqs = rest.slice(0, -2);

export const hostingPriceIncreases2026: ArticleData = {
  slug: "web-hosting-price-increases-2026",
  title: "Why Web Hosting Is Getting More Expensive in 2026 (and How to Lock In a Low Price)",
  description:
    "Server memory prices surged, Hetzner and OVHcloud raised prices, cPanel and Plesk go up in 2027 and .com domains cost more. What it means for your hosting bill - and how to lock in a low price, including on Black Friday.",
  category: "Buying",
  readTime: "55 min read",
  publishedAt: "2026-10-31",
  updatedAt: "2026-10-31",
  heroColor: "#F3EEFF",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "AI data center demand pushed server memory and SSD prices sharply higher in 2025-2026 - TrendForce forecast a record 90-95% DRAM contract price rise in Q1 2026 alone.",
    "VPS and server providers including Hetzner, OVHcloud, Scaleway and netcup raised prices in 2026; we found no sourced headline increases at major shared hosts such as Hostinger and Bluehost.",
    "cPanel prices rise on 16 December 2026, Plesk and WHMCS on 1 January 2027, and the .com wholesale price rose about 7% on 1 November 2026.",
    "Protect yourself by comparing renewal rates, testing a host before prepaying, locking in good prices for longer terms, renewing domains for multiple years and blocking unwanted AI training bots.",
  ],
  sections: [
    quickAnswer,
    whyExpensive,
    sharedYet,
    whichTypes,
    timeline,
    ram,
    ssd,
    willFall,
    providers,
    cheapVps,
    reachShared,
    vpsToManaged,
    providerResponses,
    smallHosts,
    cpanel,
    plesk,
    licenseImpact,
    domains,
    energy,
    domainLockIn,
    aiProducts,
    aiBots,
    crawlRatios,
    topBots,
    botTypes,
    botControl,
    robotsTemplate,
    shouldBlock,
    hiddenWays,
    renewalEconomics,
    checkIncrease,
    ourProviders,
    budgets,
    lockIn,
    prepay,
    blackFriday,
    tooGoodDeals,
    actNow,
    compareFairly,
    askAboutPricing,
    cutCosts,
    renewalRaise,
    readNotice,
    outlook2027,
    checklist,
    ...faqs,
    ...extraFaqs,
    ...moreFaqs,
    pricingGlossary,
    ...appendix,
  ],
};

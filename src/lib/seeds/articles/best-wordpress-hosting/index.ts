import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import {
  aiSearch,
  botProtection,
  cdnFaq,
  fastThemes,
  hostDown,
  hostingerVsBluehostWp,
  launchTime,
  monitoring,
  planTiers,
  prepayFaq,
  preSalesQuestions,
  reviewHosting,
  sharedVsManagedDecision,
  wpOrgList,
} from "./part7";

// Pillar guide: "Best WordPress Hosting in 2026". Written in parts and
// assembled here in reading order. Question-shaped headings (ending in "?")
// are emitted as FAQPage schema by the article page.

const [quickAnswer, whatIs, comVsOrg, needSpecial, requirements, types, managed] = part1;
const [evaluate, hostinger, bluehost, hostingCom, ultahost, others, featureTable] = part2;
const [whatMakesFast, cachingTypes, webServers, phpWorkers, coreWebVitals, testSpeed, speedUp] = part3;
const [woocommerce, security, backups, stagingUpdates, email, multisite, devFeatures] = part4;
const [cost, yearlyCost, setup, plugins, migrate, upgrade] = part5;
const [useCases, mistakes, ...faqsAndAppendix] = part6;
const appendix = faqsAndAppendix.slice(-2); // glossary + methodology
const faqs = faqsAndAppendix.slice(0, -2);

export const bestWordPressHosting: ArticleData = {
  slug: "best-wordpress-hosting",
  title: "Best WordPress Hosting in 2026: Complete Comparison & Buyer's Guide",
  description:
    "The best WordPress hosting in 2026, compared: Hostinger, Bluehost, Hosting.com, UltaHost and more on price, speed, caching, WooCommerce, backups and support - plus how to choose, set up and test a WordPress host.",
  category: "Comparisons",
  readTime: "55 min read",
  publishedAt: "2026-10-20",
  updatedAt: "2026-10-20",
  heroColor: "#E6DDFD",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "Hostinger is our best-value WordPress host; Bluehost is best for beginners who want phone support; Hosting.com suits speed-focused cPanel users; UltaHost is the budget NVMe pick.",
    "Server-level page caching, NVMe storage, a current PHP 8.x version and a nearby data center matter more for WordPress speed than any plan label.",
    "WooCommerce and membership sites need more CPU, memory and PHP workers because carts, checkout and logged-in pages cannot be cached.",
    "Entry WordPress plans of about $2-$4 a month usually require 24-48 months upfront and renew at roughly $8-$15 a month - compare multi-year totals and included backups.",
  ],
  sections: [
    quickAnswer,
    whatIs,
    comVsOrg,
    needSpecial,
    requirements,
    types,
    managed,
    sharedVsManagedDecision,
    planTiers,
    evaluate,
    hostinger,
    bluehost,
    hostingCom,
    ultahost,
    others,
    featureTable,
    hostingerVsBluehostWp,
    wpOrgList,
    preSalesQuestions,
    whatMakesFast,
    cachingTypes,
    webServers,
    phpWorkers,
    coreWebVitals,
    testSpeed,
    speedUp,
    fastThemes,
    aiSearch,
    woocommerce,
    security,
    botProtection,
    backups,
    stagingUpdates,
    email,
    multisite,
    devFeatures,
    monitoring,
    hostDown,
    cost,
    yearlyCost,
    prepayFaq,
    setup,
    plugins,
    migrate,
    upgrade,
    useCases,
    mistakes,
    ...faqs,
    cdnFaq,
    launchTime,
    reviewHosting,
    ...appendix,
  ],
};

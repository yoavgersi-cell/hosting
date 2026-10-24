import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import {
  bestForWordPress,
  commonMistakes,
  dataCenter,
  extraFaqs,
  fiveYearCost,
  minimumStandard,
  sameCompany,
  sharedVsWordPress,
  speedTips,
  staging,
  testingProtocol,
  vsCloudPlatforms,
  whenToUpgrade,
} from "./part5";

// Pillar guide: "How to Choose Web Hosting in 2026: The Complete Guide".
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page, so keep direct-answer sections phrased as questions.

const [quickAnswer, whatIs, howWorks, types, shared, managedWp, cloudVps, dedicated] = part1;
const [cost, renewals, speed, uptime, security, backups] = part2;
const [panels, domainSslEmail, support, moneyBack, unlimited, ownership, compare] = part3;
const [useCases, checklist, redFlags, signup, migrate, ...faqsAndAppendix] = part4;
// faqsAndAppendix ends with "best in 2026", the glossary and the methodology.
const appendix = faqsAndAppendix.slice(-3);
const faqs = faqsAndAppendix.slice(0, -3);

export const webHostingGuide: ArticleData = {
  slug: "how-to-choose-web-hosting",
  title: "How to Choose Web Hosting in 2026: The Complete Guide",
  description:
    "The complete guide to choosing web hosting: hosting types, real costs after renewal, speed, uptime, security, backups, support, and how Hostinger, Bluehost, Hosting.com and others compare.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-18",
  updatedAt: "2026-10-18",
  heroColor: "#EEE7FF",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "Most new websites only need shared or entry WordPress hosting; move to cloud or managed VPS when you measurably outgrow it.",
    "Intro prices of about $2-$4 a month usually require 24-48 months upfront and renew at roughly $8-$15 a month - compare the total cost over 3-5 years.",
    "Prioritize NVMe storage, server-level caching, a nearby data center, included daily backups, 24/7 support and a 99.9%+ uptime guarantee.",
    "Use the 30-day money-back window as a free trial: install your real site, measure speed, test a backup restore and contact support before committing.",
  ],
  sections: [
    quickAnswer,
    whatIs,
    howWorks,
    types,
    shared,
    managedWp,
    sharedVsWordPress,
    staging,
    cloudVps,
    vsCloudPlatforms,
    dedicated,
    cost,
    fiveYearCost,
    renewals,
    speed,
    speedTips,
    dataCenter,
    uptime,
    security,
    backups,
    panels,
    domainSslEmail,
    sameCompany,
    support,
    moneyBack,
    testingProtocol,
    unlimited,
    ownership,
    minimumStandard,
    compare,
    useCases,
    checklist,
    redFlags,
    commonMistakes,
    signup,
    migrate,
    whenToUpgrade,
    ...faqs,
    ...extraFaqs,
    bestForWordPress,
    ...appendix,
  ],
};

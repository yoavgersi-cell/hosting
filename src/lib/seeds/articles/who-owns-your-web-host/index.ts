import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import {
  askAboutOwnership,
  brandShutdown,
  dealGlossary,
  familyTrees,
  financialHealth,
  history,
  independents,
  keepOrMerge,
  leverage,
  moreFaqs,
  outlook,
  publicCompanies,
  rebrandChecklist,
  regions,
  registrars,
  seoImpact,
  whyPe,
  wordpressImpact,
} from "./part7";

// Industry guide: "Who Owns Your Web Host? Hosting Industry Consolidation
// Explained (2026)". Researched October 2026 from company announcements,
// SEC/exchange filings and industry press (full list in the final section).
// Question-shaped headings (ending in "?") are emitted as FAQPage schema.

const [quickAnswer, whyMatters, howWorks, deals] = part1;
const [bluehost, endurance, netsol, newfoldFormed, newfoldSince] = part2;
const [hostingCom, whg, hostinger, ultahost] = part3;
const [godaddy, ionosTeamBlue, squarespace, cloudDeals, wpEngine, namecheap] = part4;
const [cpanelOwner, cpanelPrices, marketShare] = part5;
const [afterAcquisition, findOwner, protect, shouldChange, ...rest] = part6;
const appendix = rest.slice(-2); // methodology + sources
const faqs = rest.slice(0, -2);

export const whoOwnsYourWebHost: ArticleData = {
  slug: "who-owns-your-web-host",
  title: "Who Owns Your Web Host? Hosting Industry Consolidation Explained (2026)",
  description:
    "Who owns Bluehost, Hosting.com, Hostinger, Network Solutions and other hosting brands? A sourced guide to Newfold Digital, hosting.com group, GoDaddy, IONOS, team.blue and the deals reshaping web hosting - and what it means for you.",
  category: "Industry",
  readTime: "55 min read",
  publishedAt: "2026-10-24",
  updatedAt: "2026-10-24",
  heroColor: "#EEE7FF",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "Newfold Digital (backed by Clearlake Capital) owns Bluehost, HostGator, Network Solutions, Register.com, Domain.com and Crazy Domains, and acquired BigRock via Endurance International Group.",
    "Hosting.com is the former A2 Hosting, acquired by World Host Group in January 2025; the Oakley Capital-backed group now operates as hosting.com group and also owns FastComet and Rocket.net.",
    "Hostinger is independent and privately held; GoDaddy is a public company; cPanel and Plesk are owned by CVC-backed WebPros, whose license price rises affect many hosts.",
    "Acquisitions often lead to rebrands, migrations and new terms over time - keep your domain at a registrar you control and keep independent backups so ownership changes never trap your site.",
  ],
  sections: [
    quickAnswer,
    whyMatters,
    howWorks,
    deals,
    history,
    whyPe,
    leverage,
    bluehost,
    endurance,
    netsol,
    newfoldFormed,
    newfoldSince,
    hostingCom,
    whg,
    hostinger,
    ultahost,
    godaddy,
    ionosTeamBlue,
    squarespace,
    cloudDeals,
    wpEngine,
    namecheap,
    publicCompanies,
    cpanelOwner,
    cpanelPrices,
    marketShare,
    registrars,
    familyTrees,
    regions,
    wordpressImpact,
    afterAcquisition,
    keepOrMerge,
    rebrandChecklist,
    brandShutdown,
    seoImpact,
    findOwner,
    protect,
    shouldChange,
    independents,
    financialHealth,
    askAboutOwnership,
    outlook,
    ...faqs,
    ...moreFaqs,
    dealGlossary,
    ...appendix,
  ],
};

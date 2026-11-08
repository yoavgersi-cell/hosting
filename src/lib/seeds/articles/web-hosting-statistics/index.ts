import type { ArticleData } from "@/lib/config";
import { ai } from "./ai";
import { lessons, method, quickFaqs, sources } from "./closing";
import { byType, dealStats, moreQuickFaqs, priceStats, statsGlossary, trends } from "./extra";
import { intro } from "./intro";
import { market } from "./market";
import { security } from "./security";
import { speed } from "./speed";
import { web } from "./web";

// Statistics hub: "Web Hosting Statistics 2026". Compiled October-November
// 2026 from filings, research firms, measurement projects, security reports
// and industry press (full list in the final section). Every figure carries
// its source and period; figures gathered from secondary citations are
// marked "as reported". Question-shaped headings feed FAQPage schema.

const [keyStats, compiled] = intro;
const [websites, users, domains, wordpress, servers, https, protocols, hostShare] = web;
const [marketSize, cloud, customers] = market;
const [cwv, pageWeight, conversions] = speed;
const [vulns, breaches, bots, ddos, outages, email] = security;
const [aiSearch, crawlRatios, energy, smallBiz, costs] = ai;

export const webHostingStatistics: ArticleData = {
  slug: "web-hosting-statistics",
  title: "Web Hosting Statistics 2026: 150+ Facts & Trends",
  description:
    "The latest web hosting statistics for 2026, with sources: 1.49 billion websites, 411.6 million domains, WordPress market share, hosting market size, Core Web Vitals pass rates, security, bots, outages, AI search and rising hosting costs.",
  seoDescription:
    "Web hosting statistics for 2026: 150+ facts on websites, domains, market size, CMS share, speed, security, outages and AI traffic, each with its source.",
  category: "Industry",
  readTime: "40 min read",
  publishedAt: "2026-11-02",
  updatedAt: "2026-11-02",
  heroColor: "#EEE7FF",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "There are about 1.49 billion websites (Netcraft, July 2026) and 411.6 million registered domains (DNIB, Q3 2026); WordPress powers roughly 40-43% of all sites.",
    "GoDaddy is the largest host by customers (20.5 million); Hostinger reported the fastest growth among major hosts, with revenue up 51% in 2025.",
    "Only 48% of mobile sites pass Core Web Vitals, bots generate about 53% of web traffic, and the average data breach cost a record $4.99 million in 2026.",
    "AI summaries cut Google click rates from 15% to 8% (Pew), while memory prices surged 80-95% in early 2026 - pushing hosting costs up even as intro prices held steady.",
  ],
  sections: [
    keyStats,
    compiled,
    trends,
    websites,
    users,
    domains,
    wordpress,
    servers,
    https,
    protocols,
    hostShare,
    marketSize,
    cloud,
    customers,
    byType,
    priceStats,
    dealStats,
    cwv,
    pageWeight,
    conversions,
    vulns,
    breaches,
    bots,
    ddos,
    outages,
    email,
    aiSearch,
    crawlRatios,
    energy,
    smallBiz,
    costs,
    lessons,
    ...quickFaqs,
    ...moreQuickFaqs,
    statsGlossary,
    method,
    sources,
  ],
};

import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part3b } from "./part3b";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import { part7 } from "./part7";

// Buyer guide: "Best Web Hosting for Small Business". Topic chosen from
// keyword research (November 2026); facts researched the same month -
// sources listed in the final section. Question-shaped headings feed
// FAQPage schema. Renders the ranked top-3 provider cards after section 1.

export const bestWebHostingForSmallBusiness: ArticleData = {
  slug: "best-web-hosting-for-small-business",
  title: "Best Web Hosting for Small Business in 2026: Real Costs, Honest Picks",
  seoTitle: "Best Web Hosting for Small Business (2026): Top Picks",
  description:
    "The best web hosting for small business in 2026, compared on three-year cost, backups, email, security and support - with our top picks, renewal prices, compliance basics and advice for every type of business.",
  seoDescription:
    "We compared small business hosting on 3-year cost, backups, email, security and support. Our top picks, real renewal prices and who should go elsewhere.",
  topProvidersBlock: {
    title: "Our top 3 web hosting providers for small business",
    subtitle: "Ranked on value, reliability, security, ease of use and support - the same cards as our full comparison.",
  },
  category: "Comparisons",
  readTime: "50 min read",
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  heroColor: "#E6DDFD",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "Hostinger is the best value for most small businesses; choose its Unlimited plan for daily backups. Bluehost suits owners who want guided WordPress and phone support; Hosting.com suits cPanel users.",
    "Compare hosts on total cost over three or four years: intro prices need long prepayments, and renewals on our top picks run roughly $10-$17 a month.",
    "Make sure the business owns its domain, hosting account and admin logins, and keep backups that do not live on the same server as the website.",
    "Use a hosted payment page for card payments, aim for WCAG 2.1 AA accessibility, set up SPF, DKIM and DMARC for email, and never put patient data on ordinary shared hosting.",
  ],
  sections: [...part1, ...part2, ...part3, ...part3b, ...part4, ...part5, ...part6, ...part7],
};

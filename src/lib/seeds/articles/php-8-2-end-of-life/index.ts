import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";

// Timely guide: "PHP 8.2 End of Life (31 December 2026)". Researched
// November 2026 from php.net, the PHP wiki, wordpress.org, the WooCommerce
// developer blog, hosts' own documentation and industry coverage - sources
// listed in the final section. Question-shaped headings feed FAQPage schema.

export const php82EndOfLife: ArticleData = {
  slug: "php-8-2-end-of-life",
  title: "PHP 8.2 End of Life: What It Means for Your Website",
  description:
    "PHP 8.2 stops getting security fixes on 31 December 2026. How to check your version, whether to move to PHP 8.3 or 8.4, what hosts like WP Cloud, Hostinger and SiteGround are doing, and how to upgrade WordPress safely.",
  category: "Guides",
  readTime: "19 min read",
  publishedAt: "2026-11-05",
  updatedAt: "2026-11-05",
  heroColor: "#E6DDFD",
  author: "The Top Web Hosting Editorial Team",
  keyTakeaways: [
    "PHP 8.2 receives its last security fixes on 31 December 2026; after that, new vulnerabilities in 8.2 will not be patched.",
    "Roughly a quarter of WordPress sites still ran PHP 8.2 in 2026, and some hosts are removing it early - WP Cloud on 15 December 2026.",
    "Move to PHP 8.3 (supported until end of 2027) or PHP 8.4 (until end of 2028); expect little speed change - the reason to upgrade is security.",
    "Back up, update plugins, test the new version on a staging copy, then switch the live site before your host's deadline.",
  ],
  sections: [...part1, ...part2, ...part3],
};

import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 1: short answer, picks table,
// methodology. The top-3 provider cards render after the first section.
// Researched November 2026; sources listed in the final section.

export const part1: ArticleSection[] = [
  {
    heading: "What is the best web hosting for a small business in 2026?",
    body: `<div class="qa"><strong>Short answer:</strong> For most small businesses, <strong>Hostinger</strong> is the best overall value: very low intro prices, daily backups from its Unlimited plan up, and an easy control panel. <strong>Bluehost</strong> is the better fit if you want a guided WordPress setup and 24/7 phone support. <strong>Hosting.com</strong> (formerly A2 Hosting) suits owners who prefer cPanel and speed-focused plans with daily backups. Whichever you choose, budget on the renewal price, not the intro price, and make sure your business owns its domain.</div>
<p>Most small businesses do not need much from a web host. They need a site that loads quickly on a phone, stays online, keeps customer details safe, sends and receives email reliably, and can be restored if something goes wrong. They also need a bill that does not jump unexpectedly two or three years later. That is a short list, and it is surprisingly easy to get wrong - usually because the comparison was made on a first-month price that only applies to a four-year prepayment.</p>
<p>The stakes are real. According to Clutch's 2025 survey of US small business owners, 83% of small businesses now have a website, up from 64% in 2018. The US Small Business Administration's Office of Advocacy counts more than 36 million small businesses in its 2026 data. For the ones that are online, the website is often the first thing a customer sees after a search or a map listing, and the host is the foundation it sits on.</p>
<h3>Our picks at a glance</h3>
<table>
<thead><tr><th>Host</th><th>Best for</th><th>Reported intro price</th><th>Reported renewal (entry plan)</th><th>Backups</th></tr></thead>
<tbody>
<tr><td><strong>Hostinger</strong></td><td>Best overall value for most small businesses</td><td>About $2.49/mo (Premium, 48-month term)</td><td>About $10.99/mo</td><td>Weekly on Premium; daily on Unlimited and Cloud</td></tr>
<tr><td><strong>Bluehost</strong></td><td>Guided WordPress setup and phone support</td><td>About $3.99/mo (Starter, 36-month term)</td><td>About $9.99/mo on a 36-month term</td><td>Weekly on current shared plans (per Bluehost's page)</td></tr>
<tr><td><strong>Hosting.com</strong></td><td>cPanel users and speed-focused plans</td><td>From about $1.99/mo (Starter, long term)</td><td>Reported at about $9.99-$13.99/mo</td><td>Daily, 30-day retention (reported)</td></tr>
</tbody>
</table>
<p><em>Approximate prices from hosts' pages and third-party pricing checks in October-November 2026, excluding tax. Prices and promotions change often - always confirm the renewal price at checkout.</em></p>
<p>Below the cards you will find how we chose these hosts, a closer look at each one, honest alternatives, a three-year cost breakdown, and practical guidance on email, security, backups, compliance and the kind of business you run.</p>`,
  },
  {
    heading: "How did we evaluate small business hosting?",
    body: `<p>We are an independent comparison site. We may earn a commission when you buy through some links, but that never decides a ranking, and we include providers we do not earn from when they are the better fit. Our full process is described on our <a href="/how-we-rank">how we rank</a> page. For this guide, we weighed what matters specifically to a business rather than a hobby site.</p>
<h3>What we weighed, and why</h3>
<table>
<thead><tr><th>Factor</th><th>Relative weight</th><th>What we looked at</th></tr></thead>
<tbody>
<tr><td>Total cost of ownership</td><td>25%</td><td>Intro price, renewal price, required term length and the cost of business essentials such as backups and email over three to four years</td></tr>
<tr><td>Reliability and backups</td><td>20%</td><td>Uptime commitments, backup frequency and retention, and how easy it is to restore</td></tr>
<tr><td>Security</td><td>15%</td><td>Free SSL, malware scanning, firewall features, account isolation and two-factor login</td></tr>
<tr><td>Ease of use</td><td>15%</td><td>Control panel, website builder or WordPress setup, and how easily a non-technical owner can manage the basics</td></tr>
<tr><td>Support</td><td>15%</td><td>Channels available (chat, phone, tickets), hours and the quality of documentation</td></tr>
<tr><td>Room to grow</td><td>10%</td><td>Upgrade paths to cloud, VPS or higher tiers without changing provider</td></tr>
</tbody>
</table>
<h3>Where our numbers come from</h3>
<ul>
<li><strong>Prices</strong> come from hosts' own pages where we could confirm them, and otherwise from multiple third-party pricing checks dated October-November 2026. Where sources disagree, we say so and quote a range. Hosting prices change constantly, so treat every figure as a snapshot.</li>
<li><strong>Features</strong> such as backup frequency and plan limits come from hosts' published plan pages and support documentation.</li>
<li><strong>Industry statistics</strong> come from named primary sources - Clutch, the SBA, Google, the HTTP Archive, Patchstack, Verizon and others - listed at the end of this guide.</li>
</ul>
<h3>What we did not do</h3>
<p>We did not accept payment for placement, and we did not rank hosts on affiliate commission rates. We also do not claim lab-measured uptime for each host in this guide: independent uptime data is patchy and hard to compare. Instead, we focus on what you can verify yourself - guarantees, backup policies, prices and support channels - and tell you how to monitor your own site.</p>`,
  },
];

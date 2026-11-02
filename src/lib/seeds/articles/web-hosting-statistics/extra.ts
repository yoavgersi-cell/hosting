import type { ArticleSection } from "@/lib/config";

// "Web Hosting Statistics 2026" - trends, prices, ownership/deals, hosting
// types, glossary and additional quick-answer FAQs. Figures repeat sourced
// data used elsewhere in this guide and in the site's other researched guides.

export const trends: ArticleSection = {
  heading: "What are the biggest web hosting trends in 2026, according to the data?",
  body: `<p>Pulling the statistics together, ten trends stand out for 2026 - each backed by the numbers in this guide.</p>
<table>
<thead><tr><th>#</th><th>Trend</th><th>Supporting data</th></tr></thead>
<tbody>
<tr><td>1</td><td>Bots now outnumber humans online</td><td>Bots ~53% of web traffic, bad bots ~40% (Thales/Imperva 2026); AI bot activity up ~300% in 2025 (Akamai)</td></tr>
<tr><td>2</td><td>Hosting input costs rose sharply</td><td>DRAM contract prices forecast up 90-95% in Q1 2026 (TrendForce); Hetzner and OVHcloud price rises; cPanel up again for 2027</td></tr>
<tr><td>3</td><td>AI is reshaping how people find websites</td><td>8% vs 15% click rate with and without AI summaries (Pew); 68% of US Google searches end without a click (SparkToro/Similarweb)</td></tr>
<tr><td>4</td><td>AI products are becoming real hosting revenue</td><td>GoDaddy Airo bookings run rate above $100M (Q3 2026); Hostinger Horizons AI builder 800,000+ customers</td></tr>
<tr><td>5</td><td>Cloudflare keeps expanding its footprint</td><td>Used as a reverse proxy by ~25% of all websites in September 2026, up from ~20.9% in January (W3Techs, as reported)</td></tr>
<tr><td>6</td><td>WordPress remains dominant but is losing share</td><td>~42.4% of websites in March 2026 to ~40.2% in October 2026 (W3Techs, as reported); Wix revenue +13% in 2025</td></tr>
<tr><td>7</td><td>The plugin ecosystem is the main security exposure</td><td>11,334 new WordPress vulnerabilities in 2025, 91% in plugins (Patchstack)</td></tr>
<tr><td>8</td><td>Modern protocols cross key thresholds</td><td>Google's IPv6 measurement passed 50% for the first time in March 2026; HTTP/3 on ~40% of websites (W3Techs, as reported)</td></tr>
<tr><td>9</td><td>Certificates are getting shorter-lived</td><td>Maximum TLS certificate lifetime cut to 200 days in March 2026, heading to 47 days by 2029</td></tr>
<tr><td>10</td><td>Consolidation continues</td><td>Serial acquisitions by hosting.com group; CVC's deal for Namecheap valued at ~$1.5B; Newfold's 2025 debt restructuring</td></tr>
</tbody>
</table>
<p>For deeper analysis of trends 2 and 10, see <a href="/articles/web-hosting-price-increases-2026">why hosting is getting more expensive</a> and <a href="/articles/who-owns-your-web-host">who owns your web host</a>.</p>`,
};

export const priceStats: ArticleSection = {
  heading: "How much does web hosting cost in 2026?",
  body: `<div class="qa"><strong>Short answer:</strong> Entry-level shared hosting is commonly advertised at about <strong>$2-$4 a month</strong> on 24-48 month prepaid terms and typically renews at about <strong>$8-$15 a month</strong>. Managed VPS plans commonly cost $20-$60+ a month, and dedicated servers commonly start around $80 a month. Prices vary by provider, term length and region.</div>
<h3>Reported entry prices at popular hosts</h3>
<table>
<thead><tr><th>Provider</th><th>Reported entry price</th><th>Condition</th><th>Reported renewal</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/hostinger">Hostinger</a> (Premium)</td><td>~$2-$3/mo</td><td>48-month term</td><td>~$10.99/mo</td></tr>
<tr><td><a href="/reviews/bluehost">Bluehost</a> (Starter)</td><td>~$3.99/mo</td><td>36-month term</td><td>$9.99-$15.99/mo by term</td></tr>
<tr><td><a href="/reviews/hosting-com">Hosting.com</a></td><td>~$2-$4/mo</td><td>Long terms</td><td>From ~$10.99/mo</td></tr>
<tr><td><a href="/reviews/ultahost">UltaHost</a> (Starter)</td><td>~$2.99-$3.80/mo</td><td>24-36 month terms</td><td>From ~$5.99/mo</td></tr>
<tr><td><a href="/reviews/domain-com">Domain.com</a></td><td>~$3.75/mo</td><td>First year, annual billing</td><td>Higher at renewal</td></tr>
<tr><td><a href="/reviews/network-solutions">Network Solutions</a></td><td>~$2.99/mo</td><td>Intro, annual billing</td><td>Regular rate after 12 months</td></tr>
</tbody>
</table>
<p><em>Approximate third-party-reported snapshots from 2025-2026; confirm current pricing on each provider's site.</em></p>
<h3>Price statistics worth knowing</h3>
<ul>
<li><strong>Renewal multiple:</strong> renewal rates are commonly <strong>2-4 times</strong> the intro price across the hosts we track.</li>
<li><strong>Domain wholesale price:</strong> $10.97 for .com from 1 November 2026, plus a $0.20 ICANN fee per year.</li>
<li><strong>Control panel licensing:</strong> cPanel Solo rises to $32.99 a month from 16 December 2026; Premier (100 accounts) to $76.99.</li>
<li><strong>Money-back guarantees:</strong> 30 days is the standard among the hosts in our rankings, though terms and exclusions vary.</li>
</ul>
<p>For how to compare total cost, see <a href="/articles/how-much-does-web-hosting-cost">how much web hosting costs</a>.</p>`,
};

export const dealStats: ArticleSection = {
  heading: "What are the biggest deals in the web hosting industry?",
  body: `<p>Consolidation is one of the defining features of the hosting market. These figures come from company announcements and regulatory filings, as covered in our <a href="/articles/who-owns-your-web-host">hosting ownership guide</a>.</p>
<table>
<thead><tr><th>Deal or metric</th><th>Value</th><th>Year</th></tr></thead>
<tbody>
<tr><td>Permira take-private of Squarespace</td><td>About <strong>$7.2 billion</strong></td><td>2024</td></tr>
<tr><td>team.blue valuation in CPP Investments deal</td><td><strong>€4.8 billion</strong> (~20% stake for ~€550M)</td><td>2024</td></tr>
<tr><td>Clearlake acquisition of Endurance International Group (forming Newfold Digital)</td><td>About <strong>$3.0 billion</strong> including debt</td><td>2021</td></tr>
<tr><td>Siris take-private of Web.com</td><td>About <strong>$2 billion</strong></td><td>2018</td></tr>
<tr><td>GoDaddy acquisition of Host Europe Group</td><td>About <strong>€1.7 billion</strong></td><td>2017</td></tr>
<tr><td>CVC majority stake in Namecheap</td><td>Valued at about <strong>$1.5 billion</strong> including debt</td><td>2025</td></tr>
<tr><td>Akamai acquisition of Linode</td><td>About <strong>$900 million</strong></td><td>2022</td></tr>
<tr><td>DigitalOcean acquisition of Cloudways</td><td><strong>$350 million</strong></td><td>2022</td></tr>
<tr><td>Newfold Digital debt (reported)</td><td>About <strong>$3.5 billion</strong></td><td>2025</td></tr>
</tbody>
</table>
<p>Ownership affects pricing, brand changes and infrastructure decisions, so it is worth knowing who stands behind your host.</p>`,
};

export const byType: ArticleSection = {
  heading: "Web hosting statistics by hosting type",
  body: `<table>
<thead><tr><th>Hosting type</th><th>Key statistic</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Shared hosting</td><td>About <strong>37.3%</strong> of web hosting revenue in 2025 (Mordor Intelligence)</td><td>Still the largest segment and the entry point for most websites</td></tr>
<tr><td>E-commerce hosting</td><td>About <strong>34.7%</strong> of 2025 revenue attributed to e-commerce applications (Mordor Intelligence)</td><td>Online stores drive a large share of demand for performance and security</td></tr>
<tr><td>Cloud infrastructure</td><td>About <strong>$143.4 billion</strong> in Q2 2026, +43% year on year (Synergy)</td><td>The fastest-growing layer, driven by AI demand</td></tr>
<tr><td>VPS and dedicated servers</td><td>Price rises of up to ~87-158% at some providers in 2026 (OVHcloud; Hetzner, per Heise)</td><td>The most directly exposed to memory and storage costs</td></tr>
<tr><td>Managed WordPress</td><td>WordPress on ~40-43% of all websites (W3Techs, as reported)</td><td>The largest single platform for managed hosting products</td></tr>
<tr><td>Website builders</td><td>Wix: 6.11M premium subscriptions; Hostinger Horizons: 800,000+ customers</td><td>No-code and AI builders are growing quickly</td></tr>
</tbody>
</table>
<p>Not sure which type you need? Our guide to <a href="/articles/shared-vs-vps-vs-cloud-hosting">shared vs VPS vs cloud hosting</a> explains the differences.</p>`,
};

export const statsGlossary: ArticleSection = {
  heading: "Web hosting statistics glossary",
  body: `<table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Active site</td><td>A website with distinct, regularly changing content - as opposed to parked or placeholder pages</td></tr>
<tr><td>ARR</td><td>Annual recurring revenue - the yearly value of subscriptions</td></tr>
<tr><td>ARPU</td><td>Average revenue per user (or customer)</td></tr>
<tr><td>CAGR</td><td>Compound annual growth rate - average yearly growth over a period</td></tr>
<tr><td>ccTLD</td><td>Country-code top-level domain, such as .de or .uk</td></tr>
<tr><td>Core Web Vitals</td><td>Google's user-experience metrics: LCP, INP and CLS</td></tr>
<tr><td>Crawl-to-referral ratio</td><td>Pages a company's crawlers fetch for each visitor its products send back</td></tr>
<tr><td>DDoS</td><td>Distributed denial-of-service attack - flooding a service with traffic</td></tr>
<tr><td>gTLD</td><td>Generic top-level domain, such as .com or .shop</td></tr>
<tr><td>Hyperscale data center</td><td>A very large data center operated by major cloud and internet companies</td></tr>
<tr><td>PUE</td><td>Power usage effectiveness - total facility power divided by IT equipment power</td></tr>
<tr><td>Reverse proxy</td><td>A service that sits in front of a website, such as a CDN</td></tr>
<tr><td>TTFB</td><td>Time to First Byte - how long a server takes to begin responding</td></tr>
<tr><td>Zero-click search</td><td>A search that ends without a click to any website</td></tr>
</tbody>
</table>`,
};

export const moreQuickFaqs: ArticleSection[] = [
  {
    heading: "How many websites use Cloudflare?",
    body: `<p>About <strong>25% of all websites</strong> use Cloudflare as a reverse proxy, according to W3Techs, which noted the milestone in September 2026 (as reported). That was up from about 20.9% in January 2026. Among websites that use a known reverse proxy service, Cloudflare's share is about 85%.</p>`,
  },
  {
    heading: "What percentage of websites use PHP?",
    body: `<p>About <strong>71%</strong> of websites whose server-side language is known use PHP, according to W3Techs data from July 2026 (as reported). PHP 8 runs on roughly 62-65% of those PHP sites, with PHP 8.3 the most common minor version. WordPress's popularity is the main reason PHP remains so widespread.</p>`,
  },
  {
    heading: "How many new domains are registered each quarter?",
    body: `<p>Verisign processed about <strong>13.1 million</strong> new .com and .net registrations in Q3 2026, up from 10.6 million a year earlier. Across all top-level domains, total registrations grew by about 9.1 million in Q2 2026 to 401.6 million, according to the Domain Name Industry Brief.</p>`,
  },
  {
    heading: "Has IPv6 adoption passed 50%?",
    body: `<p>Briefly, by one measure. Google's statistics showed the share of users reaching Google over IPv6 cross 50% for the first time on 28 March 2026, before fluctuating in the mid-to-high 40s. Other measurements are lower - Cloudflare saw about 40% of requests over IPv6 - so overall adoption is close to, but not consistently above, half.</p>`,
  },
  {
    heading: "How many web hosting companies are there?",
    body: `<p>There is no authoritative count of web hosting companies worldwide. Thousands of providers exist, from global brands to small local hosts, and many brands share a parent company - Newfold Digital, hosting.com group, team.blue and IONOS each operate multiple brands. Measurement firms such as W3Techs track the share of websites hosted by the largest providers rather than the total number of hosts.</p>`,
  },
];

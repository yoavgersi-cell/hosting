import type { ArticleSection } from "@/lib/config";

// Part 2 of "How to Choose Web Hosting in 2026: The Complete Guide".
// Cost and renewals, performance, uptime, security and backups.

export const part2: ArticleSection[] = [
  {
    heading: "How much does web hosting really cost?",
    body: `<div class="qa"><strong>Short answer:</strong> Entry-level shared hosting is commonly advertised at about <strong>$2-$4 a month</strong>, but those prices usually require paying for 24-48 months upfront, and plans then renew at roughly <strong>$8-$15 a month</strong>. Managed WordPress and cloud plans cost more, VPS plans range from a few dollars (unmanaged) to $20-$60+ a month (managed), and dedicated servers commonly start around $80 a month.</div>
<p>The advertised price is the least useful number on a hosting page. What you actually pay depends on four things: the <strong>term length</strong> you commit to, the <strong>renewal rate</strong> after that term, the <strong>plan tier</strong>, and the <strong>add-ons</strong> you accept at checkout. Two plans with the same headline price can differ by hundreds of dollars over four years.</p>
<h3>Reported prices at the providers we track</h3>
<table>
<thead><tr><th>Provider</th><th>Entry price (reported)</th><th>Condition</th><th>Renewal (reported)</th></tr></thead>
<tbody>
<tr><td>Hostinger (Premium)</td><td>~$2-$3/mo</td><td>48-month prepaid term</td><td>~$10.99/mo</td></tr>
<tr><td>Bluehost (Starter)</td><td>~$3.99/mo</td><td>36-month term (~$4.99 on 12 months)</td><td>$9.99 (36-mo), $11.99 (12-mo), $15.99 (monthly)</td></tr>
<tr><td>Hosting.com (shared)</td><td>~$2-$4/mo</td><td>Long terms; sources vary after the 2025 rebrand</td><td>From ~$10.99/mo, higher on top tiers</td></tr>
<tr><td>Domain.com (entry tier)</td><td>~$3.75/mo</td><td>First year, billed annually</td><td>Higher at renewal</td></tr>
<tr><td>BigRock (Linux shared)</td><td>From ~INR 69-199/mo</td><td>Long terms; INR billing</td><td>Roughly double the intro rate</td></tr>
<tr><td>Network Solutions (Starter)</td><td>~$2.99/mo</td><td>Intro, billed annually</td><td>Regular rate after 12 months</td></tr>
<tr><td>UltaHost (Starter)</td><td>~$2.99-$3.80/mo</td><td>Long terms (24-36 months)</td><td>From ~$5.99/mo</td></tr>
</tbody>
</table>
<p><em>All figures are third-party-reported snapshots from 2025-2026, not quotes. Confirm current prices on each provider's site.</em></p>
<h3>A worked example: the true four-year cost</h3>
<p>Imagine two hosts. Host A advertises $2.49 a month on a 48-month term and renews at $10.99. Host B advertises $3.99 a month on a 36-month term and renews at $9.99.</p>
<ul>
<li><strong>Host A over four years:</strong> 48 x $2.49 = about $120, paid upfront. Year five onward: about $132 a year.</li>
<li><strong>Host B over four years:</strong> 36 x $3.99 = about $144 upfront, plus 12 months at $9.99 = about $120 in year four. Total: about $264.</li>
</ul>
<p>Host A is far cheaper over four years - but you pay four years upfront and are locked in for longer. Host B costs more but lets you re-evaluate sooner. Neither answer is wrong; the point is to compare on the same horizon. We walk through more scenarios in <a href="/articles/how-much-does-web-hosting-cost">how much web hosting costs</a>.</p>
<h3>Hidden and recurring costs to budget for</h3>
<ul>
<li><strong>Domain renewal</strong> after the free first year.</li>
<li><strong>Domain privacy</strong> - free at some registrars, paid at others.</li>
<li><strong>Professional email</strong> - included at many hosts, but sold as an add-on at some (Domain.com reportedly charges from about $2.99 per user per month).</li>
<li><strong>Backups</strong> - included on some plans, a paid extra on others (for example, Bluehost's Starter tier reportedly lacks free daily backups).</li>
<li><strong>SSL</strong> - free at most hosts today, but reportedly only included on higher tiers at Network Solutions.</li>
<li><strong>Security and CDN add-ons</strong> - malware removal, premium firewalls and CDNs are common upsells.</li>
<li><strong>Taxes</strong> - VAT, GST or sales tax may be added at checkout depending on your country.</li>
</ul>`,
  },
  {
    heading: "Why are web hosting renewal prices so much higher?",
    body: `<p>Web hosting renewal prices are higher because the advertised price is an <strong>introductory discount</strong> that applies only to your first billing term. When that term ends, the plan renews automatically at the provider's <strong>regular rate</strong>, which is commonly two to four times the intro price. This is standard across the industry, not a trick unique to one host.</p>
<p>The economics are simple: acquiring a customer is expensive (advertising, affiliate commissions, free domains), and hosting customers rarely switch once their site is set up. Hosts therefore compete hard on the first-term price and recover the cost at renewal. Knowing this lets you plan around it rather than be surprised by it.</p>
<h3>How term length changes what you pay</h3>
<table>
<thead><tr><th>Billing choice</th><th>Upfront cost</th><th>Price per month</th><th>Risk</th></tr></thead>
<tbody>
<tr><td>Month-to-month</td><td>Lowest</td><td>Highest (often equal to or above the renewal rate)</td><td>None - leave anytime</td></tr>
<tr><td>12 months</td><td>Moderate</td><td>Discounted</td><td>Low</td></tr>
<tr><td>24-36 months</td><td>Higher</td><td>Lower</td><td>Moderate - locked in if the host disappoints</td></tr>
<tr><td>48 months</td><td>Highest</td><td>Lowest advertised price</td><td>Highest - but discount lasts longest</td></tr>
</tbody>
</table>
<h3>Seven ways to pay less for hosting over time</h3>
<ol>
<li><strong>Compare renewal rates before you buy.</strong> Most hosts show them in the cart or the plan's fine print.</li>
<li><strong>Use the money-back window to test</strong>, then commit to a long term only if you are happy - locking in the intro rate for longer.</li>
<li><strong>Set a calendar reminder</strong> 30-45 days before renewal to compare alternatives.</li>
<li><strong>Ask for a renewal discount.</strong> Some hosts offer one when you contact support or start the cancellation process.</li>
<li><strong>Turn off auto-renewal for add-ons</strong> you no longer need.</li>
<li><strong>Keep your domain at a registrar you choose</strong>, so switching hosts is just a DNS change.</li>
<li><strong>Be ready to migrate.</strong> Many hosts offer free migration; moving is easier than most people think (see <a href="/articles/how-to-migrate-your-website-to-a-new-host">how to migrate your website</a>).</li>
</ol>
<p>For a deeper look, read <a href="/articles/web-hosting-renewal-prices-explained">web hosting renewal prices explained</a>.</p>`,
  },
  {
    heading: "What makes a web host fast?",
    body: `<p>Hosting speed comes down to how quickly the server can build and send each page, and how far that data has to travel. The factors that matter most are <strong>storage type</strong>, <strong>web server software and caching</strong>, <strong>CPU and memory allocation</strong>, <strong>server load</strong>, <strong>data center location</strong> and the use of a <strong>CDN</strong>.</p>
<h3>1. Storage: NVMe vs SSD vs HDD</h3>
<p>Hard disk drives (HDD) are now rare in quality hosting. Solid-state drives (SSD) are standard, and <strong>NVMe SSDs</strong> - which connect over the faster PCIe interface - offer much higher throughput and lower latency than older SATA SSDs. For database-heavy sites like WordPress and WooCommerce, faster storage helps page generation, especially when pages are not cached. UltaHost advertises NVMe on all plans; Hostinger reportedly uses NVMe on its Business and Cloud tiers; Bluehost reports NVMe on its Starter plan.</p>
<h3>2. Web server software and caching</h3>
<p>The software that answers requests matters. <strong>LiteSpeed</strong> and <strong>Nginx</strong> are generally more efficient than a default Apache configuration under heavy traffic, and LiteSpeed pairs with the free LiteSpeed Cache plugin for WordPress. Hosting.com's Turbo tiers, inherited from A2 Hosting, run LiteSpeed on AMD EPYC processors. Whatever the server, <strong>page caching</strong> - storing a ready-made version of each page - is usually the biggest single speed improvement for a WordPress site.</p>
<h3>3. CPU, memory and resource limits</h3>
<p>Even on shared hosting, each account has limits on CPU time, memory and simultaneous processes. Higher tiers usually raise those limits. A host with modern processors and generous limits will stay fast when traffic spikes; a crowded server with tight limits will slow down or show "resource limit reached" errors.</p>
<h3>4. Data center location and latency</h3>
<p>Data travels fast, but distance still adds delay. A site hosted in the US loads more slowly for visitors in Asia than one hosted closer to them. Choose a data center near most of your audience. Hostinger reports data centers across North America, Europe, South America and Asia; UltaHost advertises a wide choice of locations; Network Solutions is reported to use US-only data centers; BigRock suits Indian audiences.</p>
<h3>5. Content delivery networks (CDNs)</h3>
<p>A <strong>CDN</strong> stores copies of your static files (images, scripts, styles) on servers around the world and serves them from the location nearest each visitor. It reduces load on your host and speeds up global delivery. Many hosts include or integrate a CDN; free tiers from major CDN providers also work with almost any host.</p>
<h3>6. PHP version and database tuning</h3>
<p>Running a current, supported PHP version is one of the easiest speed and security wins for WordPress. Good hosts let you switch PHP versions from the control panel and keep databases tuned.</p>
<h3>How to measure speed yourself</h3>
<p>Do not rely on marketing claims. During your money-back period, install your site (or a test copy) and check:</p>
<ul>
<li><strong>Time to First Byte (TTFB)</strong> - how long the server takes to start responding. Google's web.dev guidance treats 0.8 seconds or less as good.</li>
<li><strong>Core Web Vitals</strong> - Google's user-experience metrics: Largest Contentful Paint (LCP, good at 2.5 seconds or less), Interaction to Next Paint (INP, good at 200 milliseconds or less) and Cumulative Layout Shift (CLS, good at 0.1 or less). Hosting most directly affects LCP through server response time.</li>
<li><strong>Performance under load</strong> - test a few pages at different times of day.</li>
</ul>
<p>Free tools such as Google PageSpeed Insights report these metrics. Remember that themes, plugins and images often matter as much as the host itself.</p>`,
  },
  {
    heading: "What uptime guarantee should you look for?",
    body: `<p>Look for a host that guarantees at least <strong>99.9% uptime</strong> and clearly explains what compensation you receive if it misses that target. Uptime is the percentage of time your site is reachable. The difference between 99.9% and 99.99% sounds tiny but is large in practice:</p>
<table>
<thead><tr><th>Uptime guarantee</th><th>Maximum downtime per year</th><th>Per month (approx.)</th></tr></thead>
<tbody>
<tr><td>99%</td><td>~3.65 days (87.6 hours)</td><td>~7.3 hours</td></tr>
<tr><td>99.5%</td><td>~43.8 hours</td><td>~3.65 hours</td></tr>
<tr><td>99.9%</td><td>~8.76 hours</td><td>~43.8 minutes</td></tr>
<tr><td>99.95%</td><td>~4.38 hours</td><td>~21.9 minutes</td></tr>
<tr><td>99.99%</td><td>~52.6 minutes</td><td>~4.4 minutes</td></tr>
</tbody>
</table>
<h3>What uptime guarantees actually promise</h3>
<p>An uptime guarantee is a <strong>service level agreement (SLA)</strong>, not a technical promise that your site will never go down. If the host falls below the guaranteed level in a given month, you can usually request a credit - often a percentage of that month's hosting fee. Read the fine print for three things:</p>
<ul>
<li><strong>Exclusions</strong> - scheduled maintenance, problems caused by your own code, and attacks are commonly excluded.</li>
<li><strong>How credits are claimed</strong> - many hosts require you to request the credit and provide evidence within a set time.</li>
<li><strong>Credit size</strong> - a credit worth a few dollars rarely compensates for lost sales, so the guarantee matters less than the host's real track record.</li>
</ul>
<p>Hostinger and Network Solutions are reported to offer 99.9% uptime guarantees; UltaHost advertises 99.99% (some sources say 99.9%). The best way to judge reliability is to set up a free uptime monitor during your trial period and check independent reviews and status pages for outage history.</p>`,
  },
  {
    heading: "Which security features should a web host include?",
    body: `<p>At minimum, a web host should include a <strong>free SSL/TLS certificate</strong>, <strong>account isolation</strong> on shared servers, a <strong>firewall</strong>, <strong>malware scanning</strong>, <strong>automatic backups</strong> and timely <strong>server software updates</strong>. Better hosts add a web application firewall (WAF), DDoS mitigation, two-factor authentication for your account and WordPress-specific hardening.</p>
<h3>Essential security features</h3>
<table>
<thead><tr><th>Feature</th><th>What it does</th><th>Should it be free?</th></tr></thead>
<tbody>
<tr><td>SSL/TLS certificate</td><td>Encrypts traffic; enables https and the browser padlock</td><td>Yes - free certificates are widely available</td></tr>
<tr><td>Account isolation</td><td>Stops a compromised site affecting neighbours on shared servers</td><td>Yes</td></tr>
<tr><td>Firewall / WAF</td><td>Blocks malicious traffic and common attacks</td><td>Basic protection should be included</td></tr>
<tr><td>Malware scanning</td><td>Detects infected files</td><td>Scanning yes; removal is often paid</td></tr>
<tr><td>DDoS mitigation</td><td>Absorbs floods of fake traffic</td><td>Basic protection usually included</td></tr>
<tr><td>Two-factor authentication</td><td>Protects your hosting account login</td><td>Yes</td></tr>
<tr><td>Automatic backups</td><td>Lets you recover from hacks and mistakes</td><td>Ideally - see next section</td></tr>
</tbody>
</table>
<h3>Your share of the responsibility</h3>
<p>Hosting security is shared. The host protects the server; you protect your site. On WordPress that means keeping core, themes and plugins updated, removing unused plugins, using strong unique passwords with two-factor authentication, and limiting administrator accounts. Most hacked WordPress sites are compromised through outdated plugins or weak passwords, not through the host's servers.</p>
<h3>Watch for SSL upsells</h3>
<p>Free domain-validated certificates are fine for almost every website, including online stores. Be wary of checkout flows that push paid SSL certificates as essential. According to third-party reviews, Network Solutions only includes a free SSL certificate on its Premium tier and above - factor that into the price comparison if you are considering its lower tiers.</p>`,
  },
  {
    heading: "Do web hosts include backups, and are they enough?",
    body: `<p>Many web hosts include automatic backups, but frequency, retention and restore options vary widely - and some entry plans include none at all. Treat host backups as a convenience, not your only safety net: <strong>always keep your own off-site copy</strong> as well.</p>
<h3>What to check in a host's backup policy</h3>
<ul>
<li><strong>Frequency</strong> - daily is the standard to aim for; weekly is acceptable for sites that rarely change.</li>
<li><strong>Retention</strong> - how many days or weeks of backups are kept. Fourteen to thirty days gives you room to recover from problems you notice late, such as a hidden malware infection.</li>
<li><strong>Restore process</strong> - one-click restores from the control panel are far better than opening a support ticket.</li>
<li><strong>Granularity</strong> - can you restore a single file or database, or only the whole account?</li>
<li><strong>Cost</strong> - free, included on higher tiers only, or a paid add-on.</li>
<li><strong>Location</strong> - backups stored on the same server as your site do not protect you from server failure.</li>
</ul>
<h3>Backups at the providers we track</h3>
<table>
<thead><tr><th>Provider</th><th>Reported backup policy</th></tr></thead>
<tbody>
<tr><td>Hostinger</td><td>Weekly on Premium; daily on Business and Cloud</td></tr>
<tr><td>Bluehost</td><td>No free daily backups on Starter (reported); included on Business and above</td></tr>
<tr><td>Hosting.com</td><td>Varies by plan - check the current plan page after the rebrand</td></tr>
<tr><td>Domain.com</td><td>Check the plan page</td></tr>
<tr><td>BigRock</td><td>Check the plan page</td></tr>
<tr><td>Network Solutions</td><td>Check the plan page</td></tr>
<tr><td>UltaHost</td><td>Free backups reported</td></tr>
</tbody>
</table>
<h3>A simple backup routine for any site</h3>
<ol>
<li>Confirm the host's automatic backups are switched on and test one restore during your trial.</li>
<li>Install a reputable backup plugin (for WordPress) or use your control panel to schedule backups to an external location such as cloud storage.</li>
<li>Download a full copy - files and database - at least monthly and before any major update.</li>
<li>Keep at least one copy that is completely separate from your hosting account.</li>
</ol>
<p>The question is not whether you will ever need a backup; it is whether you will have a recent one when you do.</p>`,
  },
];

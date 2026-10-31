import type { ArticleSection } from "@/lib/config";

// Part 3 of "Why Web Hosting Is Getting More Expensive in 2026".
// Provider price increases (VPS, cloud, dedicated).

export const part3: ArticleSection[] = [
  {
    heading: "Which hosting providers raised prices in 2026?",
    body: `<p>The clearest evidence of rising costs comes from infrastructure providers - the companies that rent servers, VPS and cloud instances. Several of the best-known budget providers raised prices in 2026, some more than once. Percentages below come from the providers' own announcements where available, and otherwise from established trade press; exact changes vary by product and region.</p>
<table>
<thead><tr><th>Provider</th><th>When</th><th>What changed (as reported)</th></tr></thead>
<tbody>
<tr><td>Hetzner</td><td>Announced February 2026; effective 1 April 2026</td><td>Cloud server prices up roughly 25-37%, with dedicated servers, storage and load balancers also affected; Hetzner cited hardware and energy costs</td></tr>
<tr><td>Hetzner</td><td>Effective 15 June 2026</td><td>A second round for new orders and rescaled instances; German publication Heise reported average increases of about 99% in Germany and 158% for US servers, with some plans up to about 176%</td></tr>
<tr><td>OVHcloud</td><td>March 2026</td><td>Public Cloud, bare metal and VPS prices up an average of about 9-11% on newer hardware and 2-6% on older hardware</td></tr>
<tr><td>OVHcloud</td><td>Announced August 2026; effective September (new orders) and October (existing hardware)</td><td>Gaming servers up about 87%, other recent servers about 40-59%, and memory upgrade options far more</td></tr>
<tr><td>Scaleway</td><td>Effective 1 June 2026</td><td>Increases on selected compute, GPU, storage, public IP and dedicated server products, citing a hardware crisis in RAM and storage and IP address scarcity</td></tr>
<tr><td>netcup</td><td>March-May 2026</td><td>Reported increases of about 24% on new orders and about 19% on existing contracts</td></tr>
<tr><td>Akamai</td><td>Announced March 2026</td><td>Interim surcharges and higher renewal pricing, citing servers, RAM, SSDs and energy (reported as aimed mainly at its delivery and security business)</td></tr>
<tr><td>IONOS</td><td>2026</td><td>Price adjustments notified to affected customers individually by email; no public percentage</td></tr>
<tr><td>DigitalOcean</td><td>July 2026</td><td>Announced GPU pricing updates; we found no confirmed general increase to standard Droplets</td></tr>
</tbody>
</table>
<p>We found <strong>no sourced 2026 increases</strong> for Vultr, Hostinger, Bluehost, GoDaddy, SiteGround, Namecheap, Cloudways, Kinsta or WP Engine at the time of writing. Absence of an announcement is not a guarantee - check current pricing and any customer emails from your own provider.</p>`,
  },
  {
    heading: "Is the era of cheap VPS hosting over?",
    body: `<p>For the rock-bottom end of the market, it looks that way for now. A May 2026 trade analysis summed up the shift with the headline "the cheap VPS era is over", arguing that AI hardware demand had repriced the market. The providers that raised prices most sharply - Hetzner, OVHcloud, netcup and Scaleway - were exactly the ones developers and small hosting companies relied on for inexpensive servers.</p>
<h3>Why VPS prices moved first</h3>
<ul>
<li><strong>Direct exposure.</strong> A VPS plan sells a fixed amount of memory and storage. When those components double in price, there is little room to absorb it.</li>
<li><strong>Thin margins.</strong> Budget VPS providers competed on price for years, leaving little margin to cushion cost shocks.</li>
<li><strong>Memory-heavy configurations.</strong> Plans with large amounts of RAM saw the biggest increases, as OVHcloud's memory-option changes and Hetzner's second round showed.</li>
</ul>
<h3>What VPS buyers can do</h3>
<ol>
<li><strong>Right-size your server.</strong> Many VPS instances are over-provisioned. Check actual memory and CPU use and choose the smallest plan that comfortably fits.</li>
<li><strong>Understand what triggers new prices.</strong> Hetzner's June 2026 change applied to new orders and to rescaling existing instances - so resizing an older server could move it onto the new price. Read your provider's terms before upgrading.</li>
<li><strong>Consider managed shared or cloud hosting</strong> for simple websites. If you only run a WordPress site, a quality shared or cloud plan may now be better value than a self-managed VPS.</li>
<li><strong>Compare across regions.</strong> Increases differed by location; Hetzner's second round was reported to hit US servers harder than German ones.</li>
<li><strong>Lock in pricing where possible</strong> - some providers honor existing prices for existing contracts or until renewal.</li>
</ol>`,
  },
  {
    heading: "How do server price increases reach shared hosting customers?",
    body: `<p>Most shared hosting customers never rent a server directly, so it is fair to ask why VPS price rises matter to them. The answer is that hosting is a chain:</p>
<ol>
<li><strong>Component makers</strong> sell memory and drives at higher prices.</li>
<li><strong>Server manufacturers and infrastructure providers</strong> pay more and raise their prices.</li>
<li><strong>Web hosts</strong> - large ones that buy hardware directly and smaller ones that rent servers from infrastructure providers - see their costs rise when they expand, replace hardware or renew contracts.</li>
<li><strong>Customers</strong> eventually see some of that cost, usually through renewals, plan changes or add-ons rather than headline prices.</li>
</ol>
<p>Large hosts with their own data centers and bulk purchasing are best placed to delay or soften the impact. Smaller hosts that rent capacity from providers such as Hetzner or OVHcloud feel increases sooner - and some may have to raise prices, cut allowances or sell to larger groups. That is one reason cost pressure tends to accelerate consolidation, a trend we cover in <a href="/articles/who-owns-your-web-host">who owns your web host</a>.</p>
<h3>Timing matters</h3>
<p>Hardware is typically replaced over several years, so the higher costs of 2026 work their way into hosting gradually. That is why trade commentators expect the effect on shared hosting to appear through renewals over 2026-2028 rather than as an overnight jump - and why the renewal price on any plan you buy today deserves careful attention.</p>`,
  },
];

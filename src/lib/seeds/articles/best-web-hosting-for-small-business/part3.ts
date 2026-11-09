import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 3: which type of hosting.

export const part3: ArticleSection[] = [
  {
    heading: "Is shared hosting good enough for a small business?",
    body: `<div class="qa"><strong>Short answer:</strong> Yes, for most small businesses. A well-run shared plan comfortably handles a typical business website with a few thousand visitors a month. Shared hosting starts to struggle with busy online shops, sites that get sudden large traffic spikes, and complex web applications - that is when cloud, VPS or managed hosting earns its higher price.</div>
<p>Shared hosting means your website lives on a server alongside other customers' sites, sharing its processor, memory and storage within set limits. It has a reputation for being slow and unreliable that is mostly out of date. Modern shared plans run on solid-state storage, use server-level caching and isolate accounts from one another. For a brochure site, a local service business or a small blog, the difference between a good shared plan and an expensive server is usually invisible to visitors.</p>
<h3>Shared hosting is usually fine if...</h3>
<ul>
<li>Your site is mainly information: services, about, contact, a blog, a portfolio.</li>
<li>You get up to a few thousand visits a month, or more with good caching.</li>
<li>You take bookings or enquiries through forms or embedded tools.</li>
<li>You run a small shop with a modest catalog and a steady trickle of orders.</li>
</ul>
<h3>Consider something more powerful if...</h3>
<ul>
<li>Your site regularly slows down or hits the resource limits shown in your control panel.</li>
<li>You run promotions, TV or radio ads, or launches that send big bursts of traffic.</li>
<li>Your online store has a large catalog, many logged-in customers or frequent orders.</li>
<li>You need custom server software, specific configurations or root access.</li>
<li>Any downtime would be very expensive and you want stronger performance guarantees.</li>
</ul>
<p>A useful middle step is the top shared tier or an entry "cloud" plan. Hostinger and Hosting.com both sell plans in this space, which keep the simple control panel but give you noticeably more resources. For a deeper explanation of the options, see <a href="/articles/shared-vs-vps-vs-cloud-hosting">shared vs VPS vs cloud hosting</a>.</p>`,
  },
  {
    heading: "When should a small business move to VPS, cloud or managed hosting?",
    body: `<div class="qa"><strong>Short answer:</strong> Move up when your site consistently runs out of resources, when downtime or slowness is costing you real money, or when you need control a shared plan cannot give. Do not move up just because a plan sounds more professional - a bigger server you do not need is money that could go into marketing.</div>
<table>
<thead><tr><th>Hosting type</th><th>What it is</th><th>Who manages the server</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Shared</td><td>Your site shares a server with others, within limits</td><td>The host</td><td>Most small business websites</td></tr>
<tr><td>Cloud (managed, entry level)</td><td>More guaranteed resources, often with the same simple panel</td><td>The host</td><td>Growing sites, small shops, traffic spikes</td></tr>
<tr><td>Managed WordPress</td><td>Hosting tuned and maintained specifically for WordPress</td><td>The host, including WordPress-level tasks</td><td>Businesses that want WordPress without the upkeep</td></tr>
<tr><td>VPS (unmanaged)</td><td>A virtual server with guaranteed resources and full control</td><td>You</td><td>Businesses with technical staff or a developer</td></tr>
<tr><td>VPS (managed)</td><td>A virtual server the host maintains for you</td><td>Mostly the host</td><td>Busier sites that need control without a sysadmin</td></tr>
<tr><td>Dedicated server</td><td>A whole physical server for you</td><td>You or the host, depending on plan</td><td>High-traffic or specialized workloads</td></tr>
</tbody>
</table>
<h3>Signs you have outgrown shared hosting</h3>
<ul>
<li>Your control panel regularly shows CPU, memory or process limits being reached.</li>
<li>Pages slow down noticeably at busy times even after caching and image optimization.</li>
<li>Your host has warned you about resource usage or throttled your account.</li>
<li>You need software, settings or access a shared plan does not allow.</li>
</ul>
<h3>A word of caution on unmanaged VPS</h3>
<p>An unmanaged VPS can look like great value - lots of resources for a modest price - but you become responsible for security updates, firewall configuration, backups and fixing anything that breaks. Unless you or someone on your team is comfortable doing that, a managed VPS or a managed cloud plan is the safer step up.</p>`,
  },
  {
    heading: "Do you need managed WordPress hosting for a business site?",
    body: `<div class="qa"><strong>Short answer:</strong> Not necessarily. Many shared plans from our top picks are already optimized for WordPress, with one-click installs, automatic core updates and caching. Premium managed WordPress hosting is worth it when your site makes enough money that expert support, staging, daily backups and higher performance clearly pay for themselves.</div>
<p>"Managed WordPress hosting" covers a wide range of products. At one end are budget WordPress plans that are really shared hosting with WordPress pre-installed. At the other are premium platforms that handle updates, security, caching and performance tuning, and whose support teams understand WordPress deeply.</p>
<h3>What managed WordPress usually adds</h3>
<ul>
<li>Automatic WordPress core updates, and sometimes plugin updates with testing.</li>
<li>Server-level caching tuned for WordPress.</li>
<li>One-click staging sites.</li>
<li>Daily backups with easy restores.</li>
<li>Security hardening and malware scanning focused on WordPress.</li>
<li>Support staff who can help with WordPress-specific problems.</li>
</ul>
<h3>When it is worth paying for</h3>
<table>
<thead><tr><th>Your situation</th><th>Our suggestion</th></tr></thead>
<tbody>
<tr><td>Simple brochure site, owner updates it occasionally</td><td>A good shared WordPress plan is enough</td></tr>
<tr><td>Site generates regular leads and you have no technical help</td><td>A mid-tier or managed WordPress plan with daily backups and staging</td></tr>
<tr><td>WooCommerce shop with steady sales</td><td>Managed WordPress or a cloud plan, plus a staging site</td></tr>
<tr><td>Agency or developer managing several client sites</td><td>Cloud, VPS or a multi-site managed platform</td></tr>
</tbody>
</table>
<p>For a full comparison of WordPress-focused plans, see our guide to the <a href="/articles/best-wordpress-hosting">best WordPress hosting</a>.</p>`,
  },
];

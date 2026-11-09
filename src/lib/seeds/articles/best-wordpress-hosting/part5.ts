import type { ArticleSection } from "@/lib/config";

// Part 5 of "Best WordPress Hosting in 2026". Pricing and total cost,
// setup, essential plugin categories, migration and upgrading.

export const part5: ArticleSection[] = [
  {
    heading: "How much does WordPress hosting cost?",
    body: `<div class="qa"><strong>Short answer:</strong> Entry-level WordPress hosting is commonly advertised at about <strong>$2-$4 a month</strong> on 24-48 month prepaid terms and renews at roughly <strong>$8-$15 a month</strong>. Cloud and WooCommerce-ready plans typically start higher, managed VPS plans commonly run <strong>$20-$60+ a month</strong>, and premium managed WordPress platforms cost more again.</div>
<p>As with all hosting, the headline price is only the start. What you pay over the life of your site depends on the term you choose, the renewal rate and the add-ons you need.</p>
<h3>Reported WordPress-relevant pricing at the providers we track</h3>
<table>
<thead><tr><th>Provider</th><th>Entry price</th><th>Condition</th><th>Renewal</th><th>Backups on entry plan</th></tr></thead>
<tbody>
<tr><td>Hostinger</td><td>~$2-$3/mo</td><td>48-month term</td><td>~$10.99/mo (Premium)</td><td>Weekly</td></tr>
<tr><td>Bluehost</td><td>~$3.99/mo</td><td>36-month term</td><td>$9.99-$15.99/mo by term</td><td>Not free on Starter</td></tr>
<tr><td>Hosting.com</td><td>~$2-$4/mo</td><td>Long terms</td><td>From ~$10.99/mo</td><td>Check plan</td></tr>
<tr><td>UltaHost</td><td>~$2.99-$3.80/mo</td><td>24-36 months</td><td>From ~$5.99/mo</td><td>Free (reported)</td></tr>
<tr><td>Domain.com</td><td>~$3.75/mo</td><td>First year, annual billing</td><td>Higher</td><td>Check plan</td></tr>
<tr><td>Network Solutions</td><td>~$2.99/mo</td><td>Intro, annual billing</td><td>Regular rate after 12 months</td><td>Check plan</td></tr>
<tr><td>BigRock</td><td>From ~INR 69-199/mo</td><td>Long terms</td><td>~2x intro</td><td>Check plan</td></tr>
</tbody>
</table>
<p><em>Third-party-reported snapshots from 2025-2026. Confirm current prices on each provider's site.</em></p>
<p>Notice the backup column. A plan that looks cheaper can end up costing more once you add a paid backup service - or cost you far more if you skip backups and lose your site. Compare like with like. For a deeper look at how intro and renewal pricing work, read <a href="/articles/web-hosting-renewal-prices-explained">web hosting renewal prices explained</a>.</p>`,
  },
  {
    heading: "What does it cost to run a WordPress website per year?",
    body: `<p>The WordPress software is free, but running a site has several costs. Here is a realistic picture for a typical small site, using broad ranges rather than any single provider's prices.</p>
<table>
<thead><tr><th>Cost item</th><th>Budget approach</th><th>Typical business approach</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Hosting</td><td>~$25-$50/yr on a long intro term</td><td>~$100-$200+/yr at renewal or on higher tiers</td><td>Biggest variable; renewals dominate long term</td></tr>
<tr><td>Domain</td><td>Free in year one with many plans</td><td>Regular registration price each year after</td><td>Check the renewal price of your extension</td></tr>
<tr><td>Theme</td><td>Free theme</td><td>One-time or annual premium theme license</td><td>Many excellent free themes exist</td></tr>
<tr><td>Plugins</td><td>Free plugins</td><td>Annual licenses for premium SEO, forms, backup or security tools</td><td>Licenses usually renew yearly</td></tr>
<tr><td>Email</td><td>Included hosting mailboxes</td><td>Dedicated email service per user</td><td>Some hosts charge for email</td></tr>
<tr><td>Backups</td><td>Included host backups plus a free plugin</td><td>Paid off-site backup service</td><td>Never skip off-site backups for a business</td></tr>
<tr><td>CDN / security</td><td>Free CDN tier</td><td>Paid CDN or security service</td><td>Optional for most small sites</td></tr>
</tbody>
</table>
<p>A simple personal or small business WordPress site can run for well under $100 a year in its first years on a long intro term with free themes and plugins. A business site with premium plugins, dedicated email and higher-tier hosting more commonly costs a few hundred dollars a year. A busy WooCommerce store on a cloud plan or managed VPS costs more, but should also earn more.</p>
<h3>Where people overspend</h3>
<ul>
<li>Buying a high hosting tier "for the future" before the site needs it.</li>
<li>Paying for overlapping premium plugins that do the same job.</li>
<li>Accepting every add-on at checkout, including paid SSL that is not needed.</li>
<li>Letting the hosting plan auto-renew at the regular rate without comparing alternatives.</li>
</ul>`,
  },
  {
    heading: "How do you set up WordPress on a new host?",
    body: `<p>Setting up WordPress on a modern host takes well under an hour. Here is the process step by step.</p>
<ol>
<li><strong>Choose a plan and data center.</strong> Pick the WordPress or shared plan that fits, and the data center closest to your visitors.</li>
<li><strong>Connect your domain.</strong> Claim the free domain if included, or point an existing domain to the host by updating its nameservers or DNS records at your registrar. DNS changes can take from minutes to 24-48 hours to propagate.</li>
<li><strong>Install WordPress.</strong> Use the host's one-click installer or onboarding wizard. Choose a unique administrator username (not "admin") and a strong password, and use an email address you check.</li>
<li><strong>Activate SSL.</strong> Enable the free SSL certificate and make sure your WordPress address and site address use https.</li>
<li><strong>Set the basics.</strong> In Settings, set your site title, tagline, time zone and permalink structure (the "Post name" option creates readable URLs).</li>
<li><strong>Remove what you do not need.</strong> Delete sample content and any pre-installed plugins and themes you will not use.</li>
<li><strong>Choose a theme.</strong> A lightweight, well-maintained theme makes everything faster.</li>
<li><strong>Configure caching.</strong> Enable the host's recommended caching (for LiteSpeed servers, the LiteSpeed Cache plugin).</li>
<li><strong>Set up backups.</strong> Confirm the host's automatic backups are on and add an off-site backup plugin.</li>
<li><strong>Harden security.</strong> Enable two-factor authentication for admins and keep only the plugins you need.</li>
<li><strong>Set up email.</strong> Configure SMTP for WordPress notifications and add SPF, DKIM and DMARC records.</li>
<li><strong>Connect search tools.</strong> Verify the site in Google Search Console and submit your sitemap.</li>
<li><strong>Check Site Health.</strong> Visit Tools → Site Health and resolve any critical issues.</li>
<li><strong>Measure speed.</strong> Run PageSpeed Insights to get a baseline before you add content.</li>
</ol>
<p>With that foundation in place, you can focus on building your pages and content.</p>`,
  },
  {
    heading: "Which plugins does a new WordPress site need?",
    body: `<p>Keep plugins to the minimum that does the job well. Rather than recommending specific products, here are the categories most sites need and what to look for in each.</p>
<table>
<thead><tr><th>Category</th><th>Purpose</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td>Caching</td><td>Serve fast cached pages</td><td>Your host's recommended or server-integrated caching plugin; only one page cache</td></tr>
<tr><td>SEO</td><td>Titles, meta descriptions, sitemaps, schema</td><td>Clean sitemap and schema output without bloat</td></tr>
<tr><td>Backups</td><td>Off-site scheduled backups</td><td>Automatic schedules, external storage, easy restore</td></tr>
<tr><td>Security</td><td>Login protection, firewall, scanning</td><td>Avoid duplicating your host's firewall; enable two-factor authentication</td></tr>
<tr><td>Forms</td><td>Contact and lead forms</td><td>Spam protection and reliable email delivery</td></tr>
<tr><td>SMTP</td><td>Reliable WordPress email</td><td>Works with your email or transactional provider</td></tr>
<tr><td>Image optimization</td><td>Compression and modern formats</td><td>WebP or AVIF conversion; may be included in your caching plugin</td></tr>
<tr><td>Analytics</td><td>Traffic insights</td><td>Lightweight script; consider privacy requirements</td></tr>
</tbody>
</table>
<h3>Plugin hygiene rules</h3>
<ul>
<li>Choose plugins that are actively maintained, compatible with your WordPress version and well reviewed.</li>
<li>Never install nulled (pirated) premium plugins - they are a leading source of malware.</li>
<li>Delete deactivated plugins rather than leaving them installed.</li>
<li>Review your plugin list every few months and remove anything you no longer need.</li>
</ul>`,
  },
  {
    heading: "How do you migrate a WordPress site to a new host?",
    body: `<p>Migrating WordPress means moving two things - the files and the database - and then pointing your domain to the new host. Many hosts will do it for you for free, which is usually the safest option.</p>
<h3>Option 1: free assisted migration</h3>
<p>Ask your new host whether migration is included. You typically provide access to your old host or a backup, and the host's team moves the site and tells you when it is ready to test.</p>
<h3>Option 2: a migration plugin</h3>
<p>WordPress migration plugins package your files and database into a single archive that you import on the new host. This works well for most small and medium sites. Very large sites may hit upload limits on free plugin tiers.</p>
<h3>Option 3: manual migration</h3>
<ol>
<li>Download your files (especially wp-content) via SFTP or the file manager.</li>
<li>Export the database through phpMyAdmin or WP-CLI.</li>
<li>Create a new database and user on the new host, and import the database.</li>
<li>Upload the files and update wp-config.php with the new database details.</li>
<li>If the domain or path changes, run a serialization-safe search-and-replace (for example with WP-CLI) to update URLs.</li>
</ol>
<h3>Switching over safely</h3>
<ul>
<li>Test the site on the new host using a temporary URL or your computer's hosts file before changing DNS.</li>
<li>Lower the DNS TTL a day in advance, then update nameservers or A records.</li>
<li>For stores, schedule the switch at a quiet time and pause order-taking briefly to avoid orders landing on the old server.</li>
<li>Keep the old hosting active for a few days, then cancel.</li>
<li>Reissue SSL, re-enable caching and confirm backups on the new host.</li>
</ul>
<p>For a general walkthrough, see <a href="/articles/how-to-migrate-your-website-to-a-new-host">how to migrate your website to a new host</a>.</p>`,
  },
  {
    heading: "When should you upgrade your WordPress hosting?",
    body: `<p>Upgrade when you have evidence that hosting resources are the bottleneck, not simply because traffic is rising. Optimized, cached WordPress sites can serve a lot of traffic on modest plans.</p>
<h3>Signs your WordPress site has outgrown its plan</h3>
<ul>
<li>Resource-limit warnings or 503/508 errors in your control panel during busy periods.</li>
<li>A slow WordPress admin and slow uncached pages even after optimization.</li>
<li>WooCommerce checkout slowing as orders increase.</li>
<li>High CPU usage traced to legitimate traffic rather than a misbehaving plugin or bots.</li>
<li>Needing features your tier lacks: daily backups, staging, object caching, SSH or more sites.</li>
</ul>
<h3>The typical upgrade path</h3>
<ol>
<li><strong>Higher shared or WordPress tier</strong> - more resources, often daily backups and staging.</li>
<li><strong>Cloud hosting</strong> - dedicated resource allocation with a managed experience.</li>
<li><strong>Managed VPS</strong> - more control and isolation, still with server management handled.</li>
<li><strong>Unmanaged VPS or dedicated</strong> - for technical teams that need full control.</li>
</ol>
<p>Before upgrading, rule out the common culprits: a heavy plugin, uncached pages, bot traffic hammering wp-login.php or search, or WP-Cron running on every request. Fixing those is often cheaper than more hosting.</p>`,
  },
];

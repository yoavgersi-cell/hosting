import type { ArticleSection } from "@/lib/config";

// Part 4 of "Best WordPress Hosting in 2026". WooCommerce, security,
// backups, staging/updates, email, multisite and developer tooling.

export const part4: ArticleSection[] = [
  {
    heading: "What is the best hosting for WooCommerce?",
    body: `<p>The best hosting for WooCommerce combines <strong>strong CPU and memory resources</strong>, <strong>fast NVMe storage</strong>, <strong>object caching</strong>, <strong>daily backups</strong> and <strong>reliable support</strong>. Online stores are far more demanding than blogs because carts, checkout and account pages cannot be served from a page cache - every one of those requests runs PHP and queries the database.</p>
<h3>What a WooCommerce store needs from its host</h3>
<table>
<thead><tr><th>Need</th><th>Why</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td>CPU and PHP workers</td><td>Cart and checkout are uncached</td><td>Higher shared tiers, cloud plans or managed VPS</td></tr>
<tr><td>Memory</td><td>WooCommerce and its extensions use more memory than a blog</td><td>A generous PHP memory limit (stores commonly need 256 MB or more)</td></tr>
<tr><td>Fast database storage</td><td>Orders, products and sessions are database-heavy</td><td>NVMe SSDs</td></tr>
<tr><td>Object caching</td><td>Reduces repeated database queries</td><td>Redis or Memcached support</td></tr>
<tr><td>Backups</td><td>Orders arrive continuously; losing a day of orders is costly</td><td>Daily (or more frequent) backups with easy restore</td></tr>
<tr><td>Security</td><td>Stores handle customer data and attract attacks</td><td>Firewall, malware scanning, SSL, strong account security</td></tr>
<tr><td>Staging</td><td>Updates can break checkout</td><td>One-click staging to test updates first</td></tr>
</tbody>
</table>
<h3>Our WooCommerce recommendations</h3>
<ul>
<li><strong>Small or new stores:</strong> Hostinger's WooCommerce or Business plans give daily backups (Business, reported), NVMe storage and an easy upgrade path to Cloud.</li>
<li><strong>Growing stores:</strong> a cloud plan or managed VPS - Hostinger Cloud, a Hosting.com managed VPS, or UltaHost VPS for technical users.</li>
<li><strong>Performance-focused stores on cPanel:</strong> Hosting.com's LiteSpeed-powered tiers with LiteSpeed Cache's WooCommerce-aware settings.</li>
</ul>
<h3>WooCommerce hosting tips</h3>
<ul>
<li>Confirm your caching excludes cart, checkout and account pages (good caching plugins do this automatically).</li>
<li>Use a payment gateway that hosts the card form, so card data never touches your server.</li>
<li>Test checkout after every plugin, theme or WooCommerce update - on staging first.</li>
<li>Move scheduled tasks to a real server cron so order emails and stock updates run reliably.</li>
<li>Plan for sale days: upgrade resources temporarily if your host allows it, rather than discovering limits during a promotion.</li>
</ul>`,
  },
  {
    heading: "How secure is WordPress hosting?",
    body: `<p>WordPress core is actively maintained and regularly patched, but its popularity makes WordPress sites a constant target for automated attacks. Security is shared: the host protects the server and network, and you protect the WordPress installation. Most compromised WordPress sites are breached through <strong>outdated or vulnerable plugins and themes</strong>, <strong>weak or reused passwords</strong>, or <strong>nulled (pirated) premium plugins</strong> - not through the host's servers.</p>
<h3>Security features your WordPress host should provide</h3>
<ul>
<li><strong>Free SSL/TLS</strong> on every domain, renewing automatically.</li>
<li><strong>Account isolation</strong> on shared servers, so a neighbour's hacked site cannot reach yours.</li>
<li><strong>A web application firewall (WAF)</strong> that blocks common attack patterns.</li>
<li><strong>Brute-force protection</strong> for wp-login.php and XML-RPC.</li>
<li><strong>Malware scanning</strong> - and ideally cleanup if your site is infected.</li>
<li><strong>DDoS mitigation</strong> at the network level.</li>
<li><strong>Two-factor authentication</strong> for your hosting account.</li>
<li><strong>Current PHP versions</strong> that still receive security updates.</li>
<li><strong>Daily backups</strong> stored away from the server.</li>
</ul>
<h3>Your WordPress security checklist</h3>
<ol>
<li>Keep WordPress core, themes and plugins updated - and remove anything you do not use.</li>
<li>Install plugins and themes only from reputable sources; never use nulled premium plugins.</li>
<li>Use strong, unique passwords and two-factor authentication for every administrator.</li>
<li>Give users the lowest role they need; limit the number of administrators.</li>
<li>Change the default "admin" username if it exists.</li>
<li>Disable file editing in the dashboard (the DISALLOW_FILE_EDIT setting).</li>
<li>Keep regular off-site backups and test a restore.</li>
<li>Monitor uptime and file changes, and act quickly on security notices from your host.</li>
</ol>`,
  },
  {
    heading: "How should you back up a WordPress site?",
    body: `<p>A complete WordPress backup includes <strong>both the files</strong> (wp-content with your themes, plugins and uploads, plus configuration) <strong>and the database</strong> (posts, pages, settings, users and orders). Backing up one without the other is not enough to restore a working site.</p>
<h3>The 3-2-1 approach for WordPress</h3>
<p>Keep at least <strong>three</strong> copies of your site, on <strong>two</strong> different types of storage, with <strong>one</strong> copy off-site. In practice:</p>
<ol>
<li><strong>Host backups</strong> - automatic daily (or weekly) backups from your host, restorable from the control panel.</li>
<li><strong>Plugin backups to cloud storage</strong> - a reputable WordPress backup plugin sending scheduled backups to external storage you control.</li>
<li><strong>A manual download</strong> before major updates, kept on your own device.</li>
</ol>
<h3>How often should you back up?</h3>
<table>
<thead><tr><th>Site type</th><th>Suggested frequency</th></tr></thead>
<tbody>
<tr><td>Brochure site that rarely changes</td><td>Weekly, plus before updates</td></tr>
<tr><td>Active blog</td><td>Daily</td></tr>
<tr><td>WooCommerce store or membership site</td><td>Daily at minimum; more frequent database backups for busy stores</td></tr>
</tbody>
</table>
<h3>Host backup policies</h3>
<p>Among the providers we track, Hostinger reportedly includes weekly backups on Premium and daily on Business and Cloud; Bluehost's Starter plan reportedly lacks free daily backups (included on Business and above); UltaHost reports free backups; for the others, check the current plan page. Whatever your host includes, <strong>test a restore</strong> at least once - a backup you have never restored is a backup you cannot trust.</p>`,
  },
  {
    heading: "How do staging sites and updates work on WordPress hosting?",
    body: `<p>A <strong>staging site</strong> is a private copy of your WordPress site where you can test updates and changes before applying them to the live site. Managed and higher-tier WordPress plans often include one-click staging that creates the copy and pushes approved changes back to production.</p>
<h3>A safe WordPress update routine</h3>
<ol>
<li><strong>Back up</strong> the live site (files and database).</li>
<li><strong>Clone to staging</strong> (or create a fresh staging copy).</li>
<li><strong>Update on staging</strong> - WordPress core first, then plugins, then the theme.</li>
<li><strong>Test</strong> key pages, forms, logins and - for stores - add to cart and checkout.</li>
<li><strong>Apply the same updates to live</strong>, or push staging to live if your host supports selective pushes.</li>
<li><strong>Check the live site</strong> and clear caches.</li>
</ol>
<h3>Automatic updates: what to enable</h3>
<ul>
<li><strong>WordPress core minor (security) releases</strong> - enable automatic updates; they are designed to be safe.</li>
<li><strong>Major core releases</strong> - test on staging for business-critical sites, then update.</li>
<li><strong>Plugins</strong> - auto-updates are reasonable for small, well-maintained plugins; test large plugins (page builders, WooCommerce, membership tools) on staging first.</li>
</ul>
<p>If your plan lacks built-in staging, a staging plugin or a manual copy on a password-protected subdomain works too. The extra ten minutes is far cheaper than a broken checkout.</p>`,
  },
  {
    heading: "Why do WordPress emails go to spam, and how does hosting affect it?",
    body: `<p>WordPress sends emails - contact form notifications, password resets, WooCommerce order confirmations - using PHP's mail function by default. Emails sent this way from a shared server often lack proper authentication, so receiving providers may mark them as spam or reject them. This is one of the most common WordPress problems, and it is easy to fix.</p>
<h3>How to make WordPress email reliable</h3>
<ol>
<li><strong>Send through SMTP or a transactional email service</strong> using an SMTP plugin, instead of PHP mail.</li>
<li><strong>Authenticate your domain</strong> with <strong>SPF</strong>, <strong>DKIM</strong> and <strong>DMARC</strong> DNS records, using the values your email provider gives you.</li>
<li><strong>Send from an address at your own domain</strong>, not a free webmail address.</li>
<li><strong>Test</strong> by sending to major email providers and checking spam folders and message headers.</li>
</ol>
<h3>Hosting email vs dedicated email</h3>
<p>Many hosting plans include mailboxes at your domain, which are fine for low-volume use. Allowances vary and have been tightening - Hostinger reportedly reduced its included email in 2025, and Domain.com reportedly charges for professional email. For a business that depends on email, a dedicated email service for mailboxes plus a transactional service for WordPress notifications is usually more reliable than mail bundled with hosting.</p>`,
  },
  {
    heading: "Can you run WordPress Multisite on shared hosting?",
    body: `<p><strong>WordPress Multisite</strong> lets you run a network of sites from a single WordPress installation, sharing themes, plugins and users. It is useful for organizations with many related sites - schools, franchises, agencies - but it concentrates load and risk on one installation.</p>
<p>Multisite can run on shared hosting for a small network with modest traffic, as long as the host allows it (some restrict it on entry plans) and the plan's resources are sufficient. For larger or busier networks, a cloud plan or VPS is more appropriate, because all sites share the same PHP workers, memory and database.</p>
<h3>Multisite vs separate installations</h3>
<table>
<thead><tr><th></th><th>Multisite</th><th>Separate installations</th></tr></thead>
<tbody>
<tr><td>Management</td><td>One dashboard, one set of updates</td><td>Each site managed separately</td></tr>
<tr><td>Isolation</td><td>A problem can affect every site</td><td>Problems stay contained</td></tr>
<tr><td>Plugin compatibility</td><td>Some plugins do not support Multisite</td><td>Full compatibility</td></tr>
<tr><td>Moving one site</td><td>More complex</td><td>Simple</td></tr>
<tr><td>Hosting needs</td><td>More resources on one account</td><td>Can spread across plans</td></tr>
</tbody>
</table>
<p>For most agencies, separate installations - on a multi-site hosting plan or reseller hosting - are simpler and safer than Multisite.</p>`,
  },
  {
    heading: "Which developer features should WordPress hosting include?",
    body: `<p>If you or your developer work on the site regularly, these features save hours:</p>
<ul>
<li><strong>SSH access</strong> - secure command-line access to the server.</li>
<li><strong>WP-CLI</strong> - WordPress's command-line tool for updating, searching and replacing URLs, managing users and more, much faster than clicking through the dashboard.</li>
<li><strong>Git integration</strong> - deploy code from a repository.</li>
<li><strong>Multiple PHP versions</strong>, switchable per site.</li>
<li><strong>Staging</strong> with selective push (files only, database only, or both).</li>
<li><strong>Database access</strong> through phpMyAdmin or a similar tool.</li>
<li><strong>Error logs and resource graphs</strong> to diagnose problems.</li>
<li><strong>Cron control</strong> to replace WP-Cron with a real server cron.</li>
<li><strong>Redis or Memcached</strong> for object caching.</li>
</ul>
<p>cPanel-based hosts such as Hosting.com, UltaHost and BigRock (Linux) expose most of these through familiar tools, and VPS plans provide full root access. Hostinger's hPanel and Bluehost's dashboard cover the common tasks with a simpler interface. If developer tooling matters, ask support which of these features your specific plan includes before you buy - availability often differs by tier.</p>`,
  },
];

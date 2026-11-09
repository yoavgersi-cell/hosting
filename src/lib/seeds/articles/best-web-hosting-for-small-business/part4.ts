import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 4: running the site -
// ownership, uptime, speed, security, backups, local SEO, support, capacity.

export const part4: ArticleSection[] = [
  {
    heading: "Who should own your domain, hosting account and admin logins?",
    body: `<div class="qa"><strong>Short answer:</strong> The business should. Register the domain in the company's name (or the owner's), with a company email address you control, and hold the top-level login to the hosting account yourself. Your web designer or agency can have their own user access - but not the keys to the building.</div>
<p>This is the single most common, and most avoidable, problem we see with small business websites. A freelancer sets everything up under their own account to save time, the relationship ends, and the business discovers it cannot renew its own domain, change its own email settings or move its own website without the old designer's cooperation. Sometimes the designer is happy to help. Sometimes they have moved on, gone out of business or are in a billing dispute.</p>
<h3>The ownership checklist</h3>
<table>
<thead><tr><th>Asset</th><th>Who should be the owner</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Domain name</td><td>The business, listed as registrant, with a business email you control</td><td>The registrant is the legal holder of the domain. Whoever controls the registrar account controls your website address and your email.</td></tr>
<tr><td>Hosting account</td><td>The business, paid with a company card</td><td>The account owner can reset passwords, download backups and cancel or move the site.</td></tr>
<tr><td>Website admin (e.g. WordPress)</td><td>At least one administrator login belongs to the business</td><td>Lets you add or remove designers and staff without asking anyone.</td></tr>
<tr><td>Business email</td><td>The business</td><td>Customer conversations and password resets for every other service flow through it.</td></tr>
<tr><td>DNS (if separate, e.g. Cloudflare)</td><td>The business</td><td>DNS decides where your website and email actually point.</td></tr>
<tr><td>Google Business Profile, analytics, Search Console</td><td>The business, with others added as managers</td><td>Years of reviews and traffic data are hard to rebuild.</td></tr>
</tbody>
</table>
<h3>How to give a designer access safely</h3>
<ul>
<li><strong>Add them as a user, not as the owner.</strong> Most control panels and WordPress let you create a separate login for a developer and remove it later.</li>
<li><strong>Use a shared password manager</strong> rather than emailing passwords around, and change passwords when someone leaves.</li>
<li><strong>Turn on two-factor authentication</strong> for the registrar, the hosting account and the website admin. These three logins are worth more to an attacker than almost anything else your business owns online.</li>
<li><strong>Keep a one-page record</strong> of where the domain is registered, where the site is hosted, when each renews and who has access. It takes ten minutes and saves days in an emergency.</li>
</ul>
<p>If a designer insists on owning the hosting because they "manage everything", that can be a legitimate service - but ask in writing how you would get the site, the domain and your email back if you part ways.</p>`,
  },
  {
    heading: "What uptime should a business website have, and what do SLAs really promise?",
    body: `<div class="qa"><strong>Short answer:</strong> Look for a host that commits to at least 99.9% uptime and has a track record of meeting it. Then read what the guarantee actually pays out: on shared hosting it is almost always a small account credit, not compensation for lost sales.</div>
<p>Uptime figures sound almost identical, but the gaps between them are real once you translate them into hours.</p>
<table>
<thead><tr><th>Uptime level</th><th>Maximum downtime per year</th><th>Per month (average)</th><th>Where you typically see it</th></tr></thead>
<tbody>
<tr><td>99%</td><td>About 3 days 15 hours</td><td>About 7 hours 18 minutes</td><td>Not acceptable for a business site</td></tr>
<tr><td>99.9%</td><td>About 8 hours 46 minutes</td><td>About 44 minutes</td><td>The common guarantee on shared hosting</td></tr>
<tr><td>99.95%</td><td>About 4 hours 23 minutes</td><td>About 22 minutes</td><td>Some premium and cloud plans</td></tr>
<tr><td>99.99%</td><td>About 53 minutes</td><td>About 4 minutes 23 seconds</td><td>Enterprise and high-availability setups</td></tr>
</tbody>
</table>
<p><em>Our calculation, based on a 365-day year and an average month of 30.44 days.</em></p>
<h3>What a guarantee usually means in practice</h3>
<ul>
<li><strong>It is a refund formula, not a promise.</strong> If the host misses its target, you can typically claim a credit worth a portion of that month's hosting fee. On a plan that costs a few dollars a month, that is a few dollars.</li>
<li><strong>You often have to ask.</strong> Many hosts require you to open a ticket within a set period and provide evidence.</li>
<li><strong>Exclusions are broad.</strong> Scheduled maintenance, problems caused by your own code or plugins, and attacks are commonly excluded.</li>
</ul>
<h3>What actually protects you</h3>
<p>Treat the guarantee as a signal of confidence, then protect yourself directly. Set up a free uptime monitor that checks your site every few minutes and emails or texts you when it goes down, so you know before your customers do. Keep independent backups (covered below) so a serious outage at the host does not become a lost website. And if a few hours of downtime would cost you real money - an online shop during a sale, a booking system on a Friday night - that is the point at which a higher-tier plan, a VPS or a managed platform becomes worth paying for.</p>`,
  },
  {
    heading: "How fast does a small business website need to be?",
    body: `<div class="qa"><strong>Short answer:</strong> Fast enough to pass Google's Core Web Vitals on mobile: the main content should appear within 2.5 seconds, the page should respond to taps within 200 milliseconds and the layout should not jump around. A decent shared host can get a typical brochure site there; a heavy theme, unoptimized images and too many plugins are more often the problem than the server.</div>
<p>Core Web Vitals are the three measurements Google uses to describe real-world page experience. They are worth understanding because they translate "is my site fast?" into numbers you can check for free in Google Search Console or PageSpeed Insights.</p>
<table>
<thead><tr><th>Metric</th><th>What it measures</th><th>"Good" threshold</th><th>What hosting affects</th></tr></thead>
<tbody>
<tr><td>Largest Contentful Paint (LCP)</td><td>How long until the main content is visible</td><td>2.5 seconds or less</td><td>Server response time, caching, server location</td></tr>
<tr><td>Interaction to Next Paint (INP)</td><td>How quickly the page responds to clicks and taps</td><td>200 milliseconds or less</td><td>Mostly your theme and scripts, not the host</td></tr>
<tr><td>Cumulative Layout Shift (CLS)</td><td>How much the layout jumps while loading</td><td>0.1 or less</td><td>Almost entirely your site's design</td></tr>
</tbody>
</table>
<p><em>Thresholds from Google's web.dev documentation. INP replaced First Input Delay as a Core Web Vital in March 2024.</em></p>
<h3>What a host can and cannot fix</h3>
<p>The host controls the first link in the chain: how quickly the server starts sending your page (often called time to first byte). Good hosts help with server-level caching, modern PHP versions, solid-state storage, HTTP/2 or HTTP/3 and a nearby data center. Everything after that - the size of your images, the weight of your theme, chat widgets, booking embeds and tracking scripts - is on the site itself.</p>
<h3>Practical speed rules for a business site</h3>
<ul>
<li><strong>Pick a data center near your customers.</strong> A plumber in Ohio does not need servers in Singapore. Most of the hosts we recommend let you choose the region at signup.</li>
<li><strong>Turn on caching.</strong> On WordPress, use the caching tool your host recommends (LiteSpeed Cache on LiteSpeed servers, for example) rather than stacking several.</li>
<li><strong>Compress images before uploading</strong> and use modern formats such as WebP.</li>
<li><strong>Be ruthless with plugins and third-party widgets.</strong> Each one adds weight.</li>
<li><strong>Keep PHP up to date.</strong> Older versions stop receiving security fixes - see our guide to <a href="/articles/php-8-2-end-of-life">PHP 8.2 end of life</a>.</li>
<li><strong>Add a CDN</strong> if you serve customers across a wide area. Several hosts include one, and Cloudflare offers a free plan.</li>
</ul>`,
  },
  {
    heading: "What security features should small business hosting include?",
    body: `<div class="qa"><strong>Short answer:</strong> At minimum: free SSL certificates that renew automatically, automatic backups, malware scanning, a web application firewall or equivalent filtering, isolation between accounts on shared servers, and two-factor authentication on your hosting login. Everything else is a bonus.</div>
<p>Small businesses are attractive targets precisely because they are small: fewer defenses, less monitoring and often an outdated plugin or two. Most website compromises we hear about do not come from someone breaking into the host's data center. They come through a vulnerable plugin or theme, a reused password or an admin account that was never removed.</p>
<h3>Security features to compare</h3>
<table>
<thead><tr><th>Feature</th><th>Why it matters</th><th>Must-have or nice-to-have?</th></tr></thead>
<tbody>
<tr><td>Free, auto-renewing SSL (HTTPS)</td><td>Encrypts traffic; browsers warn visitors about sites without it</td><td>Must-have - every host we recommend includes it</td></tr>
<tr><td>Automatic backups with easy restore</td><td>Your recovery plan when anything goes wrong</td><td>Must-have; check frequency and retention</td></tr>
<tr><td>Malware scanning</td><td>Detects infected files early</td><td>Must-have</td></tr>
<tr><td>Web application firewall (WAF)</td><td>Blocks common attack patterns before they reach your site</td><td>Strongly recommended</td></tr>
<tr><td>Account isolation on shared servers</td><td>Stops a hacked neighbour from reaching your files</td><td>Must-have; ask if unsure</td></tr>
<tr><td>Two-factor authentication on the hosting login</td><td>Protects the account that controls everything</td><td>Must-have - and turn it on</td></tr>
<tr><td>DDoS protection</td><td>Absorbs floods of junk traffic</td><td>Nice-to-have for most small sites; important for high-profile ones</td></tr>
<tr><td>Automatic software updates</td><td>Closes known holes quickly</td><td>Nice-to-have; test major updates on staging first</td></tr>
<tr><td>Staging site</td><td>Lets you test changes and updates safely</td><td>Strongly recommended for any site that takes money</td></tr>
</tbody>
</table>
<h3>Your side of the deal</h3>
<p>Even the best host cannot protect a site whose owner never updates it. Keep WordPress core, themes and plugins updated; delete plugins you no longer use; use unique passwords and a password manager; remove old staff and contractor accounts; and keep at least one backup that does not live on the same server as your website. On WordPress specifically, the large majority of reported vulnerabilities are found in plugins rather than in WordPress itself, which is why "fewer, well-maintained plugins" is the most effective security advice we can give.</p>
<h3>The numbers behind the advice</h3>
<table>
<thead><tr><th>Finding</th><th>Source</th></tr></thead>
<tbody>
<tr><td>11,334 new WordPress vulnerabilities were disclosed in 2025, up 42% on 2024</td><td>Patchstack, State of WordPress Security in 2026</td></tr>
<tr><td>91% of those vulnerabilities were in plugins, 9% in themes, and only a handful in WordPress core</td><td>Patchstack</td></tr>
<tr><td>46% had no patch available when they were disclosed</td><td>Patchstack</td></tr>
<tr><td>Ransomware was present in 88% of breaches at small and medium-sized businesses, compared with 39% at large organizations</td><td>Verizon Data Breach Investigations Report 2025</td></tr>
</tbody>
</table>
<p><em>Verizon defines small businesses as those with fewer than 1,000 employees, and its figure describes breaches that occurred - not the share of businesses that are breached.</em></p>`,
  },
  {
    heading: "How should a small business handle backups and disaster recovery?",
    body: `<div class="qa"><strong>Short answer:</strong> Use your host's automatic backups as the first layer, and keep a second, independent copy somewhere else. Aim for daily backups if your site changes often or takes orders, keep at least a few weeks of history, and test a restore before you need one.</div>
<p>Backups are the feature most small businesses assume they have and fewest check. Plans differ more than the marketing suggests: some include daily backups, some weekly, some charge extra for automatic backups on the cheapest tier, and retention periods vary widely. The question to ask is not "do you back up?" but "how often, how long do you keep them, and how do I restore one myself?"</p>
<h3>A simple backup plan that works</h3>
<ol>
<li><strong>Layer one - the host.</strong> Confirm the frequency and retention on your plan, and find the restore button before an emergency.</li>
<li><strong>Layer two - an off-site copy.</strong> Use a backup plugin or service that saves copies to separate cloud storage, or download a full backup to your own storage on a regular schedule. If your hosting account is suspended, hacked or closed, layer one may disappear with it.</li>
<li><strong>Back up before every major change</strong> - theme switches, big plugin updates, PHP version upgrades.</li>
<li><strong>Test a restore</strong> at least once a year, ideally to a staging copy. A backup you have never restored is a hope, not a plan.</li>
</ol>
<h3>How often should you back up?</h3>
<table>
<thead><tr><th>Type of site</th><th>Suggested frequency</th><th>Suggested retention</th></tr></thead>
<tbody>
<tr><td>Brochure site that rarely changes</td><td>Weekly, plus before any change</td><td>At least 4 weeks</td></tr>
<tr><td>Blog or site updated several times a week</td><td>Daily</td><td>At least 2-4 weeks</td></tr>
<tr><td>Online shop or booking site</td><td>Daily at minimum; more often for busy stores</td><td>30 days or more</td></tr>
</tbody>
</table>
<p>Do not forget email. If your mailboxes are hosted with your web host, check whether they are included in backups. If you use Google Workspace or Microsoft 365, your email lives on their systems instead, which many businesses find simpler.</p>`,
  },
  {
    heading: "Does your hosting choice affect local SEO?",
    body: `<div class="qa"><strong>Short answer:</strong> Only indirectly. Google does not rank a local business higher because its server is in the same town. What hosting does affect is speed, uptime and security - and those do matter for search and for customers. For local visibility, your Google Business Profile, reviews and consistent contact details matter far more than where your server sits.</div>
<p>There is a persistent belief that you must host in your own country to rank locally. Server location used to be a stronger signal before country-code domains, hreflang tags and Search Console's targeting tools were common, and it still has an effect on speed - a server far from your customers adds delay to every page. But for a local business with a clearly local website, it is a minor factor compared with everything else.</p>
<h3>Where hosting does touch your search performance</h3>
<ul>
<li><strong>Speed.</strong> Page experience, including Core Web Vitals, is part of how Google evaluates pages. A slow server makes good scores harder.</li>
<li><strong>Uptime.</strong> Occasional short outages are not a ranking problem. Repeated or long outages mean Google's crawler and your customers find an error page.</li>
<li><strong>Security.</strong> A hacked site can be flagged in search results or filled with spam pages, which can take a long time to recover from.</li>
<li><strong>HTTPS.</strong> Every host we recommend includes free SSL, so this should never be an issue.</li>
</ul>
<p>Customer behaviour shows where the real competition is. BrightLocal's 2026 Local Consumer Review Survey of US adults found that 97% read reviews when choosing a local business, that 74% look for reviews from the last three months, and that the share of people who would not use a business rated below 4.5 stars rose to 31%. It also found sharply higher use of AI tools to find local recommendations. Mobile matters too: StatCounter put mobile devices at about 60% of worldwide web traffic in October 2026.</p>
<h3>What matters more for local search</h3>
<ul>
<li>A complete, verified <strong>Google Business Profile</strong> with accurate hours, categories and photos.</li>
<li>A steady flow of genuine <strong>customer reviews</strong>, and replies to them.</li>
<li>Your business <strong>name, address and phone number</strong> written the same way on your site and on directories.</li>
<li>A page for each <strong>service and service area</strong>, written for customers rather than for search engines.</li>
<li><strong>LocalBusiness structured data</strong> on your site, which many WordPress SEO plugins can add for you.</li>
</ul>`,
  },
  {
    heading: "What kind of support does a small business actually need from a host?",
    body: `<div class="qa"><strong>Short answer:</strong> 24/7 live chat at minimum, from people who can actually fix hosting problems rather than read scripts, plus a clear way to escalate when your site is down. Phone support is a genuine plus if you are not technical, but it is becoming rarer at the budget end of the market.</div>
<p>Most small business owners do not need support often. When they do, it is usually urgent: the site is down, email has stopped arriving, a form has broken before a launch. Support quality is hard to judge from a sales page, so here is how to read it.</p>
<table>
<thead><tr><th>Support channel</th><th>Hostinger</th><th>Bluehost</th><th>Hosting.com</th></tr></thead>
<tbody>
<tr><td>24/7 live chat</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Phone support</td><td>No general phone line</td><td>Yes</td><td>Check current plan details</td></tr>
<tr><td>Ticket / email</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Knowledge base</td><td>Extensive</td><td>Extensive</td><td>Extensive</td></tr>
</tbody>
</table>
<p><em>Based on each host's published support pages at the time of writing; support channels can change, so confirm before buying.</em></p>
<h3>How to test support before you commit</h3>
<ul>
<li><strong>Use the pre-sales chat</strong> with a real question - "Can I host two sites and ten mailboxes on this plan?" - and judge the answer for accuracy and honesty, not just speed.</li>
<li><strong>Ask about migrations.</strong> A host that will move your existing site for free (or explains clearly what it charges) is showing you how it treats customers.</li>
<li><strong>Use the money-back window.</strong> Open a support ticket in the first week about something real and see how it is handled.</li>
</ul>
<p>If you know you will need regular hand-holding - updates, edits, troubleshooting - budget for a freelancer or a care plan as well. No budget host's support team will maintain your website for you; their job is the hosting, not your plugins.</p>`,
  },
  {
    heading: "How many websites, mailboxes and visitors can one plan handle?",
    body: `<div class="qa"><strong>Short answer:</strong> A typical small business site - a few dozen pages and a few thousand visitors a month - fits comfortably on an entry or mid-tier shared plan. The limits that bite first are usually the number of websites allowed, the number of mailboxes included and CPU or memory limits during traffic spikes, not storage.</div>
<p>Hosting plans advertise storage in tens or hundreds of gigabytes, which few business sites will ever use. The real ceilings are less visible.</p>
<h3>The limits that matter</h3>
<table>
<thead><tr><th>Limit</th><th>What it means</th><th>When it bites</th></tr></thead>
<tbody>
<tr><td>Number of websites</td><td>How many separate sites the plan can host</td><td>When you add a second brand, a landing page site or a staging copy</td></tr>
<tr><td>Mailboxes</td><td>How many email accounts are included, and for how long</td><td>When the team grows, or when a free email trial ends</td></tr>
<tr><td>CPU, memory and processes</td><td>How much server power your site can use at once</td><td>During a sale, an ad campaign or a local news mention</td></tr>
<tr><td>Inodes (file count)</td><td>Maximum number of files</td><td>Large media libraries, many backups stored on the account</td></tr>
<tr><td>Database size and connections</td><td>Capacity for dynamic sites</td><td>Busy online shops and booking systems</td></tr>
<tr><td>"Unmetered" bandwidth</td><td>No fixed monthly traffic cap - but fair-use rules still apply</td><td>Rarely for normal business traffic</td></tr>
</tbody>
</table>
<h3>Rules of thumb</h3>
<ul>
<li><strong>One business, one site, a handful of staff:</strong> an entry plan is often enough, if it includes the backups and email you need.</li>
<li><strong>Several sites or brands, or a growing team:</strong> the mid-tier plan usually makes more sense, and is often where daily backups and extra resources appear.</li>
<li><strong>An online shop with regular orders, or traffic that spikes:</strong> start on the top shared tier or a cloud plan and watch your resource usage in the control panel.</li>
</ul>
<p>Most control panels show resource usage graphs. If you regularly hit your limits, that is your signal to upgrade - not a reason to accept a slow site.</p>`,
  },
];

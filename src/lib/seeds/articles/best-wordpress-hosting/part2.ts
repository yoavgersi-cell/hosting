import type { ArticleSection } from "@/lib/config";

// Part 2 of "Best WordPress Hosting in 2026". Evaluation criteria and
// provider-by-provider WordPress profiles.

export const part2: ArticleSection[] = [
  {
    heading: "How do we evaluate WordPress hosting?",
    body: `<p>We rank WordPress hosts on the factors that decide how a WordPress site actually performs and how much it costs to run over several years. Each factor reflects something you will feel as a site owner, not a marketing checkbox.</p>
<table>
<thead><tr><th>Factor</th><th>What we look at</th><th>Why it matters for WordPress</th></tr></thead>
<tbody>
<tr><td>Real cost</td><td>Intro price and required term, renewal rate, cost of essential add-ons</td><td>WordPress sites tend to stay put for years, so renewals dominate</td></tr>
<tr><td>Performance stack</td><td>Storage type, web server (LiteSpeed, Nginx, Apache), server-level caching, PHP versions, data center choice</td><td>Uncached WordPress pages depend heavily on server speed</td></tr>
<tr><td>WordPress tooling</td><td>Installer, auto-updates, staging, WP-CLI/SSH, WooCommerce setup</td><td>Saves time and reduces the risk of breaking the site</td></tr>
<tr><td>Backups and security</td><td>Backup frequency, retention and restore; firewall, malware scanning, cleanup</td><td>WordPress's popularity makes it a frequent target</td></tr>
<tr><td>Support</td><td>Channels, hours, WordPress knowledge, free migration</td><td>Most WordPress emergencies need someone who understands plugins and themes</td></tr>
<tr><td>Scalability</td><td>Upgrade path to cloud, VPS or dedicated within the same host</td><td>Successful sites outgrow entry plans</td></tr>
<tr><td>Reputation</td><td>Trustpilot rating and volume, complaint patterns, ownership changes</td><td>Shows how the host behaves after the sale</td></tr>
</tbody>
</table>
<p>Prices and plan details come from providers' published information and third-party reviews, cross-checked and shown with their conditions. We do not publish speed scores we have not measured ourselves under controlled conditions, and we explain later how you can test any host's WordPress speed during its money-back period. Our full method is on the <a href="/how-we-rank">how we rank</a> page.</p>`,
  },
  {
    heading: "Is Hostinger good for WordPress?",
    body: `<p><strong>Yes - Hostinger is our top pick for WordPress on value.</strong> It combines some of the lowest intro prices in the industry with dedicated WordPress and WooCommerce plans, backups on every shared plan, a free first-year domain on Premium and above, and data centers across North America, Europe, South America and Asia.</p>
<h3>WordPress strengths</h3>
<ul>
<li><strong>WordPress and WooCommerce plans</strong> managed through hPanel, Hostinger's own control panel, which keeps common WordPress tasks simple for beginners.</li>
<li><strong>Backups included</strong> - weekly on Premium and daily on Business and Cloud (reported).</li>
<li><strong>NVMe storage</strong> on Business and higher tiers (reported), which helps database-heavy WordPress and WooCommerce sites.</li>
<li><strong>Global data centers</strong>, so you can host close to your audience, including in India and South America.</li>
<li><strong>A clear upgrade path</strong> from shared to Cloud plans and VPS within the same account.</li>
<li><strong>A large, positive review base</strong> - around 4.6 on Trustpilot across roughly 69,000 reviews (third-party snapshot).</li>
</ul>
<h3>Things to know</h3>
<ul>
<li>The lowest price requires a <strong>48-month prepaid term</strong>; Premium reportedly renews at about $10.99 a month.</li>
<li>Hostinger uses <strong>hPanel, not cPanel</strong>, on shared plans - simpler for beginners, but developers used to cPanel will need to adjust.</li>
<li>Storage and email allowances were <strong>reportedly reduced in 2025</strong>; check current plan limits.</li>
<li>Support is 24/7 live chat and tickets; <strong>phone support is generally not offered</strong>.</li>
</ul>
<p><strong>Best for:</strong> new WordPress blogs and business sites, budget-conscious owners, and sites with visitors outside the US. Read the full <a href="/reviews/hostinger">Hostinger review</a> and <a href="/articles/hostinger-plans-explained">Hostinger plans explained</a>.</p>`,
  },
  {
    heading: "Is Bluehost good for WordPress?",
    body: `<p><strong>Yes - Bluehost is the best choice for WordPress beginners who want hand-holding and phone support.</strong> Founded in 2003 and owned by Newfold Digital, Bluehost has long positioned itself as a WordPress-first host and has for many years been listed among the hosts recommended on WordPress.org's hosting page.</p>
<h3>WordPress strengths</h3>
<ul>
<li><strong>WordPress-first dashboard</strong> that installs WordPress during onboarding and puts WordPress tasks front and center.</li>
<li><strong>Free first-year domain</strong> on 12- and 36-month terms (claim within 90 days).</li>
<li><strong>24/7 chat and phone support</strong>, valuable if you prefer talking to a person.</li>
<li><strong>Published renewal rates</strong> by term length, which makes long-term costs easier to plan.</li>
<li><strong>NVMe storage</strong> (10 GB on Starter, reported) and an upgrade path to VPS and dedicated servers.</li>
<li>Trustpilot around 4.5 across roughly 29,500 reviews (third-party snapshot).</li>
</ul>
<h3>Things to know</h3>
<ul>
<li>Plans were renamed in 2025 to <strong>Starter, Business and Pro</strong>; older guides mention Basic, Choice Plus and Online Store.</li>
<li><strong>Starter reportedly lacks free daily backups</strong> - consider Business, a backup plugin or the paid add-on.</li>
<li>Starter is reported at about $3.99 a month on a 36-month term and renews at $9.99 (36-month), $11.99 (12-month) or $15.99 (monthly).</li>
<li><strong>Checkout upsells</strong> are common; review the cart carefully.</li>
<li>Data centers are mainly in the US, so it best suits US audiences.</li>
</ul>
<p><strong>Best for:</strong> first-time WordPress users in the US, small businesses that value phone support, and buyers who prefer 12- or 36-month commitments. Read the <a href="/reviews/bluehost">Bluehost review</a> and <a href="/articles/is-bluehost-good">is Bluehost good?</a></p>`,
  },
  {
    heading: "Is Hosting.com good for WordPress?",
    body: `<p><strong>Yes, particularly for speed-focused WordPress sites and users who want cPanel.</strong> Hosting.com is the new name of A2 Hosting, which World Host Group acquired in January 2025 and rebranded in April 2025. A2 built its reputation on performance, and Hosting.com keeps the LiteSpeed-powered "Turbo" tiers running on AMD EPYC processors.</p>
<h3>WordPress strengths</h3>
<ul>
<li><strong>LiteSpeed web server on Turbo tiers</strong>, which pairs with the free LiteSpeed Cache plugin for server-level page caching in WordPress.</li>
<li><strong>cPanel</strong>, the industry-standard panel, which makes WordPress migrations between cPanel hosts straightforward.</li>
<li><strong>Developer-friendly options</strong> - managed VPS (reported from about $23 a month on a one-year term), dedicated servers and reseller hosting for agencies.</li>
<li><strong>Group resources</strong> - World Host Group also owns the managed WordPress platform Rocket.net and FastComet.</li>
</ul>
<h3>Things to know</h3>
<ul>
<li>Plan names, prices and policies are <strong>still settling after the 2025 rebrand</strong>; sources disagree on current figures.</li>
<li>Renewal rates can be <strong>steep on higher tiers</strong> - reported from about $10.99 up to around $28 a month.</li>
<li>No verified Trustpilot figure under the new name yet.</li>
<li>Confirm the current money-back policy; A2's historic "anytime" prorated guarantee may have changed.</li>
</ul>
<p><strong>Best for:</strong> WordPress sites where speed is the priority, developers and agencies who live in cPanel, and sites that may grow into a managed VPS. Read the <a href="/reviews/hosting-com">Hosting.com review</a> and compare <a href="/hostinger-vs-hosting-com">Hostinger vs Hosting.com</a>.</p>`,
  },
  {
    heading: "Is UltaHost good for WordPress?",
    body: `<p><strong>Yes, for budget-conscious WordPress users who want NVMe storage and cPanel.</strong> UltaHost is a younger, independent host founded around 2018-2019 that sells shared, managed WordPress, VPS, dedicated and reseller hosting, all on NVMe storage.</p>
<h3>WordPress strengths</h3>
<ul>
<li><strong>NVMe storage on every plan</strong>, which helps uncached WordPress and WooCommerce requests.</li>
<li><strong>cPanel</strong> on Linux plans and <strong>managed WordPress plans</strong>.</li>
<li><strong>Free backups and SSL</strong> (reported).</li>
<li><strong>Lower reported renewal rates</strong> than many larger brands - from about $5.99 a month.</li>
<li><strong>Cheap VPS</strong> (reported from about $4.50 a month) for developers who want root access.</li>
<li><strong>A wide choice of data center locations</strong>, useful for international audiences.</li>
</ul>
<h3>Things to know</h3>
<ul>
<li>Trustpilot reviews are <strong>mixed</strong> - around 3.5 on its main profile across roughly 870 reviews (third-party snapshot).</li>
<li><strong>Less public corporate information</strong> than established brands, and published specs vary between sources.</li>
<li>Use the <strong>30-day money-back guarantee</strong> to test speed and support before committing long term.</li>
</ul>
<p><strong>Best for:</strong> budget WordPress sites, developers who want cheap VPS, and site owners who need a specific data center region. Read the <a href="/reviews/ultahost">UltaHost review</a> and <a href="/hostinger-vs-ultahost">Hostinger vs UltaHost</a>.</p>`,
  },
  {
    heading: "Are BigRock, Domain.com and Network Solutions good for WordPress?",
    body: `<p>All three can host a WordPress site, and each fits a specific type of buyer. None is our first choice for WordPress performance or value, but each makes sense in the right situation.</p>
<h3>BigRock - best for WordPress sites in India</h3>
<p>BigRock launched in 2010 as a Mumbai-based brand and is now part of Newfold Digital. It offers WordPress hosting with <strong>INR billing</strong>, <strong>cPanel on Linux plans</strong>, Windows hosting, VPS and dedicated servers, and 24/7 chat and phone support (reported). Its 30-day money-back guarantee reportedly covers <strong>eligible first-time purchases only</strong>, excluding renewals, combo offers and add-ons, and renewals are roughly double the intro price. For Indian audiences, compare it with Hostinger, which also runs data centers in India. See <a href="/hostinger-vs-bigrock">Hostinger vs BigRock</a> and the <a href="/reviews/bigrock">BigRock review</a>.</p>
<h3>Domain.com - WordPress next to your domains</h3>
<p>Domain.com is a Newfold-owned registrar that sells WordPress hosting alongside domain registration. It suits people who already manage domains there and want a simple WordPress site in the same account with annual billing. Entry hosting is reported at about $3.75 a month for the first year, and <strong>professional email is reportedly a paid add-on</strong>. Dedicated hosts offer more WordPress tooling for similar money. See the <a href="/reviews/domain-com">Domain.com review</a>.</p>
<h3>Network Solutions - WordPress for established businesses already on it</h3>
<p>Network Solutions, founded in 1979 and now owned by Newfold Digital, bundles domains, business email and hosting, including WordPress hosting. Its tiers reportedly include 10, 20 and 40 GB of storage for 1, 3 and 10 sites. Third-party reviews report that <strong>free SSL is only included on Premium and higher</strong> and that its data centers are <strong>US-only</strong>. It makes most sense for businesses whose domains and email already live there. See the <a href="/reviews/network-solutions">Network Solutions review</a>.</p>`,
  },
  {
    heading: "How do the WordPress hosting providers compare feature by feature?",
    body: `<p>This table compares the WordPress-relevant features of each provider. Entries marked "check plan" are details we could not confirm consistently across sources; verify them on the provider's current plan page.</p>
<table>
<thead><tr><th>Provider</th><th>Control panel</th><th>Storage</th><th>Web server / caching</th><th>Backups</th><th>Phone support</th><th>Money-back</th></tr></thead>
<tbody>
<tr><td>Hostinger</td><td>hPanel</td><td>SSD (Premium); NVMe (Business+)</td><td>Check plan</td><td>Weekly / daily</td><td>Generally no</td><td>30 days</td></tr>
<tr><td>Bluehost</td><td>Custom WordPress dashboard</td><td>NVMe</td><td>Check plan</td><td>Paid on Starter; included Business+</td><td>Yes</td><td>30 days</td></tr>
<tr><td>Hosting.com</td><td>cPanel</td><td>SSD/NVMe by plan</td><td>LiteSpeed on Turbo tiers</td><td>Check plan</td><td>Historically yes</td><td>Check policy</td></tr>
<tr><td>UltaHost</td><td>cPanel</td><td>NVMe</td><td>Check plan</td><td>Free (reported)</td><td>Check</td><td>30 days</td></tr>
<tr><td>BigRock</td><td>cPanel (Linux)</td><td>SSD; NVMe on VPS</td><td>Check plan</td><td>Check plan</td><td>Yes (reported)</td><td>30 days (first purchase)</td></tr>
<tr><td>Domain.com</td><td>Custom dashboard</td><td>Check plan</td><td>Check plan</td><td>Check plan</td><td>Yes (reported)</td><td>30 days</td></tr>
<tr><td>Network Solutions</td><td>Custom account</td><td>10-40 GB by tier</td><td>Check plan</td><td>Check plan</td><td>Yes</td><td>Check policy</td></tr>
</tbody>
</table>
<p>The pattern is clear: Hostinger leads on included backups and value, Bluehost on guided WordPress onboarding and phone support, Hosting.com on a performance-oriented cPanel stack, and UltaHost on NVMe and low renewals. For full rankings across all hosting needs, see the <a href="/">comparison page</a>.</p>`,
  },
];

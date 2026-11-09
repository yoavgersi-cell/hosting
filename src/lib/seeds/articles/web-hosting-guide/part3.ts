import type { ArticleSection } from "@/lib/config";

// Part 3 of "How to Choose Web Hosting in 2026: The Complete Guide".
// Control panels, domains/email, support, refunds, "unlimited", ownership,
// and the provider-by-provider comparison.

export const part3: ArticleSection[] = [
  {
    heading: "cPanel vs hPanel vs custom dashboards: which control panel is best?",
    body: `<p>A <strong>control panel</strong> is the web interface you use to manage your hosting: files, databases, email accounts, domains, SSL certificates, backups and one-click app installs. The three approaches you will meet are <strong>cPanel</strong>, the long-standing industry standard; <strong>hPanel</strong>, Hostinger's in-house panel; and <strong>custom dashboards</strong> built by individual hosts.</p>
<table>
<thead><tr><th>Control panel</th><th>Used by (on our list)</th><th>Strengths</th><th>Trade-offs</th></tr></thead>
<tbody>
<tr><td>cPanel</td><td>Hosting.com, UltaHost, BigRock (Linux plans)</td><td>Familiar to developers and agencies; huge library of tutorials; makes migrations between cPanel hosts straightforward</td><td>Busier interface for beginners; licensing costs can be reflected in prices</td></tr>
<tr><td>hPanel</td><td>Hostinger</td><td>Clean, beginner-friendly design; covers everyday tasks simply</td><td>Not transferable knowledge to other hosts; cPanel-based migration tools may not apply directly</td></tr>
<tr><td>Custom dashboards</td><td>Bluehost, Domain.com, Network Solutions</td><td>Guided onboarding; domain, billing and site management in one place</td><td>Varies by host; advanced settings can be harder to find</td></tr>
</tbody>
</table>
<h3>Which should you choose?</h3>
<p>For beginners, the best panel is the one that makes common tasks obvious - installing WordPress, adding an email account, pointing a domain, restoring a backup. Hostinger's hPanel and Bluehost's dashboard are designed for exactly that. If you are a developer, agency or someone who expects to move hosts, cPanel's ubiquity is valuable: migrating between cPanel hosts is often as simple as moving a full account backup.</p>
<p>The control panel should not be the deciding factor on its own, but it shapes your day-to-day experience. Many hosts offer a demo; try it before you buy.</p>`,
  },
  {
    heading: "Do you get a free domain, SSL certificate and email with web hosting?",
    body: `<p>Usually you get a <strong>free SSL certificate</strong> on every plan, a <strong>free domain for the first year</strong> on many annual or multi-year plans, and <strong>email accounts</strong> on many - but not all - plans. Each comes with conditions worth checking.</p>
<h3>Free domains</h3>
<p>A "free domain" is almost always free for the <strong>first year only</strong>, then renews at the registrar's regular price. Conditions often apply: Hostinger reportedly includes a free domain on Premium and higher plans; Bluehost includes one on 12- and 36-month terms, which must be claimed within 90 days. The free domain is typically limited to common extensions such as .com. Note that under ICANN transfer rules, a newly registered domain usually cannot be transferred to another registrar for 60 days.</p>
<p>Some site owners prefer to register their domain at a separate registrar from day one. It costs a little more in year one but means switching hosts later is a simple DNS change rather than a domain transfer. Read <a href="/articles/domain-registration-vs-web-hosting">domain registration vs web hosting</a> for the trade-offs.</p>
<h3>SSL certificates</h3>
<p>Free SSL certificates are standard at almost every host and are all most websites need, including online stores. Check that SSL is included on your specific tier - third-party reviews report that Network Solutions reserves free SSL for Premium and higher - and that certificates renew automatically.</p>
<h3>Email hosting</h3>
<p>Many shared hosting plans include email accounts at your domain (you@yourdomain.com), but limits vary and have been tightening: Hostinger reportedly reduced its included email allowances in 2025, and Domain.com reportedly sells professional email as a paid add-on from about $2.99 per user per month. If email matters to your business, consider whether dedicated email hosting would be more reliable than bundled mailboxes, especially for deliverability and storage.</p>`,
  },
  {
    heading: "How important is web hosting customer support?",
    body: `<p>Support quality matters most at the worst possible moment - when your site is down, hacked or broken after an update. Look for <strong>24/7 live chat</strong> as a baseline, <strong>phone support</strong> if you prefer talking to a person, a detailed <strong>knowledge base</strong>, and support agents who can help with your actual software (for example WordPress), not just the server.</p>
<h3>Support channels at the providers we track</h3>
<table>
<thead><tr><th>Provider</th><th>Reported support channels</th></tr></thead>
<tbody>
<tr><td>Hostinger</td><td>24/7 live chat and tickets; phone support generally not offered</td></tr>
<tr><td>Bluehost</td><td>24/7 chat and phone</td></tr>
<tr><td>Hosting.com</td><td>Chat, tickets and phone (historically, as A2 Hosting)</td></tr>
<tr><td>Domain.com</td><td>Chat and phone</td></tr>
<tr><td>BigRock</td><td>24/7 chat and phone (reported); India-focused</td></tr>
<tr><td>Network Solutions</td><td>Phone and chat; reviews describe quality as inconsistent</td></tr>
<tr><td>UltaHost</td><td>24/7 chat and tickets (reported)</td></tr>
</tbody>
</table>
<h3>How to test support before you commit</h3>
<ol>
<li><strong>Ask a pre-sales question</strong> through live chat and time the response.</li>
<li><strong>Ask something specific</strong>, such as "How do I change the PHP version?" or "Do you include daily backups on this plan, and how do I restore one?" Vague or scripted answers are a warning sign.</li>
<li><strong>During your trial</strong>, open a real ticket about a small technical issue and judge both speed and competence.</li>
<li><strong>Check the knowledge base</strong> - good documentation means you will rarely need to wait for an agent.</li>
</ol>
<p>Free <strong>site migration</strong> is another support feature worth weighing. Many hosts will move an existing site for you, which removes most of the risk of switching.</p>`,
  },
  {
    heading: "How do web hosting money-back guarantees work?",
    body: `<p>Most reputable hosts offer a <strong>30-day money-back guarantee</strong> on hosting. If you cancel within the window you get a refund of the hosting fee - but usually <strong>not</strong> of domain registration fees, add-ons or renewals. Read the refund policy before you pay, because the exclusions are where surprises happen.</p>
<h3>Common refund exclusions</h3>
<ul>
<li><strong>Domain fees</strong> - even a "free" domain may be deducted from your refund at its regular price, because the registration itself cannot be undone.</li>
<li><strong>Add-ons</strong> - privacy protection, premium SSL, email, backups and security tools are often non-refundable.</li>
<li><strong>Renewals</strong> - many guarantees cover only the first purchase, not automatic renewals.</li>
<li><strong>Certain plan types</strong> - VPS, dedicated servers and some promotional bundles may have shorter or no guarantees.</li>
</ul>
<h3>Money-back terms at the providers we track</h3>
<p>Hostinger, Bluehost, Domain.com and UltaHost are reported to offer 30-day money-back guarantees on hosting. BigRock's 30-day guarantee reportedly applies only to eligible first-time purchases, excluding renewals, combo offers, upgrades and add-ons. A2 Hosting historically offered an "anytime" prorated guarantee; confirm Hosting.com's current policy after its 2025 rebrand. For Network Solutions, check the current terms directly.</p>
<h3>Use the guarantee as a free trial</h3>
<p>The money-back window is the single best tool you have as a buyer. Within those 30 days you can install your site, measure speed from your audience's region, test support, try a backup restore and confirm the renewal price - then decide. If anything disappoints, cancel before the deadline. Set a reminder on day 20 so you have time to act.</p>`,
  },
  {
    heading: "What does unlimited hosting really mean?",
    body: `<p>"Unlimited" in web hosting almost always means <strong>unmetered within a fair-use policy</strong>, not truly unlimited. Providers advertise unlimited bandwidth, storage, websites or email accounts, but their terms of service still limit how much CPU, memory, file count (inodes) and server resources a single account can use. When you hit those limits, your site is throttled, you are asked to upgrade, or in extreme cases your account is suspended.</p>
<h3>The limits that actually constrain you</h3>
<table>
<thead><tr><th>Limit</th><th>What it is</th><th>When it bites</th></tr></thead>
<tbody>
<tr><td>CPU usage</td><td>Share of processor time your account may use</td><td>Traffic spikes, heavy plugins, uncached pages</td></tr>
<tr><td>Memory (RAM)</td><td>Memory available to your site's processes</td><td>Large WooCommerce stores, page builders, imports</td></tr>
<tr><td>Entry processes</td><td>Simultaneous connections being processed</td><td>Many concurrent visitors</td></tr>
<tr><td>Inodes</td><td>Total number of files and folders</td><td>Many small files, email storage, caches, old backups</td></tr>
<tr><td>Database size</td><td>Maximum size per database</td><td>Large stores and forums</td></tr>
<tr><td>Storage</td><td>Disk space, even on "unlimited" plans</td><td>Media-heavy sites, local backups</td></tr>
</tbody>
</table>
<p>A plan with clearly stated, generous limits is better than a plan that says "unlimited" and hides the real limits in the acceptable use policy. Several hosts have moved away from "unlimited" labels toward specific allowances - Network Solutions, for example, is reported to list 10 GB, 20 GB and 40 GB of storage across its three tiers - which makes plans easier to compare honestly.</p>
<p>For most small sites, these limits never come into play. They matter when your site grows, and the good news is that the fix is usually a simple upgrade to a higher tier or a cloud plan at the same host.</p>`,
  },
  {
    heading: "Who owns your web host, and why does it matter?",
    body: `<p>Many web hosting brands that look independent are owned by the same few companies. Ownership matters because it can affect pricing, support quality, infrastructure and how a brand changes over time - and because "comparing" two hosts that share an owner may be less of a comparison than it seems.</p>
<h3>The big groups behind the brands on our list</h3>
<ul>
<li><strong>Newfold Digital</strong>, headquartered in Jacksonville, Florida and owned by private equity firm Clearlake Capital, was formed in 2021 by combining Endurance Web Presence and Web.com Group. Its brands include <strong>Bluehost</strong>, <strong>Network Solutions</strong>, <strong>Domain.com</strong> and <strong>BigRock</strong>, among others. In 2025 it folded the Web.com brand into Network Solutions.</li>
<li><strong>World Host Group</strong> acquired A2 Hosting in January 2025 and rebranded it to <strong>Hosting.com</strong> in April 2025. The group also owns FastComet and Rocket.net.</li>
<li><strong>Hostinger</strong> is independent - founded in 2004 in Lithuania and not part of the large hosting groups.</li>
<li><strong>UltaHost</strong> is an independent, younger company founded around 2018-2019 and registered in Delaware.</li>
</ul>
<h3>What consolidation means for you</h3>
<ul>
<li><strong>Brands can change.</strong> Rebrands, plan renames and policy changes often follow acquisitions - Bluehost renamed its plans to Starter, Business and Pro in 2025, and A2 Hosting became Hosting.com. Check current terms rather than relying on old reviews.</li>
<li><strong>Sister brands target different markets.</strong> Within Newfold, Bluehost focuses on WordPress users, BigRock on India, and Domain.com and Network Solutions on domain customers. Pick the brand whose focus matches you.</li>
<li><strong>Independence is not automatically better or worse.</strong> Large groups bring resources and scale; independent hosts can move faster. Judge each host on its own record.</li>
</ul>`,
  },
  {
    heading: "How do the top web hosting providers compare?",
    body: `<p>Here is how the seven providers in our rankings compare on the factors that matter most. Figures are approximate, third-party-reported snapshots from 2025-2026; always confirm current terms on the provider's site.</p>
<table>
<thead><tr><th>Provider</th><th>Starting price</th><th>Renewal</th><th>Storage</th><th>Control panel</th><th>Backups</th><th>Money-back</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/hostinger">Hostinger</a></td><td>~$2-$3/mo (48-mo)</td><td>~$10.99/mo</td><td>SSD on Premium; NVMe higher</td><td>hPanel</td><td>Weekly/daily</td><td>30 days</td></tr>
<tr><td><a href="/reviews/bluehost">Bluehost</a></td><td>~$3.99/mo (36-mo)</td><td>~$9.99-$15.99/mo</td><td>NVMe (10 GB Starter)</td><td>Custom</td><td>Paid on Starter</td><td>30 days</td></tr>
<tr><td><a href="/reviews/hosting-com">Hosting.com</a></td><td>~$2-$4/mo</td><td>~$10.99+/mo</td><td>SSD/NVMe by plan</td><td>cPanel</td><td>Check plan</td><td>Check policy</td></tr>
<tr><td><a href="/reviews/domain-com">Domain.com</a></td><td>~$3.75/mo (1st year)</td><td>Higher</td><td>Check plan</td><td>Custom</td><td>Check plan</td><td>30 days</td></tr>
<tr><td><a href="/reviews/bigrock">BigRock</a></td><td>From ~INR 69-199/mo</td><td>~2x intro</td><td>SSD; NVMe on VPS</td><td>cPanel</td><td>Check plan</td><td>30 days (first purchase)</td></tr>
<tr><td><a href="/reviews/network-solutions">Network Solutions</a></td><td>~$2.99/mo (intro)</td><td>Regular after 12 mo</td><td>10-40 GB</td><td>Custom</td><td>Check plan</td><td>Check policy</td></tr>
<tr><td><a href="/reviews/ultahost">UltaHost</a></td><td>~$2.99-$3.80/mo</td><td>~$5.99+/mo</td><td>NVMe</td><td>cPanel</td><td>Free (reported)</td><td>30 days</td></tr>
</tbody>
</table>
<h3>Provider snapshots</h3>
<p><strong>Hostinger - best overall value.</strong> Founded in 2004 and independent, Hostinger combines some of the lowest intro prices in the industry with backups on every shared plan, a free first-year domain on Premium and above, an easy hPanel and data centers on several continents. Its Trustpilot rating is around 4.6 across roughly 69,000 reviews (third-party snapshot). The trade-off: the lowest price needs a 48-month prepay, renewals are several times higher, and some allowances were reportedly trimmed in 2025. <a href="/reviews/hostinger">Read the Hostinger review</a>.</p>
<p><strong>Bluehost - best for WordPress beginners.</strong> Founded in 2003 and owned by Newfold Digital, Bluehost offers a WordPress-first dashboard, a free first-year domain, 24/7 phone and chat support and published renewal tables. Its Starter plan reportedly lacks free daily backups, and checkout upsells are common. <a href="/reviews/bluehost">Read the Bluehost review</a>.</p>
<p><strong>Hosting.com - best for cPanel and speed.</strong> The rebranded A2 Hosting keeps cPanel hosting and LiteSpeed-powered Turbo tiers on AMD EPYC processors, plus VPS, dedicated and reseller plans, under World Host Group. Plan details and policies are still settling after the 2025 rebrand, and renewals can be steep. <a href="/reviews/hosting-com">Read the Hosting.com review</a>.</p>
<p><strong>Domain.com - best for a domain plus a simple site.</strong> A Newfold-owned registrar whose hosting suits people who want domains and a basic website in one account with annual billing. Email is reportedly a paid add-on. <a href="/reviews/domain-com">Read the Domain.com review</a>.</p>
<p><strong>BigRock - best for Indian websites.</strong> Launched in 2010 in Mumbai and now part of Newfold, BigRock offers INR billing, cPanel and Windows hosting and local support. Its refund policy covers eligible first-time purchases only. <a href="/reviews/bigrock">Read the BigRock review</a>.</p>
<p><strong>Network Solutions - best for established businesses already using it.</strong> Founded in 1979, Network Solutions bundles domains, email and hosting. It is pricier than budget hosts after intro offers, reportedly reserves free SSL for higher tiers and uses US-only data centers. <a href="/reviews/network-solutions">Read the Network Solutions review</a>.</p>
<p><strong>UltaHost - best budget NVMe and VPS.</strong> A younger host with NVMe on every plan, cPanel, reported free backups and SSL, very cheap VPS and gentler reported renewals. Its Trustpilot reviews are mixed (around 3.5 on its main profile) and public corporate information is limited. <a href="/reviews/ultahost">Read the UltaHost review</a>.</p>
<p>For full rankings see the <a href="/">comparison page</a>, and for head-to-heads see <a href="/hostinger-vs-bluehost">Hostinger vs Bluehost</a>, <a href="/hostinger-vs-hosting-com">Hostinger vs Hosting.com</a> and <a href="/hosting-com-vs-ultahost">Hosting.com vs UltaHost</a>.</p>`,
  },
];

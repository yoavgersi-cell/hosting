import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 7: Black Friday timing, FAQ,
// verdict, research notes and sources.

export const part7: ArticleSection[] = [
  {
    heading: "Should you buy small business hosting during Black Friday and Cyber Monday?",
    body: `<div class="qa"><strong>Short answer:</strong> It can be a good time to buy, because hosts run some of their lowest prices of the year. But the discount usually applies only to the first term - renewals are at the regular rate. Compare total cost over the term, check the renewal price and choose the term length you would choose anyway.</div>
<p>In 2026, Black Friday falls on 27 November and Cyber Monday on 30 November, but hosting sales start much earlier. Hostinger's Black Friday page describes a sale running from 19 October to 14 December 2026, and Bluehost's blog describes a Black Friday offer on VPS, VDS and dedicated servers running through 30 November 2026. Third-party deal sites reported Hosting.com Black Friday pricing for 12-month terms in early November. Offers change frequently, so check each host's own page.</p>
<h3>How to read a hosting deal</h3>
<ul>
<li><strong>Look past the percentage.</strong> "Up to 85% off" is usually measured against the regular monthly price and applies to the longest term.</li>
<li><strong>Find the renewal price</strong> and calculate the cost over the full term plus one renewal year.</li>
<li><strong>Check what the plan includes.</strong> A cheaper plan without daily backups may cost you more in add-ons.</li>
<li><strong>Do not over-commit.</strong> Prepaying four years makes sense only if you are confident in the host and the plan.</li>
<li><strong>Use the money-back window</strong> to test support and performance before you are locked in.</li>
</ul>
<p>Already a customer? Some hosts let existing customers extend at sale prices, and support teams can sometimes help. It is worth asking before your renewal date.</p>`,
  },
  {
    heading: "Is Hostinger good for small business?",
    body: `<p>Yes. Hostinger is our top pick for most small businesses because of its low prices, easy control panel and daily backups on its Unlimited and Cloud plans. The main things to plan for are the long prepaid term needed for the lowest price and the higher renewal rate. If you want phone support, Bluehost is the better choice.</p>`,
  },
  {
    heading: "Is Bluehost good for small business?",
    body: `<p>Yes, especially for WordPress sites and owners who want phone support. Bluehost offers a guided WordPress setup, a free first-year domain and 24/7 phone and chat. Its current shared plans list weekly backups, so add a backup solution if your site changes often. See our full answer in <a href="/articles/is-bluehost-good">is Bluehost good?</a></p>`,
  },
  {
    heading: "How much should a small business pay for web hosting?",
    body: `<p>For a typical small business website, expect roughly $2-$4 a month during an intro term on a long prepay, and roughly $10-$17 a month at renewal on our top picks' shared plans. Busier sites, online stores and cloud or managed plans cost more. Always compare the renewal price, not just the intro price.</p>`,
  },
  {
    heading: "Can I host my business website and email with the same company?",
    body: `<p>Yes, and most shared hosting plans include email accounts at your domain. It is convenient and cheap. The trade-off is that a problem with your hosting account can affect both. Many businesses prefer Google Workspace or Microsoft 365 for email and keep the website with a host - you can point your domain's email records to one provider and your website to another.</p>`,
  },
  {
    heading: "Do I need a dedicated server for my business website?",
    body: `<p>Almost certainly not. Dedicated servers are for high-traffic sites and specialized workloads. Most small businesses are well served by shared hosting, and a cloud plan or VPS covers the next stage of growth. Move up only when your resource usage or business needs clearly demand it.</p>`,
  },
  {
    heading: "What happens to my website if I stop paying for hosting?",
    body: `<p>Your host will usually suspend the account after the payment due date, taking the site and any hosted email offline, and may delete your data after a grace period. Your domain is separate: if its registration lapses, it can eventually be released for others to register. Keep auto-renew on for both, use a card that will not expire unnoticed, and keep your own backups.</p>`,
  },
  {
    heading: "Is it better to pay monthly or for several years upfront?",
    body: `<p>Paying for several years upfront gives the lowest monthly price but locks you in. Paying monthly costs more but gives you flexibility. If you are confident in the host and the plan, a longer term usually saves money over the intro period; if you are testing, start shorter or use the money-back guarantee period to decide.</p>`,
  },
  {
    heading: "Can my web host handle a sudden traffic spike from an ad or press mention?",
    body: `<p>A well-cached site on a good shared plan can absorb a moderate spike. Very large or sustained spikes can hit shared hosting resource limits and slow or suspend the site. If you are planning a campaign, temporarily upgrade to a higher tier or cloud plan, make sure caching is on, and consider a CDN.</p>`,
  },
  {
    heading: "Does web hosting include an SSL certificate?",
    body: `<p>With every host we recommend, yes. Hostinger, Bluehost and Hosting.com all include free SSL certificates that renew automatically, so your site loads over HTTPS without extra cost. Paid certificates with extended validation exist, but browsers no longer display them differently, and most small businesses do not need one. If a host charges for basic SSL, treat that as a red flag.</p>`,
  },
  {
    heading: "Can I start on a cheap plan and upgrade later?",
    body: `<p>Yes, and that is usually the smart approach. All three of our top picks let you move to a higher shared tier, a cloud plan or a VPS without changing provider. Upgrading within the same host is normally a few clicks or a support request, and it avoids a migration. Check how the remaining value of a prepaid term is handled when you upgrade mid-term, as policies vary.</p>`,
  },
  {
    heading: "Our verdict: which host should your small business choose?",
    body: `<p>For most small businesses, we recommend <strong>Hostinger</strong>, on the Unlimited plan if your site matters to your revenue, because daily backups and extra resources are worth the small difference in price. Choose <strong>Bluehost</strong> if you want a guided WordPress experience and the reassurance of phone support. Choose <strong>Hosting.com</strong> if you prefer cPanel, want daily backups as standard and may need a VPS later.</p>
<table>
<thead><tr><th>If you are...</th><th>Our recommendation</th></tr></thead>
<tbody>
<tr><td>A local service business on a budget</td><td>Hostinger Premium or Unlimited</td></tr>
<tr><td>A non-technical owner who wants to call for help</td><td>Bluehost</td></tr>
<tr><td>Working with a designer who uses cPanel</td><td>Hosting.com</td></tr>
<tr><td>Selling online as your main business</td><td>Shopify, or WooCommerce on a cloud plan</td></tr>
<tr><td>A healthcare practice handling patient data</td><td>Ordinary hosting for marketing pages, plus HIPAA-compliant tools with a BAA</td></tr>
<tr><td>Not wanting to touch hosting at all</td><td>A website builder</td></tr>
</tbody>
</table>
<p>Whatever you choose, the same rules protect you: own your domain and accounts, budget on renewal prices, keep independent backups, turn on two-factor authentication and set up SPF, DKIM and DMARC for your email. Get those right and almost any reputable host will serve your business well.</p>`,
  },
  {
    heading: "How we researched this guide",
    body: `<p>This guide was researched in November 2026. We combined hosts' published plan pages, pricing and support documentation with third-party pricing checks, independent industry research and official sources on standards and regulation. Search-demand research guided which questions we answered.</p>
<ul>
<li><strong>Prices</strong> are approximate snapshots from October-November 2026 and exclude tax. Where sources disagreed, we quote a range or say so.</li>
<li><strong>Figures marked "reported"</strong> come from third-party sources rather than a host's own page. We recommend confirming them at checkout.</li>
<li><strong>Legal and compliance sections</strong> are general information, not legal advice.</li>
<li><strong>Updates:</strong> we will revise this guide as plans and prices change. If you spot something out of date, please <a href="/contact">contact us</a>.</li>
</ul>`,
  },
  {
    heading: "Sources and further reading",
    body: `<ul>
<li>Clutch - <a href="https://clutch.co/resources/state-of-small-business-websites-2025" rel="nofollow noopener" target="_blank">State of Small Business Websites 2025</a> (August 2025)</li>
<li>US SBA Office of Advocacy - <a href="https://advocacy.sba.gov/category/research/research-publications/frequently-asked-questions/" rel="nofollow noopener" target="_blank">Frequently Asked Questions About Small Business</a> (2026 edition)</li>
<li>BrightLocal - <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" rel="nofollow noopener" target="_blank">Local Consumer Review Survey 2026</a></li>
<li>Hostinger - <a href="https://www.hostinger.com/support/10717644-new-web-and-cloud-hosting-limits-at-hostinger/" rel="nofollow noopener" target="_blank">New web and cloud hosting limits</a> (support documentation)</li>
<li>Hostinger - <a href="https://www.hostinger.com/black-friday-web-hosting-deals" rel="nofollow noopener" target="_blank">Black Friday web hosting deals</a></li>
<li>Bluehost - <a href="https://www.bluehost.com/web-hosting" rel="nofollow noopener" target="_blank">Web hosting plans</a></li>
<li>Bluehost - <a href="https://www.bluehost.com/blog/vps-black-friday/" rel="nofollow noopener" target="_blank">VPS Black Friday</a></li>
<li>Hosting.com - <a href="https://kb.hosting.com/docs/uptime-commitment-and-service-credits" rel="nofollow noopener" target="_blank">Uptime commitment and service credits</a></li>
<li>Google - <a href="https://developers.google.com/search/blog/2023/05/introducing-inp" rel="nofollow noopener" target="_blank">Introducing INP to Core Web Vitals</a> and <a href="https://web.dev/articles/vitals" rel="nofollow noopener" target="_blank">Web Vitals</a></li>
<li>HTTP Archive - <a href="https://almanac.httparchive.org/en/2025/performance" rel="nofollow noopener" target="_blank">Web Almanac 2025: Performance</a></li>
<li>StatCounter - <a href="https://gs.statcounter.com/platform-market-share/desktop-mobile/" rel="nofollow noopener" target="_blank">Desktop vs mobile market share</a></li>
<li>Patchstack - <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" rel="nofollow noopener" target="_blank">State of WordPress Security in 2026</a></li>
<li>Verizon - <a href="https://www.verizon.com/business/resources/reports/dbir/" rel="nofollow noopener" target="_blank">Data Breach Investigations Report 2025</a></li>
<li>9to5Google - <a href="https://9to5google.com/2025/01/15/google-workspace-price-increase-2025/" rel="nofollow noopener" target="_blank">Google Workspace price increase</a> (January 2025)</li>
<li>Petri - <a href="https://petri.com/microsoft-outlook-email-authentication-rules/" rel="nofollow noopener" target="_blank">Microsoft Outlook email authentication rules</a></li>
<li>PCI Security Standards Council - <a href="https://blog.pcisecuritystandards.org/important-updates-announced-for-merchants-validating-to-self-assessment-questionnaire-a" rel="nofollow noopener" target="_blank">Updates for merchants validating to SAQ A</a> (January 2025)</li>
<li>SBA Office of Advocacy - <a href="https://advocacy.sba.gov/2026/04/27/doj-extends-compliance-dates-for-state-and-local-governments-to-make-their-websites-accessible/" rel="nofollow noopener" target="_blank">DOJ extends ADA Title II web accessibility compliance dates</a> (April 2026)</li>
<li>American Bar Association - <a href="https://www.americanbar.org/groups/business_law/resources/business-law-today/2025-august/digital-accessibility-under-title-iii-ada/" rel="nofollow noopener" target="_blank">Digital accessibility under Title III of the ADA</a> (August 2025)</li>
<li>UsableNet - <a href="https://blog.usablenet.com/ada-web-lawsuit-trends-2026" rel="nofollow noopener" target="_blank">ADA web lawsuit trends</a></li>
<li>Bird &amp; Bird - <a href="https://twobirds.com/en/insights/2024/global/european-accessibility-act" rel="nofollow noopener" target="_blank">European Accessibility Act overview</a></li>
<li>Paubox - <a href="https://www.paubox.com/blog/popular-non-hipaa-compliant-web-hosts" rel="nofollow noopener" target="_blank">Popular non-HIPAA compliant web hosts</a></li>
<li>Domain Name Wire - <a href="https://domainnamewire.com/2026/04/23/breaking-verisign-raising-wholesale-com-prices/" rel="nofollow noopener" target="_blank">Verisign raising wholesale .com prices</a> (April 2026)</li>
<li>ICANN - <a href="https://www.icann.org/resources/pages/benefits-2013-09-16-en" rel="nofollow noopener" target="_blank">Registrants' benefits and responsibilities</a></li>
<li>PetaPixel - <a href="https://petapixel.com/2026/07/17/squarespace-is-increasing-prices-by-up-to-26/" rel="nofollow noopener" target="_blank">Squarespace price increase</a> (July 2026)</li>
</ul>
<p>Related guides on this site: <a href="/articles/how-to-choose-web-hosting">how to choose web hosting</a>, <a href="/articles/best-wordpress-hosting">best WordPress hosting</a>, <a href="/articles/web-hosting-statistics">web hosting statistics</a> and <a href="/articles/who-owns-your-web-host">who owns your web host</a>.</p>`,
  },
];

import type { ArticleSection } from "@/lib/config";

// Part 8 of "Why Web Hosting Is Getting More Expensive in 2026".
// Timeline, budgets, provider responses, provider-by-provider exposure,
// cost-cutting, reading notices, glossary and extra FAQs. Slotted into the
// guide by index.ts.

export const timeline: ArticleSection = {
  heading: "Timeline: how hosting costs changed in 2025-2026",
  body: `<table>
<thead><tr><th>Date</th><th>Event</th></tr></thead>
<tbody>
<tr><td>Q4 2025</td><td>TrendForce reports server DRAM contract prices up about 43-48% quarter on quarter</td></tr>
<tr><td>1 January 2026</td><td>CloudLinux OS Legacy (+~5%) and ImunifyAV+ (first phase) price changes take effect</td></tr>
<tr><td>January 2026</td><td>A 25% US tariff on certain advanced AI chips takes effect, with US data centers exempt</td></tr>
<tr><td>Early 2026</td><td>TrendForce raises its Q1 2026 DRAM forecast to 90-95% growth; Counterpoint reports memory prices up 80-90% in Q1</td></tr>
<tr><td>February 2026</td><td>Hetzner announces price increases effective 1 April</td></tr>
<tr><td>March 2026</td><td>OVHcloud's first 2026 price wave; Akamai announces surcharges and renewal increases, citing server costs up 75-200%</td></tr>
<tr><td>March-May 2026</td><td>netcup raises prices for new and existing contracts (reported)</td></tr>
<tr><td>1 April 2026</td><td>Hetzner's first 2026 increase takes effect</td></tr>
<tr><td>April 2026</td><td>Akamai reports AI bot activity grew about 300% in 2025; Verisign gives notice of the November .com increase</td></tr>
<tr><td>1 June 2026</td><td>Scaleway price increases take effect</td></tr>
<tr><td>15 June 2026</td><td>Hetzner's second 2026 increase takes effect for new orders and rescaled servers</td></tr>
<tr><td>July 2026</td><td>DigitalOcean announces GPU pricing updates; Cloudflare announces next steps for AI crawler controls</td></tr>
<tr><td>August 2026</td><td>OVHcloud announces a second wave, with some servers up about 87%; Verisign files notice of the .net increase</td></tr>
<tr><td>October 2026</td><td>cPanel, Plesk and WHMCS 2027 increases reported; ImunifyAV+ second phase takes effect</td></tr>
<tr><td>1 November 2026</td><td>.com wholesale price rises from $10.26 to $10.97</td></tr>
<tr><td>16 December 2026</td><td>cPanel 2027 prices take effect</td></tr>
<tr><td>1 January 2027</td><td>Plesk and WHMCS increases take effect</td></tr>
<tr><td>1 March 2027</td><td>.net wholesale price rises from $10.91 to $12.00</td></tr>
</tbody>
</table>`,
};

export const budgets: ArticleSection = {
  heading: "How much will it cost to run a website in 2027?",
  body: `<p>The honest answer is that it depends on your site and your host, and most of the changes above affect different line items by different amounts. The table below shows which parts of a typical website budget are exposed to the 2026 cost pressures, using broad illustrative categories rather than any single provider's prices.</p>
<table>
<thead><tr><th>Budget item</th><th>Blog or small business site (shared hosting)</th><th>Online store (cloud or managed hosting)</th><th>Developer or agency (VPS)</th></tr></thead>
<tbody>
<tr><td>Hosting plan</td><td>Low exposure today; watch renewal rates</td><td>Moderate exposure; resource-heavy plans most affected</td><td>High exposure; several providers already raised prices</td></tr>
<tr><td>Control panel license</td><td>Usually bundled; indirect exposure</td><td>Depends on platform</td><td>Direct exposure to cPanel/Plesk increases if billed separately</td></tr>
<tr><td>.com domain renewal</td><td>Small increase from November 2026</td><td>Small increase from November 2026</td><td>Increases multiply across many client domains</td></tr>
<tr><td>Backups and storage</td><td>Watch for features moving to add-ons</td><td>Storage-heavy stores more exposed</td><td>Block storage and backup costs rising with SSD prices</td></tr>
<tr><td>Security and bot protection</td><td>Free tools often enough</td><td>Bot traffic can affect resource use</td><td>Security software licenses rising modestly</td></tr>
</tbody>
</table>
<h3>Three illustrative scenarios</h3>
<ul>
<li><strong>A blog on a long-term shared plan bought before renewal rates change</strong> may see almost no difference until renewal, apart from a slightly higher .com renewal.</li>
<li><strong>A small business renewing a shared plan in 2027</strong> could see a higher renewal rate if its host raises regular prices, plus the domain increase - the biggest lever is comparing alternatives before renewal.</li>
<li><strong>A developer running a few VPS instances on a budget provider</strong> is the most likely to feel a meaningful increase, especially when adding or resizing servers, plus any separately billed control panel licenses.</li>
</ul>
<p>The common thread: the earlier you plan, the more of the increase you can avoid.</p>`,
};

export const providerResponses: ArticleSection = {
  heading: "How are hosting companies responding to rising costs?",
  body: `<p>Providers have taken different approaches, and knowing them helps you read your own host's announcements.</p>
<ul>
<li><strong>Straight price increases.</strong> Hetzner, OVHcloud, Scaleway and netcup raised list prices, in several cases more than once.</li>
<li><strong>New-order-only pricing.</strong> Hetzner's June 2026 change applied to new orders and to rescaling existing instances, leaving existing servers on their old prices unless changed.</li>
<li><strong>Staged increases.</strong> OVHcloud applied its August 2026 changes to new orders in September and to existing hardware in October.</li>
<li><strong>Surcharges and renewal increases.</strong> Akamai described interim surcharges and higher renewal pricing rather than immediate list-price rises.</li>
<li><strong>Individual notices.</strong> IONOS notified affected customers by email rather than publishing a general increase.</li>
<li><strong>Securing supply.</strong> Large cloud providers signed long-term memory supply agreements, and industry coverage described Hostinger placing a large server order amid the shortage.</li>
<li><strong>Controlling bot load.</strong> Hosts and CDNs introduced or expanded AI bot controls, from WP Engine's bot management to Cloudflare's default AI crawler blocking.</li>
<li><strong>Holding headline prices.</strong> Major shared hosting brands kept advertised intro prices stable through 2026, at least at the time of writing.</li>
</ul>
<p>When your host announces a change, check which of these patterns applies: does it affect existing customers or only new orders, does it take effect immediately or at renewal, and does any action on your part - like upgrading - trigger the new price?</p>`,
};

export const ourProviders: ArticleSection = {
  heading: "What do rising hosting costs mean for Hostinger, Bluehost and other popular hosts?",
  body: `<p>We found no sourced 2026 headline price increases for the shared hosting providers we rank. That does not mean nothing will change. Here is how each one is exposed to the cost pressures in this guide, based on facts we have verified - not predictions.</p>
<table>
<thead><tr><th>Provider</th><th>Control panel</th><th>Exposure to cPanel increases</th><th>Other relevant facts</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/hostinger">Hostinger</a></td><td>hPanel (in-house)</td><td>Not on shared plans using hPanel</td><td>Industry coverage in August 2026 described a large server order amid the memory shortage</td></tr>
<tr><td><a href="/reviews/bluehost">Bluehost</a></td><td>Custom dashboard</td><td>Not on plans using its own dashboard</td><td>Owner Newfold is migrating its infrastructure to Oracle Cloud</td></tr>
<tr><td><a href="/reviews/hosting-com">Hosting.com</a></td><td>cPanel</td><td>Yes - cPanel-based plans</td><td>Formerly A2 Hosting; part of hosting.com group since 2025</td></tr>
<tr><td><a href="/reviews/ultahost">UltaHost</a></td><td>cPanel</td><td>Yes - cPanel-based plans</td><td>NVMe storage on all plans means storage costs matter</td></tr>
<tr><td><a href="/reviews/bigrock">BigRock</a></td><td>cPanel (Linux plans)</td><td>Yes - cPanel-based plans</td><td>Prices in Indian rupees; dollar-priced licenses are affected by exchange rates</td></tr>
<tr><td><a href="/reviews/domain-com">Domain.com</a></td><td>Custom dashboard</td><td>Not on plans using its own dashboard</td><td>A registrar - .com renewal pricing applies to its domain customers</td></tr>
<tr><td><a href="/reviews/network-solutions">Network Solutions</a></td><td>Custom account</td><td>Not on plans using its own account system</td><td>A registrar - .com and .net increases apply to its domain customers</td></tr>
</tbody>
</table>
<p>Exposure is not destiny: a host exposed to cPanel increases may absorb them, and a host with its own panel may raise prices for other reasons. Use this as context when you compare renewal prices and read customer notices. Our reviews list each host's reported intro and renewal prices.</p>`,
};

export const cutCosts: ArticleSection = {
  heading: "How can you reduce your hosting costs without switching hosts?",
  body: `<p>Before you move, check whether you can lower your bill where you are:</p>
<ol>
<li><strong>Downgrade if you are over-provisioned.</strong> Check your resource usage. Many sites run happily on a lower tier.</li>
<li><strong>Remove add-ons you do not use</strong> - domain privacy on domains you no longer need, duplicate security tools, unused email accounts or extra IP addresses.</li>
<li><strong>Consolidate sites</strong> onto one multi-site plan if they are small, rather than paying for several single-site plans.</li>
<li><strong>Block unwanted bots</strong> so crawler traffic does not push you into a bigger plan.</li>
<li><strong>Optimize your site</strong> - caching, image compression and fewer heavy plugins - so you can stay on a smaller plan longer.</li>
<li><strong>Pay annually instead of monthly</strong> if you are sure you will stay; monthly billing usually costs more.</li>
<li><strong>Renew domains for multiple years</strong> and drop domains you no longer use.</li>
<li><strong>Ask for a loyalty or renewal discount.</strong> It costs nothing to ask, and some hosts will offer one.</li>
</ol>
<p>If none of that brings the price to a level you are comfortable with, switching becomes a reasonable option - and new-customer intro pricing elsewhere may be substantially lower.</p>`,
};

export const readNotice: ArticleSection = {
  heading: "How do you read a hosting price increase email?",
  body: `<p>Price change notices are often written to be reassuring rather than clear. Look for these details:</p>
<table>
<thead><tr><th>Question</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Which products and plans are affected?</td><td>Some notices list every product; check that yours is included</td></tr>
<tr><td>Does it apply to existing customers or only new orders?</td><td>Several 2026 increases applied only to new orders or resized servers</td></tr>
<tr><td>When does it take effect - immediately, at a set date or at renewal?</td><td>Determines how long you have to compare or lock in pricing</td></tr>
<tr><td>Does any action trigger the new price?</td><td>Upgrades, resizes or plan changes can move you to current pricing</td></tr>
<tr><td>Are features or limits changing too?</td><td>A price rise can come with more - or less - included</td></tr>
<tr><td>Can you lock in the old price?</td><td>Some providers allow renewing or prepaying before the change</td></tr>
<tr><td>What are your options if you leave?</td><td>Check refund terms for prepaid time and how to export your data</td></tr>
</tbody>
</table>
<p>Keep a copy of the notice. If you decide to stay, note the new renewal date and price; if you decide to leave, give yourself time to migrate before the change takes effect.</p>`,
};

export const pricingGlossary: ArticleSection = {
  heading: "Hosting pricing glossary: key terms explained",
  body: `<table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Contract price</td><td>The price large buyers pay memory makers under supply agreements; tracked by firms such as TrendForce</td></tr>
<tr><td>DRAM</td><td>Dynamic random-access memory - the RAM in servers</td></tr>
<tr><td>Enterprise SSD</td><td>A solid-state drive designed for servers</td></tr>
<tr><td>Intro price</td><td>The discounted price for the first billing term</td></tr>
<tr><td>License fee</td><td>What hosts pay software vendors such as cPanel, Plesk or WHMCS</td></tr>
<tr><td>NAND flash</td><td>The memory chips inside SSDs</td></tr>
<tr><td>NVMe</td><td>A fast interface for SSDs, common in modern hosting</td></tr>
<tr><td>Per-account pricing</td><td>License pricing based on the number of hosting accounts on a server, used by cPanel since 2019</td></tr>
<tr><td>Price lock</td><td>A guarantee that your price will not change for a set period - rare in hosting beyond the prepaid term</td></tr>
<tr><td>Registry</td><td>The operator of a top-level domain, such as Verisign for .com and .net</td></tr>
<tr><td>Registrar</td><td>The company you buy a domain from</td></tr>
<tr><td>Renewal rate</td><td>The regular price charged after the intro term ends</td></tr>
<tr><td>Rescaling</td><td>Changing the size of a VPS or cloud server - sometimes triggers current pricing</td></tr>
<tr><td>Surcharge</td><td>An extra fee added to an existing price, often described as temporary</td></tr>
<tr><td>Wholesale price</td><td>What registrars pay the registry for each domain</td></tr>
</tbody>
</table>`,
};

export const extraFaqs: ArticleSection[] = [
  {
    heading: "Should I buy hosting before the cPanel price increase?",
    body: `<p>If you were already planning to buy cPanel-based hosting - particularly a VPS or dedicated server where the license is billed separately - it can make sense to buy or renew before 16 December 2026, provided your host's terms lock in the current price for your term. On shared hosting the license cost is usually bundled into your plan, so the timing matters less than the renewal rate. Either way, do not rush into a host you have not evaluated just to beat a deadline.</p>`,
  },
  {
    heading: "Are managed WordPress hosts raising prices?",
    body: `<p>At the time of writing we found no sourced 2026 price increases from the managed WordPress hosts we checked, including Kinsta, WP Engine and Cloudways. Managed WordPress often runs on cloud infrastructure, which is more directly exposed to memory and storage costs, so it is worth watching renewal notices. WP Engine did add bot management features in 2026, reflecting the growing cost of automated traffic.</p>`,
  },
  {
    heading: "Are hosting prices rising in Europe and India?",
    body: `<p>Several of the most notable 2026 increases came from European providers - Hetzner and netcup in Germany, OVHcloud and Scaleway in France - so European VPS and server buyers have been directly affected. In India and other markets where hosting is priced in local currency, dollar-denominated software licenses such as cPanel become more expensive when the local currency weakens. For shared hosting customers in either region, the same advice applies: compare renewal prices and lock in good rates when you find them.</p>`,
  },
  {
    heading: "Is now a good time to buy web hosting?",
    body: `<p>If you need hosting, yes - waiting for prices to fall is unlikely to pay off given the scheduled increases and the outlook for memory prices. Shared hosting intro prices remained low at the time of writing, and seasonal sales such as Black Friday can lower them further. The key is to buy carefully: test the host, compare renewal rates, and choose a term that balances price protection against flexibility.</p>`,
  },
];

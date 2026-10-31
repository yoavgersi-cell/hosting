import type { ArticleSection } from "@/lib/config";

// Part 1 of "Why Web Hosting Is Getting More Expensive in 2026".
// Quick answer, what is happening, where shared hosting stands, who is
// affected. Facts from the research notes in index.ts.

export const part1: ArticleSection[] = [
  {
    heading: "Is web hosting getting more expensive in 2026?",
    body: `<div class="qa"><strong>Short answer:</strong> Yes - the cost of <em>running</em> web hosting rose sharply in 2026, but most mainstream shared hosting plans have not raised their headline prices yet. Server memory and storage prices surged as AI data centers bought up supply, several infrastructure providers (including Hetzner, OVHcloud, Scaleway and netcup) raised server and VPS prices, cPanel, Plesk and WHMCS announced higher license fees for 2027, and Verisign raised the wholesale price of .com domains by about 7% from 1 November 2026. If you are buying shared hosting, the biggest risk is a higher <strong>renewal</strong> price later - so comparing renewal rates and choosing your term carefully matters more than ever.</div>
<p>For most of the past decade, web hosting got steadily cheaper. Entry plans slipped to a few dollars a month, VPS servers became commodities, and generous storage and bandwidth allowances became standard. In 2026 that trend reversed at the infrastructure level. The components that hosting is built on - memory chips, solid-state drives, control panel software, domain registrations and electricity - all became more expensive within a few months of each other.</p>
<p>This guide explains what changed, why, and what it means for you as a hosting customer. It separates what has actually happened (with sources) from projections, shows which kinds of hosting are affected most, and finishes with a practical playbook for locking in a low price - including how to approach Black Friday deals in a year when costs are rising.</p>
<p><strong>Who this guide is for:</strong> anyone buying or renewing web hosting in the next year - bloggers and small businesses on shared hosting, WordPress site owners, online stores, developers running VPS servers, and agencies managing client sites. Each section starts with a direct answer, so you can jump to the part that applies to you using the table of contents.</p>
<p>We have kept the same rules as everywhere else on this site: figures come from providers' own announcements, regulatory filings, market research firms and established trade press; percentages are labeled with their source; and where we could not confirm something, we say so. Hosting prices change frequently, so always confirm current pricing on a provider's own site before you buy.</p>`,
  },
  {
    heading: "Why is web hosting getting more expensive?",
    body: `<p>Five cost pressures arrived at roughly the same time in 2025-2026. Any one of them would have nudged prices; together they changed the economics of the industry.</p>
<table>
<thead><tr><th>Cost driver</th><th>What happened</th><th>Who feels it most</th></tr></thead>
<tbody>
<tr><td>Server memory (DRAM)</td><td>Market researcher TrendForce forecast conventional DRAM contract prices rising 90-95% in Q1 2026 alone - a record quarterly jump - as AI data centers absorbed supply</td><td>VPS, cloud and dedicated servers; eventually all hosting</td></tr>
<tr><td>Storage (NAND / SSDs)</td><td>TrendForce forecast NAND prices up 55-60% and enterprise SSDs up 53-58% in Q1 2026, with further rises later in the year</td><td>Storage-heavy plans, backups, new servers</td></tr>
<tr><td>Infrastructure providers</td><td>Hetzner, OVHcloud, Scaleway, netcup and others raised server and VPS prices in 2026, some more than once</td><td>VPS and dedicated server buyers; developers; small hosts that rent servers</td></tr>
<tr><td>Software licenses</td><td>cPanel announced 2027 price rises effective 16 December 2026; Plesk and WHMCS rises take effect 1 January 2027</td><td>cPanel and Plesk hosts and their customers</td></tr>
<tr><td>Domains</td><td>Verisign raised the .com wholesale price from $10.26 to $10.97 from 1 November 2026, and the .net price rises from $10.91 to $12.00 on 1 March 2027</td><td>Everyone who owns a .com or .net domain</td></tr>
</tbody>
</table>
<p>Behind several of these sits one underlying force: <strong>the AI infrastructure build-out</strong>. Memory manufacturers have prioritized supply for AI and cloud servers, large cloud providers have locked in supply with long-term agreements, and data centers are consuming more electricity. Smaller providers - including many web hosts - compete for what is left, at higher prices.</p>
<p>The rest of this guide takes each driver in turn, then turns to what you can do about it.</p>`,
  },
  {
    heading: "Have shared hosting prices gone up yet?",
    body: `<p>Mostly, not yet - at least not in headline prices. Our research found <strong>no sourced 2026 headline price increases</strong> from the major shared hosting brands, including Hostinger, Bluehost, GoDaddy, SiteGround and Namecheap, nor from managed WordPress hosts such as Kinsta, WP Engine and Cloudways. Intro prices of a few dollars a month on long terms are still widely available.</p>
<p>There are good reasons shared hosting is buffered, at least for now:</p>
<ul>
<li><strong>Density.</strong> Shared hosting packs many accounts onto each server, so a higher memory cost per server is spread across many customers.</li>
<li><strong>Existing hardware.</strong> Servers bought before the price surge keep running for years. The cost hits when hosts expand or replace hardware.</li>
<li><strong>Scale and contracts.</strong> Large hosts buy hardware in bulk and can negotiate supply ahead of time. Industry coverage in August 2026 described Hostinger placing a large server order amid the memory shortage.</li>
<li><strong>Competition on intro prices.</strong> The headline price is a marketing tool, so hosts are reluctant to raise it.</li>
</ul>
<h3>Where shared hosting customers may feel it instead</h3>
<p>Rising costs do not have to show up as a higher sticker price. Industry commentators have pointed to several quieter ways hosting can become more expensive:</p>
<ul>
<li><strong>Higher renewal rates</strong> - one trade publication projected in June 2026 that shared hosting renewal prices could rise 10-20% over 2026-2028. That is a projection, not an announcement.</li>
<li><strong>Smaller plan allowances</strong> - less storage, fewer websites or fewer email accounts at the same price.</li>
<li><strong>Features moving to paid add-ons</strong> - for example backups or security tools.</li>
<li><strong>Longer terms required for the lowest price.</strong></li>
<li><strong>New fees</strong> passed through from license increases, as some hosts did after cPanel's 2019 pricing change.</li>
</ul>
<p>None of these is guaranteed, and different hosts will respond differently. But it is a good reason to read the renewal price and plan limits as carefully as the intro price.</p>`,
  },
  {
    heading: "Which types of hosting are most affected by rising costs?",
    body: `<p>The impact depends heavily on how much hardware sits behind each customer. The more dedicated resources you buy, the more directly memory and storage prices reach you.</p>
<table>
<thead><tr><th>Hosting type</th><th>Exposure to 2026 cost rises</th><th>Why</th><th>What has happened so far</th></tr></thead>
<tbody>
<tr><td>Shared hosting</td><td>Low to moderate (so far)</td><td>Costs spread across many accounts; existing hardware</td><td>No sourced headline increases at major brands; renewals and plan limits are the watch points</td></tr>
<tr><td>Managed WordPress</td><td>Moderate</td><td>Often runs on cloud infrastructure with more resources per site</td><td>No sourced 2026 increases at the managed hosts we checked</td></tr>
<tr><td>Cloud / VPS</td><td>High</td><td>You pay for dedicated memory and storage directly</td><td>Price rises at Hetzner, OVHcloud, Scaleway, netcup and others</td></tr>
<tr><td>Dedicated servers</td><td>Very high</td><td>An entire machine's memory and drives</td><td>Large increases at several providers, especially memory-heavy configurations</td></tr>
<tr><td>Domains (.com / .net)</td><td>Certain but modest</td><td>Wholesale price set by the registry</td><td>.com up about 7% from 1 November 2026; .net up about 10% from 1 March 2027</td></tr>
<tr><td>cPanel / Plesk hosting</td><td>Moderate</td><td>Per-account license fees rise for hosts</td><td>2027 increases announced; pass-through varies by host</td></tr>
</tbody>
</table>
<h3>What this means in practice</h3>
<ul>
<li><strong>Bloggers and small business sites on shared hosting</strong> are the least affected today. Your main job is to compare renewal prices and avoid surprises.</li>
<li><strong>Developers and businesses on VPS or cloud servers</strong> are already seeing higher prices, especially on new orders and upgrades.</li>
<li><strong>Agencies and resellers</strong> on cPanel or Plesk face higher license costs from December 2026 and January 2027.</li>
<li><strong>Everyone with a .com domain</strong> pays a little more at renewal from November 2026.</li>
</ul>`,
  },
];

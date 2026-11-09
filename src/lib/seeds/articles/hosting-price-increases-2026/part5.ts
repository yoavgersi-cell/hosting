import type { ArticleSection } from "@/lib/config";

// Part 5 of "Why Web Hosting Is Getting More Expensive in 2026".
// Domain price increases, energy and tariffs.

export const part5: ArticleSection[] = [
  {
    heading: "Are .com domain prices going up?",
    body: `<div class="qa"><strong>Short answer:</strong> Yes. Verisign, which operates the .com registry, raised the wholesale price of a .com domain from <strong>$10.26 to $10.97</strong> - about 6.9% - effective <strong>1 November 2026</strong>. The increase applies to new registrations, renewals and transfers. Registrars also pay an ICANN fee of $0.20 per domain per year on top. Under Verisign's agreement with ICANN, further increases of up to 7% are possible in each of the following years through 2029.</div>
<p>Domain prices are set in layers. The <strong>registry</strong> (Verisign for .com and .net) charges registrars a wholesale price; <strong>ICANN</strong> adds a small fee; and your <strong>registrar</strong> - whether that is your web host or a separate domain company - adds its own margin. When the wholesale price rises, registrars generally pass the increase on.</p>
<h3>The .com and .net schedule</h3>
<table>
<thead><tr><th>Date</th><th>Change</th></tr></thead>
<tbody>
<tr><td>1 September 2024</td><td>.com wholesale price rose from $9.59 to $10.26 (the last increase under the previous contract cycle)</td></tr>
<tr><td>1 December 2024</td><td>Verisign's .com agreement with ICANN renewed, running to 30 November 2030 and allowing increases of up to 7% in the final four years of each six-year period</td></tr>
<tr><td>1 November 2026</td><td>.com wholesale price rises from $10.26 to $10.97 (about 6.9%)</td></tr>
<tr><td>1 March 2027</td><td>.net wholesale price rises from $10.91 to $12.00, per Verisign's August 2026 SEC filing</td></tr>
<tr><td>2027-2029</td><td>Further .com increases of up to 7% a year are contractually possible</td></tr>
</tbody>
</table>
<h3>What it means for you</h3>
<p>For a single domain, the increase is small - well under a dollar a year at wholesale. It matters more if you own many domains, and it is a reminder that a "free domain" bundled with hosting renews at the registrar's regular price after the first year.</p>
<h3>How to lock in today's domain price</h3>
<ul>
<li><strong>Renew for multiple years.</strong> Domains can usually be registered or renewed for up to 10 years at a time, at the price in effect when you pay. Multi-year renewals before a scheduled increase lock in the old rate for the whole period.</li>
<li><strong>Check your registrar's renewal price</strong>, not just its first-year offer - first-year domain deals are often heavily discounted.</li>
<li><strong>Consolidate domains</strong> at a registrar with fair renewal pricing and good security, including two-factor authentication.</li>
</ul>`,
  },
  {
    heading: "Do energy costs and tariffs affect web hosting prices?",
    body: `<p>They do, though less directly than memory prices. Data centers are large electricity consumers, and the AI build-out has increased demand for power in key data center regions.</p>
<h3>Energy</h3>
<p>The International Energy Agency (IEA) reported that data center electricity demand rose 17% in 2025, and its April 2026 report projected that data center electricity use would double within four years. Higher demand can push up power prices in data center hubs, and providers including Hetzner and Akamai cited energy alongside hardware when explaining their 2026 price changes. Short spikes can be dramatic - wholesale power prices in parts of Virginia briefly exceeded $1,800 per megawatt-hour during a January 2026 winter storm - but these are episodes rather than a steady trend, and hosting contracts usually smooth them out.</p>
<h3>Tariffs</h3>
<p>Trade policy adds another layer of uncertainty, particularly for US-based infrastructure. A 25% US tariff on certain advanced AI chips took effect in January 2026, with an exemption for US data centers, and further measures affecting servers were being weighed later in the year. The trade group CCIA estimated that applying semiconductor tariffs to data centers could cost about $90 billion a year. How tariffs ultimately affect web hosting prices depends on policies that were still evolving at the time of writing.</p>
<h3>Currency</h3>
<p>Much hosting software - including cPanel, Plesk and WHMCS - is priced in US dollars. For hosts and customers outside the US, a weaker local currency makes those costs higher in local terms, independent of any list price change.</p>`,
  },
];

import type { ArticleSection } from "@/lib/config";

// Part 4 of "Why Web Hosting Is Getting More Expensive in 2026".
// Software license increases: cPanel, Plesk, WHMCS, CloudLinux/Imunify.

export const part4: ArticleSection[] = [
  {
    heading: "How much is cPanel raising prices for 2027?",
    body: `<p>cPanel - the most widely used control panel in shared hosting - announced another round of price increases in October 2026, effective <strong>16 December 2026</strong>. Trade coverage reported the new list prices as follows:</p>
<table>
<thead><tr><th>cPanel tier</th><th>Price before</th><th>From 16 December 2026</th></tr></thead>
<tbody>
<tr><td>Solo</td><td>$29.99/mo</td><td>$32.99/mo</td></tr>
<tr><td>Admin</td><td>$35.99/mo</td><td>$38.99/mo</td></tr>
<tr><td>Pro</td><td>$53.99/mo</td><td>$58.99/mo</td></tr>
<tr><td>Premier (100 accounts)</td><td>$69.99/mo</td><td>$76.99/mo</td></tr>
<tr><td>Each additional account</td><td>$0.49</td><td>$0.55</td></tr>
</tbody>
</table>
<p><em>List prices as reported by webhosting.today and other trade sources in October 2026; hosts buying through partner programs may pay different rates.</em></p>
<h3>A pattern since 2019</h3>
<p>This is not a one-off. In 2019 cPanel moved from per-server to per-account pricing, which hosts said could raise costs dramatically for densely packed shared servers. Annual increases followed - InMotion Hosting described the January 2024 change as the fifth consecutive yearly rise - and webhosting.today calculated in October 2026 that the cheapest tier had roughly doubled since 2019, from $15 to $29.99 before the 2027 increase. Namecheap said in early 2025 that it could no longer absorb rising cPanel costs and adjusted renewal prices.</p>
<p>cPanel is owned by WebPros, which also owns Plesk and WHMCS and is majority-owned by private equity firm CVC. When one company sets prices across several of the industry's core tools, its decisions ripple through the whole market.</p>`,
  },
  {
    heading: "Are Plesk, WHMCS and other hosting tools getting more expensive?",
    body: `<p>Yes. Several other pieces of software that hosts rely on announced increases for 2026 or 2027:</p>
<table>
<thead><tr><th>Software</th><th>What it does</th><th>Reported change</th><th>Effective</th></tr></thead>
<tbody>
<tr><td>Plesk</td><td>Control panel (alternative to cPanel)</td><td>VPS licenses up roughly 12-18%, per trade calculations from WebPros licensing guides</td><td>1 January 2027</td></tr>
<tr><td>WHMCS</td><td>Billing and automation platform used by many hosts</td><td>Up roughly 11-20%; the Plus tier reported rising from $34.95 to $39.99 a month</td><td>1 January 2027</td></tr>
<tr><td>ImunifyAV+</td><td>Malware scanning</td><td>Up $1 per server per month, in two phases</td><td>1 January and 1 October 2026</td></tr>
<tr><td>CloudLinux OS Legacy</td><td>Operating system for shared hosting isolation</td><td>Up about 5%, per hosting company notices</td><td>1 January 2026</td></tr>
<tr><td>Imunify360, KernelCare (via cPanel store)</td><td>Security and live kernel patching</td><td>Reported increases of about 6%</td><td>16 December 2026</td></tr>
</tbody>
</table>
<p>One trade example illustrates how these combine: a host running Plesk Web Host alongside WHMCS Plus was calculated to pay about $97.94 a month before the 2027 changes and about $113.98 after - an increase of roughly 16%. We found no 2025-2026 increase for LiteSpeed web server licensing.</p>
<p>Individually, each increase is modest. But a typical shared hosting server runs several licensed products - control panel, OS-level isolation, malware scanning, kernel patching, billing - and the increases stack.</p>`,
  },
  {
    heading: "Do license increases affect what you pay for hosting?",
    body: `<p>Sometimes directly, often indirectly. How much of a license increase reaches you depends on your host and plan.</p>
<h3>Ways license costs reach customers</h3>
<ul>
<li><strong>Explicit fees.</strong> After cPanel's 2019 change, some hosts added separate cPanel charges to certain plans. It is most common on VPS and dedicated servers, where you often pay for the panel license as a line item.</li>
<li><strong>Higher renewal prices.</strong> Hosts may fold license costs into regular rates, as Namecheap said it did in 2025.</li>
<li><strong>Plan restructuring.</strong> Hosts may change how many sites or accounts a plan allows, because cPanel prices per account.</li>
<li><strong>No visible change.</strong> Large hosts may absorb increases, at least for a while.</li>
</ul>
<h3>Hosts with their own control panels</h3>
<p>Hosts that built their own panels are insulated from cPanel per-account licensing on those plans. Among the providers we track, Hostinger uses its in-house hPanel, while Bluehost, Domain.com and Network Solutions use custom dashboards. Hosting.com, UltaHost and BigRock (on Linux plans) use cPanel. That does not mean in-house panels are free - they cost money to build and maintain - but their costs are not tied to WebPros' price list.</p>
<h3>What to check as a customer</h3>
<ol>
<li>On VPS and dedicated plans, check whether the control panel license is included or billed separately, and what it will cost at renewal.</li>
<li>On shared plans, compare renewal prices across hosts using different panels.</li>
<li>Weigh the trade-off: cPanel's ubiquity makes migrating between hosts easier, which has real value even if it costs a little more.</li>
</ol>`,
  },
];

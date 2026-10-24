import type { ArticleSection } from "@/lib/config";

// Part 5 of "Who Owns Your Web Host?". The software layer (WebPros,
// cPanel/Plesk pricing) and market share data with caveats.

export const part5: ArticleSection[] = [
  {
    heading: "Who owns cPanel and Plesk?",
    body: `<div class="qa"><strong>Short answer:</strong> cPanel and Plesk - the two most widely used hosting control panels - are both owned by <strong>WebPros</strong>, which also owns the hosting billing platform WHMCS and the virtualization panel SolusVM. WebPros is majority-owned by private equity firm <strong>CVC Capital Partners</strong>, which agreed to buy it from Oakley Capital in December 2019; Oakley reinvested as a minority partner.</div>
<p>Most people never think about the software that runs their hosting account. But a large share of shared hosting worldwide runs on cPanel or Plesk, which means the companies that own these products have unusual influence over the economics of the whole industry.</p>
<h3>How WebPros came together</h3>
<ul>
<li><strong>2017:</strong> Oakley Capital acquired Plesk, carving it out of Parallels at an enterprise value of about $105 million.</li>
<li><strong>October 2018:</strong> WebPros acquired a majority of cPanel from its founder, J. Nick Koston.</li>
<li><strong>December 2019:</strong> Oakley agreed to sell WebPros to CVC Fund VII, with Oakley Fund IV reinvesting $200 million as a minority partner.</li>
</ul>
<p>So when a host using cPanel - such as Hosting.com, UltaHost or BigRock on its Linux plans - pays for its control panel licenses, that money flows to a CVC-backed company. When those license prices rise, every cPanel host feels it.</p>`,
  },
  {
    heading: "Why do cPanel price increases affect what you pay for hosting?",
    body: `<p>cPanel license costs are part of what hosts pay to deliver each shared hosting account. Since 2019, those costs have risen repeatedly, and some hosts have passed increases on to customers.</p>
<h3>The 2019 pricing change</h3>
<p>Around June 2019 cPanel announced a move from per-server licensing to <strong>per-account</strong> pricing tiers, effective around September 2019. For hosts that packed many accounts onto each server - typical of shared and reseller hosting - the change could mean dramatically higher costs. Several hosts estimated on their own blogs that some dense servers could see increases of up to around 1,000%; those were the hosts' estimates, not cPanel's figures. The reaction was strong across the industry: some providers passed costs directly to customers with new per-account fees, some negotiated delays, and some publicly evaluated alternative control panels such as DirectAdmin.</p>
<h3>Annual increases since</h3>
<p>cPanel has raised prices in subsequent years. InMotion Hosting described the January 2024 change as the fifth consecutive annual increase, and further increases followed in January 2025. Namecheap said it could no longer absorb the rising costs and adjusted its renewal pricing in early 2025. In October 2026 industry coverage reported 2027 list prices taking effect from 16 December 2026, and calculated that the cheapest tier had roughly doubled since 2019, from $15 to $29.99 a month before the 2027 rise. Plesk's list prices also rose in 2026.</p>
<h3>What this means for you</h3>
<ul>
<li><strong>Some hosting price rises are cost-driven.</strong> When a host raises renewal prices or adds a fee for cPanel, rising license costs may be part of the reason.</li>
<li><strong>Control panel choice affects host costs.</strong> Hosts with their own panels - Hostinger's hPanel, or the custom dashboards at Bluehost, Domain.com and Network Solutions - avoid cPanel per-account licensing for those plans, which is one reason some large hosts built their own.</li>
<li><strong>cPanel still has advantages for you.</strong> Its ubiquity makes migrating between cPanel hosts simpler, which keeps switching costs low. That portability is worth something when you weigh one host against another.</li>
</ul>
<p>Read more about how panels compare in our guide to <a href="/articles/how-to-choose-web-hosting">choosing web hosting</a>.</p>`,
  },
  {
    heading: "Which companies host the most websites?",
    body: `<p>Market share in hosting depends heavily on how you measure it - by customers, revenue, domains or websites - and published figures vary. The most commonly cited source for website hosting share is W3Techs, which surveys the hosting providers behind websites. Its rankings have historically placed <strong>GoDaddy</strong> and the Endurance brands (now <strong>Newfold</strong>) near the top alongside large infrastructure providers such as <strong>Amazon</strong>, <strong>OVH</strong> and <strong>Hetzner</strong>, and more recently platforms such as <strong>Shopify</strong> and <strong>Wix</strong>.</p>
<p>Be cautious with specific percentages you see quoted. Secondary sites citing W3Techs report conflicting numbers depending on when the snapshot was taken and how providers are grouped - one recent compilation listed Amazon, Newfold, Shopify and GoDaddy at the top, while another listed Shopify, Amazon, Hostinger and Wix. If you need a precise figure, check the live W3Techs page and note the date.</p>
<h3>Customer counts reported by the groups themselves</h3>
<table>
<thead><tr><th>Company</th><th>Reported customers</th><th>Source type</th></tr></thead>
<tbody>
<tr><td>GoDaddy</td><td>About 20.4M (end of 2025)</td><td>Public company results, via coverage</td></tr>
<tr><td>Newfold Digital</td><td>About 6.7M at formation (2021); about 6M in recent estimates</td><td>Company announcement; analyst estimate</td></tr>
<tr><td>Hostinger</td><td>About 4.6M (2025)</td><td>Company-reported</td></tr>
<tr><td>team.blue</td><td>More than 3.3M (2025)</td><td>Company-reported</td></tr>
<tr><td>hosting.com group</td><td>500,000-700,000+ (varies by announcement)</td><td>Company-reported</td></tr>
</tbody>
</table>
<h3>Market size estimates</h3>
<p>Research firms publish very different estimates of the overall web hosting market because they define it differently - some include cloud infrastructure, others focus on shared and managed hosting. Grand View Research, for example, projected the global web hosting services market to reach about $320.6 billion by 2030. Treat any single market-size number as an estimate tied to its definition rather than a precise measurement.</p>`,
  },
];

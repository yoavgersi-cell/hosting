import type { ArticleSection } from "@/lib/config";

// Part 2 of "Why Web Hosting Is Getting More Expensive in 2026".
// The memory (DRAM) and storage (NAND/SSD) price surge.

export const part2: ArticleSection[] = [
  {
    heading: "Why did server memory (RAM) prices rise so much in 2026?",
    body: `<p>Server memory - DRAM - is one of the biggest components in the cost of a hosting server, and in late 2025 and 2026 its price rose faster than at any time in recent memory. The main reason is demand from artificial intelligence: AI and cloud data centers need enormous amounts of memory, and the companies that make memory chips shifted their production toward the server and AI products those customers buy.</p>
<h3>The numbers from market researchers</h3>
<table>
<thead><tr><th>Source</th><th>Period</th><th>Reported or forecast change</th></tr></thead>
<tbody>
<tr><td>TrendForce</td><td>Q4 2025 (server DRAM)</td><td>Up about 43-48% quarter on quarter</td></tr>
<tr><td>TrendForce</td><td>Q1 2026 (conventional DRAM contract prices)</td><td>Forecast raised from 55-60% to 90-95% quarter on quarter - a record quarterly increase</td></tr>
<tr><td>Counterpoint Research</td><td>Q1 2026 (memory prices overall)</td><td>Up about 80-90%, led by general-purpose server DRAM</td></tr>
<tr><td>TrendForce</td><td>Q2 2026 (DRAM)</td><td>Forecast rises of up to about 63%</td></tr>
<tr><td>Counterpoint Research</td><td>Q3 2026 (DRAM)</td><td>Still rising about 15-20%, though the pace was slowing</td></tr>
</tbody>
</table>
<p>TrendForce also reported that DRAM industry revenue reached about $53.6 billion in Q4 2025, up 29.4% from the previous quarter, driven by higher contract prices. In March 2026 it noted that major cloud providers were securing memory supply through long-term agreements - which leaves smaller buyers competing for the remainder.</p>
<h3>Why AI demand squeezes everyone else</h3>
<p>Memory makers have finite production capacity. When the most profitable customers - large AI and cloud operators - want more server memory and high-bandwidth memory for AI accelerators, manufacturers prioritize those products and those customers. TrendForce's reporting in early 2026 described memory makers prioritizing server applications and driving price increases across the board. For a mid-sized hosting company that buys servers in smaller batches, that means paying more and sometimes waiting longer.</p>
<h3>How big is the effect on servers?</h3>
<p>Two infrastructure providers gave unusually direct figures:</p>
<ul>
<li><strong>Akamai</strong> said in March 2026 that server costs had risen 75-200% compared with the first half of 2025, citing servers, RAM, SSDs and energy.</li>
<li><strong>OVHcloud</strong> chief executive Octave Klaba said in August 2026 that the price the company paid for memory had risen roughly sixfold over the previous year, and would reach about ninefold by September.</li>
</ul>
<p>Those are extreme figures from companies that buy huge amounts of hardware, but they show why server and VPS prices moved in 2026.</p>`,
  },
  {
    heading: "Are SSD and storage prices rising too?",
    body: `<p>Yes. NAND flash - the memory inside solid-state drives - followed DRAM upward. TrendForce forecast NAND prices rising about 55-60% and enterprise SSD prices about 53-58% in Q1 2026, and in a later update projected NAND increases of around 70-75% in Q2 2026. Further enterprise SSD increases were forecast into Q4 2026.</p>
<p>That matters for hosting because modern hosting runs on SSDs - increasingly fast NVMe drives - for both websites and backups. Every new server a host deploys, every storage expansion and every backup system now costs more than it did a year earlier.</p>
<h3>Where you might notice storage costs</h3>
<ul>
<li><strong>Storage allowances.</strong> Generous or "unlimited" storage is expensive to provide when drives cost more. Hosts may hold allowances steady rather than increasing them, or tighten them on new plans.</li>
<li><strong>Backups.</strong> Keeping daily backups for weeks requires a lot of storage. Some hosts may limit retention or charge for longer backup histories.</li>
<li><strong>VPS and cloud storage.</strong> Block storage and larger disk options on VPS plans are where price changes show up most directly.</li>
<li><strong>Object storage and CDN add-ons.</strong> Infrastructure providers that raised storage prices pass those costs down the chain.</li>
</ul>
<p>For most small websites, storage use is modest and these changes will matter less than renewal pricing. For media-heavy sites, stores with large catalogs and anyone keeping long backup histories, it is worth checking storage limits and add-on prices closely.</p>`,
  },
  {
    heading: "Will memory and storage prices come down again?",
    body: `<p>Nobody can say precisely when, and we would treat confident predictions with caution. What the market research shows is that increases were still being forecast through 2026, but that the <strong>pace</strong> was slowing by the middle of the year - Counterpoint's July 2026 tracker projected DRAM rises of about 15-20% in Q3 2026, far below the 80-90% jump in Q1.</p>
<p>Memory has historically moved in cycles: shortages lead manufacturers to expand capacity, and eventually supply catches up. But the AI build-out is a large, sustained source of demand, and major buyers have locked in supply with long-term agreements. Even if component prices stabilize, hosting prices tend to be sticky - providers that raised prices are unlikely to cut them quickly, and the higher-cost hardware bought in 2026 will stay in service for years.</p>
<h3>What that means for your buying decisions</h3>
<ul>
<li><strong>Do not assume prices will fall soon.</strong> If you need hosting now, waiting for prices to drop is unlikely to pay off.</li>
<li><strong>Locking in today's rates can make sense</strong> - especially for VPS and cloud plans, where increases have already happened - as long as you have tested the provider and are comfortable with the commitment.</li>
<li><strong>Watch renewal terms.</strong> The cost of the 2026 hardware cycle is most likely to reach shared hosting customers through renewals over the next few years.</li>
</ul>`,
  },
];

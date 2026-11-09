import type { ArticleSection } from "@/lib/config";

// "Web Hosting Statistics 2026" - AI and search, data centers and energy,
// small business websites and hosting costs.

export const ai: ArticleSection[] = [
  {
    heading: "How is AI search changing website traffic?",
    body: `<div class="qa"><strong>Short answer:</strong> AI answers are reducing clicks to websites from traditional search, while AI assistants are becoming a fast-growing - but still much smaller - source of traffic. Pew Research found Google users clicked a result on <strong>8%</strong> of visits when an AI summary appeared, versus <strong>15%</strong> without one. Similarweb counted about <strong>1.13 billion</strong> AI referral visits to the top 1,000 websites in June 2025, compared with about <strong>191 billion</strong> referrals from Google Search.</div>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Click rate on a traditional result when an AI summary appears</td><td><strong>8%</strong> of visits (vs 15% without one)</td><td>Pew Research Center, July 2025 (March 2025 data, 900 US adults)</td></tr>
<tr><td>Clicks on a link inside the AI summary</td><td><strong>1%</strong> of searches</td><td>Pew Research Center, July 2025</td></tr>
<tr><td>Searches that showed an AI summary</td><td>About <strong>58%</strong> in Pew's sample</td><td>Pew Research Center, July 2025</td></tr>
<tr><td>Click-through drop for position 1 when an AI Overview appears</td><td>About <strong>58%</strong> (December 2025 data)</td><td>Ahrefs, February 2026 (300,000 keywords)</td></tr>
<tr><td>US Google searches ending without a click</td><td><strong>68.01%</strong> (January-April 2026)</td><td>SparkToro using Similarweb data, June 2026</td></tr>
<tr><td>AI platform referral visits to the top 1,000 sites</td><td>About <strong>1.13 billion</strong> in June 2025, up 357% year on year</td><td>Similarweb</td></tr>
<tr><td>ChatGPT's share of those AI referrals</td><td>More than <strong>80%</strong></td><td>Similarweb</td></tr>
<tr><td>Google Search referrals for comparison</td><td>About <strong>191 billion</strong></td><td>Similarweb</td></tr>
<tr><td>ChatGPT weekly active users</td><td>More than <strong>900 million</strong> (February 2026)</td><td>Reported from OpenAI statements</td></tr>
<tr><td>Google AI Mode monthly active users</td><td>More than <strong>1 billion</strong></td><td>Alphabet Q2 2026 earnings, July 2026</td></tr>
</tbody>
</table>
<h3>What it means for website owners</h3>
<ul>
<li><strong>Visibility in AI answers matters.</strong> Being cited inside an AI answer is becoming a traffic source in its own right, and clear, well-structured, factual content is what AI systems tend to quote.</li>
<li><strong>Do not block the wrong bots.</strong> Blocking AI <em>search</em> crawlers can remove your site from AI answers; blocking AI <em>training</em> crawlers usually does not. See our <a href="/articles/web-hosting-price-increases-2026">guide to AI crawlers and hosting costs</a>.</li>
<li><strong>Technical health still matters.</strong> Search and AI crawlers can only use pages they can reach quickly and reliably - which brings it back to hosting speed and uptime.</li>
</ul>`,
  },
  {
    heading: "How much do AI crawlers take compared with the traffic they send?",
    body: `<p>Cloudflare publishes "crawl-to-referral" ratios: how many pages an AI company's crawlers fetch for every visitor its products send back to websites. The ratios changed substantially during 2025 and vary by company.</p>
<table>
<thead><tr><th>Company</th><th>Reported crawl-to-referral ratio</th><th>Period</th></tr></thead>
<tbody>
<tr><td>Anthropic</td><td>Peak of about 500,000:1; roughly 25,000:1 to 100,000:1 after May 2025</td><td>2025 (Cloudflare Radar Year in Review)</td></tr>
<tr><td>OpenAI</td><td>Peak of about 3,700:1</td><td>2025</td></tr>
<tr><td>Perplexity</td><td>About 194:1</td><td>July 2025</td></tr>
</tbody>
</table>
<p><em>Cloudflare network data; ratios change over time and cover different windows.</em></p>
<p>Cloudflare also reported that AI crawling triggered by user actions - such as asking an assistant to read a page - grew more than <strong>15 times</strong> during 2025, and that AI crawlers were the user agents most often fully blocked in robots.txt files.</p>`,
  },
  {
    heading: "How much electricity do data centers use?",
    body: `<div class="qa"><strong>Short answer:</strong> The International Energy Agency (IEA) estimated data centers used about <strong>415 TWh</strong> of electricity in 2024 - roughly <strong>1.5%</strong> of global electricity - and projects consumption will roughly <strong>double to about 945 TWh by 2030</strong>, driven largely by AI. Coverage of the IEA's 2026 update reported about 485 TWh in 2025, up 17%.</div>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Data center electricity use, 2024</td><td>About <strong>415 TWh</strong> (~1.5% of global electricity)</td><td>IEA, Energy and AI (April 2025)</td></tr>
<tr><td>Projected data center electricity use, 2030</td><td>About <strong>945 TWh</strong></td><td>IEA</td></tr>
<tr><td>Share of 2024 data center electricity use</td><td>United States <strong>45%</strong>, China <strong>25%</strong></td><td>IEA</td></tr>
<tr><td>Data center electricity use growth, 2025</td><td>About <strong>17%</strong> (AI-focused data centers about 50%)</td><td>IEA 2026 update, as reported</td></tr>
<tr><td>Hyperscale data centers worldwide</td><td><strong>1,360</strong> at the end of 2025 - about 48% of global capacity</td><td>Synergy Research Group, April 2026</td></tr>
<tr><td>Hyperscale share of capacity by 2031 (forecast)</td><td>About <strong>67%</strong></td><td>Synergy Research Group</td></tr>
<tr><td>Average power usage effectiveness (PUE)</td><td>About <strong>1.54</strong>, little changed for six years</td><td>Uptime Institute Global Data Center Survey 2025</td></tr>
</tbody>
</table>
<p>Energy costs are one of the factors hosting providers cited when raising prices in 2026. A PUE of 1.54 means that for every unit of electricity used by servers, roughly another half unit goes to cooling and other facility overhead.</p>`,
  },
  {
    heading: "What percentage of small businesses have a website?",
    body: `<p>Surveys vary, but most recent figures show a large majority of small businesses now have a website:</p>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>US small businesses with a website</td><td><strong>83%</strong> (17% still offline) - up nearly 20 points since 2018</td><td>Clutch, August 2025</td></tr>
<tr><td>UK businesses with a website</td><td>About <strong>78%</strong>; about 92% of firms with 10-49 employees</td><td>UK government business survey, 2026 (as reported)</td></tr>
<tr><td>Other US survey estimates</td><td>About <strong>71-73%</strong></td><td>Various 2023-2025 surveys</td></tr>
</tbody>
</table>
<p>Clutch attributed much of the growth to no-code website builders that made it easier to get online. For the businesses still without a site, cost and time remain the most common barriers - which is why entry-level hosting prices and easy builders matter.</p>`,
  },
  {
    heading: "How much are web hosting and domain costs rising?",
    body: `<p>2026 brought the sharpest rise in hosting input costs in years. Key figures from our in-depth analysis of <a href="/articles/web-hosting-price-increases-2026">why web hosting is getting more expensive</a>:</p>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Conventional DRAM contract price forecast, Q1 2026</td><td>Up <strong>90-95%</strong> quarter on quarter - a record</td><td>TrendForce</td></tr>
<tr><td>Memory prices, Q1 2026</td><td>Up about <strong>80-90%</strong></td><td>Counterpoint Research</td></tr>
<tr><td>Enterprise SSD price forecast, Q1 2026</td><td>Up about <strong>53-58%</strong></td><td>TrendForce</td></tr>
<tr><td>Server cost increase vs H1 2025</td><td><strong>75-200%</strong></td><td>Akamai, March 2026</td></tr>
<tr><td>Hetzner second 2026 price round</td><td>Average increases of about <strong>99%</strong> (Germany) and <strong>158%</strong> (US servers)</td><td>Heise, June 2026</td></tr>
<tr><td>OVHcloud August 2026 increases</td><td>Up to about <strong>87%</strong> on some servers</td><td>TechRadar, August 2026</td></tr>
<tr><td>cPanel Solo license price</td><td>Roughly <strong>doubled</strong> since 2019 ($15 to $29.99), rising to $32.99 from 16 December 2026</td><td>webhosting.today, October 2026</td></tr>
<tr><td>.com wholesale price</td><td><strong>$10.26 to $10.97</strong> (+6.9%) from 1 November 2026</td><td>Verisign</td></tr>
<tr><td>.net wholesale price</td><td><strong>$10.91 to $12.00</strong> from 1 March 2027</td><td>Verisign SEC filing</td></tr>
</tbody>
</table>
<p>Despite these increases, we found no sourced 2026 headline price rises from major shared hosting brands - intro prices of a few dollars a month remained common. The pressure is most likely to reach shared hosting customers through renewal rates.</p>`,
  },
];

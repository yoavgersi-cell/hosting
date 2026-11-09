import type { ArticleSection } from "@/lib/config";

// "Web Hosting Statistics 2026" - market size, cloud infrastructure and
// company metrics. Sources are listed in the guide's final section.

export const market: ArticleSection[] = [
  {
    heading: "How big is the web hosting market in 2026?",
    body: `<div class="qa"><strong>Short answer:</strong> Estimates range widely - from roughly <strong>$110 billion to $180 billion</strong> for the mid-2020s - because research firms define "web hosting" differently. Mordor Intelligence puts the market at about <strong>$182.3 billion in 2026</strong>, growing to about $300 billion by 2031 (10.5% a year). Fortune Business Insights estimates about <strong>$178.8 billion in 2026</strong>. Every major firm projects double-digit annual growth.</div>
<h3>Market size estimates compared</h3>
<table>
<thead><tr><th>Research firm</th><th>Estimate</th><th>Forecast</th><th>Growth rate (CAGR)</th></tr></thead>
<tbody>
<tr><td>Mordor Intelligence (updated January 2026)</td><td>$180.4B (2025); $182.3B (2026)</td><td>$300.2B by 2031</td><td>10.5% (2026-2031)</td></tr>
<tr><td>Fortune Business Insights</td><td>$149.3B (2025); $178.8B (2026)</td><td>2032 forecast</td><td>19.7% (2025-2032)</td></tr>
<tr><td>IMARC Group</td><td>$122.1B (2024)</td><td>2033 forecast</td><td>12.8% (2025-2033)</td></tr>
<tr><td>Global Market Insights</td><td>$111.8B (2023)</td><td>2032 forecast</td><td>18.5% (2024-2032)</td></tr>
<tr><td>Grand View Research (2023 edition)</td><td>$77.8B (2022)</td><td>$320.6B by 2030</td><td>20.2% (2023-2030)</td></tr>
</tbody>
</table>
<p><em>Figures as published by each firm; definitions, base years and segment coverage differ, so the estimates cannot be compared directly.</em></p>
<h3>What the market data tells us</h3>
<ul>
<li><strong>Shared hosting is still the biggest segment.</strong> Mordor Intelligence estimates shared hosting accounted for about <strong>37.3%</strong> of web hosting revenue in 2025.</li>
<li><strong>E-commerce is a major driver.</strong> The same report attributes about <strong>34.7%</strong> of 2025 revenue to e-commerce applications.</li>
<li><strong>North America leads.</strong> Fortune Business Insights estimates North America held about <strong>41%</strong> of the market in 2025.</li>
<li><strong>Growth is consistent across sources.</strong> Despite different totals, every firm we reviewed projects growth of roughly 10-20% a year through the early 2030s.</li>
</ul>
<p>Treat any single market-size figure as an estimate tied to its definition. For context on what is driving prices inside that market, see our analysis of <a href="/articles/web-hosting-price-increases-2026">why web hosting is getting more expensive in 2026</a>.</p>`,
  },
  {
    heading: "How big is the cloud infrastructure market?",
    body: `<p>Cloud infrastructure - the computing, storage and networking services sold by Amazon Web Services, Microsoft, Google and others - is far larger than traditional web hosting and is growing faster, driven by AI.</p>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Cloud infrastructure spending, Q2 2026</td><td>About <strong>$143.4 billion</strong> in the quarter, up 43% year on year - the fastest growth in eight years</td><td>Synergy Research Group (July 2026)</td></tr>
<tr><td>Trailing 12-month cloud spending</td><td>About <strong>$500 billion</strong></td><td>Synergy Research Group (July 2026)</td></tr>
<tr><td>Market shares, Q2 2026</td><td>AWS <strong>28%</strong>, Microsoft <strong>20%</strong>, Google <strong>15%</strong></td><td>Synergy Research Group</td></tr>
<tr><td>Cloud infrastructure spending, Q4 2025</td><td>About <strong>$110.9 billion</strong>, up 29% year on year</td><td>Omdia (formerly Canalys)</td></tr>
<tr><td>Forecast growth, 2026</td><td>About <strong>27%</strong></td><td>Omdia</td></tr>
</tbody>
</table>
<p><em>Synergy and Omdia measure the market differently, so their shares and totals should not be mixed.</em></p>
<p>For website owners, the cloud matters because many hosting companies and platforms run on these providers, and because AI demand for cloud capacity is a key reason server components became more expensive in 2026.</p>`,
  },
  {
    heading: "How many customers do the biggest web hosting companies have?",
    body: `<p>Publicly reported figures give a useful picture of scale. Public companies report audited results; private companies' figures are self-reported or estimated, as labeled.</p>
<table>
<thead><tr><th>Company</th><th>Customers / subscriptions</th><th>Revenue</th><th>Period and source type</th></tr></thead>
<tbody>
<tr><td>GoDaddy</td><td><strong>20.5 million</strong> customers</td><td>$1.34B in Q3 2026 (+6.0%); $4.95B in FY2025 (+8.3%)</td><td>Q3 2026 and FY2025 SEC filings</td></tr>
<tr><td>IONOS</td><td><strong>6.63 million</strong> customers</td><td>€1.32B in FY2025 (+5.5%)</td><td>FY2025 company results</td></tr>
<tr><td>Wix</td><td><strong>6.11 million</strong> premium subscriptions; 304M+ registered users</td><td>$1.99B in FY2025 (+13%)</td><td>FY2025 SEC filing</td></tr>
<tr><td>Newfold Digital (Bluehost, Network Solutions)</td><td>About <strong>5.8 million</strong> subscribers</td><td>Not disclosed</td><td>S&amp;P estimate, January 2026 (company has cited higher figures)</td></tr>
<tr><td>Hostinger</td><td>About <strong>4.6 million</strong> customers (+35%)</td><td>€275.4M in 2025 (+51%)</td><td>Company-reported, February 2026</td></tr>
<tr><td>team.blue</td><td><strong>3.3 million+</strong> small business customers</td><td>€866M annual recurring revenue (2025)</td><td>Company-reported, July 2026</td></tr>
<tr><td>DigitalOcean</td><td>About 21,000 "digital native enterprise" customers (company definition)</td><td>$901.4M in FY2025</td><td>FY2025 SEC filing</td></tr>
</tbody>
</table>
<h3>Key takeaways</h3>
<ul>
<li><strong>GoDaddy is the largest by customers</strong>, with about 20.5 million, though its customer count was roughly flat - revenue growth came from higher revenue per customer (ARPU of about $242 in 2025, up 10%).</li>
<li><strong>Hostinger is growing fastest</strong> among the hosts with published figures: revenue up 51% and customers up 35% in 2025, by its own reporting.</li>
<li><strong>AI products are becoming material.</strong> GoDaddy reported an annualized bookings run rate above $100 million for its Airo AI products in Q3 2026, and Hostinger said its Horizons AI builder had more than 800,000 customers.</li>
<li><strong>Newfold's subscriber base has shrunk.</strong> S&amp;P estimated about 5.8 million subscribers in January 2026, down about 17% since 2023; the company has cited higher figures.</li>
</ul>
<p>For the ownership picture behind these brands, see <a href="/articles/who-owns-your-web-host">who owns your web host</a>.</p>`,
  },
];

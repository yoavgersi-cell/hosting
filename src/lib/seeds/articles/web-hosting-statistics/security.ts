import type { ArticleSection } from "@/lib/config";

// "Web Hosting Statistics 2026" - security, bots, DDoS, downtime, email.

export const security: ArticleSection[] = [
  {
    heading: "How many WordPress vulnerabilities are found each year?",
    body: `<div class="qa"><strong>Short answer:</strong> Patchstack recorded <strong>11,334 new vulnerabilities</strong> in the WordPress ecosystem in 2025 - up about 42% from 7,966 in 2024. About <strong>91%</strong> were in plugins and 9% in themes; WordPress core itself had only a handful, all rated low priority.</div>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>New WordPress ecosystem vulnerabilities, 2025</td><td><strong>11,334</strong> (+~42%)</td><td>Patchstack, State of WordPress Security in 2026</td></tr>
<tr><td>Share in plugins / themes, 2025</td><td><strong>91%</strong> / 9%</td><td>Patchstack</td></tr>
<tr><td>New vulnerabilities, 2024 (Wordfence count)</td><td><strong>8,233</strong> (+68% vs 2023)</td><td>Wordfence 2024 annual report</td></tr>
<tr><td>Quarterly vulnerabilities, Q4 2025</td><td><strong>2,213</strong> (+19% vs Q3)</td><td>Wordfence quarterly report</td></tr>
<tr><td>Share of detected CMS infections on WordPress</td><td><strong>95.5%</strong></td><td>Sucuri hacked website report (2023 data)</td></tr>
<tr><td>Infected CMS installations that were outdated</td><td><strong>39.1%</strong></td><td>Sucuri (2023 data)</td></tr>
</tbody>
</table>
<h3>What the numbers mean</h3>
<p>WordPress's dominance in infection statistics largely reflects its enormous market share, and the vulnerability data points to the real risk: <strong>plugins and themes</strong>, not WordPress core. Keeping plugins updated, removing unused ones and choosing a host with a firewall, malware scanning and daily backups address most of that risk.</p>`,
  },
  {
    heading: "What does a data breach cost in 2026?",
    body: `<p>IBM's annual Cost of a Data Breach report is the most widely cited measure of breach costs.</p>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Global average cost of a data breach</td><td><strong>$4.99 million</strong> - a record, up about 12%</td><td>IBM Cost of a Data Breach 2026 (released July 2026)</td></tr>
<tr><td>Average cost in the United States</td><td>About <strong>$11.5 million</strong></td><td>IBM 2026</td></tr>
<tr><td>Share of malicious breaches that were AI-enabled</td><td>About <strong>1 in 4</strong></td><td>IBM 2026</td></tr>
<tr><td>Global average cost, previous year</td><td><strong>$4.44 million</strong></td><td>IBM 2025</td></tr>
<tr><td>Average breach lifecycle</td><td><strong>241 days</strong> to identify and contain</td><td>IBM 2025</td></tr>
</tbody>
</table>
<h3>How breaches start</h3>
<ul>
<li>Verizon's 2026 Data Breach Investigations Report, covering more than 22,000 breaches, found that <strong>exploiting vulnerabilities</strong> (31% of breaches) overtook stolen credentials (13%) as the leading way in for the first time.</li>
<li>A <strong>human element</strong> was involved in about 62% of breaches (Verizon DBIR 2026).</li>
<li>In Verizon's 2025 report, <strong>ransomware</strong> appeared in 44% of breaches and <strong>third-party involvement</strong> doubled to 30%; the median ransom paid was about $115,000, and 64% of victims did not pay.</li>
</ul>
<p>For small websites the lesson is practical: patch software promptly, use strong unique passwords with two-factor authentication, and keep off-site backups so an incident never means losing your site.</p>`,
  },
  {
    heading: "How much web traffic comes from bots?",
    body: `<div class="qa"><strong>Short answer:</strong> More than half. Thales' 2026 Bad Bot Report (Imperva) found bots generated about <strong>53% of web traffic</strong> in 2025, with malicious "bad bots" alone accounting for about <strong>40%</strong>. In its 2025 report, automated traffic (51%) exceeded human traffic for the first time in a decade.</div>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Bot share of all web traffic, 2025</td><td>About <strong>53%</strong></td><td>Thales / Imperva Bad Bot Report 2026</td></tr>
<tr><td>Bad bot share of all traffic, 2025</td><td>About <strong>40%</strong></td><td>Thales / Imperva 2026</td></tr>
<tr><td>Bot share of all web traffic, 2024</td><td><strong>51%</strong> (bad bots 37%, good bots 14%)</td><td>Imperva Bad Bot Report 2025</td></tr>
<tr><td>AI-enabled bot attacks per day</td><td>Rose from about 2 million to about <strong>25 million</strong></td><td>Thales / Imperva 2026</td></tr>
<tr><td>AI bots (excluding Googlebot) share of HTML requests</td><td>About <strong>4.2%</strong></td><td>Cloudflare Radar 2025 Year in Review</td></tr>
<tr><td>Googlebot share of HTML requests</td><td>About <strong>4.5%</strong></td><td>Cloudflare Radar 2025</td></tr>
<tr><td>Growth in AI bot activity during 2025</td><td>About <strong>300%</strong></td><td>Akamai, April 2026</td></tr>
</tbody>
</table>
<p>Bot traffic consumes the same bandwidth, CPU and memory as human visitors. On shared hosting, heavy bot traffic can push a site into its resource limits. Our guide to <a href="/articles/web-hosting-price-increases-2026">rising hosting costs</a> includes a robots.txt template for blocking AI training crawlers.</p>`,
  },
  {
    heading: "How large are DDoS attacks in 2026?",
    body: `<p>Cloudflare's quarterly DDoS threat reports track the scale of distributed denial-of-service attacks on its network.</p>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Largest DDoS attack recorded</td><td><strong>31.4 Tbps</strong>, lasting 35 seconds (still the record as of Q3 2026)</td><td>Cloudflare Q4 2025 and Q3 2026 reports</td></tr>
<tr><td>DDoS attacks mitigated in 2025</td><td><strong>47.1 million</strong> - more than double 2024</td><td>Cloudflare Q4 2025 report</td></tr>
<tr><td>Attacks larger than 1 Tbps, H1 2026</td><td><strong>935</strong> (805 in Q2 alone)</td><td>Cloudflare, August 2026</td></tr>
<tr><td>Attacks larger than 1 Tbps, Q3 2026</td><td><strong>251</strong> - about 69% fewer than Q2, after law enforcement disrupted several large botnets</td><td>Cloudflare Q3 2026 report</td></tr>
<tr><td>Network-layer attacks, Q3 2026</td><td><strong>18.2 million</strong>, more than triple a year earlier</td><td>Cloudflare Q3 2026 report</td></tr>
</tbody>
</table>
<p>Most small sites rely on their host's or CDN's network-level DDoS protection. Ask whether your host includes it and whether it can place your site behind a CDN if needed.</p>`,
  },
  {
    heading: "How common and costly are website outages?",
    body: `<p>Outage statistics come mainly from data center operators and large enterprises, but the lessons apply to any website.</p>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Trend in outage frequency</td><td>Outages per site fell for the <strong>fifth consecutive year</strong></td><td>Uptime Institute Annual Outage Analysis 2026</td></tr>
<tr><td>Leading cause of impactful data center outages</td><td><strong>Power</strong> - about 45%</td><td>Uptime Institute 2026</td></tr>
<tr><td>Leading cause of IT service outages</td><td><strong>Networking</strong> (23%), then power (21%) and IT systems/software (18%)</td><td>Uptime Institute 2026</td></tr>
<tr><td>Operators whose last major outage cost over $100,000</td><td>About <strong>54-57%</strong></td><td>Uptime Institute 2025-2026 surveys</td></tr>
<tr><td>Operators whose last major outage cost over $1 million</td><td>About <strong>20%</strong></td><td>Uptime Institute 2025-2026 surveys</td></tr>
<tr><td>Hourly cost of downtime for mid-size and large enterprises</td><td>Over <strong>$300,000</strong> for more than 90% of firms</td><td>ITIC 2024 survey</td></tr>
</tbody>
</table>
<h3>Notable recent outages</h3>
<ul>
<li><strong>CrowdStrike, 19 July 2024:</strong> a faulty security update affected about <strong>8.5 million</strong> Windows devices, according to Microsoft - less than 1% of Windows machines, but enough to disrupt airlines, banks and hospitals worldwide.</li>
<li><strong>AWS us-east-1, 19-20 October 2025:</strong> a DNS automation fault in DynamoDB caused an outage of about 15 hours that affected many AWS services and well-known apps, according to AWS's post-event summary.</li>
<li><strong>Cloudflare, 18 November 2025:</strong> a configuration change caused a global outage lasting several hours, according to Cloudflare's incident report.</li>
</ul>
<p>Even the largest providers have outages. For your own site, a 99.9% uptime guarantee still allows about 8.8 hours of downtime a year; independent uptime monitoring and off-site backups are your best protection.</p>`,
  },
  {
    heading: "What are the email sender requirements for Gmail, Yahoo and Microsoft?",
    body: `<p>Email deliverability rules changed significantly in 2024-2025 and affect any business sending email from its domain.</p>
<table>
<thead><tr><th>Provider</th><th>Effective</th><th>Applies to</th><th>Key requirements</th></tr></thead>
<tbody>
<tr><td>Gmail and Yahoo</td><td>February 2024</td><td>Senders of about 5,000+ messages a day</td><td>SPF and DKIM, DMARC (at least p=none) with alignment, spam rate under 0.3%, one-click unsubscribe, opt-outs processed within 2 days</td></tr>
<tr><td>Microsoft (Outlook.com, Hotmail, Live)</td><td>5 May 2025</td><td>Senders of 5,000+ messages a day</td><td>SPF and DKIM passing, plus DMARC (at least p=none) aligned with SPF or DKIM</td></tr>
</tbody>
</table>
<p>Even if you send far fewer emails, setting up SPF, DKIM and DMARC improves deliverability for contact forms, order confirmations and newsletters. Most hosts provide the DNS records you need; for WordPress, send notifications through SMTP rather than the default PHP mail function.</p>`,
  },
];

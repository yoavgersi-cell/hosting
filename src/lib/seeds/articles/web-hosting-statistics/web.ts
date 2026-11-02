import type { ArticleSection } from "@/lib/config";

// "Web Hosting Statistics 2026" - the web landscape: websites, users,
// domains, CMS, web servers, languages, HTTPS, IPv6/HTTP3, host share.
// W3Techs and Let's Encrypt figures were gathered via published citations
// because the primary pages were not directly retrievable during research;
// they are labeled "as reported".

export const web: ArticleSection[] = [
  {
    heading: "How many websites are there in 2026?",
    body: `<div class="qa"><strong>Short answer:</strong> About <strong>1.49 billion</strong>. Netcraft's July 2026 Web Server Survey counted 1,494,915,628 websites across 305.3 million domains and 14.8 million web-facing computers. Only a fraction are active - secondary analyses of Netcraft's data put active sites at roughly <strong>217 million</strong>.</div>
<table>
<thead><tr><th>Statistic</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Total websites</td><td><strong>1,494,915,628</strong></td><td>Netcraft, July 2026</td></tr>
<tr><td>Unique domains in the survey</td><td><strong>305.3 million</strong></td><td>Netcraft, July 2026</td></tr>
<tr><td>Web-facing computers</td><td><strong>14.8 million</strong></td><td>Netcraft, July 2026</td></tr>
<tr><td>Monthly change</td><td>+5.5 million sites, +1.2 million domains vs June 2026</td><td>Netcraft</td></tr>
<tr><td>Active websites (estimate)</td><td>About <strong>217 million</strong></td><td>Secondary analyses of Netcraft data</td></tr>
</tbody>
</table>
<p>The gap between total and active sites is large because many hostnames are parked domains, placeholders or auto-generated pages. When you see a "number of websites" figure, check whether it counts all hostnames or only active sites.</p>`,
  },
  {
    heading: "How many people use the internet?",
    body: `<p>The International Telecommunication Union (ITU), the UN agency for digital technologies, estimated in November 2025 that about <strong>6.0 billion people</strong> - roughly <strong>74% of the world's population</strong> - use the internet, while about <strong>2.2 billion</strong> remain offline.</p>
<ul>
<li><strong>Gender gap:</strong> 77% of men use the internet, compared with 71% of women (ITU, 2025).</li>
<li><strong>Mobile:</strong> DataReportal's Digital 2026 report counted about 5.78 billion unique mobile users - about 70% of the world's population.</li>
<li><strong>5G:</strong> about one-third of mobile broadband subscriptions are now 5G (ITU, 2025).</li>
</ul>
<p>Mobile-first usage is one reason page weight and mobile Core Web Vitals matter so much for websites - and why hosting performance on mobile connections deserves attention.</p>`,
  },
  {
    heading: "How many domain names are registered?",
    body: `<div class="qa"><strong>Short answer:</strong> About <strong>411.6 million</strong> across all top-level domains at the end of Q3 2026, according to the Domain Name Industry Brief (DNIB). Verisign reported <strong>182.5 million .com and .net</strong> registrations combined at 30 September 2026, up 6.1% year on year.</div>
<h3>Domain registrations by category (Q2 2026)</h3>
<table>
<thead><tr><th>Category</th><th>Registrations</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>All TLDs</td><td><strong>401.6 million</strong></td><td>+8.1% year on year</td></tr>
<tr><td>.com</td><td><strong>166.6 million</strong></td><td>By far the largest TLD</td></tr>
<tr><td>.net</td><td><strong>12.5 million</strong></td><td></td></tr>
<tr><td>Country-code TLDs (ccTLDs)</td><td><strong>148.6 million</strong></td><td>Largest: .cn (20.9M) and .de (18.0M)</td></tr>
<tr><td>New gTLDs (e.g. .online, .shop)</td><td><strong>52.9 million</strong></td><td>13.2% of all registrations; +34% year on year</td></tr>
</tbody>
</table>
<p><em>Source: DNIB Q2 2026 report. Q3 2026 headline total from DNIB; .com/.net figures from Verisign's Q3 2026 earnings release.</em></p>
<h3>More domain statistics</h3>
<ul>
<li><strong>New registrations:</strong> Verisign processed 13.1 million new .com and .net registrations in Q3 2026, up from 10.6 million a year earlier.</li>
<li><strong>Renewal rates:</strong> about 74-75% of .com and .net registrations renew, per Verisign's 2026 reporting. New gTLDs renew far less often - about 31% in Q2 2026.</li>
<li><strong>Top 10 ccTLDs:</strong> .cn, .de, .uk, .ru, .nl, .br, .fr, .au, .in and .eu (Q2 2026).</li>
<li><strong>New gTLD round:</strong> ICANN's 2026 application window closed on 12 August 2026 with more than 1,600 applications; it revealed 1,615 applications in October 2026, including 333 brand applications. The previous round, in 2012, attracted 1,930.</li>
<li><strong>Prices:</strong> the .com wholesale price rose from $10.26 to $10.97 on 1 November 2026, and .net rises to $12.00 on 1 March 2027.</li>
</ul>`,
  },
  {
    heading: "What percentage of websites use WordPress?",
    body: `<div class="qa"><strong>Short answer:</strong> About <strong>40-43%</strong> of all websites, depending on the date of the measurement. W3Techs data, as reported by industry trackers, showed WordPress on about 42.4% of all websites in March 2026 and about <strong>40.2%</strong> in October 2026 - and on roughly 59% of websites that use a known content management system.</div>
<h3>CMS market share (share of all websites, March 2026)</h3>
<table>
<thead><tr><th>CMS</th><th>Share of all websites</th><th>Share of sites with a known CMS (Sept 2026)</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><strong>42.4%</strong></td><td><strong>58.8%</strong></td></tr>
<tr><td>Shopify</td><td>5.1%</td><td>7.8%</td></tr>
<tr><td>Wix</td><td>4.3%</td><td>6.2%</td></tr>
<tr><td>Squarespace</td><td>2.5%</td><td>3.5%</td></tr>
<tr><td>Joomla</td><td>1.3%</td><td>1.6%</td></tr>
<tr><td>Drupal</td><td>0.7%</td><td>0.9%</td></tr>
</tbody>
</table>
<p><em>W3Techs data as reported by industry trackers; check the live W3Techs CMS overview for current values.</em></p>
<h3>More WordPress statistics</h3>
<ul>
<li><strong>Trend:</strong> WordPress's share of all websites edged down during 2026, from about 42.5% in April to about 40.2% in October (W3Techs, as reported), as hosted builders such as Shopify and Wix grew.</li>
<li><strong>Plugins:</strong> the WordPress.org plugin directory lists roughly 60,000 free plugins, and the Plugins Team reviewed 12,713 plugin submissions in 2025.</li>
<li><strong>WooCommerce:</strong> W3Techs data (as reported) shows WooCommerce on about half of websites with a known e-commerce system; among the top million e-commerce sites, Shopify leads, according to BuiltWith-based analyses.</li>
<li><strong>Security:</strong> Patchstack recorded 11,334 new WordPress ecosystem vulnerabilities in 2025, 91% of them in plugins (see the security section below).</li>
</ul>
<p>For hosting advice specific to the world's most popular CMS, see our <a href="/articles/best-wordpress-hosting">best WordPress hosting guide</a>.</p>`,
  },
  {
    heading: "Which web servers and programming languages power the web?",
    body: `<h3>Web servers</h3>
<table>
<thead><tr><th>Web server</th><th>Share of all sites (Netcraft, July 2026)</th><th>Share of top 1M sites (Netcraft)</th><th>Share of sites with a known server (W3Techs, as reported, ~Aug 2026)</th></tr></thead>
<tbody>
<tr><td>Nginx</td><td>20.4%</td><td>20.0%</td><td>31.5%</td></tr>
<tr><td>Cloudflare</td><td>16.7%</td><td>28.3%</td><td>29.0%</td></tr>
<tr><td>Apache</td><td>11.5%</td><td>15.6%</td><td>23.1%</td></tr>
<tr><td>OpenResty</td><td>8.0%</td><td>-</td><td>-</td></tr>
<tr><td>LiteSpeed</td><td>-</td><td>3.9%</td><td>15.1%</td></tr>
<tr><td>Node.js</td><td>-</td><td>-</td><td>6.7%</td></tr>
</tbody>
</table>
<p><em>Netcraft and W3Techs measure differently (all hostnames vs sites with a detected server), so their percentages are not directly comparable.</em></p>
<h3>Programming languages</h3>
<ul>
<li><strong>PHP</strong> powers about <strong>71%</strong> of websites whose server-side language is known (W3Techs, July 2026, as reported) - largely because WordPress is written in PHP.</li>
<li><strong>PHP 8</strong> runs on about 62-65% of PHP websites in 2026, with PHP 8.3 the most common minor version; roughly a quarter still run PHP 7 and a few percent PHP 5 (W3Techs, as reported).</li>
<li>About <strong>3.6%</strong> of WordPress sites ran unsupported PHP versions in February 2026, according to WordPress.org data cited in its development tracker.</li>
</ul>
<h3>CDNs and reverse proxies</h3>
<p>Cloudflare is used as a reverse proxy by about <strong>25% of all websites</strong> - W3Techs noted the milestone in September 2026 - up from about 20.9% in January 2026, and by about 85% of websites that use a known reverse proxy service (as reported).</p>`,
  },
  {
    heading: "What percentage of websites use HTTPS?",
    body: `<div class="qa"><strong>Short answer:</strong> About <strong>90% of websites</strong> use HTTPS by default, according to W3Techs (August 2026, as reported), rising to about 93% among the top million sites. Measured by traffic rather than sites, adoption is even higher: Cloudflare Radar reported about 98.6% of human web traffic was encrypted with HTTPS in 2026.</div>
<ul>
<li><strong>Let's Encrypt</strong>, the free certificate authority, said in December 2025 that it was approaching protection for one billion websites, and has issued billions of certificates since launching in 2015. W3Techs data (as reported) shows Let's Encrypt certificates on about 61% of all websites.</li>
<li><strong>Certificate lifetimes are shrinking:</strong> the maximum validity of public TLS certificates fell to 200 days on 15 March 2026, with further cuts to 100 days in 2027 and 47 days by 2029 under CA/Browser Forum rules - a strong reason to choose a host that renews SSL automatically.</li>
</ul>
<p>Free SSL is now standard at mainstream hosts, which is why we treat paid SSL upsells with caution in our reviews.</p>`,
  },
  {
    heading: "How widely are IPv6 and HTTP/3 used?",
    body: `<table>
<thead><tr><th>Technology</th><th>Statistic</th><th>Source</th></tr></thead>
<tbody>
<tr><td>IPv6</td><td>Google's measurement of users reaching it over IPv6 first crossed <strong>50%</strong> on 28 March 2026, fluctuating around the mid-to-high 40s afterward</td><td>Google IPv6 statistics; Internet Society</td></tr>
<tr><td>IPv6</td><td>About <strong>40%</strong> of requests to Cloudflare used IPv6</td><td>Cloudflare Radar, 2026</td></tr>
<tr><td>HTTP/3</td><td>Supported by about <strong>39.7%</strong> of websites (July 2026), up from 38.1% in February</td><td>W3Techs, as reported</td></tr>
<tr><td>HTTP/3</td><td>About <strong>21%</strong> of requests used HTTP/3</td><td>Cloudflare Radar, early 2026</td></tr>
</tbody>
</table>
<p>For site owners, these are mostly handled by your host or CDN. Modern hosts and CDNs enable HTTP/3 and IPv6 automatically, which is one more reason infrastructure choices matter.</p>`,
  },
  {
    heading: "Which web hosting companies host the most websites?",
    body: `<p>W3Techs' web hosting survey measures the share of all websites hosted by each provider. Recent readings, as reported by industry trackers in September 2026, placed <strong>Shopify</strong> (about 5.3-5.4%), <strong>Hostinger</strong> (about 5.1%) and <strong>Amazon</strong> (about 4.5%) near the top, with the <strong>GoDaddy Group</strong> at about 2.5%. In February 2026, W3Techs showed Hostinger at about 4.9% and Amazon at about 4.6%.</p>
<p>Shares like these change month to month and differ by methodology - some surveys group brands by parent company, others count them separately - so check the live W3Techs page for current figures. They also measure websites, not customers: GoDaddy is the largest company by customer count (about 20.5 million), even though platforms like Shopify host more individual websites.</p>`,
  },
];

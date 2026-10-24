import type { ArticleSection } from "@/lib/config";

// Part 6 of "Who Owns Your Web Host?". Customer impact, how to check
// ownership, protecting yourself, FAQ, methodology and sources.

export const part6: ArticleSection[] = [
  {
    heading: "What happens to customers when a web host is acquired?",
    body: `<p>An acquisition does not change anything overnight. In most cases your site keeps running, your login still works and your plan continues. The changes come gradually - sometimes over years - as the new owner integrates the business. Recent history gives a clear picture of the most common outcomes.</p>
<h3>Real examples of brand changes after consolidation</h3>
<table>
<thead><tr><th>Brand</th><th>Owner</th><th>What happened</th><th>When</th></tr></thead>
<tbody>
<tr><td>Media Temple</td><td>GoDaddy</td><td>Brand retired; customers migrated to GoDaddy</td><td>2023</td></tr>
<tr><td>Web.com</td><td>Newfold Digital</td><td>Brand shut down; customers moved to Network Solutions</td><td>2025</td></tr>
<tr><td>A2 Hosting</td><td>World Host Group</td><td>Rebranded as Hosting.com; old domain redirects</td><td>2025</td></tr>
<tr><td>Nexcess</td><td>Liquid Web</td><td>Absorbed into Liquid Web; domain redirects</td><td>2025</td></tr>
<tr><td>Niagahoster</td><td>Hostinger</td><td>Merged into the Hostinger brand</td><td>2024-2025</td></tr>
<tr><td>Zyro</td><td>Hostinger</td><td>Renamed Hostinger Website Builder</td><td>Reported 2023-2024</td></tr>
<tr><td>000webhost</td><td>Hostinger</td><td>Free hosting service closed</td><td>Reported 2024</td></tr>
<tr><td>Google Domains</td><td>Sold to Squarespace</td><td>Domains migrated to Squarespace</td><td>2023-2024</td></tr>
<tr><td>Heart Internet</td><td>GoDaddy → Your.Online</td><td>Sold to a new owner</td><td>2024</td></tr>
</tbody>
</table>
<h3>Common changes after an acquisition</h3>
<ul>
<li><strong>Rebrands and redirects</strong> - a new name, logo, domain and dashboard.</li>
<li><strong>Infrastructure migrations</strong> - your site may move to different servers or data centers, sometimes with a new IP address or brief maintenance windows.</li>
<li><strong>New terms and pricing</strong> - updated terms of service, plan structures and renewal prices, usually applied at your next renewal.</li>
<li><strong>Support changes</strong> - new support platforms, merged teams or different channels.</li>
<li><strong>Product rationalization</strong> - overlapping plans or features retired in favor of the parent's versions.</li>
<li><strong>Investment</strong> - in some cases, more resources, better infrastructure and new features.</li>
</ul>
<p>Whether the net effect is positive depends on the owner and on the brand. The best protection is to stay alert to announcements, read emails from your host, and keep your site portable.</p>`,
  },
  {
    heading: "How can you find out who owns your web host?",
    body: `<p>Hosting brands rarely advertise their parent company on their home pages. These steps usually reveal it in a few minutes:</p>
<ol>
<li><strong>Check the website footer.</strong> The copyright line often names the legal entity, such as "Newfold Digital, Inc." or a group company.</li>
<li><strong>Read the terms of service and privacy policy.</strong> These legal documents must name the company you are contracting with and often mention affiliates or the parent group.</li>
<li><strong>Look at the "About" or "Company" page.</strong> Some brands state their group membership directly - for example, a brand describing itself as "part of hosting.com group".</li>
<li><strong>Check your invoices.</strong> The billing entity on your receipts may differ from the brand name.</li>
<li><strong>Search the brand plus "acquired" or "acquisition".</strong> Industry outlets such as Domain Name Wire, HostingJournalist and webhosting.today cover hosting deals closely.</li>
<li><strong>For public companies, read the filings.</strong> Annual reports and SEC or stock exchange filings list subsidiaries and brands.</li>
<li><strong>Check the infrastructure.</strong> Looking up your site's IP address in a public IP or ASN lookup tool shows which network hosts it - useful for spotting shared infrastructure between brands.</li>
</ol>
<p>Ownership can change after you sign up, so it is worth repeating these checks occasionally - especially before committing to a long prepaid term.</p>`,
  },
  {
    heading: "How do you protect your website if your host changes owners?",
    body: `<p>You cannot control who buys your hosting company, but you can make sure an ownership change never puts your website at risk. These habits keep you in control:</p>
<ol>
<li><strong>Keep your domain at a registrar you choose</strong>, protected with a strong password and two-factor authentication. If your host changes direction, you can point your domain elsewhere with a DNS change.</li>
<li><strong>Keep your own off-site backups</strong> of files and databases. Host backups are useful, but incidents such as A2 Hosting's 2019 ransomware outage show why an independent copy matters.</li>
<li><strong>Choose portable software.</strong> Self-hosted WordPress and other open-source platforms can move between hosts. Proprietary builders can be harder to leave.</li>
<li><strong>Prefer standard tools where portability matters.</strong> cPanel-based hosting makes moving between cPanel hosts relatively simple.</li>
<li><strong>Watch your email.</strong> Acquisitions, migrations and term changes are announced to customers. Read them - especially anything about new terms, IP addresses or nameservers.</li>
<li><strong>Be thoughtful about long prepaid terms.</strong> A 48-month prepay locks in a low price but also locks you to a business whose ownership could change. Test the host first and weigh the trade-off.</li>
<li><strong>Know how to migrate.</strong> Many hosts offer free migration. Our guide to <a href="/articles/how-to-migrate-your-website-to-a-new-host">migrating your website</a> walks through the process.</li>
</ol>`,
  },
  {
    heading: "Should ownership change which web host you choose?",
    body: `<p>Ownership should be one input among several - not the deciding factor. A host owned by a large group can be an excellent choice, and an independent host is not automatically better. What matters is how the host performs for you today and how much risk you are comfortable with.</p>
<h3>Questions worth asking</h3>
<ul>
<li><strong>Is the brand core to its owner?</strong> Flagship brands (such as Bluehost within Newfold) are less likely to be retired than small brands in a large portfolio.</li>
<li><strong>Has the brand recently changed hands?</strong> Expect more change in the first year or two after an acquisition.</li>
<li><strong>Is there public financial information?</strong> Public companies and transparent private companies make it easier to judge stability.</li>
<li><strong>Do sister brands overlap?</strong> If two brands you are comparing share an owner, the differences may lie mainly in pricing, focus and support.</li>
<li><strong>How portable is your site?</strong> The more portable your setup, the less ownership matters.</li>
</ul>
<p>For side-by-side comparisons that weigh price, performance, features and support, see our <a href="/">web hosting rankings</a> and <a href="/articles/best-web-hosting-providers-compared">provider comparison</a>.</p>`,
  },
  {
    heading: "Who owns HostGator?",
    body: `<p>HostGator is owned by <strong>Newfold Digital</strong>. Endurance International Group acquired HostGator in 2012, and HostGator became part of Newfold when Clearlake Capital took Endurance private and combined it with Web.com in February 2021. HostGator is therefore a sister brand of Bluehost.</p>`,
  },
  {
    heading: "Are Bluehost and HostGator the same company?",
    body: `<p>They are separate brands with the same parent. Both are owned by Newfold Digital, which acquired them through Endurance International Group (Bluehost in 2010 and HostGator in 2012). They continue to operate under their own names and plans.</p>`,
  },
  {
    heading: "Who owns Network Solutions?",
    body: `<p>Network Solutions is owned by <strong>Newfold Digital</strong>. Web.com acquired Network Solutions in 2011, and Web.com combined with Endurance International Group to form Newfold in 2021. In 2025 Newfold folded the Web.com brand into Network Solutions and made Network Solutions the lead brand of its Network Solutions Group, alongside Register.com, Domain.com and Crazy Domains.</p>`,
  },
  {
    heading: "Is Domain.com owned by the same company as Bluehost?",
    body: `<p>Yes. Domain.com and Bluehost are both owned by <strong>Newfold Digital</strong>. Since 2025 Domain.com has sat in Newfold's Network Solutions Group, while Bluehost leads the Bluehost Group.</p>`,
  },
  {
    heading: "Who owns BigRock?",
    body: `<p>BigRock was launched by Mumbai-based Directi and was sold to <strong>Endurance International Group</strong> as part of Directi's web presence business, in a deal that closed in January 2014. Endurance became part of <strong>Newfold Digital</strong> in 2021, which makes BigRock part of the Newfold family.</p>`,
  },
  {
    heading: "Is Hostinger owned by Newfold or GoDaddy?",
    body: `<p>No. Hostinger is an independent, privately held company founded in Lithuania in 2004. It is not part of Newfold Digital, GoDaddy or any other hosting group, and it reports that it has never raised traditional venture capital.</p>`,
  },
  {
    heading: "Who owns A2 Hosting now?",
    body: `<p>A2 Hosting was acquired by <strong>World Host Group</strong> in January 2025 and renamed <strong>Hosting.com</strong> in spring 2025. World Host Group, backed by Oakley Capital, now operates as hosting.com group. The a2hosting.com website redirects to hosting.com.</p>`,
  },
  {
    heading: "Who owns Rocket.net and FastComet?",
    body: `<p>Both are part of <strong>hosting.com group</strong> (formerly World Host Group). FastComet's deal was announced in April 2025 and Rocket.net joined in August 2025. Both kept their own brands, and Rocket.net's founder became hosting.com's Chief Product Officer.</p>`,
  },
  {
    heading: "Is GoDaddy owned by private equity?",
    body: `<p>No. GoDaddy has been a publicly traded company on the New York Stock Exchange (ticker GDDY) since its April 2015 IPO. Its shares are owned by public and institutional investors rather than a single private equity sponsor.</p>`,
  },
  {
    heading: "Who owns WordPress?",
    body: `<p>The WordPress software is open source and not owned by any single company; it is developed by a community of contributors. The WordPress trademark is held by the WordPress Foundation, a nonprofit. <strong>Automattic</strong>, the company founded by WordPress co-founder Matt Mullenweg, runs WordPress.com and other products. Hosting companies such as WP Engine, Bluehost and Hostinger sell hosting for self-hosted WordPress.</p>`,
  },
  {
    heading: "Does consolidation make web hosting more expensive?",
    body: `<p>There is no simple answer. Scale can lower costs per customer, and fierce competition keeps intro prices low across the industry. But consolidation can also reduce the number of truly independent competitors, and debt-funded owners need strong cash flow, which can show up in renewal pricing and upsells. Some cost pressures come from elsewhere entirely - for example, repeated cPanel license price increases since 2019. The best defense is the same as always: compare renewal prices, test before committing long term, and keep your site portable.</p>`,
  },
  {
    heading: "How we researched this guide",
    body: `<p>This guide was researched and written by The Top Web Hosting editorial team in October 2026. We relied on primary sources wherever possible - company press releases, SEC and stock exchange filings, investor announcements and company financial reports - supplemented by established technology and domain-industry publications. Where sources disagreed (for example on founding dates, deal values or exact timing), we say so in the text or use the figure from the primary filing. Company-reported customer counts and revenue are labeled as such.</p>
<p>Ownership in this industry changes frequently. Facts are current to the best of our knowledge as of publication; we update this guide when significant deals are announced. If you spot something out of date, tell us via our <a href="/contact">contact page</a>.</p>
<p>Some providers mentioned may compensate us when readers sign up through our links. This never affects the facts we report about ownership, finances or incidents. Read our <a href="/editorial-policy">editorial policy</a> and <a href="/how-we-rank">ranking methodology</a>.</p>`,
  },
  {
    heading: "Sources and further reading",
    body: `<p>Key primary and secondary sources used in this guide:</p>
<ul>
<li>Endurance International Group S-1/A registration statement (2013), SEC EDGAR: <a href="https://www.sec.gov/Archives/edgar/data/0001237746/000119312513408181/d555515ds1a.htm" rel="nofollow noopener" target="_blank">sec.gov</a></li>
<li>Endurance International Group agreement to be acquired by Clearlake (Nov 2020), SEC exhibit: <a href="https://www.sec.gov/Archives/edgar/data/1237746/000119312520283358/d46523dex992.htm" rel="nofollow noopener" target="_blank">sec.gov</a></li>
<li>Clearlake completes acquisition of Endurance and announces formation of Newfold Digital (Feb 2021): <a href="https://siris.com/news/clearlake-completes-acquisition-of-endurance-international-group-and-strategic-investment-transactions-with-web-com-and-affiliates-of-siris-announces-formation-of-newfold-digital" rel="nofollow noopener" target="_blank">siris.com</a></li>
<li>SEC press release on Endurance International Group settlement (2018): <a href="https://www.sec.gov/news/press-release/2018-161" rel="nofollow noopener" target="_blank">sec.gov</a></li>
<li>Endurance acquisition of Directi web presence business (Jan 2014), SEC exhibit: <a href="https://www.sec.gov/Archives/edgar/data/0001237746/000119312514024941/d664882dex991.htm" rel="nofollow noopener" target="_blank">sec.gov</a></li>
<li>Web.com agreement to be acquired by Siris (June 2018): <a href="https://siris.com/news/web-com-announces-agreement-to-be-acquired-by-an-affiliate-of-siris-capital-group-llc-for-25-00-per-share-in-all-cash-deal-valued-at-approximately-2-billion" rel="nofollow noopener" target="_blank">siris.com</a></li>
<li>Web.com acquires Network Solutions (Aug 2011): <a href="https://www.thedomains.com/2011/08/03/web-com-acquires-network-solutions-for-560m" rel="nofollow noopener" target="_blank">thedomains.com</a></li>
<li>Web.com is now part of Network Solutions; Newfold divides into two divisions (June 2025): <a href="https://domainnamewire.com/2025/06/18/web-com-is-now-officially-part-of-network-solutions-newfold-divides-into-two-divisions/" rel="nofollow noopener" target="_blank">domainnamewire.com</a></li>
<li>Newfold Digital completes sale of MarkMonitor to Com Laude (Dec 2025): <a href="https://clearlake.com/news/newfold-digital-completes-sale-of-markmonitor-to-com-laude/" rel="nofollow noopener" target="_blank">clearlake.com</a></li>
<li>Clearlake's Newfold finalizes terms for $100 million financing (Dec 2025): <a href="https://www.bloomberg.com/news/articles/2025-12-09/clearlake-s-newfold-finalizes-terms-for-100-million-financing" rel="nofollow noopener" target="_blank">bloomberg.com</a></li>
<li>Bluehost owner moving to Oracle Cloud (Mar 2025): <a href="https://www.techradar.com/pro/bluehost-owner-is-moving-to-oracle-cloud-so-could-thousands-of-websites-be-about-to-migrate" rel="nofollow noopener" target="_blank">techradar.com</a></li>
<li>A2 Hosting outage coverage (Apr-May 2019): <a href="https://www.theregister.com/2019/04/26/a2_hosting_outage/" rel="nofollow noopener" target="_blank">theregister.com</a></li>
<li>World Host Group acquires A2 Hosting (Jan 2025): <a href="https://webhosting.today/2025/01/29/world-host-group-acquires-a2-hosting/" rel="nofollow noopener" target="_blank">webhosting.today</a></li>
<li>A2 Hosting rebrands as Hosting.com (2025): <a href="https://www.techradar.com/pro/a2-hosting-rebrands-as-hosting-com" rel="nofollow noopener" target="_blank">techradar.com</a></li>
<li>Rocket.net joins hosting.com (Aug 2025): <a href="https://rocket.net/blog/rocket-net-joins-hosting-com-to-build-and-deliver-industry-leading-saas-web-hosting-platform" rel="nofollow noopener" target="_blank">rocket.net</a></li>
<li>Oakley Capital portfolio page for hosting.com: <a href="https://www.oakleycapital.com/our-companies/hostingcom" rel="nofollow noopener" target="_blank">oakleycapital.com</a></li>
<li>Hostinger reports 2025 revenue growth (Feb 2026): <a href="https://webhosting.today/2026/02/18/hostinger-reports-51-revenue-growth-in-2025-reaches-e275-4-million/" rel="nofollow noopener" target="_blank">webhosting.today</a></li>
<li>Hostinger data breach coverage (Aug 2019): <a href="https://www.bleepingcomputer.com/news/security/hostinger-data-breach-affects-almost-14-million-customers/" rel="nofollow noopener" target="_blank">bleepingcomputer.com</a></li>
<li>GoDaddy completes acquisition of Host Europe Group (Apr 2017), SEC exhibit: <a href="https://www.sec.gov/Archives/edgar/data/0001609711/000160971117000070/a991hegclosingpressrelease.htm" rel="nofollow noopener" target="_blank">sec.gov</a></li>
<li>IONOS IPO pricing (Feb 2023): <a href="https://www.ionos-group.com/fileadmin/Publications/Press_Releases/230207_Pricing_Press_Release_EN.pdf" rel="nofollow noopener" target="_blank">ionos-group.com</a></li>
<li>CPP Investments and Hg on team.blue (July 2024): <a href="https://cppinvestments.com/wp-content/uploads/2024/07/Team.blue-CPP-Investments-Hg-Press-Release-FINAL-10Jul2024-ENGLISH-.pdf" rel="nofollow noopener" target="_blank">cppinvestments.com</a></li>
<li>Squarespace Q3 2023 quarterly report (Google Domains asset purchase), SEC EDGAR: <a href="https://www.sec.gov/Archives/edgar/data/1496963/000149696323000073/sqsp-20230930.htm" rel="nofollow noopener" target="_blank">sec.gov</a></li>
<li>Permira completes acquisition of Squarespace (Oct 2024): <a href="https://www.permira.com/news-and-insights/announcements/permira-completes-acquisition-of-squarespace" rel="nofollow noopener" target="_blank">permira.com</a></li>
<li>DigitalOcean completes acquisition of Cloudways (Sept 2022): <a href="https://investors.digitalocean.com/news/news-details/2022/DigitalOcean-Completes-Acquisition-of-Cloudways/default.aspx" rel="nofollow noopener" target="_blank">digitalocean.com</a></li>
<li>Akamai completes acquisition of Linode (Mar 2022): <a href="https://www.akamai.com/newsroom/press-release/akamai-completes-acquisition-of-linode" rel="nofollow noopener" target="_blank">akamai.com</a></li>
<li>Court orders restoration of WP Engine's WordPress.org access (Dec 2024): <a href="https://techcrunch.com/2024/12/10/court-orders-mullenweg-and-automattic-to-restore-wp-engines-access-to-wordpress-org" rel="nofollow noopener" target="_blank">techcrunch.com</a></li>
<li>Oakley Capital agrees sale of WebPros to CVC Fund VII (Dec 2019): <a href="https://www.cvc.com/media/news/2019/2019-12-12-oakley-capital-agrees-sale-of-webpros-to-cvc-fund-vii/" rel="nofollow noopener" target="_blank">cvc.com</a></li>
<li>Private equity firm buying Namecheap (Sept 2025): <a href="https://domainnamewire.com/2025/09/12/private-equity-firm-is-buying-namecheap-in-deal-that-values-company-at-1-5-billion/" rel="nofollow noopener" target="_blank">domainnamewire.com</a></li>
<li>cPanel 2027 price increase coverage (Oct 2026): <a href="https://webhosting.today/2026/10/05/cpanel-will-raise-prices-again-in-2027-the-licence-has-doubled-since-2019-and-is-no-longer-the-expensive-part-of-the-server/" rel="nofollow noopener" target="_blank">webhosting.today</a></li>
</ul>`,
  },
];

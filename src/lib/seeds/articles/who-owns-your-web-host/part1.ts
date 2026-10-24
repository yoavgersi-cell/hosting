import type { ArticleSection } from "@/lib/config";

// Part 1 of "Who Owns Your Web Host?". Quick answer, ownership table,
// why it matters, how roll-ups work, deal timeline.
// Every fact here comes from the research notes in index.ts; anything
// sources disagree on is stated as such.

export const part1: ArticleSection[] = [
  {
    heading: "Who owns the biggest web hosting brands?",
    body: `<div class="qa"><strong>Short answer:</strong> A handful of groups own a large share of the mainstream web hosting brands. <strong>Newfold Digital</strong> (backed by private equity firm Clearlake Capital) owns Bluehost, HostGator, Network Solutions, Register.com, Domain.com and Crazy Domains, and acquired BigRock through its predecessor Endurance International Group. <strong>hosting.com group</strong> (formerly World Host Group, backed by Oakley Capital) owns Hosting.com - the former A2 Hosting - plus FastComet, Rocket.net and a string of regional brands. <strong>GoDaddy</strong> is a public company that has absorbed brands such as Media Temple and Host Europe Group. <strong>Hostinger</strong> remains independent and privately held, and <strong>UltaHost</strong> is a smaller independent host.</div>
<p>Most people choose a web host by comparing prices, features and reviews. Very few look at who actually owns the company - yet ownership shapes pricing, support quality, infrastructure decisions, rebrands and even whether a brand will still exist in a few years. Over the past fifteen years the hosting industry has consolidated dramatically through acquisitions, mergers and private equity "roll-ups", and that process accelerated again in 2024-2026.</p>
<p>This guide maps who owns which hosting brands in 2026, explains how the major groups were built, walks through the deals that matter, and shows what consolidation means for you as a customer - including how to check who owns your host and how to protect your website whatever happens to the company behind it. Every factual claim comes from company announcements, regulatory filings or reputable industry reporting, listed in the <a href="#sources-and-further-reading">sources</a> at the end. Where sources disagree, we say so.</p>
<h3>Ownership at a glance: the brands on our site</h3>
<table>
<thead><tr><th>Brand</th><th>Owner (2026)</th><th>Owner type</th><th>How it got there</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/bluehost">Bluehost</a></td><td>Newfold Digital</td><td>Private equity-backed (Clearlake Capital)</td><td>Acquired by Endurance International Group in 2010; Endurance became part of Newfold in 2021</td></tr>
<tr><td><a href="/reviews/network-solutions">Network Solutions</a></td><td>Newfold Digital</td><td>Private equity-backed</td><td>Acquired by Web.com in 2011; Web.com combined with Endurance to form Newfold in 2021</td></tr>
<tr><td><a href="/reviews/domain-com">Domain.com</a></td><td>Newfold Digital</td><td>Private equity-backed</td><td>Part of Endurance's brand portfolio before Newfold</td></tr>
<tr><td><a href="/reviews/bigrock">BigRock</a></td><td>Newfold Digital (via Endurance)</td><td>Private equity-backed</td><td>Bought by Endurance from India's Directi in a deal that closed in January 2014</td></tr>
<tr><td><a href="/reviews/hosting-com">Hosting.com</a></td><td>hosting.com group (formerly World Host Group)</td><td>Private equity-backed (Oakley Capital)</td><td>A2 Hosting acquired January 2025, rebranded to Hosting.com in spring 2025</td></tr>
<tr><td><a href="/reviews/hostinger">Hostinger</a></td><td>Hostinger (independent)</td><td>Privately held; reports it has never raised traditional venture capital</td><td>Founded in Lithuania in 2004 as Hosting Media; renamed Hostinger in 2011</td></tr>
<tr><td><a href="/reviews/ultahost">UltaHost</a></td><td>UltaHost, Inc. (independent)</td><td>Privately held</td><td>Founded in 2018; became an independent brand in 2021</td></tr>
</tbody>
</table>
<p><strong>How to use this guide:</strong> if you only want to know who owns a specific brand, jump to the short "Who owns...?" answers near the end, or use the family-tree section for a one-page view of every group. If you are deciding whether ownership should influence your choice of host, read the sections on what happens after an acquisition, how to check who owns your host and how to protect your website.</p>
<p>Beyond our list, GoDaddy (NYSE: GDDY), IONOS (majority-owned by United Internet), team.blue (backed by Hg), Squarespace (taken private by Permira), DigitalOcean, Akamai and others are major forces in the market. We cover each below.</p>`,
  },
  {
    heading: "Why does it matter who owns your web host?",
    body: `<p>Ownership matters because the company at the top of the structure makes the decisions that eventually reach your account: what you pay at renewal, which data centers and software your site runs on, how support is staffed, whether a brand keeps operating or is merged into another, and how much risk the business is carrying.</p>
<h3>Five ways ownership affects customers</h3>
<ol>
<li><strong>Pricing and renewals.</strong> Groups that buy brands with borrowed money need cash flow to service that debt. That does not automatically mean higher prices, but it shapes commercial priorities - and renewal pricing is where hosting companies make much of their margin.</li>
<li><strong>Brand changes and shutdowns.</strong> Consolidators frequently merge or retire brands. GoDaddy retired Media Temple in 2023; Newfold folded Web.com into Network Solutions in 2025; Liquid Web absorbed Nexcess; Hostinger closed its free host 000webhost and folded Zyro and Niagahoster into the Hostinger brand. Each change meant migrations, new dashboards or new terms for customers.</li>
<li><strong>Infrastructure decisions.</strong> Owners decide where sites physically run. Newfold, for example, is moving its infrastructure to Oracle Cloud; Bluehost said in November 2025 that nearly one million customers had already been migrated.</li>
<li><strong>Support and culture.</strong> Integration can change support teams, processes and tools. Experiences vary widely - some acquired brands improve with more resources, others decline as costs are cut.</li>
<li><strong>Financial stability.</strong> A highly leveraged owner may face pressure that a profitable independent company does not. Newfold restructured its debt in 2025; Hostinger reports strong revenue growth and profitability without venture capital.</li>
</ol>
<h3>Why the "comparison" may be less of a comparison</h3>
<p>When you compare two hosts that share an owner, you may be comparing two storefronts for related infrastructure and policies. That is not necessarily bad - sister brands often target different customers, such as Bluehost for WordPress beginners and BigRock for Indian businesses - but it helps to know when an apparent choice between competitors is really a choice between two products from the same parent.</p>`,
  },
  {
    heading: "How does consolidation in the web hosting industry work?",
    body: `<p>The hosting industry has a structure that makes consolidation attractive. Shared hosting and domain registration generate recurring subscription revenue, customers rarely switch once a site is set up, and many costs - data centers, software licenses, support platforms, marketing - get cheaper per customer at scale. That combination draws strategic buyers and private equity investors alike.</p>
<h3>The roll-up model</h3>
<p>A common pattern is the <strong>roll-up</strong>: an investor-backed platform company buys many smaller hosts, keeps some brands running for their reputation or regional strength, migrates customers onto shared infrastructure, and centralizes billing, support and engineering. Endurance International Group built a large portfolio this way in the 2000s and 2010s, and hosting.com group (formerly World Host Group) has followed a similar playbook in the 2020s, acquiring more than a dozen brands across several continents.</p>
<h3>Three kinds of owners you will meet</h3>
<table>
<thead><tr><th>Owner type</th><th>Examples</th><th>Typical characteristics</th></tr></thead>
<tbody>
<tr><td>Public companies</td><td>GoDaddy, IONOS, DigitalOcean, Akamai</td><td>Publish quarterly results and customer counts; answerable to shareholders; detailed regulatory disclosures</td></tr>
<tr><td>Private equity-backed groups</td><td>Newfold Digital (Clearlake), hosting.com group (Oakley Capital), team.blue (Hg), Squarespace (Permira), WP Engine (Silver Lake), WebPros (CVC)</td><td>Growth through acquisitions; often use debt; less public disclosure; ownership may change again when investors exit</td></tr>
<tr><td>Independent private companies</td><td>Hostinger, UltaHost</td><td>Decisions made by founders and management; disclosure varies; growth funded by revenue</td></tr>
</tbody>
</table>
<h3>Brand portfolios, not single brands</h3>
<p>Large groups typically run a <strong>portfolio of brands</strong> aimed at different segments and regions. Newfold's two divisions - a Bluehost Group and a Network Solutions Group - reflect this. team.blue describes itself as a family of dozens of European brands. IONOS operates brands such as STRATO, Arsys, Fasthosts and home.pl alongside IONOS itself. The brand you buy from may be one of many under the same roof.</p>`,
  },
  {
    heading: "What are the biggest web hosting acquisitions and deals?",
    body: `<p>The table below lists major deals that shaped today's hosting and domain market. Values are as reported in company announcements and regulatory filings; where no value was disclosed, we say so.</p>
<table>
<thead><tr><th>Year</th><th>Deal</th><th>Reported value</th></tr></thead>
<tbody>
<tr><td>2000</td><td>VeriSign acquires Network Solutions (all-stock)</td><td>About $19.3B per VeriSign's SEC filing (often quoted as ~$21B)</td></tr>
<tr><td>2003</td><td>VeriSign sells the Network Solutions registrar business to Pivotal Equity Group</td><td>About $100M</td></tr>
<tr><td>2010</td><td>Web.com acquires Register.com</td><td>About $135M</td></tr>
<tr><td>2010</td><td>Endurance International Group acquires Bluehost</td><td>Not disclosed in sources reviewed</td></tr>
<tr><td>2011</td><td>Web.com acquires Network Solutions</td><td>$405M cash plus 18M shares (about $560M at announcement)</td></tr>
<tr><td>2012</td><td>Endurance acquires HostGator</td><td>Widely reported around $225M; Endurance's filings indicate a larger total</td></tr>
<tr><td>2013</td><td>GoDaddy acquires Media Temple</td><td>Terms not disclosed at the time</td></tr>
<tr><td>2013</td><td>Endurance IPO on Nasdaq (EIGI)</td><td>Priced at $12 per share</td></tr>
<tr><td>2014</td><td>Endurance acquires Directi's web presence business (incl. BigRock, ResellerClub)</td><td>Commonly cited at $160M; filings show ~$109M upfront plus contingent payments</td></tr>
<tr><td>2015</td><td>GoDaddy IPO on NYSE (GDDY)</td><td>Priced at $20 per share</td></tr>
<tr><td>2016</td><td>Endurance completes acquisition of Constant Contact</td><td>About $1.1B</td></tr>
<tr><td>2017</td><td>GoDaddy completes acquisition of Host Europe Group</td><td>About €1.7B (roughly $1.8-1.9B)</td></tr>
<tr><td>2018</td><td>Siris takes Web.com private</td><td>About $2B ($25.00 per share)</td></tr>
<tr><td>2018</td><td>Silver Lake invests in WP Engine</td><td>$250M</td></tr>
<tr><td>2019</td><td>Oakley Capital agrees to sell WebPros (cPanel, Plesk) to CVC</td><td>Not disclosed; Oakley reinvested $200M</td></tr>
<tr><td>2021</td><td>Clearlake acquires Endurance; Newfold Digital formed with Web.com</td><td>About $3.0B for Endurance including debt</td></tr>
<tr><td>2022</td><td>Akamai acquires Linode</td><td>About $900M</td></tr>
<tr><td>2022</td><td>DigitalOcean acquires Cloudways</td><td>$350M</td></tr>
<tr><td>2022</td><td>Newfold acquires MarkMonitor</td><td>About $302.5M</td></tr>
<tr><td>2023</td><td>IONOS IPO in Frankfurt</td><td>Priced at €18.50 per share</td></tr>
<tr><td>2023</td><td>Squarespace acquires Google Domains assets</td><td>About $180.7M</td></tr>
<tr><td>2024</td><td>CPP Investments takes ~20% of team.blue</td><td>About €550M (valuing team.blue at €4.8B)</td></tr>
<tr><td>2024</td><td>Permira completes take-private of Squarespace</td><td>About $7.2B</td></tr>
<tr><td>2025</td><td>World Host Group acquires A2 Hosting; rebrands to Hosting.com</td><td>Not disclosed</td></tr>
<tr><td>2025</td><td>World Host Group acquires FastComet; Rocket.net joins hosting.com</td><td>Not disclosed</td></tr>
<tr><td>2025</td><td>CVC agrees to take majority stake in Namecheap</td><td>Values Namecheap at about $1.5B including debt</td></tr>
<tr><td>2025</td><td>Newfold sells MarkMonitor to Com Laude</td><td>Not disclosed</td></tr>
</tbody>
</table>
<p>The following sections explain the groups behind these deals in detail, starting with the largest owner of brands on our list: Newfold Digital.</p>`,
  },
];

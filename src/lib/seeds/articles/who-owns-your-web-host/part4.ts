import type { ArticleSection } from "@/lib/config";

// Part 4 of "Who Owns Your Web Host?". The wider market: GoDaddy, IONOS,
// team.blue, Squarespace, cloud deals, Liquid Web, WP Engine, Namecheap.

export const part4: ArticleSection[] = [
  {
    heading: "Who owns GoDaddy, and which brands has it absorbed?",
    body: `<p><strong>GoDaddy is a public company</strong>, listed on the New York Stock Exchange under the ticker GDDY since April 2015, when its IPO priced at $20 per share and raised about $460 million. It was founded in Phoenix in 1997 by Bob Parsons as Jomax Technologies and adopted the GoDaddy name in 2006. As a public company, its largest owners are institutional shareholders rather than a single private equity sponsor.</p>
<h3>Scale</h3>
<p>GoDaddy reported full-year 2025 revenue of about $5.0 billion, up 8%, and coverage of its results put its customer count at roughly 20.4 million at the end of 2025 - slightly down year on year. That makes it one of the largest companies in the domains and hosting market by customers.</p>
<h3>Notable acquisitions</h3>
<ul>
<li><strong>Media Temple (2013):</strong> GoDaddy announced the acquisition of the Los Angeles-based host in October 2013, saying it would operate independently. Terms were not disclosed at the time. GoDaddy retired the Media Temple brand in 2023 and moved its customers onto GoDaddy.</li>
<li><strong>Host Europe Group (2017):</strong> completed in April 2017 for total consideration of about €1.7 billion, bringing a large portfolio of European hosting brands. GoDaddy has since divested some of them - it sold the UK brand Heart Internet to Your.Online in 2024.</li>
<li><strong>Sucuri (2017):</strong> the website security company, acquired in 2017 and kept operating as a separate brand.</li>
</ul>
<p>Media Temple is a textbook example of how acquired brands can be kept separate for years and then retired - something customers of any acquired host should keep in mind.</p>`,
  },
  {
    heading: "Who owns IONOS and team.blue?",
    body: `<p>Europe has its own large hosting groups, and two of the biggest are IONOS and team.blue.</p>
<h3>IONOS</h3>
<p><strong>IONOS</strong> - formerly 1&amp;1 - is majority-owned by the German internet company <strong>United Internet</strong>. IONOS listed on the Frankfurt Stock Exchange in February 2023 at €18.50 per share, valuing it at about €2.6 billion. After the IPO, United Internet held 63.8%, private equity firm Warburg Pincus 21.2% and public investors the rest. IONOS's 2025 financial statements showed United Internet still holding 63.8% at the end of 2025, with the free float grown to about 31%.</p>
<p>The IONOS name dates from 2018, when 1&amp;1's hosting business merged with cloud provider ProfitBricks and rebranded as "1&amp;1 IONOS" to signal it offered more than hosting. The group's brand family has included STRATO, Arsys, Fasthosts, home.pl, World4You, InterNetX, Sedo and united-domains.</p>
<h3>team.blue</h3>
<p><strong>team.blue</strong> was formed in 2019 when the Belgian hosting group Combell, backed by private equity firm <strong>Hg</strong>, merged with the Dutch host TransIP. Italy's Register Group, including Register.it, joined later that year, and the group has continued to acquire brands across Europe, including Loopia Group.</p>
<p>In July 2024 <strong>CPP Investments</strong> (the Canada Pension Plan Investment Board) agreed to invest about €550 million for roughly 20% of team.blue, valuing the group at €4.8 billion, with Hg remaining the largest investor. At the time team.blue reported about 3.3 million small business customers across 22 European countries and more than 2,500 employees. Its 2025 results reported annual recurring revenue of €866 million and 11% organic growth, with the customer total still reported at more than 3.3 million.</p>`,
  },
  {
    heading: "What happened to Google Domains and Squarespace?",
    body: `<p>In June 2023 Google agreed to sell the assets of its domain registration business, <strong>Google Domains</strong>, to <strong>Squarespace</strong>. The deal closed in September 2023 for total consideration of about $180.7 million, according to Squarespace's SEC filing. Roughly 10 million domains moved to Squarespace, with migrations reported as complete by July 2024.</p>
<p>Squarespace itself then changed hands. In May 2024 private equity firm <strong>Permira</strong> agreed to take Squarespace private at $44 per share. After proxy adviser ISS opposed the price, the offer was raised to $46.50 per share - about $7.2 billion - and the deal completed in October 2024, delisting Squarespace from the NYSE. Founder Anthony Casalena rolled over most of his equity and remained CEO.</p>
<p>For domain owners, the episode shows that even a service run by one of the world's largest technology companies can be sold - and that the buyer itself can be sold soon after. Owning your domain at a registrar you are comfortable with, and knowing how to transfer it, matters more than any single brand's size.</p>`,
  },
  {
    heading: "Which cloud and managed hosting companies have been acquired?",
    body: `<p>Consolidation has reached cloud and managed hosting as well as shared hosting.</p>
<table>
<thead><tr><th>Deal</th><th>Date</th><th>Value (reported)</th><th>What changed</th></tr></thead>
<tbody>
<tr><td>Akamai acquires Linode</td><td>Announced February 2022; completed March 2022</td><td>About $900M</td><td>The developer-focused cloud provider became part of the CDN and security giant's cloud computing business</td></tr>
<tr><td>DigitalOcean acquires Cloudways</td><td>Announced August 2022; completed September 2022</td><td>$350M (part paid over 30 months)</td><td>The managed cloud hosting platform joined DigitalOcean</td></tr>
<tr><td>Liquid Web / Nexcess</td><td>Madison Dearborn invested in 2015; One Equity Partners later acquired the business (reported 2023)</td><td>Not disclosed</td><td>Nexcess was fully absorbed into Liquid Web in 2025, with nexcess.com redirecting</td></tr>
</tbody>
</table>
<p>These deals matter for site owners because platforms such as Cloudways and Linode sit underneath many agencies' and developers' websites. When the owner changes, roadmaps, pricing and support models can change too.</p>`,
  },
  {
    heading: "Who owns WP Engine, and what is the dispute with Automattic?",
    body: `<p><strong>WP Engine</strong>, the managed WordPress hosting company based in Austin, Texas, received a <strong>$250 million investment from private equity firm Silver Lake</strong> in January 2018, described by Bloomberg as a majority stake. At the time, WP Engine reported more than $100 million in annual recurring revenue and more than 75,000 customers.</p>
<h3>The Automattic-WP Engine dispute: a neutral timeline</h3>
<p>Beginning in September 2024, WP Engine became involved in a high-profile dispute with <strong>Automattic</strong> and its CEO Matt Mullenweg, a co-founder of WordPress. The key events, as reported by TechCrunch, The Register and court filings:</p>
<ul>
<li><strong>20 September 2024:</strong> In a WordCamp US talk and a blog post, Mullenweg criticized WP Engine, arguing it contributed too little to WordPress and that its use of "WP" confused customers. Both sides then exchanged cease-and-desist letters.</li>
<li><strong>25 September 2024:</strong> WordPress.org blocked WP Engine's access to its resources, briefly lifting the block between 27 September and 1 October.</li>
<li><strong>2 October 2024:</strong> WP Engine sued Automattic and Mullenweg in federal court in Northern California, alleging extortion and interference. The defendants deny the claims and allege trademark misuse.</li>
<li><strong>10 December 2024:</strong> The court granted WP Engine a preliminary injunction, ordering access to WordPress.org restored to how it stood on 20 September 2024, after finding WP Engine likely to succeed on a claim of intentional interference with contractual relations.</li>
<li><strong>2025:</strong> The litigation continued, including a separate customer class action filed in February 2025 and further amended complaints. Each side has characterized rulings on motions to dismiss in its own favor.</li>
</ul>
<p>As of our research we found no final judgment in the case. For WordPress users, the dispute was a reminder that the WordPress ecosystem depends on relationships between companies as well as on open-source software - and that keeping your site portable and backed up protects you from disputes you have no part in.</p>`,
  },
  {
    heading: "Who owns Namecheap?",
    body: `<p><strong>Namecheap</strong>, one of the largest independent domain registrars and a provider of shared hosting, agreed in September 2025 to sell a majority stake to private equity firm <strong>CVC Capital Partners</strong> in a deal that valued Namecheap at about $1.5 billion including debt, according to Domain Name Wire. CVC is also the majority owner of WebPros, the company behind cPanel and Plesk - which brings us to the software layer that sits underneath much of the hosting industry.</p>`,
  },
];

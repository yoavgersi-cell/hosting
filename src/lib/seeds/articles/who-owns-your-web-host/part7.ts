import type { ArticleSection } from "@/lib/config";

// Part 7 of "Who Owns Your Web Host?". History, the economics behind
// roll-ups, family trees, WordPress implications and extra FAQs. Built only
// from the facts already sourced elsewhere in this guide.

export const history: ArticleSection = {
  heading: "How did the web hosting industry consolidate? A short history",
  body: `<p>Today's ownership map is the product of roughly three decades of deals. Looking at them in sequence explains why so many brands now share a parent.</p>
<h3>1990s: domains become a business</h3>
<p>The commercial internet began with a near-monopoly. From 1993, Network Solutions ran registrations for .com, .org and .net under a cooperative agreement with the US National Science Foundation, and from 1995 it charged a $50 annual fee. Domain registration, and the hosting that followed it, became a recurring-revenue business almost from the start.</p>
<h3>2000s: the first big deals and the first roll-ups</h3>
<p>In 2000 VeriSign bought Network Solutions in an all-stock deal valued in the tens of billions of dollars at the height of the dot-com boom, then in 2003 sold the registrar business for about $100 million while keeping the .com registry. Meanwhile, Endurance International Group - founded in 1997 - began assembling a portfolio of hosting brands, acquiring iPower in 2007.</p>
<h3>2010s: portfolios go public</h3>
<p>The 2010s were the decade of large portfolios and public listings. Endurance acquired Bluehost (2010), HostGator and Homestead (2012) and Directi's web presence business including BigRock (closed January 2014), and listed on Nasdaq in 2013. Web.com bought Register.com (2010) and Network Solutions (2011). GoDaddy bought Media Temple (2013), listed on the NYSE (2015) and acquired Host Europe Group (2017). Endurance diversified into email marketing with Constant Contact (2016). By the end of the decade private equity was taking companies off the market again: Siris took Web.com private in 2018, Silver Lake invested in WP Engine in 2018, and CVC agreed to buy cPanel and Plesk owner WebPros in 2019.</p>
<h3>2020s: private equity and platform deals</h3>
<p>The current decade has been defined by private equity and by consolidation at every layer of the stack:</p>
<ul>
<li><strong>2021:</strong> Clearlake took Endurance private for about $3.0 billion including debt and combined it with Web.com to form Newfold Digital.</li>
<li><strong>2022:</strong> Akamai bought Linode, DigitalOcean bought Cloudways, and Newfold bought MarkMonitor.</li>
<li><strong>2023:</strong> IONOS listed in Frankfurt, Squarespace bought Google Domains' assets, GoDaddy retired Media Temple, and Oakley Capital agreed to buy Webcentral's domains and hosting business.</li>
<li><strong>2024:</strong> Permira took Squarespace private, CPP Investments bought a stake in team.blue, and World Host Group merged with Webcentral and bought Nimbus Hosting.</li>
<li><strong>2025:</strong> World Host Group bought A2 Hosting and renamed it Hosting.com, added FastComet and Rocket.net, and adopted the hosting.com name; Newfold retired Web.com, split into two divisions, restructured its debt and sold MarkMonitor; CVC agreed to take a majority stake in Namecheap.</li>
<li><strong>2026:</strong> Newfold appointed a new CEO, and cPanel announced another round of price increases for 2027.</li>
</ul>
<p>The direction is consistent: fewer independent companies, larger groups, and ownership that changes hands as investors buy, merge and exit.</p>`,
};

export const whyPe: ArticleSection = {
  heading: "Why do private equity firms buy web hosting companies?",
  body: `<p>Private equity firms are drawn to web hosting for reasons that are visible in the deals above:</p>
<ul>
<li><strong>Recurring revenue.</strong> Hosting and domains are subscriptions, renewed every year or every few years. Predictable revenue makes it easier to finance acquisitions.</li>
<li><strong>Sticky customers.</strong> Moving a website takes effort, so many customers stay for years even when renewal prices rise.</li>
<li><strong>Economies of scale.</strong> Data centers, software licenses, support systems and marketing cost less per customer in a bigger group, so combining brands can improve margins.</li>
<li><strong>A fragmented market.</strong> Thousands of small hosts exist worldwide, giving roll-up platforms a long list of potential acquisitions - as World Host Group's string of regional deals shows.</li>
<li><strong>Cross-selling.</strong> Groups can sell domains, email, security, website builders and marketing tools to the same customers. Newfold's purchase of the Yoast SEO plugin and Endurance's earlier move into email marketing with Constant Contact reflect this logic.</li>
</ul>
<p>The model works best when integration genuinely improves the service. It struggles when cost-cutting outpaces investment, or when the debt used to fund deals becomes a burden.</p>`,
};

export const leverage: ArticleSection = {
  heading: "What is a leveraged buyout, and why does debt matter for a web host?",
  body: `<p>In a <strong>leveraged buyout (LBO)</strong>, an investor buys a company using a combination of its own equity and a significant amount of borrowed money. The debt typically sits on the acquired company's balance sheet, and the company's cash flow is used to pay interest and eventually repay it.</p>
<p>Leverage can amplify investors' returns when the business grows, but it also leaves less room for error. If growth slows or interest rates rise, more of the company's cash goes to servicing debt rather than to infrastructure, product development or support.</p>
<h3>A real-world example</h3>
<p>Newfold Digital illustrates the dynamic. Clearlake's 2021 acquisition of Endurance was valued at about $3.0 billion including debt. In 2025 Bloomberg reported that Newfold was in talks with lenders to overhaul its debt, and by October 2025 a deal with creditors involving about $100 million of new money and a debt exchange was taking shape, with Moody's reported to have cut Newfold's rating deep into speculative territory. Terms were finalized in December 2025, pushing some maturities out to 2029. Industry coverage has put the company's debt at roughly $3.5 billion.</p>
<h3>What it means for customers</h3>
<p>A company's debt does not determine the quality of your hosting from one month to the next, and refinancing is common. But debt pressure can influence pricing, investment and strategy over time - and it is one reason to keep your website portable and your backups independent, whichever host you choose.</p>`,
};

export const registrars: ArticleSection = {
  heading: "How has consolidation affected domain registrars?",
  body: `<p>Domain registrars have consolidated alongside hosts, and the two businesses are often intertwined - many hosts are registrars, and many registrars sell hosting.</p>
<ul>
<li><strong>Network Solutions</strong> went from running the early .com registry to being sold by VeriSign (2003), acquired by Web.com (2011) and absorbed into Newfold (2021), where it now leads the Network Solutions Group.</li>
<li><strong>Register.com</strong> was acquired by Web.com in 2010 and is now part of Newfold.</li>
<li><strong>Domain.com</strong> and <strong>Crazy Domains</strong> sit in Newfold's Network Solutions Group.</li>
<li><strong>Google Domains</strong> was sold to Squarespace in 2023 - and Squarespace was taken private by Permira in 2024.</li>
<li><strong>MarkMonitor</strong>, a corporate brand-protection registrar, was bought by Newfold in 2022 and sold to Com Laude in 2025.</li>
<li><strong>Namecheap</strong> agreed in 2025 to sell a majority stake to CVC.</li>
<li><strong>IONOS</strong> includes registrar and domain marketplace brands such as InterNetX, Sedo and united-domains.</li>
</ul>
<p>Because your domain is the one asset you cannot easily replace, registrar ownership deserves particular attention. Protect your registrar account with two-factor authentication, keep your contact details current so you receive renewal and transfer notices, and know how to transfer your domain if you ever need to. Under ICANN rules, a domain usually cannot be transferred to another registrar within 60 days of registration or a previous transfer.</p>`,
};

export const familyTrees: ArticleSection = {
  heading: "Hosting family trees: which brands belong to which group?",
  body: `<p>Here is a consolidated view of the brands discussed in this guide, grouped by owner. Brand lists change frequently, so treat this as a snapshot as of October 2026.</p>
<h3>Newfold Digital (Clearlake Capital)</h3>
<ul>
<li><strong>Bluehost Group:</strong> led by Bluehost</li>
<li><strong>Other hosting brands:</strong> HostGator (acquired by Endurance in 2012)</li>
<li><strong>Network Solutions Group:</strong> Network Solutions, Register.com, Domain.com, Crazy Domains</li>
<li><strong>Other brands from the Endurance era:</strong> BigRock and ResellerClub (via the 2014 Directi deal)</li>
<li><strong>Software:</strong> Yoast (acquired 2021)</li>
<li><strong>Retired or sold:</strong> Web.com (folded into Network Solutions, 2025); MarkMonitor (sold to Com Laude, 2025); Constant Contact (re-established as a standalone company, 2021)</li>
</ul>
<h3>hosting.com group, formerly World Host Group (Oakley Capital)</h3>
<ul>
<li>Hosting.com (formerly A2 Hosting), FastComet, Rocket.net, Webcentral, Nimbus Hosting, Doteasy, Stablepoint, MochaHost, HostForWeb, WebHostingBuzz and others</li>
</ul>
<h3>GoDaddy (public, NYSE: GDDY)</h3>
<ul>
<li>GoDaddy, Sucuri, and brands acquired with Host Europe Group</li>
<li><strong>Retired or sold:</strong> Media Temple (retired, 2023); Heart Internet (sold to Your.Online, 2024)</li>
</ul>
<h3>IONOS (majority-owned by United Internet; listed in Frankfurt)</h3>
<ul>
<li>IONOS, STRATO, Arsys, Fasthosts, home.pl, World4You, InterNetX, Sedo, united-domains</li>
</ul>
<h3>team.blue (Hg, with CPP Investments as a minority investor)</h3>
<ul>
<li>Combell, TransIP, Register.it, Loopia and dozens of other European brands</li>
</ul>
<h3>Other notable owners</h3>
<ul>
<li><strong>Squarespace</strong> (Permira) - including the former Google Domains business</li>
<li><strong>DigitalOcean</strong> (public) - Cloudways</li>
<li><strong>Akamai</strong> (public) - Linode</li>
<li><strong>Liquid Web</strong> (One Equity Partners) - including the former Nexcess</li>
<li><strong>WP Engine</strong> (Silver Lake majority investment, 2018)</li>
<li><strong>WebPros</strong> (CVC) - cPanel, Plesk, WHMCS, SolusVM</li>
<li><strong>Namecheap</strong> (CVC majority stake agreed 2025)</li>
</ul>
<h3>Independent</h3>
<ul>
<li><strong>Hostinger</strong> - privately held, founded 2004</li>
<li><strong>UltaHost</strong> - privately held, founded 2018</li>
</ul>`,
};

export const wordpressImpact: ArticleSection = {
  heading: "What does hosting consolidation mean for WordPress users?",
  body: `<p>WordPress sits at the center of several of the ownership stories in this guide, so WordPress site owners have particular reasons to pay attention.</p>
<ul>
<li><strong>Hosts own major WordPress tools.</strong> Newfold, the owner of Bluehost, acquired Yoast, one of the most widely used WordPress SEO plugins, in 2021.</li>
<li><strong>Hosts partner with WordPress.com's infrastructure.</strong> Bluehost Cloud, launched in March 2024, was built with WordPress.com on Automattic's WP Cloud platform.</li>
<li><strong>Managed WordPress platforms are being folded into groups.</strong> Rocket.net joined hosting.com group in 2025; Nexcess was absorbed into Liquid Web; Cloudways became part of DigitalOcean.</li>
<li><strong>Ecosystem disputes can affect hosts.</strong> The dispute between Automattic and WP Engine that began in September 2024 temporarily cut WP Engine's access to WordPress.org resources until a court ordered access restored in December 2024.</li>
</ul>
<h3>Practical takeaways for WordPress owners</h3>
<ol>
<li>Self-hosted WordPress is portable - keep it that way by avoiding host-specific lock-in where possible.</li>
<li>Keep independent backups of files and the database, stored outside your hosting account.</li>
<li>Know how to update plugins and themes manually, in case automatic updates from any source are disrupted.</li>
<li>Choose a host on its merits today, but have a migration plan ready.</li>
</ol>
<p>For WordPress-specific hosting advice, see our guide to the <a href="/articles/best-wordpress-hosting">best WordPress hosting</a>.</p>`,
};

export const independents: ArticleSection = {
  heading: "Are independent web hosts better than hosts owned by big groups?",
  body: `<p>Not automatically. Both models have genuine strengths and weaknesses.</p>
<table>
<thead><tr><th></th><th>Independent hosts</th><th>Group-owned hosts</th></tr></thead>
<tbody>
<tr><td>Decision-making</td><td>Founders and management decide; can move quickly</td><td>Decisions may be made at group level</td></tr>
<tr><td>Resources</td><td>Funded by their own revenue</td><td>Can draw on group infrastructure and capital</td></tr>
<tr><td>Brand stability</td><td>Brand is the whole business - but the company itself may be acquired</td><td>Smaller brands in a portfolio may be merged or retired</td></tr>
<tr><td>Financial transparency</td><td>Varies widely; some publish results, many do not</td><td>Public companies disclose a lot; private groups disclose less</td></tr>
<tr><td>Debt</td><td>Typically lower</td><td>Private equity-backed groups often carry significant debt</td></tr>
</tbody>
</table>
<p>Hostinger is an example of an independent host that has grown quickly while publishing revenue figures. Smaller independents such as UltaHost offer competitive features with less public corporate information. Group-owned brands such as Bluehost benefit from scale and long track records. In every case, judge the host on performance, pricing, support and terms - and keep your site portable so ownership changes never trap you.</p>`,
};

export const moreFaqs: ArticleSection[] = [
  {
    heading: "Who owns Yoast SEO?",
    body: `<p>Yoast, the company behind the widely used Yoast SEO plugin for WordPress, was acquired by <strong>Newfold Digital</strong> in August 2021. Newfold is also the owner of Bluehost, HostGator and Network Solutions.</p>`,
  },
  {
    heading: "Who owns Register.com and Crazy Domains?",
    body: `<p>Both are owned by <strong>Newfold Digital</strong>. Register.com was acquired by Web.com in 2010 and joined Newfold in 2021. Crazy Domains is part of Newfold's Network Solutions Group.</p>`,
  },
  {
    heading: "What happened to Media Temple?",
    body: `<p>Media Temple was acquired by <strong>GoDaddy</strong> in 2013 and operated as a separate brand for years. GoDaddy retired the Media Temple brand in 2023 and moved its customers onto GoDaddy.</p>`,
  },
  {
    heading: "Who owns Cloudways and Linode?",
    body: `<p><strong>Cloudways</strong> is owned by <strong>DigitalOcean</strong>, which completed its $350 million acquisition in September 2022. <strong>Linode</strong> is owned by <strong>Akamai</strong>, which completed its roughly $900 million acquisition in March 2022.</p>`,
  },
  {
    heading: "Who owns Constant Contact?",
    body: `<p>Constant Contact was acquired by Endurance International Group in 2016 for about $1.1 billion. When Clearlake took Endurance private in 2021, Constant Contact was re-established as a standalone company with investment from Clearlake and Siris. Siris sold its 50% stake in February 2024.</p>`,
  },
  {
    heading: "Is HostGator owned by GoDaddy?",
    body: `<p>No. HostGator is owned by <strong>Newfold Digital</strong>, not GoDaddy. Endurance International Group acquired HostGator in 2012, and Endurance became part of Newfold in 2021. GoDaddy is a separate, publicly traded company that competes with Newfold's brands. The two are easy to confuse because both own many brands, but they are unrelated businesses.</p>`,
  },
  {
    heading: "Who owns IONOS?",
    body: `<p>IONOS is majority-owned by <strong>United Internet</strong>, a German internet company, which held 63.8% at the end of 2025 according to IONOS's financial statements. The rest of the shares trade publicly on the Frankfurt Stock Exchange, where IONOS listed in February 2023.</p>`,
  },
  {
    heading: "Who owns team.blue?",
    body: `<p>team.blue is backed by private equity firm <strong>Hg</strong>, its largest investor. In July 2024 CPP Investments agreed to acquire a stake of about 20%, in a deal that valued team.blue at €4.8 billion. The group operates dozens of European hosting and domain brands, including Combell, TransIP and Register.it.</p>`,
  },
  {
    heading: "Who owns Google Domains now?",
    body: `<p>Google sold the assets of Google Domains to <strong>Squarespace</strong> in a deal that closed in September 2023. Squarespace was itself taken private by private equity firm Permira in October 2024, so former Google Domains customers are now Squarespace customers.</p>`,
  },
];

export const financialHealth: ArticleSection = {
  heading: "How can you judge a web host's financial health?",
  body: `<p>Most customers never see a hosting company's balance sheet, but there are public signals you can check before committing to a long prepaid plan.</p>
<table>
<thead><tr><th>Signal</th><th>Where to find it</th><th>What it can tell you</th></tr></thead>
<tbody>
<tr><td>Public filings</td><td>Annual and quarterly reports for listed companies (for example GoDaddy, IONOS, DigitalOcean)</td><td>Revenue, profitability, customer counts, debt and risks the company itself discloses</td></tr>
<tr><td>Published results from private companies</td><td>Company blogs and press releases (Hostinger and team.blue publish headline figures)</td><td>Growth trends - though unaudited, selective figures should be read with care</td></tr>
<tr><td>Credit ratings and debt news</td><td>Financial press coverage of rating agencies and refinancings</td><td>Whether lenders see elevated risk, as with Newfold's 2025 restructuring</td></tr>
<tr><td>Ownership changes</td><td>Industry news sites and the host's own announcements</td><td>Whether a new owner may change brands, terms or infrastructure</td></tr>
<tr><td>Brand consolidation</td><td>Announcements of rebrands, redirects and retired products</td><td>How the owner treats smaller brands in its portfolio</td></tr>
<tr><td>Customer review trends</td><td>Changes in review volume and sentiment over time</td><td>Whether service quality is improving or declining after a change</td></tr>
</tbody>
</table>
<p>No single signal predicts what will happen to your account. Taken together, though, they help you decide how long a term to buy and how much effort to put into keeping your site ready to move. Remember that customer and subscriber counts are company claims: in 2018 the SEC fined Endurance International Group $8 million over disclosures that inflated subscriber numbers.</p>`,
};

export const rebrandChecklist: ArticleSection = {
  heading: "What should you do when your web host announces a rebrand or migration?",
  body: `<p>Rebrands and infrastructure migrations are among the most common results of consolidation - A2 Hosting's move to Hosting.com and Bluehost's migration of customers to Oracle Cloud are recent examples. Most go smoothly, but a short checklist reduces the risk of surprises:</p>
<ol>
<li><strong>Read the announcement carefully.</strong> Note dates, what changes (name, dashboard, servers, IP addresses, nameservers, email settings) and whether you need to act.</li>
<li><strong>Take a fresh, complete backup</strong> of files, databases and email before any migration window.</li>
<li><strong>Check your DNS.</strong> If you use the host's nameservers, confirm whether they change. If your DNS is elsewhere, update any A records if your server IP address changes.</li>
<li><strong>Check email settings.</strong> Migrations can change mail server hostnames; update your email apps if instructed.</li>
<li><strong>Update bookmarks and saved logins</strong> for the new dashboard and domain, and watch for phishing emails that imitate rebrand notices.</li>
<li><strong>Review new terms and pricing</strong> before your next renewal.</li>
<li><strong>Test your site after the migration</strong> - pages, forms, logins and checkout - and contact support quickly if anything breaks.</li>
<li><strong>Keep a record</strong> of what changed and when, in case you need it for support or a refund request.</li>
</ol>`,
};

export const brandShutdown: ArticleSection = {
  heading: "What should you do if your hosting brand is shutting down?",
  body: `<p>When an owner retires a brand - as GoDaddy did with Media Temple, Newfold with Web.com and Hostinger with 000webhost - customers are usually moved to another service or given a deadline to leave. You have more choices than the default path.</p>
<ol>
<li><strong>Note the deadlines.</strong> Shutdown notices typically give dates for when sign-ups stop, when migrations happen and when service ends.</li>
<li><strong>Back up everything immediately</strong> - files, databases, email and DNS records - and store copies outside the hosting account.</li>
<li><strong>Decide whether to accept the default migration.</strong> The owner will usually offer to move you to a sister brand. Compare that destination's pricing, features and terms with alternatives.</li>
<li><strong>Secure your domain.</strong> If your domain is registered with the closing brand, confirm where it will be managed and that your contact details and login are up to date. Consider transferring it to a registrar you choose.</li>
<li><strong>Migrate on your own schedule</strong> if you choose a different host, well before the deadline. Many hosts offer free migration.</li>
<li><strong>Check renewals and refunds.</strong> Make sure you are not charged for a service that is ending, and ask about prorated refunds for unused prepaid time.</li>
</ol>
<p>Free services are especially vulnerable: when 000webhost closed after 17 years, users had to move or lose their sites. If a website matters to you, a low-cost paid plan from an established provider is a safer home than a free service.</p>`,
};

export const keepOrMerge: ArticleSection = {
  heading: "How do hosting groups decide which brands to keep?",
  body: `<p>Groups rarely explain these decisions in detail, but the deals in this guide show recurring patterns.</p>
<h3>Brands that tend to be kept</h3>
<ul>
<li><strong>Flagship brands</strong> with strong recognition - Newfold has said it is focusing on Bluehost and Network Solutions.</li>
<li><strong>Specialist brands</strong> with a distinct audience or product - FastComet and Rocket.net kept their own names after joining hosting.com group.</li>
<li><strong>Regional brands</strong> with local reputations, payment methods and support - such as BigRock in India or Webcentral in Australia.</li>
</ul>
<h3>Brands that tend to be merged or retired</h3>
<ul>
<li><strong>Overlapping brands</strong> selling similar products to similar customers - Web.com was folded into Network Solutions.</li>
<li><strong>Brands whose customers can be served better by the parent's platform</strong> - Media Temple moved onto GoDaddy; Nexcess was absorbed into Liquid Web.</li>
<li><strong>Products that duplicate the parent's own</strong> - Zyro became Hostinger Website Builder.</li>
<li><strong>Brands where a stronger name is available</strong> - A2 Hosting became Hosting.com after the group acquired a premium domain.</li>
</ul>
<p>If your host is a smaller brand inside a large portfolio and overlaps with a sister brand, it is reasonable to expect that it could eventually be consolidated - another reason to keep your site portable.</p>`,
};

export const regions: ArticleSection = {
  heading: "How has hosting consolidation played out around the world?",
  body: `<p>Consolidation is global, and the same groups often appear in very different markets.</p>
<h3>North America</h3>
<p>Newfold Digital (Bluehost, HostGator, Network Solutions, Domain.com, Register.com) and GoDaddy dominate the mainstream brand landscape. hosting.com group brought A2 Hosting (now Hosting.com) and Canada's Doteasy into its portfolio, and Rocket.net joined it in 2025. DigitalOcean (Cloudways), Akamai (Linode), Liquid Web and WP Engine are major players in cloud and managed hosting.</p>
<h3>Europe</h3>
<p>IONOS - majority-owned by United Internet - and team.blue, backed by Hg and CPP Investments, are two of the largest European groups, each operating many national brands. GoDaddy expanded in Europe through Host Europe Group in 2017 and has since sold some brands, including Heart Internet in the UK. hosting.com group added Nimbus Hosting in the UK in 2024. Hostinger, headquartered in Lithuania, is one of Europe's fastest-growing independent hosts by its own reported figures.</p>
<h3>India</h3>
<p>BigRock and ResellerClub were built by Mumbai-based Directi and sold to Endurance International Group in 2014, which places them in today's Newfold family. Hostinger also operates data centers in India and bills in rupees.</p>
<h3>Australia</h3>
<p>Webcentral's domains and hosting business was bought by Oakley Capital in 2023 and merged with World Host Group in 2024. Crazy Domains is part of Newfold's Network Solutions Group.</p>
<h3>Southeast Asia</h3>
<p>Hostinger merged its Indonesian brand Niagahoster into the Hostinger brand by mid-2025.</p>`,
};

export const dealGlossary: ArticleSection = {
  heading: "Hosting industry deal glossary: key terms explained",
  body: `<table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Acquisition</td><td>One company buying another, outright or a controlling stake.</td></tr>
<tr><td>ARR</td><td>Annual recurring revenue - the yearly value of subscription revenue.</td></tr>
<tr><td>Carve-out</td><td>Selling a division of a larger company as a separate business, as when Plesk was carved out of Parallels.</td></tr>
<tr><td>Credit rating</td><td>An agency's assessment of a borrower's ability to repay debt.</td></tr>
<tr><td>Earn-out / contingent payment</td><td>Part of a purchase price paid later if targets are met, as in Endurance's purchase of Directi's business.</td></tr>
<tr><td>EBITDA</td><td>Earnings before interest, taxes, depreciation and amortization - a common profitability measure.</td></tr>
<tr><td>Enterprise value</td><td>A company's total value including debt, often used to describe deal sizes.</td></tr>
<tr><td>Free float</td><td>The share of a public company's stock available to ordinary investors.</td></tr>
<tr><td>IPO</td><td>Initial public offering - when a company first lists its shares on a stock exchange.</td></tr>
<tr><td>Leveraged buyout (LBO)</td><td>An acquisition funded largely with borrowed money.</td></tr>
<tr><td>Minority stake</td><td>Ownership of less than half a company, as with CPP Investments' roughly 20% of team.blue.</td></tr>
<tr><td>Private equity</td><td>Investment firms that buy stakes in private companies or take public companies private.</td></tr>
<tr><td>Registrar</td><td>A company accredited to sell domain names to the public.</td></tr>
<tr><td>Registry</td><td>The organization that operates a top-level domain such as .com.</td></tr>
<tr><td>Roll-up</td><td>A strategy of buying many smaller companies in the same industry and combining them.</td></tr>
<tr><td>Take-private</td><td>When a public company is bought and delisted, as with Endurance (2021) and Squarespace (2024).</td></tr>
</tbody>
</table>`,
};

export const publicCompanies: ArticleSection = {
  heading: "Which web hosting companies are publicly traded?",
  body: `<p>Only a minority of the hosting market is publicly traded, and several former public companies have been taken private.</p>
<table>
<thead><tr><th>Company</th><th>Status</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>GoDaddy</td><td>Public - NYSE: GDDY</td><td>Listed since April 2015</td></tr>
<tr><td>IONOS</td><td>Public - Frankfurt Stock Exchange</td><td>Listed February 2023; majority-owned by United Internet</td></tr>
<tr><td>United Internet</td><td>Public - Frankfurt</td><td>Majority owner of IONOS</td></tr>
<tr><td>DigitalOcean</td><td>Public - NYSE: DOCN</td><td>Owner of Cloudways</td></tr>
<tr><td>Akamai</td><td>Public - Nasdaq: AKAM</td><td>Owner of Linode</td></tr>
<tr><td>Endurance International Group</td><td>Taken private in 2021</td><td>Formerly Nasdaq: EIGI; now part of Newfold Digital</td></tr>
<tr><td>Web.com Group</td><td>Taken private in 2018</td><td>Acquired by Siris; now part of Newfold Digital</td></tr>
<tr><td>Squarespace</td><td>Taken private in 2024</td><td>Acquired by Permira; delisted from the NYSE</td></tr>
</tbody>
</table>
<p>Public companies publish detailed financial information, including revenue, customer counts and risks, which makes it easier for customers and investors to understand their position. Private groups - including Newfold Digital, hosting.com group, team.blue and WP Engine - disclose far less, so news reports, credit ratings and the companies' own announcements are the main sources of information about them.</p>`,
};

export const askAboutOwnership: ArticleSection = {
  heading: "What should you ask a web host about ownership before you buy?",
  body: `<p>Most buyers never ask, but a few questions to sales or support - or a few minutes of research - can tell you a lot, especially before you prepay for several years.</p>
<ol>
<li><strong>Who is the legal entity I will be contracting with?</strong> The answer should match the terms of service and your invoices.</li>
<li><strong>Is this brand part of a larger group?</strong> If so, which one, and does the group own other brands I might be comparing?</li>
<li><strong>Has the company changed ownership recently?</strong> If yes, what has changed since, and are migrations or rebrands planned?</li>
<li><strong>Where will my site be hosted, and could that change?</strong> Ask which data center and infrastructure provider your plan uses.</li>
<li><strong>What happens to my prepaid term if the brand is merged or retired?</strong> Ask whether terms and pricing carry over.</li>
<li><strong>How do I export my site and domain if I leave?</strong> A clear answer - full backups, standard formats, an easy domain transfer - is a good sign.</li>
</ol>
<p>A host does not need perfect answers to every question. What matters is that it answers clearly and that its terms let you leave easily if things change.</p>`,
};

export const outlook: ArticleSection = {
  heading: "Will web hosting consolidation continue?",
  body: `<p>Nobody can predict specific deals, but several trends documented in this guide point toward continued consolidation:</p>
<ul>
<li><strong>Active roll-up platforms.</strong> hosting.com group made a series of acquisitions across 2023-2025 - Doteasy, Webcentral, Nimbus Hosting, A2 Hosting, FastComet and Rocket.net - a pattern typical of an investor-backed platform still in buying mode.</li>
<li><strong>Private equity at every layer.</strong> Private equity owns or controls major hosts (Newfold, hosting.com group, team.blue), a website platform (Squarespace), a large registrar (Namecheap, via CVC's 2025 deal) and the leading control panels (cPanel and Plesk, via WebPros). Private equity firms typically aim to sell or list their investments eventually, which tends to produce further deals.</li>
<li><strong>Portfolio pruning.</strong> Groups are also selling and retiring brands to focus: Newfold sold MarkMonitor and retired Web.com; GoDaddy retired Media Temple and sold Heart Internet. Divestitures create opportunities for other buyers.</li>
<li><strong>Rising input costs.</strong> Repeated cPanel license price increases and infrastructure costs put more pressure on small hosts, which can make selling to a larger group more attractive.</li>
<li><strong>Platform shifts.</strong> Moves such as Newfold's migration to Oracle Cloud and Bluehost Cloud's use of WP Cloud show large groups reshaping their infrastructure, often through partnerships with even larger technology companies.</li>
</ul>
<p>For customers, the practical response does not depend on predicting the next deal. Choose a host that serves you well today, keep your domain and backups under your own control, and revisit your choice at each renewal.</p>`,
};

export const seoImpact: ArticleSection = {
  heading: "Can a web host acquisition or migration affect your SEO?",
  body: `<p>An ownership change on its own does not affect your search rankings - search engines care about your site, not your host's shareholders. But the <strong>operational changes</strong> that often follow an acquisition, such as server migrations, new infrastructure or a forced move to a sister brand, can affect how search engines crawl and evaluate your site if they go wrong.</p>
<h3>The risks to watch</h3>
<table>
<thead><tr><th>Risk</th><th>How it happens</th><th>How to protect yourself</th></tr></thead>
<tbody>
<tr><td>Downtime</td><td>Sites are unavailable during or after a migration</td><td>Monitor uptime during migration windows; ask for scheduled times; contact support quickly if errors persist</td></tr>
<tr><td>Slower server response</td><td>New infrastructure performs differently from the old</td><td>Measure server response time and Core Web Vitals before and after the move</td></tr>
<tr><td>DNS mistakes</td><td>Nameserver or IP changes are applied incorrectly or late</td><td>Check DNS records after the migration; keep DNS at a provider you control</td></tr>
<tr><td>Broken HTTPS</td><td>SSL certificates are not reissued on new servers</td><td>Confirm the padlock and certificate details right after the move</td></tr>
<tr><td>Changed URLs</td><td>A forced move to a different platform changes page addresses</td><td>Keep URLs identical where possible; set up 301 redirects for any that change</td></tr>
<tr><td>Lost content or settings</td><td>Incomplete migrations miss files, databases or configuration</td><td>Take a full backup beforehand and spot-check important pages afterward</td></tr>
</tbody>
</table>
<h3>A quick post-migration SEO check</h3>
<ol>
<li>Load your home page and key pages over HTTPS and confirm they return normally.</li>
<li>Check that robots.txt has not changed to block crawlers and that pages are not accidentally set to noindex.</li>
<li>Confirm your XML sitemap loads and resubmit it in Google Search Console if anything changed.</li>
<li>Watch Search Console's crawl stats and page indexing reports for spikes in server errors over the following weeks.</li>
<li>Compare server response time and Core Web Vitals with your pre-migration baseline.</li>
</ol>
<p>Handled carefully, a migration should have no lasting effect on your visibility - and if a new owner's infrastructure is faster, it may even help. For more on how hosting affects search performance, see our guide to <a href="/articles/how-to-choose-web-hosting">choosing web hosting</a>.</p>`,
};

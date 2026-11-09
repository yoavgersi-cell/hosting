import type { ArticleSection } from "@/lib/config";

// Part 9 of "Why Web Hosting Is Getting More Expensive in 2026".
// Renewal economics, checking for increases, AI bot data, robots.txt
// template, VPS vs managed, checklist and extra FAQs.

export const renewalEconomics: ArticleSection = {
  heading: "Why do hosts raise renewal prices instead of intro prices?",
  body: `<p>When costs rise, hosting companies have a choice about where to recover them, and the structure of the market pushes them toward renewals rather than headline prices.</p>
<ul>
<li><strong>Intro prices win customers.</strong> Comparison sites, ads and search results all lead with the advertised monthly price. Raising it risks losing new customers to competitors that hold theirs.</li>
<li><strong>Customers are less price-sensitive at renewal.</strong> Once a site is built and running, many owners renew rather than go through a migration, even if the price has gone up.</li>
<li><strong>Acquisition is expensive.</strong> Free domains, affiliate commissions and advertising all cost money up front, which hosts recover over the customer's lifetime.</li>
<li><strong>Renewal rates are less visible.</strong> They often appear in the cart or fine print rather than on the main pricing page.</li>
</ul>
<p>This pattern long predates 2026 - it is why renewal rates are commonly two to four times the intro price. But in a period of rising costs, it means the renewal rate is where any increases are most likely to land. That is why we recommend comparing hosts on the total cost over three or four years, including at least one renewal.</p>`,
};

export const checkIncrease: ArticleSection = {
  heading: "How can you tell if your web host has raised its prices?",
  body: `<p>Price changes are not always announced loudly. These checks will tell you where you stand:</p>
<ol>
<li><strong>Look at your next renewal invoice or billing page.</strong> Most hosting dashboards show the upcoming renewal amount and date. Compare it with what you paid last time and with the regular rate when you signed up.</li>
<li><strong>Search your email</strong> for messages from your host about "pricing", "price adjustment", "terms of service" or "renewal".</li>
<li><strong>Check the host's current pricing page</strong> for the regular rate on your plan - not just the intro price.</li>
<li><strong>Read the terms of service</strong> for clauses about price changes and notice periods.</li>
<li><strong>Look at add-ons.</strong> Backup, security, email and domain privacy prices can change independently of the plan price.</li>
<li><strong>Check your domain renewal price</strong> at your registrar, especially for .com and .net domains.</li>
</ol>
<p>If you find a change you were not expecting, contact your host for an explanation before your renewal date - and use the time to compare alternatives.</p>`,
};

export const crawlRatios: ArticleSection = {
  heading: "How much traffic do AI bots send back to websites?",
  body: `<p>One reason site owners object to AI crawlers is the imbalance between what they take and what they return. Cloudflare has published "crawl-to-refer" ratios - the number of pages a company's crawlers fetch for every visitor its products send back to websites.</p>
<table>
<thead><tr><th>Company</th><th>Reported crawl-to-refer ratio</th><th>Period</th></tr></thead>
<tbody>
<tr><td>Anthropic</td><td>About 286,000 pages per referral</td><td>January 2025</td></tr>
<tr><td>Anthropic</td><td>About 38,000 pages per referral</td><td>July 2025</td></tr>
<tr><td>OpenAI</td><td>Peaked around 3,700 pages per referral</td><td>March 2025</td></tr>
<tr><td>OpenAI</td><td>About 887 pages per referral</td><td>Early August 2025 snapshot</td></tr>
<tr><td>Perplexity</td><td>About 194 pages per referral</td><td>July 2025</td></tr>
</tbody>
</table>
<p><em>Figures from Cloudflare's published analyses; they cover different time windows and only Cloudflare's network, so they are not directly comparable and change over time.</em></p>
<p>For comparison, traditional search engines crawl pages and send a significant share of their users back to websites through search results. Akamai reported in April 2026 that AI chatbots sent about 96% less referral traffic than Google search in its data. The ratios have been improving for some AI companies as AI search features link to more sources, but for many sites AI training crawlers remain a cost with little direct traffic in return. That is the core argument for blocking training crawlers while allowing AI search crawlers that can send visitors.</p>`,
};

export const topBots: ArticleSection = {
  heading: "Which AI bots crawl websites the most?",
  body: `<p>Different measurement networks see slightly different pictures, but several findings recur:</p>
<ul>
<li><strong>Googlebot remains the largest single crawler.</strong> Cloudflare's 2025 Year in Review found Googlebot accounted for about 4.5% of HTML requests on its network and more than a quarter of verified bot traffic.</li>
<li><strong>OpenAI's GPTBot grew rapidly.</strong> Cloudflare reported that between May 2024 and May 2025 GPTBot's requests rose about 305%, lifting its share of AI crawling from about 5% to 30%, while ByteDance's Bytespider fell from about 42% to 7.2%.</li>
<li><strong>Meta's crawler is very active.</strong> Fastly reported that Meta accounted for about 52% of AI crawler traffic it observed in April-July 2025, and about 60% in its following report.</li>
<li><strong>ChatGPT dominates user-triggered fetching.</strong> Fastly found that ChatGPT-related agents accounted for the large majority of AI "fetcher" requests - pages loaded when a user asks an assistant to read them.</li>
<li><strong>AI crawlers are the most-blocked bots.</strong> Cloudflare found AI crawlers were the user agents most often fully disallowed in robots.txt files in 2025.</li>
</ul>
<p>If you check your own server logs, the names in the robots.txt template below are the ones most likely to appear.</p>`,
};

export const robotsTemplate: ArticleSection = {
  heading: "What should an AI bot section of robots.txt look like?",
  body: `<p>Here is an example robots.txt section that blocks the main AI <strong>training</strong> crawlers and control tokens while leaving search engines and AI search crawlers untouched. Adapt it to your own goals - and remember that robots.txt is a request that reputable crawlers honor, not a security control.</p>
<pre><code># Block AI training crawlers
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

# Opt out of Google Gemini and Apple model training
# (does not affect Google Search or Siri/Spotlight)
User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

# AI search crawlers are NOT blocked here, so your site
# can still appear in ChatGPT search, Claude and Perplexity:
# OAI-SearchBot, Claude-SearchBot, PerplexityBot

# Search engines
User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml</code></pre>
<h3>Things to know before you publish it</h3>
<ul>
<li>Changes are not instant: OpenAI says robots.txt changes can take about 24 hours to take effect.</li>
<li>User-triggered fetchers such as ChatGPT-User may not follow robots.txt, according to OpenAI's documentation.</li>
<li>Crawler names change. Anthropic, for example, has deprecated older user-agent tokens in favor of ClaudeBot, Claude-User and Claude-SearchBot. Review your rules occasionally against each company's documentation.</li>
<li>Do not block <strong>Googlebot</strong> or <strong>Bingbot</strong> unless you want to disappear from search.</li>
<li>If your site runs on WordPress, check whether an SEO plugin or your host already manages robots.txt before editing it manually.</li>
</ul>`,
};

export const vpsToManaged: ArticleSection = {
  heading: "Is it worth moving from a VPS to managed hosting in 2026?",
  body: `<p>For some site owners, yes. Self-managed VPS hosting has been popular because it offered a lot of power for little money. With several budget VPS providers raising prices sharply in 2026, the comparison has shifted.</p>
<table>
<thead><tr><th>Consider moving to shared or managed hosting if...</th><th>Stay on a VPS if...</th></tr></thead>
<tbody>
<tr><td>You mainly run one or a few WordPress or simple websites</td><td>You run custom applications, services or software that need root access</td></tr>
<tr><td>Your server uses a small fraction of its resources</td><td>Your workload genuinely needs dedicated CPU and memory</td></tr>
<tr><td>You spend time on server updates and security you would rather avoid</td><td>You enjoy or need full control over the server</td></tr>
<tr><td>Your VPS price has risen and you pay separately for a control panel license</td><td>Your provider has kept your existing price and you are not resizing</td></tr>
</tbody>
</table>
<p>A quality shared, cloud or managed WordPress plan includes server management, security patching and often backups in one price - costs you would otherwise pay in time or add-ons on a VPS. Compare the total cost including your own time, not just the monthly fee. Our guide to <a href="/articles/shared-vs-vps-vs-cloud-hosting">shared vs VPS vs cloud hosting</a> explains the differences in detail.</p>`,
};

export const checklist: ArticleSection = {
  heading: "Rising hosting costs: a one-page checklist",
  body: `<ul>
<li>Find your next hosting renewal date and price in your account dashboard.</li>
<li>Set a reminder 30-45 days before renewal to compare alternatives.</li>
<li>Calculate the total cost of your plan over the next three to four years, including renewals.</li>
<li>Check which add-ons you pay for and remove the ones you do not use.</li>
<li>Review your resource usage and downgrade if you are over-provisioned.</li>
<li>Renew .com and .net domains for multiple years if you plan to keep them.</li>
<li>Add AI training crawler rules to robots.txt if bot traffic is a concern.</li>
<li>Keep your domain at a registrar you control and keep off-site backups.</li>
<li>On VPS or dedicated servers, check whether resizing triggers new pricing and whether your control panel license is billed separately.</li>
<li>Before Black Friday, shortlist hosts on performance, support and renewal pricing - then compare deals.</li>
<li>Read every price change email carefully and note what it means for your account.</li>
</ul>`,
};

export const moreFaqs: ArticleSection[] = [
  {
    heading: "Will Black Friday hosting deals be smaller in 2026?",
    body: `<p>We cannot know in advance, and hosts do not publish their promotional plans. Intro prices are a competitive marketing tool, so major hosts may keep running strong seasonal offers even as their costs rise - with renewal rates being where any increases show up. Judge each deal on its total cost over several years, not on the size of the discount.</p>`,
  },
  {
    heading: "Can my hosting price change in the middle of a prepaid term?",
    body: `<p>For prepaid shared hosting, the price you paid normally covers the whole term you bought, and changes apply when the plan renews - but check your host's terms of service, because policies differ. Monthly and pay-as-you-go plans, including many VPS and cloud services, can change with notice. Several 2026 VPS increases applied to new orders or to servers that were resized, so upgrading mid-term can move you onto current pricing. Add-ons, domain renewals and separately billed licenses can also change on their own schedules. If you receive a price change notice, read it closely to see exactly which of your services it affects and from when.</p>`,
  },
  {
    heading: "Why did Hetzner raise its prices so much?",
    body: `<p>Hetzner cited rising hardware and energy costs. Its 2026 changes came in two main rounds: increases of roughly 25-37% on cloud servers effective 1 April 2026, and a second round effective 15 June 2026 for new orders and rescaled instances, which German publication Heise reported averaged about 99% in Germany and 158% for US servers. The changes reflect how directly budget VPS pricing is tied to memory and storage costs.</p>`,
  },
];

export const askAboutPricing: ArticleSection = {
  heading: "What should you ask a web host about future pricing before you buy?",
  body: `<p>Most hosts will not promise future prices, but their answers to a few direct questions tell you a lot. Ask in live chat before you pay:</p>
<ol>
<li><strong>What will this plan cost when it renews</strong>, and is that rate shown anywhere in writing?</li>
<li><strong>Does the price I pay today stay fixed for my whole prepaid term</strong>, even if list prices change?</li>
<li><strong>How much notice do you give before changing renewal prices</strong>, and how is it communicated?</li>
<li><strong>Which features are included at renewal</strong> - backups, email, SSL, domain - and could any become paid add-ons?</li>
<li><strong>Is the control panel license included</strong>, or billed separately on this plan?</li>
<li><strong>If I upgrade or resize mid-term, which price applies?</strong></li>
<li><strong>What is your refund policy</strong> for unused prepaid time after the money-back period?</li>
</ol>
<p>Clear, specific answers - ideally pointing to written terms - are a good sign. Vague replies suggest you should weigh the renewal risk more heavily or choose a shorter term.</p>`,
};

export const domainLockIn: ArticleSection = {
  heading: "Do longer domain registrations protect you from price increases?",
  body: `<p>Largely, yes. When you register or renew a domain for several years at once, you pay for the whole period at the price in effect on that day. Most registrars allow registrations of up to 10 years in total. Renewing a .com for several years before a scheduled wholesale increase therefore locks in the earlier price for that period.</p>
<p>A few things to keep in mind:</p>
<ul>
<li><strong>Your registrar's margin can still change</strong> for future renewals after the prepaid period ends.</li>
<li><strong>Transferring a domain to a new registrar usually adds a year</strong> to its registration, charged at the new registrar's price - a useful way to extend while moving to a registrar with better pricing.</li>
<li><strong>Keep your contact details current</strong> so you receive renewal reminders and transfer notices, and enable two-factor authentication on your registrar account.</li>
<li><strong>Free first-year domains</strong> from hosts renew at regular prices, so check the renewal rate before accepting one.</li>
</ul>
<p>For domains you intend to keep long term, multi-year renewals are one of the simplest ways to protect yourself from the scheduled .com and .net increases.</p>`,
};

export const smallHosts: ArticleSection = {
  heading: "Are customers of small hosting companies more at risk?",
  body: `<p>Potentially. Many small and regional hosting companies do not own their hardware - they rent servers from infrastructure providers such as Hetzner or OVHcloud, which raised prices in 2026. They also typically use cPanel or Plesk, whose licenses rise in December 2026 and January 2027. With less purchasing power than large hosts, they have less room to absorb cost increases.</p>
<p>That does not mean small hosts are a bad choice - many offer excellent, personal support. But it is worth watching for signs of pressure:</p>
<ul>
<li>Price change notices, especially for existing customers.</li>
<li>Plan restructuring or reduced allowances.</li>
<li>Announcements that the company has been acquired or is merging with another host.</li>
<li>Changes to support hours or channels.</li>
</ul>
<p>Rising costs tend to accelerate consolidation, as smaller hosts sell to larger groups that can spread costs. If your host is acquired, our guide to <a href="/articles/who-owns-your-web-host">who owns your web host</a> explains what typically happens next and how to protect your site.</p>`,
};

export const aiProducts: ArticleSection = {
  heading: "How is AI changing what web hosts sell?",
  body: `<p>AI is raising hosting costs, but it is also reshaping hosting products. Through 2025 and 2026, hosting companies increasingly added AI features: AI website builders that generate sites from a prompt, AI writing and design assistants in control panels, and integrations with AI assistants. WordPress itself added AI-related foundations to its core software in 2026, according to release coverage.</p>
<p>For buyers, two points matter:</p>
<ul>
<li><strong>AI features can affect price and lock-in.</strong> Some AI builders produce sites that are harder to move to another host than a standard WordPress site. Check how portable your site will be before you build on a proprietary tool.</li>
<li><strong>Do not pay for AI features you will not use.</strong> AI tools are often used to justify higher plan tiers. Choose your plan on the core hosting essentials - performance, backups, support and renewal price - and treat AI extras as a bonus.</li>
</ul>
<p>The same AI boom driving these new features is also behind the memory price surge that is making the underlying hardware more expensive - a useful reminder that "free" AI features are ultimately paid for somewhere in the price of hosting.</p>`,
};

export const tooGoodDeals: ArticleSection = {
  heading: "How can you spot a hosting deal that is too good to be true?",
  body: `<p>When the cost of servers, storage and software is rising, extremely low prices deserve a closer look. A cheap plan is not necessarily a bad one - large hosts use low intro prices to win customers and recover the cost later - but these warning signs suggest the real cost may be higher than it looks.</p>
<table>
<thead><tr><th>Warning sign</th><th>What it may mean</th><th>What to check</th></tr></thead>
<tbody>
<tr><td>No renewal price visible before checkout</td><td>The regular rate may be several times the intro price</td><td>Ask support in writing; look in the cart and terms</td></tr>
<tr><td>"Unlimited" everything at a very low price</td><td>Strict fair-use limits on CPU, memory or files</td><td>Read the acceptable use policy for resource limits</td></tr>
<tr><td>The lowest price only on very long terms</td><td>A large upfront payment and long lock-in</td><td>Compare the 12-month price and refund terms</td></tr>
<tr><td>Essential features missing from the base plan</td><td>Backups, SSL or email sold as add-ons</td><td>Add up the cost of the add-ons you would need</td></tr>
<tr><td>Lifetime or "forever" pricing from an unknown provider</td><td>An offer that may not be sustainable as costs rise</td><td>Research the company's track record and ownership</td></tr>
<tr><td>VPS prices far below market</td><td>Oversold servers or older hardware</td><td>Test performance during the money-back period</td></tr>
</tbody>
</table>
<p>A genuinely good deal holds up when you calculate the total cost over three or four years, read the plan limits and test the service. If a price only looks good on the first invoice, it is not a good price. For a full framework, see our guide to <a href="/articles/how-to-choose-web-hosting">choosing web hosting</a>.</p>`,
};

import type { ArticleSection } from "@/lib/config";

// Part 6 of "Why Web Hosting Is Getting More Expensive in 2026".
// Hidden costs: AI crawlers and bot traffic, shrinking plans.

export const part6: ArticleSection[] = [
  {
    heading: "Are AI crawlers increasing website hosting costs?",
    body: `<p>For some sites, yes. Alongside rising hardware prices, website owners face a second, less visible cost pressure: automated traffic from AI crawlers and other bots. Every request a bot makes uses bandwidth, CPU and memory - the same resources that are getting more expensive.</p>
<h3>How much traffic is automated?</h3>
<ul>
<li>Security company Imperva's 2025 Bad Bot Report found that automated traffic made up <strong>51% of web traffic</strong> on its network in 2024 - the first time in a decade it exceeded human traffic.</li>
<li>Cloudflare's 2025 Year in Review found that AI bots other than Googlebot averaged about 4.2% of HTML requests to sites on its network, and that "user action" crawling by AI assistants grew more than 15 times over the year.</li>
<li>Akamai reported in April 2026 that AI bot activity grew about 300% during 2025.</li>
</ul>
<h3>Real examples of the cost</h3>
<ul>
<li><strong>Read the Docs</strong> reported in July 2024 that a single crawler downloaded 73 TB of data in one month, costing more than $5,000 in bandwidth. After blocking AI crawlers, its download bandwidth fell about 75%.</li>
<li><strong>Wikimedia</strong> reported in April 2025 that bandwidth used for multimedia downloads had risen 50% since January 2024, driven mainly by scrapers collecting data for AI training.</li>
<li><strong>iFixit's</strong> chief executive said in July 2024 that Anthropic's ClaudeBot hit its servers about a million times in 24 hours; crawling stopped after iFixit added rules to its robots.txt file, and Anthropic said it respects robots.txt.</li>
<li>Maintainers of several <strong>open-source projects</strong> reported in 2025 that aggressive crawlers caused outages and forced them to deploy defenses.</li>
</ul>
<p>Most small business sites and blogs will never see traffic on that scale. But on shared hosting, heavy bot traffic can push a site into its CPU or memory limits, slowing it down for real visitors or prompting an upgrade - a hidden cost of the bot era.</p>`,
  },
  {
    heading: "What is the difference between AI training crawlers, AI search bots and AI fetchers?",
    body: `<p>Not all AI bots do the same thing, and treating them differently is the key to controlling costs without disappearing from AI-powered search.</p>
<table>
<thead><tr><th>Type</th><th>What it does</th><th>Examples (user-agent names)</th><th>Effect of blocking</th></tr></thead>
<tbody>
<tr><td>Training crawlers</td><td>Collect content to train AI models</td><td>GPTBot (OpenAI), ClaudeBot (Anthropic), Meta-ExternalAgent, Bytespider, CCBot (Common Crawl)</td><td>Reduces crawling load; content is not used for those companies' future training</td></tr>
<tr><td>AI search / indexing crawlers</td><td>Build indexes that AI search features draw on</td><td>OAI-SearchBot (ChatGPT search), Claude-SearchBot, PerplexityBot</td><td>Your site may stop appearing in those AI search answers</td></tr>
<tr><td>User-triggered fetchers</td><td>Load a page when a user asks an assistant to read it</td><td>ChatGPT-User, Claude-User, Perplexity-User</td><td>Assistants cannot read your page on a user's behalf; OpenAI says robots.txt rules may not apply to user-initiated fetches</td></tr>
<tr><td>Control tokens (not crawlers)</td><td>Tell an existing crawler how content may be used</td><td>Google-Extended (Gemini training and grounding), Applebot-Extended (Apple model training)</td><td>Google says blocking Google-Extended does not affect inclusion or ranking in Google Search</td></tr>
</tbody>
</table>
<h3>Why the distinction matters</h3>
<p>OpenAI's documentation makes the trade-off explicit: blocking <strong>GPTBot</strong> opts your content out of training but does not remove it from ChatGPT search, while blocking <strong>OAI-SearchBot</strong> removes your site from ChatGPT's search answers. Similarly, Google's AI Overviews and AI Mode use the regular Google Search index, so blocking Google-Extended does not remove a site from them. A blanket "block all AI" rule can therefore cost visibility you might want to keep.</p>`,
  },
  {
    heading: "How can you control AI bot traffic on your website?",
    body: `<p>You have several tools, from a simple text file to network-level protection.</p>
<h3>1. robots.txt</h3>
<p>The robots.txt file tells well-behaved crawlers what they may access. For example, to block AI training crawlers while still allowing AI search crawlers, you could add rules like these:</p>
<pre><code>User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /</code></pre>
<p>Remember that robots.txt is a <strong>request, not a barrier</strong>. Reputable AI companies say they honor it, but not every crawler does, and in a December 2025 decision in Ziff Davis v. OpenAI a US court reportedly found that robots.txt is not a "technological measure" under copyright law. Cloudflare publicly accused Perplexity in August 2025 of using undeclared crawlers to get around blocks - an allegation Perplexity disputed.</p>
<h3>2. Your host's bot controls</h3>
<p>Hosts responded to the bot surge in different ways. WP Engine added bot management to its edge security product in June 2026. Japanese host Xserver launched one-click blocking of AI crawlers in January 2026. Trade coverage in 2026 reported that some hosts block or rate-limit training bots by default, while others leave the decision to customers. Ask your host what it does - and whether bot traffic counts against your plan's limits.</p>
<h3>3. A CDN or security service</h3>
<p>Cloudflare began blocking AI crawlers by default for new domains in July 2025 and offers one-click blocking for existing sites, along with options such as AI Labyrinth (a decoy maze for unauthorized crawlers) and Content Signals in robots.txt. It also introduced "Pay Per Crawl", a way for sites to charge AI crawlers for access, which it said in July 2026 was evolving toward a broader pay-per-use model.</p>
<h3>4. Emerging standards</h3>
<p>The IETF's AI Preferences working group is drafting a vocabulary for expressing how content may be used by AI systems, and the Really Simple Licensing (RSL) standard, launched in September 2025 with backing from publishers including Reddit, Yahoo and Medium, lets sites publish machine-readable licensing terms. The <strong>llms.txt</strong> proposal - a Markdown summary file for AI tools - is popular in SEO circles, but Google's John Mueller said in 2025 that no AI system currently uses it, so treat it as optional.</p>`,
  },
  {
    heading: "Should you block AI crawlers to save hosting costs?",
    body: `<p>It depends on what your site needs from AI - traffic, privacy for your content, or lower server load. A balanced approach for most small sites:</p>
<table>
<thead><tr><th>Goal</th><th>Suggested approach</th></tr></thead>
<tbody>
<tr><td>Reduce server load without losing AI search visibility</td><td>Block training crawlers (GPTBot, ClaudeBot, CCBot, Bytespider, Meta-ExternalAgent); allow search crawlers such as OAI-SearchBot and PerplexityBot</td></tr>
<tr><td>Keep content out of AI training entirely</td><td>Block training crawlers and the Google-Extended and Applebot-Extended tokens</td></tr>
<tr><td>Maximize visibility in AI answers</td><td>Allow AI search crawlers and user fetchers; keep content clear and well structured</td></tr>
<tr><td>Stop abusive or unidentified scrapers</td><td>Use your host's bot protection or a CDN with bot management - robots.txt alone will not stop them</td></tr>
</tbody>
</table>
<h3>Weigh the visibility trade-off</h3>
<p>AI search is changing how people find websites. Pew Research found in July 2025 that Google users clicked a result in 8% of visits when an AI summary appeared, versus 15% when none did. At the same time, referral traffic from AI assistants has been growing quickly from a small base - one analysis counted about 1.13 billion AI referral visits in June 2025, more than 80% from ChatGPT, compared with roughly 191 billion from Google Search. Blocking AI search crawlers may save a little bandwidth but could cost you a growing source of visitors. Blocking training crawlers alone usually saves more load with less downside.</p>
<p>For more on how hosting affects visibility in search and AI tools, see our guide to the <a href="/articles/best-wordpress-hosting">best WordPress hosting</a>.</p>`,
  },
  {
    heading: "What are the hidden ways web hosting gets more expensive?",
    body: `<p>When costs rise, the advertised price is often the last thing to change. Watch for these quieter changes when you compare plans or receive a renewal notice:</p>
<ol>
<li><strong>Renewal rates rising faster than intro prices.</strong> The headline deal stays the same while the regular rate climbs.</li>
<li><strong>Longer minimum terms for the best price.</strong> The lowest monthly figure may require a 48-month prepay instead of 36.</li>
<li><strong>Smaller allowances.</strong> Fewer websites, less storage, fewer email accounts or lower resource limits for the same price.</li>
<li><strong>Features moving to add-ons.</strong> Daily backups, malware removal, staging or CDN access becoming paid extras.</li>
<li><strong>Pass-through fees.</strong> Separate charges for control panel licenses, particularly on VPS and dedicated plans.</li>
<li><strong>Domain renewals.</strong> Free first-year domains renewing at regular prices, now including the higher .com wholesale rate.</li>
<li><strong>Resource-limit upgrades.</strong> Bot traffic or growth pushing a site past its CPU or memory limits, prompting an upgrade.</li>
<li><strong>Currency effects</strong> on plans priced in US dollars.</li>
</ol>
<p>None of these is unique to 2026, but rising costs make them more likely. Reading the full plan details and the renewal price is your best protection.</p>`,
  },
];

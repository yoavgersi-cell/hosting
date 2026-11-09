import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 6: cheapest, free hosting,
// red flags, setup steps, switching hosts, ownership of hosting brands.

export const part6: ArticleSection[] = [
  {
    heading: "What is the cheapest reliable hosting for a small business, and what is the catch?",
    body: `<div class="qa"><strong>Short answer:</strong> Among our top picks, <strong>Hostinger</strong> has the lowest advertised entry prices - roughly $2-$3 a month on a 48-month term, as reported by third-party sources. The catch, with every budget host, is the same: the lowest price needs a long prepaid term, and renewal rates are several times higher. Judge "cheap" on the total cost over three or four years, not the first month.</div>
<p>Budget hosting is genuinely good value for many small businesses. The trick is understanding how the pricing works so you are not surprised two or three years later.</p>
<h3>How budget hosting pricing works</h3>
<ul>
<li><strong>The headline price assumes the longest term.</strong> Choose monthly or annual billing and the monthly rate goes up, sometimes a lot.</li>
<li><strong>You pay the whole term upfront.</strong> A "$2.99 a month" deal on 48 months is a single payment of well over $100.</li>
<li><strong>Renewal is at the regular rate.</strong> Reported renewal rates for entry plans at our top picks are around $10-$11 a month - several times the intro price.</li>
<li><strong>Add-ons change the maths.</strong> Daily backups, extra mailboxes, domain privacy and security tools are sometimes free and sometimes not, depending on plan and host.</li>
</ul>
<h3>Is it worth paying a little more?</h3>
<p>Often, yes. For a business, the step from the cheapest plan to the mid-tier plan frequently buys the things that matter most: daily backups, more websites, more mailboxes and more server resources. A difference of a few dollars a month is small next to the cost of a lost day of enquiries or a site you cannot restore.</p>
<h3>Cheap red flags</h3>
<ul>
<li>No published renewal price anywhere before checkout.</li>
<li>No free SSL, or SSL sold as a paid add-on.</li>
<li>Backups that are manual-only or cost extra with no clear price.</li>
<li>Unrealistic promises - "unlimited everything" with no fair-use policy you can read.</li>
<li>A very short or missing money-back guarantee.</li>
</ul>
<p>For a detailed breakdown, see our guides to <a href="/articles/how-much-does-web-hosting-cost">how much web hosting costs</a> and <a href="/articles/web-hosting-renewal-prices-explained">renewal prices</a>.</p>`,
  },
  {
    heading: "Is free web hosting ever a good idea for a business?",
    body: `<div class="qa"><strong>Short answer:</strong> Rarely. Free plans usually put the provider's branding or ads on your site, give you a subdomain instead of your own domain, limit features and offer little or no support. They can work for testing an idea or a temporary page, but a business that wants to be taken seriously should pay the few dollars a month for proper hosting and its own domain.</div>
<p>"Free" hosting comes in a few forms: free tiers from website builders, free subdomains from blogging platforms, free static hosting for developers and old-style free shared hosting supported by ads. Each has a place, but most are a poor fit for a business.</p>
<table>
<thead><tr><th>Type of free hosting</th><th>Good for</th><th>Main drawbacks for a business</th></tr></thead>
<tbody>
<tr><td>Website builder free plan</td><td>Trying out a builder, a temporary page</td><td>Provider branding, a subdomain address, limited features</td></tr>
<tr><td>Free blogging platform</td><td>Personal writing</td><td>Limited control, branding, often no custom domain on free plans</td></tr>
<tr><td>Free static hosting for developers</td><td>Developers deploying simple static sites</td><td>Requires technical skills; no traditional email or control panel</td></tr>
<tr><td>Ad-supported free shared hosting</td><td>Learning and experiments</td><td>Ads, weak performance, uncertain security and longevity</td></tr>
</tbody>
</table>
<h3>The hidden costs of free</h3>
<ul>
<li><strong>Credibility.</strong> A subdomain address and someone else's ads look unprofessional on a business card or invoice.</li>
<li><strong>No business email.</strong> Without your own domain, you cannot have addresses at your business name.</li>
<li><strong>Lock-in.</strong> Moving off a free platform later can mean rebuilding the site and losing whatever search visibility the old address earned.</li>
<li><strong>No real support or guarantees.</strong> If the service changes its terms or shuts down, you have little recourse.</li>
</ul>`,
  },
  {
    heading: "What red flags should a small business watch for when choosing a host?",
    body: `<div class="qa"><strong>Short answer:</strong> Be wary of hidden renewal prices, the domain registered in someone else's name, backups that are not clearly included, vague "unlimited" claims, aggressive add-ons pre-ticked at checkout, and any host or reseller that makes it hard to get your own files and data out.</div>
<p>Most hosting problems are visible before you buy, if you know where to look. These are the warning signs we see most often in reviews, support forums and our own testing of checkout flows.</p>
<table>
<thead><tr><th>Red flag</th><th>Why it matters</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>Renewal price hidden until after purchase</td><td>Your real long-term cost is unknown</td><td>Look for the renewal price in the checkout or terms; ask chat if needed</td></tr>
<tr><td>Add-ons pre-selected at checkout</td><td>Easy to pay for extras you do not need</td><td>Untick everything, then add back only what you will use</td></tr>
<tr><td>Domain registered to a designer or reseller</td><td>You may not control your own address and email</td><td>Insist the business is the registrant</td></tr>
<tr><td>No self-service backups or downloads</td><td>Hard to recover or leave</td><td>Confirm you can download a full backup at any time</td></tr>
<tr><td>"Unlimited" with no fair-use policy</td><td>Limits exist but you cannot see them</td><td>Read the acceptable-use or fair-use page</td></tr>
<tr><td>No money-back guarantee</td><td>No low-risk way to test</td><td>Prefer hosts with a clear refund window</td></tr>
<tr><td>Very old software (e.g. outdated PHP only)</td><td>Security and compatibility risk</td><td>Check which PHP versions are offered</td></tr>
<tr><td>Consistent complaints about billing or cancellations</td><td>Leaving may be harder than joining</td><td>Read recent reviews, not just the star rating</td></tr>
</tbody>
</table>
<p>No host is perfect, and every large provider has unhappy customers. Look for patterns in recent reviews rather than individual horror stories, and weigh how the company responds to complaints.</p>`,
  },
  {
    heading: "How do you set up hosting for a new business website, step by step?",
    body: `<div class="qa"><strong>Short answer:</strong> Choose a plan and term, register the domain in the business's name, set up two-factor authentication, install WordPress or a website builder, connect business email, turn on SSL and backups, build and test the site, then submit it to Google Search Console and link it from your Google Business Profile.</div>
<ol>
<li><strong>Decide what the site must do.</strong> Brochure, bookings, online shop or lead generation? This decides the plan and tools.</li>
<li><strong>Choose a host and plan.</strong> Compare total cost over the term, including renewals, backups and email. Note the renewal date in your calendar.</li>
<li><strong>Register or connect your domain.</strong> Many plans include a free domain for the first year. Make sure the business is the registrant and that you control the registrar login.</li>
<li><strong>Secure the account.</strong> Turn on two-factor authentication for hosting and registrar, and store passwords in a password manager.</li>
<li><strong>Pick your data center region</strong> close to most of your customers, if the host lets you choose.</li>
<li><strong>Install your platform.</strong> Use the host's one-click WordPress installer or website builder. Choose a lightweight, well-supported theme.</li>
<li><strong>Set up business email</strong> - either the host's mailboxes or Google Workspace or Microsoft 365 - and add SPF, DKIM and DMARC records.</li>
<li><strong>Confirm SSL is active</strong> and that the site redirects to HTTPS.</li>
<li><strong>Check backups</strong>: frequency, retention and how to restore. Add an off-site backup.</li>
<li><strong>Build the essential pages</strong>: home, services, about, contact, plus a privacy policy and any legally required notices.</li>
<li><strong>Test everything</strong> on a phone: forms, phone links, maps, booking tools and page speed.</li>
<li><strong>Launch and connect</strong>: add the site to Google Search Console, submit your sitemap, link it from your Google Business Profile and set up an uptime monitor.</li>
</ol>
<p>For more detail on choosing the plan itself, see <a href="/articles/how-to-choose-web-hosting">how to choose web hosting</a>.</p>`,
  },
  {
    heading: "How do you switch hosts without losing your website or email?",
    body: `<div class="qa"><strong>Short answer:</strong> Set up the new hosting first, copy the site across (many hosts will migrate it for free), test it on a temporary address, recreate your email accounts, lower your DNS time-to-live in advance, then switch the DNS. Keep the old account running for a week or two until you are sure everything has moved.</div>
<p>Switching hosts is less risky than it sounds, provided you do things in the right order. The biggest mistakes are cancelling the old host too early and forgetting about email.</p>
<h3>The safe order of operations</h3>
<ol>
<li><strong>Take a full backup</strong> of files, databases and, if hosted there, email.</li>
<li><strong>Sign up with the new host</strong> and ask about free migration.</li>
<li><strong>Copy the site</strong> and check it on a temporary or preview address.</li>
<li><strong>Recreate mailboxes</strong> and plan how to move old messages.</li>
<li><strong>Lower the DNS TTL</strong> a day or two in advance so the change spreads quickly.</li>
<li><strong>Switch DNS</strong> (or nameservers) to the new host at a quiet time.</li>
<li><strong>Test</strong> forms, checkout, email sending and receiving, and SSL.</li>
<li><strong>Cancel the old host</strong> only after a week or two of stable running - and after downloading a final backup.</li>
</ol>
<p>Our full guide covers each step in detail: <a href="/articles/how-to-migrate-your-website-to-a-new-host">how to migrate your website to a new host</a>.</p>`,
  },
  {
    heading: "Who owns the big hosting brands, and why does it matter for a business?",
    body: `<div class="qa"><strong>Short answer:</strong> Many familiar hosting brands belong to a few large groups. Bluehost, Network Solutions, Domain.com and BigRock, for example, are all part of Newfold Digital. Ownership matters because it can influence pricing, support and how much choice you really have when comparing "different" brands.</div>
<p>The web hosting market has consolidated heavily over the past decade. Private equity firms and large groups have bought dozens of independent hosts and kept many of the original brand names. Two hosts that look like competitors in a comparison can share a parent company, policies and sometimes infrastructure.</p>
<h3>Why a business owner should care</h3>
<ul>
<li><strong>Pricing changes.</strong> Changes made at group level can appear across several brands at once.</li>
<li><strong>Support and systems.</strong> Acquisitions often bring platform migrations, new control panels or changes to support teams.</li>
<li><strong>Real choice.</strong> If you are leaving a host because of policy or pricing, moving to a sister brand may not change much.</li>
<li><strong>Stability.</strong> Larger groups can bring investment and resilience; they can also bring cost-cutting.</li>
</ul>
<p>Of our top three picks, Hostinger is independent and privately held, Bluehost belongs to Newfold Digital, and Hosting.com (formerly A2 Hosting) is part of the hosting.com group. For the full picture, see our guide to <a href="/articles/who-owns-your-web-host">who owns your web host</a>.</p>`,
  },
];

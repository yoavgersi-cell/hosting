import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 5: segment playbooks.

export const part5: ArticleSection[] = [
  {
    heading: "What is the best hosting for local service businesses?",
    body: `<div class="qa"><strong>Short answer:</strong> For contractors, salons, cleaners, clinics and other local service businesses, an affordable shared plan from a mainstream host is usually all you need. <strong>Hostinger</strong> is our value pick and <strong>Bluehost</strong> suits owners who want a guided WordPress setup and phone support. Spend the money you save on photos, reviews and a fast, clear site.</div>
<p>A local service website has one job: turn someone who has just found you on Google or a map into a phone call, booking or quote request. That needs speed on a phone, clear contact details on every page and reliability. It does not need much server power. Even a busy local business rarely gets more visitors than an entry or mid-tier shared plan can handle.</p>
<h3>What a local service site needs from its host</h3>
<ul>
<li><strong>A data center near your customers</strong> so pages load quickly on mobile connections.</li>
<li><strong>Free SSL and working contact forms.</strong> Test that form submissions actually arrive - email deliverability problems cost local businesses leads every day.</li>
<li><strong>Business email on your own domain.</strong> "jane@smithplumbing.com" looks more trustworthy on a quote than a free webmail address.</li>
<li><strong>Room for a booking tool or chat widget</strong> without slowing the site down.</li>
</ul>
<h3>Typical setup and budget</h3>
<table>
<thead><tr><th>Item</th><th>Typical choice</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Hosting</td><td>Entry or mid-tier shared plan</td><td>Mid-tier if you want daily backups or several sites</td></tr>
<tr><td>Website</td><td>WordPress with a lightweight theme, or the host's website builder</td><td>Builders are faster to launch; WordPress is more flexible</td></tr>
<tr><td>Bookings</td><td>An embedded booking service</td><td>Many integrate with Google Business Profile</td></tr>
<tr><td>Email</td><td>Host mailboxes or Google Workspace / Microsoft 365</td><td>See our email section for the trade-offs</td></tr>
</tbody>
</table>
<p>One honest caveat: if you never want to touch a dashboard, a website builder or a local designer's care plan may serve you better than buying hosting yourself. There is nothing wrong with paying someone else to look after it - just keep ownership of the domain in your own name.</p>`,
  },
  {
    heading: "What is the best hosting for restaurants, cafes and hospitality?",
    body: `<div class="qa"><strong>Short answer:</strong> Most restaurants need a fast, mobile-friendly site with menus, opening hours, location and links to booking and ordering - which a shared plan from <strong>Hostinger</strong> or <strong>Bluehost</strong> handles easily. Online ordering and table reservations are usually best handled by a specialist platform you link to or embed, rather than built on your own server.</div>
<p>Restaurant websites are visited mostly on phones, often by someone standing on the street deciding where to eat. That makes three things non-negotiable: the menu must load quickly, it must be readable on a small screen, and the opening hours must be right.</p>
<h3>Restaurant website tips that hosting affects</h3>
<ul>
<li><strong>Publish menus as web pages, not just PDFs.</strong> Pages load faster on mobile, are easier to read and can be found in search. Keep a PDF for printing if you like.</li>
<li><strong>Compress food photography.</strong> Beautiful, huge images are the most common reason restaurant sites are slow.</li>
<li><strong>Keep hours in one place.</strong> Update your Google Business Profile and website together, especially for holidays.</li>
<li><strong>Plan for spikes.</strong> A review in the local paper or a social media post can send a burst of visitors. A well-cached site on a decent shared plan copes; an uncached, heavy one may not.</li>
</ul>
<h3>Build or embed?</h3>
<table>
<thead><tr><th>Feature</th><th>Usually best handled by</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Menu, story, hours, location</td><td>Your own website</td><td>You control it and it builds your search presence</td></tr>
<tr><td>Table reservations</td><td>A reservation platform, embedded or linked</td><td>Handles availability, reminders and no-shows</td></tr>
<tr><td>Online ordering and delivery</td><td>Your point-of-sale provider's ordering tool or a delivery platform</td><td>Payments, kitchen tickets and drivers are built in</td></tr>
<tr><td>Gift cards</td><td>Your POS or payments provider</td><td>Keeps payment card data off your web server</td></tr>
</tbody>
</table>
<p>Keeping payments on a specialist platform also keeps most of the payment security burden off your own hosting, which matters for the compliance rules covered later in this guide.</p>`,
  },
  {
    heading: "What is the best hosting for law firms, accountants and consultants?",
    body: `<div class="qa"><strong>Short answer:</strong> Professional services firms need reliability, security and a credible, fast site more than raw power. A mid-tier plan from <strong>Bluehost</strong>, <strong>Hosting.com</strong> or <strong>Hostinger</strong> with daily backups, two-factor authentication and professional email is a sensible base. Keep confidential client documents out of your website and in a dedicated, secure client portal.</div>
<p>For a law firm, accountancy practice or consultancy, the website is often the first test of credibility. Prospective clients compare a handful of firms, read your profiles and services, and decide who to call. The site must be fast, secure and up to date, and it must never leak information.</p>
<h3>Priorities for professional firms</h3>
<ul>
<li><strong>Do not use the website as a file store.</strong> Contact forms should collect only what you need to make contact. Tax returns, contracts and identity documents belong in a purpose-built secure portal, not in a website upload folder or a form plugin's database.</li>
<li><strong>Professional email with strong authentication.</strong> Set up SPF, DKIM and DMARC so clients' mail systems trust your messages and so criminals find it harder to impersonate your domain. Invoice and payment-redirection fraud regularly targets professional firms.</li>
<li><strong>Daily backups and a staging site</strong> so updates never break the site on a working day.</li>
<li><strong>Accessibility.</strong> A clear, accessible site is good service and reduces legal risk - see the compliance section.</li>
<li><strong>Regulatory rules on advertising.</strong> Bar associations and accounting bodies often have rules about claims, testimonials and disclaimers. They apply to your website just as they do to print.</li>
</ul>
<h3>Which of our top picks fits?</h3>
<table>
<thead><tr><th>If your priority is...</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Lowest cost for a credible site</td><td>Hostinger</td><td>Low prices and backups included on shared plans</td></tr>
<tr><td>Guided WordPress and phone support</td><td>Bluehost</td><td>WordPress-first dashboard and 24/7 phone and chat support</td></tr>
<tr><td>cPanel and speed-focused tiers</td><td>Hosting.com</td><td>cPanel control panel and LiteSpeed on Turbo tiers</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "What is the best hosting for nonprofits and community groups?",
    body: `<div class="qa"><strong>Short answer:</strong> A low-cost shared plan from <strong>Hostinger</strong> is usually the best value for small nonprofits, clubs and community groups, especially on a longer term. Before you buy, check whether you qualify for free or discounted email and software through nonprofit programs, and make sure the organization - not a volunteer - owns the domain and hosting account.</div>
<p>Nonprofit websites tend to share a few traits: tight budgets, volunteers who come and go, and a mix of content - events, news, donation pages and volunteer sign-ups. That combination makes ownership and simplicity especially important.</p>
<h3>Nonprofit-specific advice</h3>
<ul>
<li><strong>Register everything to the organization.</strong> Volunteer turnover is the number one reason nonprofits lose access to their own domains. Use a role-based email address (such as webmaster@yourgroup.org) that passes between volunteers.</li>
<li><strong>Look for nonprofit programs.</strong> Major email and productivity suites have offered free or heavily discounted plans to eligible registered charities, which can make host-provided email unnecessary. Eligibility rules vary by country.</li>
<li><strong>Use a dedicated donation platform.</strong> Taking donations through an established payment or fundraising provider keeps card data off your server and gives donors a familiar, trusted checkout.</li>
<li><strong>Choose tools volunteers can learn quickly.</strong> A website builder or a simple WordPress setup with few plugins is easier to hand over than a highly customized site.</li>
<li><strong>Budget for renewals.</strong> Long prepaid terms keep the monthly price low, but make sure the treasurer knows when the renewal falls due and what it will cost.</li>
</ul>
<p>If your organization is very small and mostly needs a single page with events and a contact form, a free plan from a website builder can be a reasonable starting point - with the limitations we cover in the section on free hosting.</p>`,
  },
  {
    heading: "What is the best hosting for startups planning to scale?",
    body: `<div class="qa"><strong>Short answer:</strong> Start simple and cheap for the marketing site - a shared or entry cloud plan from <strong>Hostinger</strong> or <strong>Hosting.com</strong> is plenty - and keep your actual product on infrastructure built for applications. Do not buy capacity for traffic you do not have yet; pick a host that lets you upgrade in place.</div>
<p>Startups often over-engineer their first website. The marketing site that explains what you do, collects sign-ups and publishes a blog is a very different workload from the software product itself. Mixing the two on one server is how a launch-day traffic spike takes down both.</p>
<h3>A sensible startup setup</h3>
<table>
<thead><tr><th>Part of the business</th><th>Typical hosting choice</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Marketing site and blog</td><td>Shared, managed WordPress or entry cloud plan</td><td>Cheap, simple, easy for non-developers to edit</td></tr>
<tr><td>Web application or product</td><td>VPS, cloud platform or an application platform</td><td>Scales independently and suits developer workflows</td></tr>
<tr><td>Email and documents</td><td>Google Workspace or Microsoft 365</td><td>Scales with headcount; integrates with other tools</td></tr>
<tr><td>DNS</td><td>A dedicated DNS provider, owned by the company</td><td>Lets you point different parts of the domain at different services</td></tr>
</tbody>
</table>
<h3>Questions to ask a host if you expect growth</h3>
<ul>
<li>Can I move from shared to cloud or VPS without changing hosts or migrating manually?</li>
<li>What happens if I exceed my resource limits during a launch - throttling, suspension or an upgrade prompt?</li>
<li>Do you offer staging, SSH access and Git deployment for when we hire developers?</li>
<li>What are the renewal prices for each tier? Startups that prepay three or four years for a low intro price sometimes outgrow the plan long before the term ends.</li>
</ul>`,
  },
  {
    heading: "What is the best hosting for agencies and freelancers managing client sites?",
    body: `<div class="qa"><strong>Short answer:</strong> If you build and look after sites for clients, you will outgrow single-site shared plans quickly. A top-tier shared plan, a cloud plan or a VPS from a host with cPanel or a good multi-site dashboard - <strong>Hosting.com</strong> and <strong>Hostinger</strong> both offer routes up - makes more sense, alongside a clear policy that clients own their domains.</div>
<p>Agencies and freelancers have different needs from the businesses they serve: many sites in one place, staging for every client, fast cloning, white-label options and a way to bill hosting back to clients. They also carry more risk, because one compromised site on a shared account can affect every client on it.</p>
<h3>What to look for</h3>
<ul>
<li><strong>Isolation between client sites</strong>, so one vulnerable plugin cannot spread to the rest.</li>
<li><strong>Staging and one-click cloning</strong> for safe updates.</li>
<li><strong>Granular access</strong> so clients and subcontractors can see only their own sites.</li>
<li><strong>Clear resource limits</strong> and an easy path to more capacity.</li>
<li><strong>Developer tools</strong>: SSH, Git, command-line tools such as WP-CLI and modern PHP versions.</li>
</ul>
<h3>Good practice that protects you and your clients</h3>
<p>Put the client's domain in the client's name, even if you manage it. Write down in your contract who owns the hosting, what happens to the site if the relationship ends, and how long you will keep backups. It is the professional thing to do - and it protects you from disputes as well as protecting the client.</p>`,
  },
];

import type { ArticleSection } from "@/lib/config";

// "Best Web Hosting for Small Business" - part 3b: builders, e-commerce,
// email and compliance.

export const part3b: ArticleSection[] = [
  {
    heading: "Website builder or web hosting: which is better for a small business?",
    body: `<div class="qa"><strong>Short answer:</strong> A website builder such as Wix or Squarespace is simpler and includes hosting, but typically costs more per month and is harder to leave. Web hosting with WordPress is cheaper and far more flexible, but asks a little more of you. Many hosts now include their own drag-and-drop builder, which sits in between.</div>
<p>This is often the first real decision a small business makes, and there is no single right answer. It depends on how much control you want, how much time you have and how the site will grow.</p>
<h3>Website builder prices in 2026</h3>
<table>
<thead><tr><th>Platform</th><th>Plans and reported prices (per month, billed yearly)</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Wix</td><td>Light $17, Core $29, Business $39, Business Elite $159</td><td>Monthly billing costs more</td></tr>
<tr><td>Squarespace</td><td>Changed in 2026; reports differ on current plans and prices</td><td>Squarespace announced increases in July 2026, and later reports describe a revised lineup - check squarespace.com/pricing</td></tr>
<tr><td>GoDaddy Website Builder</td><td>Reported from about $9.99 intro, renewing at about $16.99 (Basic)</td><td>Intro prices rise at renewal</td></tr>
<tr><td>Host-included builders</td><td>Included with some hosting plans</td><td>Hostinger, for example, bundles a website builder with its web hosting</td></tr>
</tbody>
</table>
<p><em>Wix prices from third-party checks in October 2026; GoDaddy from third-party pricing guides. Confirm on each provider's pricing page.</em></p>
<h3>How to choose</h3>
<table>
<thead><tr><th>Choose a website builder if...</th><th>Choose hosting with WordPress if...</th></tr></thead>
<tbody>
<tr><td>You want the simplest possible setup and one bill</td><td>You want the lowest running cost</td></tr>
<tr><td>Your site is small and unlikely to need custom features</td><td>You may need custom features, integrations or a larger site later</td></tr>
<tr><td>You never want to think about updates or backups</td><td>You want full ownership of your files and the freedom to move hosts</td></tr>
<tr><td>Design templates matter more than flexibility</td><td>You plan to work with designers or developers</td></tr>
</tbody>
</table>
<p>One thing to know before choosing a builder: moving away from one usually means rebuilding the site, because builders do not export a complete, portable website. With WordPress on standard hosting, you can take your whole site to another host.</p>`,
  },
  {
    heading: "Should you sell online with WooCommerce on your host or use Shopify?",
    body: `<div class="qa"><strong>Short answer:</strong> If selling online is your main business, Shopify is usually the simpler, safer choice: hosting, security, payments and checkout are handled for you, from $29 a month on an annual plan. If your store is a smaller part of a content-rich website, or you want full control and lower platform fees, WooCommerce on a good host can work well - on a plan with daily backups and enough resources.</div>
<h3>Shopify vs WooCommerce at a glance</h3>
<table>
<thead><tr><th></th><th>Shopify</th><th>WooCommerce on your own hosting</th></tr></thead>
<tbody>
<tr><td>Cost</td><td>Basic $39/mo monthly or $29/mo annual; Grow $105 or $79; Advanced $399 or $299 (reported)</td><td>WooCommerce itself is free; you pay for hosting, extensions and payment fees</td></tr>
<tr><td>Hosting and security</td><td>Included and managed</td><td>Your responsibility, with your host's help</td></tr>
<tr><td>Payments and compliance</td><td>Built-in checkout handles card data</td><td>Use a hosted payment gateway to keep card data off your server</td></tr>
<tr><td>Flexibility</td><td>Large app store, within Shopify's framework</td><td>Almost unlimited, with WordPress plugins and custom code</td></tr>
<tr><td>Best for</td><td>Product-first businesses that want to focus on selling</td><td>Content-led businesses, custom needs, owners with technical help</td></tr>
</tbody>
</table>
<h3>If you choose WooCommerce, choose hosting carefully</h3>
<ul>
<li><strong>Daily backups at minimum</strong>, because orders change your database every day.</li>
<li><strong>A staging site</strong> to test plugin and theme updates before they reach your checkout.</li>
<li><strong>Enough resources</strong> - start on a top shared tier or a cloud plan, not the cheapest plan.</li>
<li><strong>A hosted payment gateway</strong> so card details are entered on the payment provider's systems, which greatly simplifies PCI compliance.</li>
</ul>
<p>Our <a href="/articles/best-wordpress-hosting">best WordPress hosting guide</a> covers WooCommerce hosting in more detail.</p>`,
  },
  {
    heading: "Do you need business email, and should it come with your hosting?",
    body: `<div class="qa"><strong>Short answer:</strong> Yes, you need email at your own domain - it looks professional and you keep it if you change providers. Mailboxes included with hosting are fine for very small teams. Google Workspace or Microsoft 365 cost more but offer better spam filtering, larger storage, calendars and collaboration, and keep your email separate from your website.</div>
<p>Email is where many small businesses feel hosting decisions most. A broken website is visible; email that quietly lands in customers' spam folders costs you without anyone noticing.</p>
<h3>Business email options compared</h3>
<table>
<thead><tr><th>Option</th><th>Reported price (per user per month)</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Mailboxes included with hosting (cPanel or host email)</td><td>Included, with limits</td><td>Very small teams with simple needs</td></tr>
<tr><td>Hostinger Business Email</td><td>Starter from about $0.39 intro on a long term, renewing at about $1.59 (reported)</td><td>Low-cost upgrade for Hostinger customers</td></tr>
<tr><td>Bluehost Professional Email</td><td>From about $1.67 intro, renewing at about $2.50 (reported)</td><td>Bluehost customers wanting more than basic mailboxes</td></tr>
<tr><td>Zoho Mail</td><td>Mail Lite from about $1; Mail Premium about $4 (annual billing, reported)</td><td>Budget-conscious teams wanting a dedicated email provider</td></tr>
<tr><td>Google Workspace</td><td>Business Starter $7, Standard $14, Plus $22 on annual plans ($8.40 / $16.80 / $26.40 flexible)</td><td>Teams that live in Gmail, Docs and Meet</td></tr>
<tr><td>Microsoft 365</td><td>Business Basic $7, Standard $14, Premium $22 on annual plans (from 1 July 2026)</td><td>Teams that rely on Outlook, Word, Excel and Teams</td></tr>
</tbody>
</table>
<p><em>Google Workspace prices reflect the March 2025 change that bundled Gemini AI features into plans. Microsoft 365 Business Basic and Standard rose on 1 July 2026, as reported by multiple licensing resellers. Host email prices are third-party reports.</em></p>
<h3>SPF, DKIM and DMARC: the three records that keep you out of spam</h3>
<p>Major mailbox providers now expect senders to authenticate their email. Since February 2024, Gmail and Yahoo have required bulk senders (around 5,000 or more messages a day to Gmail addresses) to use SPF, DKIM and DMARC, offer one-click unsubscribe and keep spam complaints low. Microsoft began enforcing similar rules for high-volume senders to Outlook.com, Hotmail and Live addresses on 5 May 2025.</p>
<p>Most small businesses do not send that much email, but the same records improve deliverability for everyone and make it harder for criminals to send convincing fake emails from your domain.</p>
<table>
<thead><tr><th>Record</th><th>What it does</th><th>Who sets it up</th></tr></thead>
<tbody>
<tr><td>SPF</td><td>Lists the servers allowed to send email for your domain</td><td>You or your host, in DNS</td></tr>
<tr><td>DKIM</td><td>Adds a digital signature proving the message was not altered</td><td>Your email provider gives you the record to add</td></tr>
<tr><td>DMARC</td><td>Tells receiving servers what to do with mail that fails checks, and sends you reports</td><td>You, in DNS - start with a monitoring policy</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "What compliance rules apply to small business websites?",
    body: `<div class="qa"><strong>Short answer:</strong> If you take card payments, PCI DSS applies - the simplest route is a hosted payment page so card data never touches your site. In the US, ADA lawsuits over inaccessible websites run into the thousands each year, so aim for WCAG 2.1 AA accessibility. If you serve customers in Europe or certain US states, privacy laws on cookies and personal data apply too. This is general information, not legal advice.</div>
<h3>Payments: PCI DSS</h3>
<p>The Payment Card Industry Data Security Standard applies to any business that accepts card payments. Version 4.0.1 is current, and its remaining "future-dated" requirements became mandatory on 31 March 2025. For most small online sellers, the practical goal is to qualify for the shortest self-assessment questionnaire, SAQ A, by using a payment provider's hosted checkout or payment fields so card details are entered on the provider's systems, not yours.</p>
<p>In January 2025 the PCI Security Standards Council updated SAQ A: two script-security requirements were removed from it and replaced with an eligibility criterion that the merchant confirms its site is not susceptible to script attacks - for example by obtaining confirmation from its PCI-compliant payment provider. Ask your payment provider which questionnaire applies to you.</p>
<h3>Accessibility: ADA and WCAG</h3>
<table>
<thead><tr><th>Rule</th><th>Who it applies to</th><th>Key point</th></tr></thead>
<tbody>
<tr><td>ADA Title III</td><td>US businesses open to the public</td><td>No specific federal technical standard for websites, but courts apply the ADA to websites and commonly use WCAG as the benchmark</td></tr>
<tr><td>ADA Title II rule (2024)</td><td>US state and local governments</td><td>Requires WCAG 2.1 AA; deadlines were extended in April 2026 to April 2027 and April 2028 depending on size</td></tr>
<tr><td>European Accessibility Act</td><td>Many businesses selling covered products and services in the EU</td><td>Applies from 28 June 2025; microenterprises are exempt for services</td></tr>
</tbody>
</table>
<p>Website accessibility litigation is substantial. Law firm Seyfarth Shaw counted 3,117 federal website accessibility lawsuits in 2025, up 27% from 2024, and accessibility vendor UsableNet counted around 5,000 when state courts in New York and California are included, with e-commerce sites the most frequent targets. Practical steps - alt text on images, sufficient color contrast, keyboard navigation, captions on videos, clear form labels - are good for customers as well as for risk.</p>
<h3>Privacy: cookies and personal data</h3>
<p>If you use analytics, advertising pixels or forms that collect personal data, privacy laws may require a privacy policy, a cookie banner and a way for people to exercise their rights. The EU and UK GDPR apply if you target customers there, and a growing number of US states have their own privacy laws. Your host does not make you compliant, but it should offer a data processing agreement, and its data center locations matter if you have data residency obligations.</p>`,
  },
  {
    heading: "Can you get HIPAA-compliant hosting for a medical or therapy practice?",
    body: `<div class="qa"><strong>Short answer:</strong> Not from typical shared hosting. Any host that stores or receives protected health information on your behalf must sign a Business Associate Agreement (BAA), and mainstream budget hosts generally do not. Keep patient information off your marketing website, and use HIPAA-compliant tools - patient portals, intake forms and scheduling systems - that sign a BAA.</div>
<p>Many clinics, dental practices, therapists and other healthcare providers put contact or intake forms on their website without realizing that a form asking about symptoms or medical history can collect protected health information (PHI). If that information is stored on or passes through the web host's servers, the host becomes a business associate under HIPAA and must sign a BAA.</p>
<h3>What our top picks say</h3>
<ul>
<li><strong>Bluehost</strong> reportedly states that it does not sign Business Associate Agreements.</li>
<li><strong>Hostinger's</strong> terms reportedly say its services are not intended to provide a HIPAA-compliant environment.</li>
<li><strong>Hosting.com:</strong> we found no published statement either way; ask before storing any health data.</li>
</ul>
<h3>A practical setup for healthcare practices</h3>
<table>
<thead><tr><th>Part of the website</th><th>Where it should live</th></tr></thead>
<tbody>
<tr><td>Marketing pages: services, team, location, hours, blog</td><td>Ordinary hosting is fine</td></tr>
<tr><td>Contact form for general enquiries</td><td>Ordinary hosting, if it asks only for name and contact details and warns people not to include medical information</td></tr>
<tr><td>Patient intake, symptoms, medical history</td><td>A HIPAA-compliant form or portal provider that signs a BAA</td></tr>
<tr><td>Appointment booking with clinical details</td><td>A HIPAA-compliant scheduling system that signs a BAA</td></tr>
<tr><td>Hosting for systems that store PHI</td><td>Providers that offer BAAs, such as specialist HIPAA hosts or major cloud platforms</td></tr>
</tbody>
</table>
<p>Specialist providers such as Liquid Web, Atlantic.Net and HIPAA Vault, and major cloud platforms such as AWS and Microsoft Azure, offer BAAs for eligible services. This is general information, not legal advice; speak to your compliance adviser before handling patient data online.</p>`,
  },
];

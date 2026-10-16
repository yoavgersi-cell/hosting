import Link from "next/link";

const planRows: [string, string, string][] = [
  ["Shared hosting", "Your site shares one server's CPU, memory and storage with many other sites. The host manages the server, security patches and control panel", "Blogs, portfolios, small business sites and first websites - the cheapest way to get online"],
  ["Managed WordPress hosting", "Shared or cloud servers tuned for WordPress, with one-click installs, automatic core updates, caching and staging tools", "WordPress users who want speed and less maintenance without managing a server"],
  ["Cloud hosting", "Your site runs on a cluster of servers with dedicated resource allocations and easy scaling", "Growing sites, online stores and agencies that have outgrown shared plans"],
  ["VPS hosting", "A virtual private server with guaranteed CPU and RAM and root access - managed or self-managed", "Developers, custom apps and high-traffic sites that need control and isolation"],
  ["Dedicated servers", "An entire physical server for one customer", "Large sites, heavy workloads and businesses with strict performance or compliance needs"],
];

const compareRows: [string, string, string, string][] = [
  ["What it is", "Server space and resources that store your site's files and serve them to visitors", "Your site's address (e.g. example.com), rented yearly from a registrar", "You need both to run a website - many hosts bundle a free domain for year one"],
  ["How you pay", "Monthly rate, usually billed upfront for 1-4 years; renews at a higher regular price", "Yearly registration fee; renewals are often higher than the first-year price", "Compare renewal prices for both, not just the first-year deal"],
  ["Who provides it", "Web hosts such as Hostinger, Bluehost, Hosting.com or UltaHost", "Registrars such as Domain.com, Network Solutions or BigRock - many also sell hosting", "Keeping them separate can make moving hosts easier later"],
  ["Can you move it?", "Yes - by migrating files and databases to a new host (many offer free migration)", "Yes - by transferring the domain to another registrar (after 60 days)", "Avoid plans that make leaving difficult"],
];

function PlanTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[600px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Hosting type</th>
            <th className="px-4 py-3 font-bold text-[#191919]">How it works</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Who it suits</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([k, a, b], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{k}</td>
              <td className="px-4 py-3 align-top text-gray-600">{a}</td>
              <td className="px-4 py-3 align-top text-gray-600">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompareTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Factor</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Web hosting</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Domain name</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Why it matters</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([f, s, t, w], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{f}</td>
              <td className="px-4 py-3 align-top text-gray-600">{s}</td>
              <td className="px-4 py-3 align-top text-gray-600">{t}</td>
              <td className="px-4 py-3 align-top text-gray-600">{w}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EditorialContent({ midSlot }: { midSlot?: React.ReactNode }) {
  const link = "font-semibold text-[#6A45C9] hover:underline";
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-6 pb-12 text-[16px] leading-[1.7] text-gray-800">
      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        The Best Web Hosting Providers, Compared
      </h2>
      <p className="mb-4">
        To find the best web hosting, we compare leading providers on the factors that actually
        decide whether a plan is a good deal over the life of your website: the real price after the
        introductory term ends, performance and uptime, storage and resources, what is included for
        free (domain, SSL, email, backups) and how good support is when something goes wrong.
        Not sure where to start? Read our{" "}
        <Link href="/articles/best-web-hosting-providers-compared" className={link}>
          guide to the best web hosting providers
        </Link>{" "}
        for the full breakdown.
      </p>
      <p className="mb-8">
        This page is a practical overview of what web hosting is, how hosting types differ, what it
        really costs, and how to pick a provider you can trust. Prefer to jump straight to the
        comparison? See our{" "}
        <Link href="/reviews" className={link}>
          in-depth provider reviews
        </Link>{" "}
        or a head-to-head like{" "}
        <Link href="/hostinger-vs-bluehost" className={link}>
          Hostinger vs Bluehost
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Is Web Hosting?
      </h2>
      <p className="mb-4">
        Web hosting is a <strong>service that stores your website&apos;s files, images and databases
        on a server</strong> connected to the internet, so anyone can visit your site at any time. You
        rent space and resources on that server from a hosting provider, usually for a monthly price
        billed a year or more in advance.
      </p>
      <p className="mb-8">
        Hosting is different from a <strong>domain name</strong>, which is just your site&apos;s
        address. You need both - and many hosts include a free domain for the first year. Learn more in{" "}
        <Link href="/articles/what-is-web-hosting" className={link}>
          what is web hosting?
        </Link>
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Web Hosting Plans Typically Include
      </h2>
      <p className="mb-4">
        Every provider packages its plans differently, but features usually fall into a few groups.
      </p>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Resources</h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Storage (SSD or faster NVMe drives) and bandwidth</li>
        <li>Number of websites allowed on the plan</li>
        <li>CPU and memory limits, which decide how much traffic you can handle</li>
      </ul>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Free extras</h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Free SSL certificate (the padlock in the browser)</li>
        <li>Free domain for the first year on many annual plans</li>
        <li>Business email accounts, website builders and one-click WordPress installs</li>
      </ul>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Often paid add-ons</h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Daily backups and one-click restores (free on some plans, extra on others)</li>
        <li>Malware scanning, CDN and premium security tools</li>
        <li>Domain privacy, premium email and SEO tools</li>
      </ul>

      <p className="mb-8 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px]">
        <strong>Worth knowing:</strong> The single biggest gap between advertised and real cost is
        <strong> renewal pricing</strong>. The low monthly price you see usually requires paying for
        several years upfront, and the plan then renews at a regular rate that can be two to four
        times higher. Always find the renewal price before checkout. Learn more in{" "}
        <Link href="/articles/web-hosting-renewal-prices-explained" className={link}>
          web hosting renewal prices explained
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Types of Web Hosting, Compared
      </h2>
      <p className="mb-4">
        Most providers sell several hosting types built on the same idea - renting server resources -
        with different levels of power, control and price.
      </p>
      <PlanTable rows={planRows} />
      <p className="mb-8 text-[13.5px] text-gray-500">
        This table is general information. Exact resources and features are set by each provider&apos;s
        plan. See{" "}
        <Link href="/articles/shared-vs-vps-vs-cloud-hosting" className={link}>
          shared vs VPS vs cloud hosting
        </Link>{" "}
        for a deeper comparison.
      </p>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Web Hosting vs Domain Name</h3>
      <p className="mb-4">
        They are often confused, but they are two separate products. Here is how they differ in practice.
      </p>
      <CompareTable rows={compareRows} />
      <p className="mb-8 text-[13.5px] text-gray-500">
        For a full breakdown see{" "}
        <Link href="/articles/domain-registration-vs-web-hosting" className={link}>
          domain registration vs web hosting
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How Getting Started With a Host Works
      </h2>
      <p className="mb-4">
        The process looks the same at almost every provider:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Pick a plan and term</strong> - longer terms unlock the lowest monthly price but are billed upfront.</li>
        <li><strong>Connect a domain</strong> - claim a free domain if one is included, or point an existing one to your new host.</li>
        <li><strong>Install your site</strong> - use one-click WordPress, a website builder, or upload your files; many hosts migrate an existing site for free.</li>
        <li><strong>Secure and back up</strong> - activate the free SSL certificate and confirm how often backups run.</li>
      </ul>
      <p className="mb-4"><strong>What a trustworthy host looks like:</strong> clear renewal prices, a money-back guarantee of at least 30 days, an uptime guarantee, 24/7 support and a long public track record.</p>
      <p className="mb-8"><strong>Red flags to avoid:</strong> renewal prices you can&apos;t find before checkout, pre-ticked paid add-ons, &ldquo;unlimited&rdquo; resources with hidden fair-use limits, and backups that are only available as a paid extra. See our{" "}
        <Link href="/articles/how-to-choose-a-web-hosting-provider" className={link}>
          guide to choosing a web host
        </Link>{" "}
        and our{" "}
        <Link href="/reviews" className={link}>
          provider reviews
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How to Choose a Web Hosting Provider
      </h2>
      <p className="mb-3">
        Beyond the headline price, five checks separate the best hosts from the rest:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Renewal price</strong> - what you pay after the introductory term ends</li>
        <li><strong>Performance</strong> - storage type (NVMe vs SSD), caching, data center locations and uptime guarantee</li>
        <li><strong>Included extras</strong> - free domain, SSL, email and, above all, automatic backups</li>
        <li><strong>Support</strong> - 24/7 live chat or phone, response times and knowledge base quality</li>
        <li><strong>Reputation</strong> - Trustpilot ratings, outage history and complaint patterns</li>
      </ul>
      <p className="mb-8">
        Want to see how specific providers stack up? Read our reviews of{" "}
        <Link href="/reviews/hostinger" className={link}>Hostinger</Link>,{" "}
        <Link href="/reviews/bluehost" className={link}>Bluehost</Link>,{" "}
        <Link href="/reviews/hosting-com" className={link}>Hosting.com</Link> and{" "}
        <Link href="/reviews/ultahost" className={link}>UltaHost</Link>, or compare them head to head in{" "}
        <Link href="/hostinger-vs-hosting-com" className={link}>Hostinger vs Hosting.com</Link>{" "}
        and{" "}
        <Link href="/bluehost-vs-hosting-com" className={link}>Bluehost vs Hosting.com</Link>.
      </p>

      {/* Mid-content slot */}
      {midSlot && <div className="mb-8">{midSlot}</div>}

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Does Web Hosting Cost?
      </h2>
      <p className="mb-4">
        Entry-level shared hosting is commonly advertised at roughly <strong>$2-$4 a month</strong>,
        but regular (renewal) rates of <strong>$8-$15 a month</strong> are typical. Managed WordPress
        and cloud plans cost more, and VPS plans start higher still. What actually drives the total:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Term length</strong> - the lowest advertised prices usually require a 24- to 48-month upfront payment.</li>
        <li><strong>Renewal rate</strong> - the price you pay from the second term onward, often several times the intro price.</li>
        <li><strong>Plan tier</strong> - more sites, storage, backups and performance features cost more.</li>
        <li><strong>Add-ons</strong> - domain privacy, backups, security and email upsells add to the bill.</li>
      </ul>
      <p className="mb-8">
        To compare fairly, look at the <strong>total cost over three to four years, including
        renewals</strong> - not just the headline monthly price. Our{" "}
        <Link href="/" className={link}>
          comparison of top providers
        </Link>{" "}
        is built to make that easier, and our{" "}
        <Link href="/articles/how-much-does-web-hosting-cost" className={link}>
          web hosting cost guide
        </Link>{" "}
        breaks prices down by hosting type.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Which Type of Hosting Do You Need?
      </h2>
      <p className="mb-4">
        For most new websites, <strong>shared or managed WordPress hosting</strong> is enough. A
        typical blog, portfolio or small business site uses a fraction of a shared plan&apos;s
        resources, and you can upgrade later.
      </p>
      <p className="mb-8">
        Consider <strong>cloud or VPS hosting</strong> if your site regularly gets tens of thousands
        of visits a month, runs a busy online store, or needs custom software. Most providers on our
        list let you move up a tier without changing hosts. We break this down in{" "}
        <Link href="/articles/shared-vs-vps-vs-cloud-hosting" className={link}>
          shared vs VPS vs cloud hosting
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Getting the Most From Your Plan
      </h2>
      <p className="mb-4">
        A hosting plan works best when you treat it as one part of looking after your site.
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Note your renewal date and price</strong> - set a reminder a month before so you can compare or switch.</li>
        <li><strong>Keep your own backups</strong> - even with host backups, download a copy regularly.</li>
        <li><strong>Uncheck add-ons you don&apos;t need</strong> at checkout - many are pre-selected.</li>
        <li><strong>Use the money-back window</strong> - test speed and support in the first 30 days while a refund is still possible.</li>
      </ul>
      <p className="mb-8">
        In short: choose a provider with transparent renewal pricing, keep your own backups, and
        don&apos;t pay for extras you won&apos;t use.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Frequently Asked Questions
      </h2>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">What is the best web hosting provider?</h3>
      <p className="mb-4">
        There is no single best host for every website. The right choice depends on your budget, the
        type of site you&apos;re building, where your visitors are and how much support you need. Our
        rankings weigh price (including renewals), performance, features, support and reputation - see
        the comparison at the top of this page.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Why is the renewal price so much higher?</h3>
      <p className="mb-4">
        Hosts use deep introductory discounts to win new customers, then renew at their regular rate.
        See{" "}
        <Link href="/articles/web-hosting-renewal-prices-explained" className={link}>
          web hosting renewal prices explained
        </Link>{" "}
        for how to keep costs down.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Can I move my website to another host?</h3>
      <p className="mb-4">
        Yes. You can migrate your files and database yourself, and many providers - including several
        on our list - offer free migration help. Read{" "}
        <Link href="/articles/how-to-migrate-your-website-to-a-new-host" className={link}>
          how to migrate your website
        </Link>{" "}
        for a step-by-step guide.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Do I need a separate domain name?</h3>
      <p className="mb-4">
        You need a domain, but you don&apos;t have to buy it separately - many hosts include one free
        for the first year. Read{" "}
        <Link href="/articles/domain-registration-vs-web-hosting" className={link}>
          domain registration vs web hosting
        </Link>{" "}
        for the details.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Is cheap web hosting good enough?</h3>
      <p className="mb-8">
        For many small sites, yes - entry plans from reputable hosts are fast enough for a blog or
        business site. The key is choosing a trustworthy provider and knowing the renewal price, which
        is exactly what our{" "}
        <Link href="/reviews" className={link}>
          independent reviews
        </Link>{" "}
        and{" "}
        <Link href="/articles" className={link}>
          web hosting guides
        </Link>{" "}
        are for.
      </p>

      <hr className="mb-8 border-gray-200" />

      <p className="text-[13.5px] leading-[1.6] text-gray-500">
        <strong>General information, not professional advice.</strong> This content is for
        educational purposes only. Web hosting prices, features, resource limits and renewal terms
        vary by provider, plan, term length and region, and change over time. The provider&apos;s
        terms of service - not our summary - determine what you get. Always confirm current pricing
        and renewal rates with the provider before you buy.
      </p>
    </div>
  );
}

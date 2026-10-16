import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Affiliate Disclosure",
  description:
    "FTC disclosure, affiliate relationship details, coverage disclaimer, and revenue model transparency for thetopwebhosting.com.",
  alternates: {
    canonical: "https://www.thetopwebhosting.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-[#191919]">Disclaimer</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-[#191919]">
          FTC Disclosure
        </h2>
        <p>
          In accordance with the Federal Trade Commission guidelines, The Top Web Hosting
          discloses that this website contains affiliate links. When you click
          on a link and make a purchase or sign up for a service, we may receive
          a commission at no additional cost to you.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Affiliate Relationships
        </h2>
        <p>
          The Top Web Hosting participates in affiliate programs with various web hosting
          companies. This means we may earn
          referral fees when visitors click through our links and complete
          qualifying actions. These relationships help support the operation of
          this website.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Editorial Independence
        </h2>
        <p>
          Our affiliate relationships do not influence our rankings or reviews.
          Providers are evaluated based on objective criteria including pricing
          and renewal transparency, performance, features, support, and customer feedback. We are committed to
          providing honest, independent assessments regardless of compensation.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Pricing &amp; Features Disclaimer
        </h2>
        <p>
          The content on The Top Web Hosting is for general information purposes only. What you get
          from a hosting plan depends on the provider&apos;s current terms of service - including
          resource limits, fair-use policies, backup schedules and refund rules. Intro prices usually
          require a multi-year term and renew at a higher regular rate, and prices vary by region and
          currency. Always confirm current pricing and renewal terms with the provider before you buy.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Revenue Model
        </h2>
        <p>
          The Top Web Hosting generates revenue primarily through affiliate commissions.
          When you use our links to visit a provider&apos;s website and take a
          qualifying action (such as scheduling a consultation or making a
          purchase), we may receive compensation. This model allows us to
          provide free, accessible comparisons to our visitors.
        </p>
      </div>
    </div>
  );
}

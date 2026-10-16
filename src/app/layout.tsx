import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAnalytics } from "@/components/google-analytics";
import { hreflangLanguages } from "@/lib/regions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.thetopwebhosting.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Top Web Hosting - Compare the Best Web Hosting Providers",
    template: "%s | The Top Web Hosting",
  },
  description:
    "Compare the best web hosting providers of 2026 - plans ranked by real price after renewal, speed, features, backups and customer support.",
  keywords: [
    "web hosting",
    "best web hosting providers",
    "web hosting comparison",
    "web hosting reviews",
    "web hosting cost",
    "cheap web hosting",
    "WordPress hosting",
    "Hostinger vs Bluehost",
  ],
  openGraph: {
    title: "The Top Web Hosting - Compare the Best Web Hosting Providers",
    description:
      "Independent, side-by-side comparisons of top web hosting providers - ranked on price, performance and support.",
    type: "website",
    siteName: "The Top Web Hosting",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Top Web Hosting - Compare the Best Web Hosting Providers",
    description:
      "Independent, side-by-side comparisons of top web hosting providers.",
  },
  other: {
    "geo.region": "US",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
    "content-language": "en-US",
  },
  alternates: {
    canonical: SITE_URL,
    languages: hreflangLanguages(SITE_URL, "/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Top Web Hosting",
              url: SITE_URL,
              logo: `${SITE_URL}/logo-mark.png`,
              areaServed: { "@type": "Country", name: "United States" },
              knowsAbout: ["Web hosting", "Web hosting plans", "WordPress hosting", "Domain names"],
              description:
                "Independent guides and provider comparisons for web hosting - in-depth reviews, pricing research, and side-by-side comparisons.",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Top Web Hosting",
              url: SITE_URL,
              description:
                "Compare trusted web hosting providers side by side.",
            }),
          }}
        />
        <MetaPixel />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

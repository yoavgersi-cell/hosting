# The Top Web Hosting

Source for thetopwebhosting.com: an independent comparison site for web hosting providers.

Built from the same Next.js template as tophomewarranty.com. All site content (providers, rankings, reviews, comparisons, articles, FAQs) lives in `src/lib/seeds/web-hosting.ts`.

Providers (ranked order): Hostinger, Bluehost, Hosting.com, Domain.com, BigRock, Network Solutions, UltaHost.

## Before launch

- Replace each provider's `affiliateUrl` (currently the provider homepage) with your tracking link.
- Replace the placeholder text logos in `public/logos/` with each provider's official brand assets.
- Confirm intro and renewal prices on each provider's own pricing page (all figures are third-party snapshots from October 2026; see the seed file header).
- Refresh Trustpilot ratings and add verbatim `trustpilotReviews` from the live profiles. Hosting.com and Domain.com ratings are blank because no reliable figure was found.
- Set `ADMIN_PASSWORD` in Vercel (the code fallback is a placeholder).

## Development

```bash
npm install
npm run dev
```

## Environment variables (Vercel)

- `ADMIN_PASSWORD`: password for `/admin`
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID (optional)

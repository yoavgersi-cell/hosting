import { type SiteConfig } from "./config";
import { webHostingConfig } from "./seeds/web-hosting";

// ─────────────────────────────────────────────────────────────────────────────
// Single-vertical config store.
//
// The original TreatmentsHub platform loaded per-vertical config from Vercel
// Blob (a CMS). This site is a single, standalone web hosting vertical whose
// content is code-authoritative (src/lib/seeds/web-hosting.ts), so config-store
// collapses to a thin accessor: every page calls getConfig() and gets the web hosting
// config. The `vertical` argument is accepted (so existing call sites keep
// compiling) but ignored - there is only one vertical here.
// ─────────────────────────────────────────────────────────────────────────────

export async function getConfig(_vertical?: string): Promise<SiteConfig> {
  return webHostingConfig;
}

// No-op: content is code-authoritative on this site (no blob CMS). Kept so the
// admin/api routes that import it continue to type-check.
export async function saveConfig(_config: SiteConfig, _vertical?: string): Promise<void> {
  return;
}

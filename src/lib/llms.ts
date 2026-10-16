import { getConfig } from "@/lib/config-store";
import { PROVIDER_DATA_CHECKED } from "@/lib/config";
import { FACTS, FEATURE_LABELS } from "@/lib/seeds/web-hosting";

// llms.txt (https://llmstxt.org) - a plain-Markdown map of the site for AI
// answer engines (GEO). Built from the same seed as the pages, so facts here
// never drift from what the site says. `full` adds every review verdict,
// comparison verdict and article body as plain text (llms-full.txt).

const ORIGIN = "https://www.thetopwebhosting.com";

const stripHtml = (html: string) =>
  html
    .replace(/<li>/g, "\n- ")
    .replace(/<\/(p|h\d|ul|ol)>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export async function buildLlmsTxt(full: boolean): Promise<string> {
  const cfg = await getConfig();
  const byId = new Map(cfg.providers.map((p) => [p.id, p]));
  const out: string[] = [];

  out.push("# The Top Web Hosting");
  out.push("");
  out.push(
    "> Independent comparison of web hosting providers: plans, approximate intro and renewal prices, storage, control panels, backups, money-back guarantees and ownership history. Prices are approximate starting points that depend on term length and region; the provider's terms always control.",
  );
  out.push("");
  out.push(
    `Provider data last checked: ${PROVIDER_DATA_CHECKED}. Some providers may compensate us; this never changes the facts reported. Not professional advice.`,
  );
  out.push("");

  out.push("## Rankings");
  out.push("");
  cfg.ranking.providerOrder.forEach((id, i) => {
    const p = byId.get(id);
    const pos = cfg.ranking.positions[i];
    if (!p || !pos) return;
    out.push(`${i + 1}. [${p.name}](${ORIGIN}/reviews/${p.id}) - ${pos.score}/10 (${pos.label}): ${p.tagline}`);
  });
  out.push("");

  out.push("## Key facts by provider");
  out.push("");
  for (const id of cfg.ranking.providerOrder) {
    const p = byId.get(id);
    const f = FACTS[id];
    if (!p || !f) continue;
    out.push(`### ${p.name}`);
    for (const [key, label] of FEATURE_LABELS) out.push(`- ${label}: ${f[key]}`);
    if (p.trustpilotRating) out.push(`- Trustpilot: ${p.trustpilotRating}/5 (${p.trustpilotReviewCount} reviews, third-party snapshot)`);
    out.push(`- Full review: ${ORIGIN}/reviews/${p.id}`);
    out.push("");
  }

  out.push("## Reviews");
  out.push("");
  for (const r of cfg.reviews) {
    const p = byId.get(r.providerId);
    out.push(`- [${p?.name ?? r.slug} review](${ORIGIN}/reviews/${r.slug}): ${r.shortSummary}`);
  }
  out.push("");

  out.push("## Head-to-head comparisons");
  out.push("");
  for (const b of cfg.battles) {
    out.push(`- [${b.matchupLabel ?? b.title}](${ORIGIN}/${b.slug}): ${b.description}`);
  }
  out.push("");

  out.push("## Guides");
  out.push("");
  for (const a of cfg.articles) out.push(`- [${a.title}](${ORIGIN}/articles/${a.slug}): ${a.description}`);
  out.push("");

  out.push("## FAQs");
  out.push("");
  for (const q of cfg.faqs) {
    out.push(`### ${q.question}`);
    out.push(q.answer);
    out.push("");
  }

  out.push("## About");
  out.push("");
  out.push(`- [How we rank](${ORIGIN}/how-we-rank)`);
  out.push(`- [Editorial policy](${ORIGIN}/editorial-policy)`);
  out.push(`- [About](${ORIGIN}/about)`);
  out.push(`- [Disclaimer](${ORIGIN}/disclaimer)`);
  out.push("");

  if (full) {
    out.push("---");
    out.push("");
    out.push("# Full content");
    out.push("");
    for (const r of cfg.reviews) {
      const p = byId.get(r.providerId);
      out.push(`## ${p?.name ?? r.slug} review`);
      out.push(`Source: ${ORIGIN}/reviews/${r.slug}`);
      out.push("");
      out.push(r.reviewIntro);
      out.push("");
      out.push("Pricing: " + r.pricingSummary);
      out.push("");
      out.push("Pros:\n" + r.pros.map((x) => `- ${x}`).join("\n"));
      out.push("");
      out.push("Cons:\n" + r.cons.map((x) => `- ${x}`).join("\n"));
      out.push("");
      out.push("Verdict: " + r.finalVerdict);
      out.push("");
    }
    for (const b of cfg.battles) {
      out.push(`## ${b.matchupLabel ?? b.title}`);
      out.push(`Source: ${ORIGIN}/${b.slug}`);
      out.push("");
      out.push(b.intro);
      out.push("");
      out.push("Verdict: " + b.verdict);
      for (const c of b.categories) {
        const w = c.winner === "tie" ? "Tie" : byId.get(c.winner === "provider1" ? b.provider1Id : b.provider2Id)?.name;
        out.push(`- ${c.name} (${w}): ${c.explanation}`);
      }
      out.push("");
    }
    for (const a of cfg.articles) {
      out.push(`## ${a.title}`);
      out.push(`Source: ${ORIGIN}/articles/${a.slug}`);
      out.push("");
      if (a.keyTakeaways?.length) out.push("Key takeaways:\n" + a.keyTakeaways.map((x) => `- ${x}`).join("\n") + "\n");
      for (const s of a.sections) {
        out.push(`### ${s.heading}`);
        out.push(stripHtml(s.body));
        out.push("");
      }
    }
  }

  return out.join("\n");
}

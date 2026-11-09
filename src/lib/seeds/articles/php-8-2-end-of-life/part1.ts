import type { ArticleSection } from "@/lib/config";

// "PHP 8.2 End of Life" - part 1: dates, meaning, why now, who is affected.
// Researched November 2026; sources listed in the final section.

export const part1: ArticleSection[] = [
  {
    heading: "When does PHP 8.2 reach end of life?",
    body: `<div class="qa"><strong>Short answer:</strong> PHP 8.2 stops receiving security fixes on <strong>31 December 2026</strong>. After that date the PHP project will not patch new vulnerabilities in 8.2, even serious ones. If your website runs on PHP 8.2 - and a large share of WordPress sites still do - you should move to PHP 8.3 or 8.4 before the end of the year, test the change on a copy of your site first, and check what your host plans to do with 8.2 servers.</div>
<p>PHP is the programming language WordPress and most other content management systems run on. Every PHP version gets a fixed support window, and when it closes, the version is considered end of life. That has happened before - PHP 8.1 reached end of life on 31 December 2025 - and it will keep happening every December. But this particular deadline deserves more attention than usual, for three reasons covered below: a lot of sites are still on 8.2, PHP shipped emergency security fixes for critical flaws in October 2026, and at least one major hosting platform is removing 8.2 two weeks before the official date.</p>
<h3>PHP support dates at a glance</h3>
<table>
<thead><tr><th>Version</th><th>Released</th><th>Active support ended / ends</th><th>Security support ended / ends</th><th>Status in November 2026</th></tr></thead>
<tbody>
<tr><td>PHP 8.1</td><td>25 Nov 2021</td><td>25 Nov 2023</td><td>31 Dec 2025</td><td>End of life</td></tr>
<tr><td><strong>PHP 8.2</strong></td><td>8 Dec 2022</td><td>31 Dec 2024</td><td><strong>31 Dec 2026</strong></td><td>Security fixes only - <strong>ends in weeks</strong></td></tr>
<tr><td>PHP 8.3</td><td>23 Nov 2023</td><td>31 Dec 2025</td><td>31 Dec 2027</td><td>Security fixes only</td></tr>
<tr><td>PHP 8.4</td><td>21 Nov 2024</td><td>31 Dec 2026</td><td>31 Dec 2028</td><td>Actively supported</td></tr>
<tr><td>PHP 8.5</td><td>20 Nov 2025</td><td>31 Dec 2027</td><td>31 Dec 2029</td><td>Actively supported</td></tr>
<tr><td>PHP 8.6</td><td>Scheduled for 19 Nov 2026</td><td>-</td><td>-</td><td>Release candidate stage</td></tr>
</tbody>
</table>
<p><em>Source: php.net supported versions; PHP 8.6 schedule from the PHP wiki. "Active support" means bug and security fixes; "security support" means security fixes only.</em></p>`,
  },
  {
    heading: "What does end of life mean for a PHP version?",
    body: `<p>Each PHP release now gets four years of support in total. For the first two years it is "actively supported", which means the PHP team fixes reported bugs and security problems and ships regular point releases. For the next two years it receives security fixes only. When those four years are up, the branch reaches end of life and php.net stops supporting it. The project's own guidance is blunt: people still running an end-of-life version should upgrade, because they may be exposed to security vulnerabilities that will never be patched.</p>
<p>This four-year schedule is fairly new. In 2024 the PHP project adopted an update to its release cycle that extended security-only support from one year to two, and lined up end-of-support dates with 31 December. The change applied to versions that were still supported at the time, which is why PHP 8.1 ran until 31 December 2025 and PHP 8.2 runs until 31 December 2026.</p>
<h3>What end of life does not mean</h3>
<ul>
<li><strong>Your site will not stop working on 1 January.</strong> PHP 8.2 does not switch itself off. Code that runs today will keep running.</li>
<li><strong>Your host may keep 8.2 available for a while</strong> - or may remove it, sometimes before the official date. Policies differ, and we cover the main ones below.</li>
<li><strong>Some Linux distributions backport fixes</strong> to older PHP versions for the lifetime of their own long-term releases. That helps people who manage their own servers, but it is not something most website owners on shared hosting can rely on or verify.</li>
</ul>
<p>The real change is about risk. From 1 January 2027, any newly discovered vulnerability in PHP 8.2 stays open unless you pay a third party for extended support or upgrade.</p>`,
  },
  {
    heading: "Why does the PHP 8.2 deadline matter more than usual?",
    body: `<p>Plenty of PHP versions have reached end of life without much fuss. This one has three things working against complacency.</p>
<h3>1. Critical security fixes shipped in October 2026</h3>
<p>On 21 October 2026 the PHP project released emergency updates - <strong>8.2.35, 8.3.36, 8.4.27 and 8.5.12</strong> - to fix critical remote code execution vulnerabilities, after warning administrators a day earlier, according to BleepingComputer's coverage and the PHP release notes. Reports of a further, unpatched flaw followed within days. The detail that matters here is simple: PHP 8.2 received those fixes because it was still in its security window. A flaw of the same severity found in January 2027 would not be fixed for 8.2 at all.</p>
<h3>2. A lot of sites are still on 8.2</h3>
<p>WordPress's own statistics published in January 2026 showed PHP 8.2 as the single most common version among WordPress sites, at about 27%. Later figures suggest PHP 8.3 has since overtaken it, but 8.2 still accounts for roughly a quarter of WordPress installations. That is a very large number of websites facing the same deadline at the same time.</p>
<h3>3. Some hosts are moving earlier than 31 December</h3>
<p>WP Cloud, the Automattic hosting platform that sits behind Pressable and other WordPress hosts, has announced it will remove PHP 8.2 on <strong>15 December 2026</strong>, with sites still on 8.2 moved to the platform default and no rollback. Last year Pressable removed PHP 8.1 on 9 December 2025 and upgraded remaining sites automatically. If your host follows a similar pattern, your real deadline may be earlier than the official one.</p>
<p>On top of that, PHP 8.6 is scheduled for release on 19 November 2026. A new major release is often the point at which hosts review which old versions they keep.</p>`,
  },
  {
    heading: "How many websites still run PHP 8.2?",
    body: `<p>Exact numbers depend on who is counting, but every source points the same way: PHP 8.2 is still one of the most widely used versions.</p>
<h3>WordPress sites by PHP version</h3>
<table>
<thead><tr><th>PHP version</th><th>Share of WordPress sites (Jan 2026)</th><th>Share of WordPress sites (late Sep 2026, as reported)</th></tr></thead>
<tbody>
<tr><td>PHP 8.3</td><td>16.74%</td><td>25.75%</td></tr>
<tr><td><strong>PHP 8.2</strong></td><td><strong>27.29%</strong></td><td><strong>24.54%</strong></td></tr>
<tr><td>PHP 8.1</td><td>15.39%</td><td>Not reported</td></tr>
<tr><td>PHP 7.4</td><td>Not reported in this summary</td><td>16.7%</td></tr>
<tr><td>PHP 8.4</td><td>4.90%</td><td>Not reported</td></tr>
<tr><td>PHP 8.5</td><td>0.23%</td><td>Not reported</td></tr>
</tbody>
</table>
<p><em>January 2026 figures from the WordPress core team's announcement on dropping PHP 7.2 and 7.3; September 2026 figures from WordPress.org statistics as cited by a third party. The live numbers are published at wordpress.org/about/stats.</em></p>
<h3>Across the wider web</h3>
<ul>
<li><strong>W3Techs</strong> reported in mid-2026 that about 31% of websites running PHP 8 were on PHP 8.2. Because W3Techs also found PHP 8 on about 43% of all websites, that works out to very roughly <strong>one in eight websites</strong> - our own calculation from its published figures.</li>
<li><strong>PHP packages:</strong> Brent Roose's July 2026 analysis of Packagist data found PHP 8.4 the most used version among developers installing packages (32%), with 8.3 at 24% and 8.5 at 16%. Developers tend to move faster than the general website population, which is why their figures look newer.</li>
<li><strong>Older versions are still common too.</strong> About one in six WordPress sites was reported on PHP 7.4 in September 2026 - a version that has had no official security support since November 2022.</li>
</ul>
<p>The takeaway: if you have never checked your PHP version, there is a meaningful chance your site is on 8.2 or older.</p>`,
  },
];

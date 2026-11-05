import type { ArticleSection } from "@/lib/config";

// "PHP 8.2 End of Life" - part 2: checking your version, choosing a target
// version, performance, host policies, staying on 8.2.

export const part2: ArticleSection[] = [
  {
    heading: "How do you check which PHP version your website uses?",
    body: `<p>It takes about a minute. Use whichever of these matches your setup.</p>
<h3>In WordPress</h3>
<p>Go to <strong>Tools &rarr; Site Health</strong>, open the <strong>Info</strong> tab and expand the <strong>Server</strong> section. The PHP version shown there is the one your site is actually running, which is the number that matters. Site Health will also flag an outdated PHP version on its Status tab.</p>
<h3>In your hosting control panel</h3>
<table>
<thead><tr><th>Control panel or host</th><th>Where to look</th></tr></thead>
<tbody>
<tr><td>cPanel (many hosts, including Hosting.com, UltaHost and BigRock Linux plans)</td><td>Software &rarr; <strong>MultiPHP Manager</strong> shows the version for each domain</td></tr>
<tr><td>Bluehost</td><td>Your website's <strong>Overview</strong> tab shows the current version; change it under <strong>Settings &rarr; PHP Version</strong>. cPanel's MultiPHP Manager is also available.</td></tr>
<tr><td>Hostinger (hPanel)</td><td>Website dashboard &rarr; <strong>PHP Configuration</strong>. The setting applies to every site on the plan except sites built with Hostinger's AI builder.</td></tr>
<tr><td>Managed WordPress hosts</td><td>Usually a PHP version setting in the site's dashboard; check your host's documentation</td></tr>
</tbody>
</table>
<h3>If you manage several sites</h3>
<p>Check each one. Control panels let different domains run different PHP versions, and it is common to find one forgotten site still on an old version.</p>`,
  },
  {
    heading: "Which PHP version should you upgrade to: 8.3, 8.4 or 8.5?",
    body: `<div class="qa"><strong>Short answer:</strong> For most WordPress sites, <strong>PHP 8.3</strong> is the safest move today - WordPress lists it as fully compatible and recommends 8.3 or newer - but it only buys you one year, until 31 December 2027. <strong>PHP 8.4</strong> gives you security support until 31 December 2028 and is the better choice if your theme and plugins work with it. Treat <strong>PHP 8.5</strong> as an option for sites you have tested carefully, since WordPress still labels its 8.5 support as beta.</div>
<table>
<thead><tr><th>Version</th><th>Security support until</th><th>WordPress compatibility status</th><th>Good fit for</th></tr></thead>
<tbody>
<tr><td>PHP 8.3</td><td>31 Dec 2027</td><td>Fully compatible</td><td>Sites with older plugins or themes that may not be ready for 8.4; a cautious first step</td></tr>
<tr><td>PHP 8.4</td><td>31 Dec 2028</td><td>Beta compatibility (since WordPress 6.7)</td><td>Most actively maintained sites; avoids another upgrade next year</td></tr>
<tr><td>PHP 8.5</td><td>31 Dec 2029</td><td>Beta compatibility (since WordPress 6.9)</td><td>Well-maintained sites on a short list of current plugins, after testing</td></tr>
</tbody>
</table>
<p><em>WordPress compatibility status from the WordPress core handbook's PHP compatibility page. "Beta" means WordPress core is believed to work, but the label stays until enough sites run that version to give confidence.</em></p>
<h3>How we would decide</h3>
<ul>
<li>If your plugins are all actively maintained and recently updated, <strong>go to 8.4</strong> and you will not need to think about PHP again until 2028.</li>
<li>If you rely on an older theme, a page builder you have not updated in a while, or a niche plugin, <strong>go to 8.3 first</strong>, then plan a move to 8.4 during 2027.</li>
<li>If you run WooCommerce, note that WooCommerce recommends PHP 8.3 or newer, and plans to require at least PHP 8.1 from WooCommerce 11.6, expected in February 2027.</li>
<li>Whatever you choose, <strong>test it on a staging copy first</strong> - the upgrade steps are below.</li>
</ul>`,
  },
  {
    heading: "Will upgrading from PHP 8.2 make your website faster?",
    body: `<p>Probably not by much, and it is worth being honest about that, because many guides still promise big speed gains.</p>
<p>Application monitoring company Tideways benchmarked PHP 7.4, 8.3, 8.4 and 8.5 on WordPress, Laravel and Symfony demo applications in November 2025. It found performance among the PHP 8 versions was essentially flat, with no significant change for WordPress between 8.4 and 8.5. The meaningful gap was between PHP 7.4 and the 8.x versions, with 7.4 about 5% slower. An earlier round of its benchmarks reached a similar conclusion for 8.2, 8.3 and 8.4.</p>
<table>
<thead><tr><th>Upgrade path</th><th>What to expect for a typical WordPress site</th></tr></thead>
<tbody>
<tr><td>PHP 7.4 &rarr; 8.3 or 8.4</td><td>A modest speed improvement (Tideways measured 7.4 as about 5% slower in its tests) plus a large security improvement</td></tr>
<tr><td>PHP 8.2 &rarr; 8.3, 8.4 or 8.5</td><td>Little measurable speed difference; the reason to upgrade is continued security support</td></tr>
</tbody>
</table>
<p>Synthetic benchmarks can show larger gaps - a Phoronix test suite run in November 2025 measured the PHP 8.5 development build completing a benchmark in about 37 seconds versus roughly 41-42 seconds for 8.2 to 8.4 - but real websites spend much of their time waiting on databases, caching and network calls, which a new PHP version does not change. If your site is slow, caching, image optimization and a better hosting plan will do far more than a PHP version bump. Our <a href="/articles/best-wordpress-hosting">WordPress hosting guide</a> covers what actually moves the needle.</p>`,
  },
  {
    heading: "What are hosting companies doing about PHP 8.2?",
    body: `<p>Host policies vary a lot, and not every host has said publicly what it will do. This is what we could confirm from hosts' own documentation and announcements as of early November 2026.</p>
<table>
<thead><tr><th>Host or platform</th><th>Current PHP policy (as published)</th><th>What it means for 8.2 sites</th></tr></thead>
<tbody>
<tr><td>WP Cloud (Automattic platform behind Pressable and others)</td><td>Removing PHP 8.2 on 15 Dec 2026, 12:00 UTC; remaining sites moved to the platform default with no rollback</td><td>Act before 15 December</td></tr>
<tr><td>Pressable</td><td>Says PHP 8.2 will be removed in December 2026; removed 8.1 on 9 Dec 2025 and auto-upgraded remaining sites</td><td>Expect an automatic upgrade if you do nothing</td></tr>
<tr><td>Hostinger</td><td>hPanel offers PHP 8.2 to 8.5; sites already on older versions keep them</td><td>8.2 still selectable today; no 2026 removal date published that we found</td></tr>
<tr><td>SiteGround</td><td>"Managed PHP" can switch sites automatically; versions below 8.2 described as unsupported and removed from servers; 8.2 became the default in 2024</td><td>Watch for notices; no published 2026 plan for 8.2 found</td></tr>
<tr><td>Bluehost</td><td>Minimum PHP on shared servers is 8.1</td><td>No published 8.2 removal date found</td></tr>
<tr><td>Kinsta</td><td>Has auto-upgraded sites at end of life before; customers can now turn auto-upgrade off, and Kinsta runs its own long-term support for some older versions</td><td>Check your dashboard setting</td></tr>
<tr><td>Pagely</td><td>Moved its default from 8.2 to 8.3 in February 2026; offers paid Zend extended support</td><td>Paid option exists if you cannot upgrade</td></tr>
<tr><td>cPanel-based hosts</td><td>cPanel's EasyApache profiles include only PHP versions php.net still supports; end-of-life packages stay on mirrors without updates</td><td>Depends on your host; many keep old versions selectable but unpatched</td></tr>
</tbody>
</table>
<p><em>We found no published 2026 PHP 8.2 plans from WP Engine, GoDaddy or Hosting.com at the time of writing. That does not mean they have none - check your host's notices and email.</em></p>
<h3>Two things to watch for</h3>
<ul>
<li><strong>Automatic upgrades.</strong> Some hosts move sites to a newer PHP version for you. That is convenient when everything works, and painful when an old plugin breaks without warning. If your host offers a date, upgrade on your own terms before it.</li>
<li><strong>"Still available" is not the same as "still patched".</strong> A host can keep PHP 8.2 in its version menu long after 31 December without any new security fixes. A selectable version is not a safe one.</li>
</ul>`,
  },
  {
    heading: "Can you keep using PHP 8.2 after December 2026?",
    body: `<p>Technically yes. Sensibly, only for a short, planned period - and preferably with paid extended support.</p>
<h3>Your options if you cannot upgrade in time</h3>
<table>
<thead><tr><th>Option</th><th>What it is</th><th>Published cost</th><th>Who it suits</th></tr></thead>
<tbody>
<tr><td>Upgrade to PHP 8.3 or 8.4</td><td>Move to a supported version</td><td>Free</td><td>Almost everyone</td></tr>
<tr><td>Zend PHP LTS (Perforce)</td><td>Commercial security patches for PHP versions after community support ends, typically for at least two to three more years</td><td>Price on request; Pagely charges $25/month per site for its Zend add-on</td><td>Businesses with custom applications that need time to modernize</td></tr>
<tr><td>TuxCare Extended Lifecycle Support for PHP</td><td>Backported security patches for end-of-life PHP versions, supported as a cPanel add-on</td><td>No public list price; InMotion resells it at $12/month per server</td><td>Server owners and hosts; check that your version is covered</td></tr>
<tr><td>Do nothing</td><td>Keep running unpatched PHP 8.2</td><td>Free now, potentially expensive later</td><td>Nobody, beyond a few weeks of slippage</td></tr>
</tbody>
</table>
<p>Extended support makes sense for a business running custom software that cannot be updated quickly. For a typical WordPress site, the effort of upgrading is usually an afternoon of testing, which is far cheaper than a year of paid patches - or cleaning up a hacked site.</p>`,
  },
];

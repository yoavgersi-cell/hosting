import type { ArticleSection } from "@/lib/config";

// "PHP 8.2 End of Life" - part 3: risks, upgrade plan, WordPress and
// WooCommerce requirements, troubleshooting, agencies, checklist, FAQs,
// method and sources.

export const part3: ArticleSection[] = [
  {
    heading: "What can break when you upgrade PHP?",
    body: `<p>For most up-to-date WordPress sites, moving from PHP 8.2 to 8.3 or 8.4 is uneventful. Problems almost always come from code that has not been maintained - an abandoned plugin, an old theme, or custom code written years ago.</p>
<h3>The usual suspects</h3>
<ul>
<li><strong>Abandoned plugins and themes.</strong> If a plugin has not been updated in a year or two, it is the most likely thing to break. Check the "last updated" date in the WordPress plugin directory.</li>
<li><strong>Old page builders and premium themes</strong> that you stopped updating because a license expired. These often bundle large amounts of code.</li>
<li><strong>Custom code</strong> in a child theme or a site-specific plugin, especially if a developer wrote it several PHP versions ago.</li>
<li><strong>Removed extensions.</strong> PHP 8.4 moved a few rarely used extensions out of the core distribution - including IMAP, which some plugins use to read email - so a site that depends on one may need the host to install it separately.</li>
</ul>
<h3>Warnings versus errors</h3>
<p>Not every message is a problem. Newer PHP versions mark some older coding patterns as <strong>deprecated</strong> - for example, PHP 8.4 deprecated implicitly nullable parameter types. Deprecation notices are warnings about the future, not failures; they appear in logs but do not stop your site. What you are looking for are <strong>fatal errors</strong>: a blank page, a "critical error" message from WordPress, or a feature that stops working.</p>`,
  },
  {
    heading: "How do you upgrade PHP safely, step by step?",
    body: `<p>This is the process we would follow for a typical WordPress site. Allow an hour or two, most of it testing.</p>
<ol>
<li><strong>Back up the site.</strong> Take a full backup of files and database, and make sure you can restore it. Your host's backup tool plus a downloaded copy is ideal.</li>
<li><strong>Update everything first.</strong> Update WordPress core, every plugin and your theme on PHP 8.2. Many compatibility fixes arrive in routine updates.</li>
<li><strong>Remove what you do not use.</strong> Deactivate and delete unused plugins and themes. Less code means fewer things that can break.</li>
<li><strong>Create a staging copy.</strong> Most hosts offer one-click staging. If yours does not, a staging plugin or a copy on a subdomain works.</li>
<li><strong>Switch staging to the new PHP version</strong> (8.3 or 8.4) in your control panel.</li>
<li><strong>Test the important things.</strong> Load the home page and key pages, submit your contact form, log in and out, check the WordPress dashboard, and - for stores - add a product to the cart and go through checkout with a test payment.</li>
<li><strong>Check the error log.</strong> Look for fatal errors in your host's error log or by temporarily enabling WordPress debug logging on the staging site.</li>
<li><strong>Fix or replace problem plugins.</strong> Update them, contact the developer, or swap them for a maintained alternative.</li>
<li><strong>Switch the live site</strong> at a quiet time, then repeat the key tests straight away.</li>
<li><strong>Keep the rollback ready.</strong> Note how to switch back to 8.2 in your control panel in case something you did not test breaks - while that option still exists.</li>
</ol>
<p>Compatibility scanners, such as the PHP Compatibility Checker plugin, can flag known issues in plugins and themes before you switch, but they miss things. Treat them as a first pass, not a substitute for testing.</p>`,
  },
  {
    heading: "What PHP version do WordPress and WooCommerce require?",
    body: `<table>
<thead><tr><th>Software</th><th>Recommended PHP</th><th>Minimum PHP</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>WordPress (7.x)</td><td><strong>8.3 or newer</strong></td><td>7.4 (raised from 7.2.24 in WordPress 7.0, released 20 May 2026)</td><td>WordPress still runs on 7.4 but warns that end-of-life versions may expose sites to security vulnerabilities</td></tr>
<tr><td>WooCommerce</td><td><strong>8.3 or newer</strong></td><td>7.4 today; <strong>8.1 from WooCommerce 11.6</strong> (planned for February 2027)</td><td>Stores on PHP 7.4 or 8.0 can keep updating until version 11.5, with an admin notice from 11.3</td></tr>
</tbody>
</table>
<p><em>Sources: wordpress.org requirements; WordPress core team announcement, 9 January 2026; WooCommerce developer blog, 29 September 2026.</em></p>
<p>Two points worth noting. First, WordPress's minimum is a floor for compatibility, not a security recommendation - PHP 7.4 has had no official security support since November 2022. Second, WordPress raises its minimum only when an old version falls to a small share of sites (it dropped 7.2 and 7.3 once they fell below 4%), so the minimum will always lag well behind what is safe.</p>`,
  },
  {
    heading: "What should you do if your site breaks after a PHP upgrade?",
    body: `<ol>
<li><strong>Switch back to the previous PHP version</strong> in your control panel to restore the site quickly - if your host still offers it.</li>
<li><strong>Check your email.</strong> WordPress's fatal error protection often emails the site administrator a link to "recovery mode", which lets you log in and deactivate the plugin causing the problem.</li>
<li><strong>Read the error log.</strong> The error message usually names the file - and therefore the plugin or theme - that failed.</li>
<li><strong>Update or replace that plugin or theme.</strong> If no fixed version exists, look for a maintained alternative.</li>
<li><strong>Ask your host for help.</strong> Good hosts can read server logs and tell you what failed. This is a fair test of support quality.</li>
<li><strong>Restore from backup</strong> if all else fails, then try again on staging.</li>
</ol>
<p>If your host has removed the old version entirely and upgraded you automatically, step 1 is not available - which is the strongest argument for upgrading on your own schedule before your host does it for you.</p>`,
  },
  {
    heading: "What should agencies and developers plan for?",
    body: `<p>If you manage sites for clients, PHP end-of-life dates are now predictable: every version gets four years, and support ends on 31 December. That makes it possible to plan upgrades as routine maintenance rather than emergencies.</p>
<table>
<thead><tr><th>Date</th><th>Event</th></tr></thead>
<tbody>
<tr><td>19 Nov 2026</td><td>PHP 8.6 scheduled for release</td></tr>
<tr><td>15 Dec 2026</td><td>WP Cloud removes PHP 8.2</td></tr>
<tr><td>31 Dec 2026</td><td>PHP 8.2 reaches end of life; PHP 8.4 moves to security-only support</td></tr>
<tr><td>February 2027 (planned)</td><td>WooCommerce 11.6 requires PHP 8.1+</td></tr>
<tr><td>31 Dec 2027</td><td>PHP 8.3 reaches end of life; PHP 8.5 moves to security-only support</td></tr>
<tr><td>31 Dec 2028</td><td>PHP 8.4 reaches end of life</td></tr>
</tbody>
</table>
<h3>Practical suggestions</h3>
<ul>
<li><strong>Audit every client site now.</strong> List each site's PHP version, host and last plugin update.</li>
<li><strong>Prefer PHP 8.4 where possible</strong> so clients are covered until the end of 2028.</li>
<li><strong>Check your own dependencies.</strong> Brent Roose's July 2026 analysis found that only 352 of the top 1,000 Composer packages required a PHP version that still receives security fixes - a reminder that package requirements say little about whether your stack is current.</li>
<li><strong>Build a yearly PHP review into maintenance contracts,</strong> scheduled for the autumn before each 31 December deadline.</li>
</ul>`,
  },
  {
    heading: "PHP 8.2 end-of-life checklist",
    body: `<ul>
<li>Check your PHP version in WordPress Site Health or your control panel.</li>
<li>Read any recent emails from your host about PHP changes and note their dates.</li>
<li>Back up your site and confirm you can restore it.</li>
<li>Update WordPress, plugins and theme; delete anything unused.</li>
<li>Create a staging copy and switch it to PHP 8.3 or 8.4.</li>
<li>Test pages, forms, logins and checkout; check the error log.</li>
<li>Fix or replace any plugin or theme that fails.</li>
<li>Switch the live site before 31 December 2026 - or before your host's earlier date.</li>
<li>Re-test the live site and keep a note of how to roll back.</li>
<li>Put a reminder in your calendar for autumn 2027, when PHP 8.3 approaches end of life.</li>
</ul>`,
  },
  {
    heading: "Is PHP 8.2 unsafe right now?",
    body: `<p>Not yet. Until 31 December 2026, PHP 8.2 still receives security fixes - it received critical patches in October 2026 (version 8.2.35). The risk begins in 2027, when newly found vulnerabilities will no longer be fixed. Make sure you are on the latest 8.2 point release in the meantime, and plan your upgrade now.</p>`,
  },
  {
    heading: "Will my host upgrade PHP automatically?",
    body: `<p>It depends on the host. Some, such as WP Cloud and Pressable, have announced they will remove PHP 8.2 in December 2026 and move remaining sites to a newer version. Others keep old versions selectable but unpatched. Check your host's announcements and emails, and look for an "auto-upgrade" setting in your dashboard.</p>`,
  },
  {
    heading: "Is it better to upgrade to PHP 8.3 or 8.4?",
    body: `<p>If your plugins and theme are actively maintained, PHP 8.4 is the better choice because it is supported until 31 December 2028, compared with 31 December 2027 for 8.3. If you rely on older code or want the version WordPress lists as fully compatible, PHP 8.3 is the safer first step. Test either one on staging before switching your live site.</p>`,
  },
  {
    heading: "Does WordPress support PHP 8.4 and 8.5?",
    body: `<p>Yes, with a "beta" label. WordPress's compatibility handbook lists WordPress as fully compatible with PHP 8.0 to 8.3 and beta compatible with PHP 8.4 (since WordPress 6.7) and PHP 8.5 (since WordPress 6.9). The beta label reflects how many sites run those versions, not a known problem. Your plugins and theme matter more than core.</p>`,
  },
  {
    heading: "What happens to PHP 7.4 and 8.0 sites?",
    body: `<p>They are already well past end of life - PHP 7.4 lost official security support in November 2022 and PHP 8.0 in November 2023. They are at more risk than PHP 8.2 sites, not less. WordPress 7.0 still runs on PHP 7.4, and WooCommerce will continue to support 7.4 until version 11.5, but both recommend PHP 8.3 or newer. If your site is on 7.4 or 8.0, upgrading should be a priority; expect more testing work than a move from 8.2.</p>`,
  },
  {
    heading: "Do I need a developer to upgrade PHP?",
    body: `<p>Not usually. On most hosts, changing the PHP version is a setting in the control panel, and testing a typical WordPress site is something a site owner can do using the steps above. You may want a developer if your site uses custom code, an old premium theme you cannot update, or if testing turns up errors you cannot resolve by updating or replacing plugins.</p>`,
  },
  {
    heading: "Does the PHP version affect SEO?",
    body: `<p>Not directly - search engines do not rank sites by PHP version. Indirectly, it can matter: an outdated, unpatched PHP version makes a site more vulnerable to being hacked, and hacked sites can be flagged in search results or lose rankings. A site that breaks after a rushed automatic upgrade can also suffer downtime. Upgrading on your own schedule protects against both.</p>`,
  },
  {
    heading: "How we researched this guide",
    body: `<p>We checked PHP release and support dates against the PHP project's supported versions page and release announcements, and the PHP 8.6 schedule against the PHP wiki. WordPress requirements and compatibility come from wordpress.org and the WordPress core team's handbook and announcements; WooCommerce plans come from its developer blog. Hosting policies come from each host's own documentation and announcements, and are labeled with what we could and could not find. Usage statistics come from WordPress.org, W3Techs and Brent Roose's Packagist analysis, and performance figures from Tideways and Phoronix.</p>
<p>Where a figure came from secondary reporting rather than the original source, we say so. PHP versions, host policies and statistics change quickly, so check your host's current notices before acting. This guide is general information, not professional advice; some providers mentioned may compensate us, which never affects the facts we report. See our <a href="/editorial-policy">editorial policy</a>.</p>`,
  },
  {
    heading: "Sources and further reading",
    body: `<ul>
<li>PHP - supported versions: <a href="https://www.php.net/supported-versions.php" rel="nofollow noopener" target="_blank">php.net</a></li>
<li>PHP - unsupported (end-of-life) branches: <a href="https://www.php.net/eol.php" rel="nofollow noopener" target="_blank">php.net</a></li>
<li>PHP - PHP 8.5.0 release announcement: <a href="https://www.php.net/releases/8_5_0.php" rel="nofollow noopener" target="_blank">php.net</a></li>
<li>PHP wiki - PHP 8.6 release schedule: <a href="https://wiki.php.net/todo/php86" rel="nofollow noopener" target="_blank">wiki.php.net</a></li>
<li>PHP.Watch - PHP release cycle updates (2024 RFC): <a href="https://php.watch/news/2024/09/php-release-cycle-updates" rel="nofollow noopener" target="_blank">php.watch</a></li>
<li>BleepingComputer - PHP warns admins of two critical flaws (October 2026): <a href="https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/" rel="nofollow noopener" target="_blank">bleepingcomputer.com</a></li>
<li>PHP release notes - PHP 8.2.35: <a href="https://github.com/php/php-src/releases/tag/php-8.2.35" rel="nofollow noopener" target="_blank">github.com/php/php-src</a></li>
<li>WordPress - requirements: <a href="https://wordpress.org/about/requirements/" rel="nofollow noopener" target="_blank">wordpress.org</a></li>
<li>WordPress - statistics: <a href="https://wordpress.org/about/stats/" rel="nofollow noopener" target="_blank">wordpress.org</a></li>
<li>WordPress core - dropping support for PHP 7.2 and 7.3 (January 2026): <a href="https://make.wordpress.org/core/2026/01/09/dropping-support-for-php-7-2-and-7-3/" rel="nofollow noopener" target="_blank">make.wordpress.org</a></li>
<li>WordPress core handbook - PHP compatibility and WordPress versions: <a href="https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/" rel="nofollow noopener" target="_blank">make.wordpress.org</a></li>
<li>WooCommerce - PHP 8.1 requirement (September 2026): <a href="https://developer.woocommerce.com/2026/09/29/php-8-1-requirement/" rel="nofollow noopener" target="_blank">developer.woocommerce.com</a></li>
<li>WP Cloud - preparing for the removal of PHP 8.2: <a href="https://wp.cloud/preparing-for-the-removal-of-php-8-2/" rel="nofollow noopener" target="_blank">wp.cloud</a></li>
<li>Pressable - PHP 8.1 removal (December 2025): <a href="https://pressable.com/mpcp-messages/php-8-1-removal-december-9-2025/" rel="nofollow noopener" target="_blank">pressable.com</a></li>
<li>Hostinger - how to change the PHP version: <a href="https://www.hostinger.com/support/1575755-how-to-change-the-php-version-of-your-hostinger-hosting-plan/" rel="nofollow noopener" target="_blank">hostinger.com</a></li>
<li>SiteGround - PHP 8.2 becomes default version: <a href="https://www.siteground.com/blog/php-8-2-becomes-default-version" rel="nofollow noopener" target="_blank">siteground.com</a></li>
<li>Bluehost - changing PHP and WordPress version: <a href="https://www.bluehost.com/help/article/changing-php-and-wordpress-version" rel="nofollow noopener" target="_blank">bluehost.com</a></li>
<li>cPanel - EasyApache 4 FAQ: <a href="https://docs.cpanel.net/ea4/basics/easyapache-4-faq" rel="nofollow noopener" target="_blank">docs.cpanel.net</a></li>
<li>cPanel - TuxCare Extended Lifecycle Support for PHP: <a href="https://docs.cpanel.net/knowledge-base/third-party/tuxcare-extended-lifecycle-support-els-php/" rel="nofollow noopener" target="_blank">docs.cpanel.net</a></li>
<li>Zend - PHP long-term support: <a href="https://www.zend.com/p/php-long-term-support/get-php-lts" rel="nofollow noopener" target="_blank">zend.com</a></li>
<li>Pagely - upcoming PHP changes and Zend pricing: <a href="https://pagely.com/blog/upcoming-php-changes-at-pagely-8-4-rollout-8-1-end-of-life-new-zend-pricing/" rel="nofollow noopener" target="_blank">pagely.com</a></li>
<li>Tideways - PHP benchmarks 8.5 vs 8.4, 8.3 and 7.4: <a href="https://tideways.com/profiler/blog/php-benchmarks-8-5-vs-8-4-8-3-and-7-4" rel="nofollow noopener" target="_blank">tideways.com</a></li>
<li>Brent Roose - PHP version stats, July 2026: <a href="https://stitcher.io/blog/php-version-stats-july-2026" rel="nofollow noopener" target="_blank">stitcher.io</a></li>
<li>W3Techs - usage statistics of PHP 8: <a href="https://w3techs.com/technologies/details/pl-php/8" rel="nofollow noopener" target="_blank">w3techs.com</a></li>
</ul>`,
  },
];

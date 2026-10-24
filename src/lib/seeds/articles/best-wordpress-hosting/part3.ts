import type { ArticleSection } from "@/lib/config";

// Part 3 of "Best WordPress Hosting in 2026". WordPress performance:
// caching layers, PHP workers, Core Web Vitals and testing a host.

export const part3: ArticleSection[] = [
  {
    heading: "What makes WordPress hosting fast?",
    body: `<p>A WordPress page can be delivered in one of two ways. A <strong>cached</strong> page is a ready-made copy served instantly, without running PHP or touching the database. An <strong>uncached</strong> page is built from scratch: the server runs WordPress, loads plugins and the theme, queries the database and assembles HTML. Fast WordPress hosting does two things well - it serves as many requests as possible from cache, and it builds uncached pages quickly when it has to.</p>
<h3>The five hosting factors that matter most for WordPress speed</h3>
<ol>
<li><strong>Server-level page caching.</strong> Caching at the web server (for example LiteSpeed's cache or an Nginx-based cache) is faster than a PHP plugin that has to start WordPress before serving the cached file.</li>
<li><strong>Fast storage.</strong> NVMe solid-state drives reduce database and file access time, which matters most for uncached pages, the WordPress admin, searches and WooCommerce.</li>
<li><strong>Modern CPUs and enough PHP workers.</strong> Uncached requests are CPU-bound. Too few PHP workers means requests queue during traffic spikes.</li>
<li><strong>Current PHP version with OPcache.</strong> Newer PHP versions execute WordPress faster, and OPcache keeps compiled PHP in memory.</li>
<li><strong>Proximity.</strong> A data center near your visitors, plus a CDN for static files, cuts network latency for every request.</li>
</ol>
<p>Everything else - your theme, plugins, images and scripts - sits on top of this foundation. Great hosting cannot rescue a bloated site, but poor hosting will hold back even a well-built one.</p>`,
  },
  {
    heading: "What types of caching does WordPress use?",
    body: `<p>"Caching" in WordPress refers to several different layers. Understanding them helps you see what a host provides and what you still need to configure.</p>
<table>
<thead><tr><th>Cache layer</th><th>What it stores</th><th>Where it runs</th><th>Impact</th></tr></thead>
<tbody>
<tr><td>Page cache</td><td>Complete HTML pages</td><td>Web server or plugin</td><td>Largest speed gain for anonymous visitors</td></tr>
<tr><td>Object cache</td><td>Results of database queries (often in Redis or Memcached)</td><td>Server memory</td><td>Speeds up uncached pages, the admin and WooCommerce</td></tr>
<tr><td>OPcache</td><td>Compiled PHP code</td><td>PHP runtime</td><td>Faster execution of every uncached request</td></tr>
<tr><td>Browser cache</td><td>Images, CSS and scripts on the visitor's device</td><td>Visitor's browser</td><td>Faster repeat visits</td></tr>
<tr><td>CDN cache</td><td>Static files (and sometimes full pages) at edge locations</td><td>CDN network</td><td>Faster global delivery, lower server load</td></tr>
</tbody>
</table>
<h3>Which caching should you set up?</h3>
<ul>
<li><strong>Always:</strong> page caching and browser caching. If your host offers server-level page caching, use it and its companion plugin rather than stacking a second caching plugin on top.</li>
<li><strong>For stores, membership sites and busy blogs:</strong> add object caching (Redis or Memcached) if your plan supports it.</li>
<li><strong>For international audiences:</strong> add a CDN.</li>
<li><strong>Never:</strong> run two page-caching plugins at once - they conflict and can serve stale or broken pages.</li>
</ul>
<h3>What cannot be cached</h3>
<p>Some pages must be generated for each visitor: shopping carts, checkout, account pages, logged-in dashboards, and pages with personalized content. Caching plugins exclude these automatically when configured correctly. This is why WooCommerce stores and membership sites depend more heavily on raw server performance than simple blogs do.</p>`,
  },
  {
    heading: "Is LiteSpeed better than Apache or Nginx for WordPress?",
    body: `<p>All three web servers run WordPress well when configured properly. The practical difference is how caching is delivered and how efficiently each handles many simultaneous visitors.</p>
<table>
<thead><tr><th>Web server</th><th>WordPress caching approach</th><th>Strengths</th><th>Considerations</th></tr></thead>
<tbody>
<tr><td>LiteSpeed</td><td>Built-in server-level cache controlled by the free LiteSpeed Cache plugin</td><td>Efficient under load; integrated page, object and image optimization tools</td><td>Full benefits require a host running LiteSpeed</td></tr>
<tr><td>Nginx</td><td>Server-level caching configured by the host, often with a helper plugin</td><td>Very efficient at serving static files and handling concurrency</td><td>Caching setup depends entirely on the host</td></tr>
<tr><td>Apache</td><td>Typically a PHP caching plugin, sometimes combined with Nginx in front</td><td>Universal compatibility with .htaccess rules</td><td>Less efficient under heavy load without extra layers</td></tr>
</tbody>
</table>
<p>If you buy hosting with a LiteSpeed server - such as Hosting.com's Turbo tiers - install the LiteSpeed Cache plugin and use it as your only page-caching plugin. On Nginx- or Apache-based hosts, follow the host's recommended caching setup. Ask support which web server your plan runs before you buy if speed is a priority.</p>`,
  },
  {
    heading: "What are PHP workers and why do they matter for WordPress?",
    body: `<p>A <strong>PHP worker</strong> is a process that handles one uncached PHP request at a time. If your plan allows four PHP workers, four uncached requests can be processed simultaneously; additional requests wait in a queue until a worker becomes free. When the queue grows, visitors see slow pages or timeouts.</p>
<p>Cached pages bypass PHP workers entirely, which is why caching matters so much. But some requests are always uncached:</p>
<ul>
<li>WooCommerce cart, checkout and account pages</li>
<li>Logged-in users, including your own WordPress admin work</li>
<li>Search results and filtered product listings</li>
<li>Form submissions and AJAX requests from plugins</li>
<li>Scheduled tasks (WP-Cron) and background processes</li>
</ul>
<h3>How many PHP workers do you need?</h3>
<p>A simple blog with good page caching rarely needs more than a few. A WooCommerce store, membership site, forum or learning platform with many logged-in users needs more - and each request should complete quickly so workers free up fast. Shared hosts often express this indirectly through "entry processes" or CPU limits rather than a stated worker count. If you see 503 or 504 errors during traffic peaks while CPU usage is maxed, you are likely running out of workers or CPU, and it is time to optimize or upgrade to a cloud plan or VPS with more resources.</p>`,
  },
  {
    heading: "How does hosting affect WordPress Core Web Vitals?",
    body: `<p>Core Web Vitals are Google's user-experience metrics, and they feed into how Google evaluates page experience. The current thresholds for a "good" score are:</p>
<table>
<thead><tr><th>Metric</th><th>Measures</th><th>Good</th><th>How hosting influences it</th></tr></thead>
<tbody>
<tr><td>Largest Contentful Paint (LCP)</td><td>How quickly the main content appears</td><td>2.5 seconds or less</td><td>Strongly - server response time (TTFB) is the first part of LCP</td></tr>
<tr><td>Interaction to Next Paint (INP)</td><td>How quickly the page responds to interactions</td><td>200 milliseconds or less</td><td>Indirectly - mostly driven by JavaScript on the page</td></tr>
<tr><td>Cumulative Layout Shift (CLS)</td><td>How much the layout jumps while loading</td><td>0.1 or less</td><td>Barely - driven by theme, images and ads</td></tr>
</tbody>
</table>
<p>Hosting has the biggest effect on <strong>LCP through Time to First Byte (TTFB)</strong> - how long the server takes to start sending the page. Google's web.dev guidance treats a TTFB of 0.8 seconds or less as good. A host with server-level caching, fast storage and a nearby data center will typically deliver cached WordPress pages with a low TTFB; a slow or overloaded host can consume most of your LCP budget before the browser even starts rendering.</p>
<h3>The WordPress Core Web Vitals checklist</h3>
<ol>
<li>Use server-level page caching and a data center near your audience.</li>
<li>Serve images in modern formats (WebP or AVIF) at the right size, and lazy-load images below the fold - but not the main hero image.</li>
<li>Choose a lightweight theme; limit page-builder bloat.</li>
<li>Reduce and defer JavaScript, especially third-party scripts, chat widgets and trackers (this improves INP).</li>
<li>Set explicit width and height on images and embeds, and reserve space for ads (this improves CLS).</li>
<li>Preload your main font or use system fonts.</li>
<li>Add a CDN if your audience is spread across regions.</li>
</ol>`,
  },
  {
    heading: "How can you test a WordPress host's speed yourself?",
    body: `<p>The most reliable way to judge a host is to test your own site on it during the money-back period. Marketing benchmarks rarely reflect your theme, plugins and audience. Here is a practical protocol.</p>
<h3>1. Build a realistic test site</h3>
<ul>
<li>Install the same theme and plugins you will actually use, and import a handful of real pages and posts with images. An empty WordPress install proves very little.</li>
<li>Choose the data center closest to your visitors.</li>
<li>Configure the host's recommended caching and a free SSL certificate.</li>
</ul>
<h3>2. Measure cached performance</h3>
<ul>
<li>Run Google PageSpeed Insights on your home page and a typical post. Note TTFB (server response time), LCP and the overall score.</li>
<li>Repeat at different times of day to spot overloaded servers.</li>
</ul>
<h3>3. Measure uncached performance</h3>
<ul>
<li>Log in and time how quickly the WordPress admin, the post editor and the plugin screen load - these are always uncached.</li>
<li>Run a site search and, for stores, add a product to the cart and open checkout.</li>
<li>Check Tools → Site Health for warnings about PHP version, memory or missing extensions.</li>
</ul>
<h3>4. Watch stability</h3>
<ul>
<li>Set up a free uptime monitor that checks the site every few minutes.</li>
<li>Look at your resource usage graphs in the control panel after a few days.</li>
</ul>
<h3>5. Compare and decide</h3>
<p>Run the same steps on any host you are considering. If one host consistently delivers lower TTFB, a snappier admin and stable uptime, that matters far more than any feature list. Remember to request a refund before the guarantee ends if a host disappoints - domain fees and add-ons are usually non-refundable. Our general <a href="/articles/how-to-choose-web-hosting">hosting guide</a> includes a full seven-day testing plan.</p>`,
  },
  {
    heading: "How do you speed up a WordPress site on any host?",
    body: `<p>These optimizations often deliver bigger gains than switching hosts, and they apply on every provider:</p>
<ol>
<li><strong>Enable page caching</strong> - preferably the host's server-level cache and its official plugin.</li>
<li><strong>Optimize images</strong> - compress, resize to display dimensions and serve WebP or AVIF.</li>
<li><strong>Use a lightweight theme</strong> and avoid stacking multiple page builders, sliders and animation libraries.</li>
<li><strong>Audit plugins</strong> - remove unused plugins and replace heavy ones. The number of plugins matters less than what each one does on every page load.</li>
<li><strong>Update PHP</strong> to the newest version your site supports, after testing on staging.</li>
<li><strong>Add object caching</strong> (Redis or Memcached) for stores, membership sites and busy blogs, if your plan supports it.</li>
<li><strong>Use a CDN</strong> for static files, especially for international audiences.</li>
<li><strong>Clean the database</strong> - post revisions, spam comments, expired transients and leftover tables from deleted plugins.</li>
<li><strong>Limit third-party scripts</strong> - every tracker, chat widget, font and embed adds requests and slows interactions.</li>
<li><strong>Replace WP-Cron with a real server cron</strong> on busy sites, so scheduled tasks do not run on visitor requests.</li>
<li><strong>Control the Heartbeat API</strong> in the admin if it causes high CPU usage on shared hosting.</li>
<li><strong>Measure after every change</strong> so you know what actually helped.</li>
</ol>
<p>If you have done all of this and your control panel still shows CPU or memory limits being hit at busy times, the host is now the bottleneck - and an upgrade to a higher tier, cloud plan or VPS is justified.</p>`,
  },
];

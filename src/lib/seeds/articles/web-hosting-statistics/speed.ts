import type { ArticleSection } from "@/lib/config";

// "Web Hosting Statistics 2026" - website speed and performance.

export const speed: ArticleSection[] = [
  {
    heading: "How many websites pass Google's Core Web Vitals?",
    body: `<div class="qa"><strong>Short answer:</strong> Fewer than half on mobile. According to the HTTP Archive's 2025 Web Almanac, based on Chrome UX Report data from July 2025, about <strong>48% of mobile websites</strong> and <strong>56% of desktop websites</strong> pass all three Core Web Vitals - up from 36% and 48% in 2023.</div>
<table>
<thead><tr><th>Year</th><th>Mobile origins passing all Core Web Vitals</th><th>Desktop origins passing all Core Web Vitals</th></tr></thead>
<tbody>
<tr><td>2023</td><td>36%</td><td>48%</td></tr>
<tr><td>2024</td><td>44%</td><td>55%</td></tr>
<tr><td>2025</td><td><strong>48%</strong></td><td><strong>56%</strong></td></tr>
</tbody>
</table>
<p><em>Source: HTTP Archive Web Almanac (performance chapter), based on Chrome UX Report data.</em></p>
<h3>Individual metrics on mobile (2025)</h3>
<ul>
<li><strong>Interaction to Next Paint (INP):</strong> about 77% of mobile origins had good INP.</li>
<li><strong>Cumulative Layout Shift (CLS):</strong> about 81% had good CLS.</li>
<li><strong>Largest Contentful Paint (LCP):</strong> about 62% had good LCP - the hardest metric to pass, and the one hosting affects most through server response time.</li>
</ul>
<h3>Server response time (TTFB)</h3>
<p>The 2024 Web Almanac found that only about <strong>42% of mobile pages</strong> had a good Time to First Byte (800 milliseconds or less) - essentially unchanged from 41% in 2021. Because TTFB is the first part of LCP, slow hosting directly holds sites back on the metric they most often fail.</p>
<p>These numbers show why hosting choices matter: server-level caching, fast storage and a nearby data center are among the most direct ways to improve LCP. See our <a href="/articles/best-wordpress-hosting">best WordPress hosting</a> guide for how to test a host's speed yourself.</p>`,
  },
  {
    heading: "How big is the average web page in 2026?",
    body: `<p>Web pages keep getting heavier. The HTTP Archive's 2025 Web Almanac found the median mobile home page weighed about <strong>2,362 KB</strong> (about 2.3 MB) in July 2025 - nearly <strong>three times</strong> the 845 KB median in 2015. Secondary analyses put the median desktop home page at about 2.9 MB.</p>
<table>
<thead><tr><th>Year</th><th>Median mobile home page weight</th></tr></thead>
<tbody>
<tr><td>2015</td><td>845 KB</td></tr>
<tr><td>2025</td><td><strong>2,362 KB</strong></td></tr>
</tbody>
</table>
<p>Heavier pages need more bandwidth, take longer to load on slower connections and consume more server resources. Images, JavaScript and fonts make up most of the weight. Compressing images, limiting scripts and using a CDN reduce the load on both your visitors and your hosting plan.</p>`,
  },
  {
    heading: "How does page speed affect conversions and bounce rates?",
    body: `<p>Several widely cited studies quantify the business cost of slow pages. Some are several years old, so we list each with its original date.</p>
<table>
<thead><tr><th>Finding</th><th>Source and date</th></tr></thead>
<tbody>
<tr><td>A <strong>0.1-second</strong> improvement in mobile site speed increased retail conversions by <strong>8.4%</strong> and average order value by <strong>9.2%</strong>, and travel conversions by <strong>10.1%</strong></td><td>Deloitte Digital for Google, "Milliseconds Make Millions" (2020; 37 brands)</td></tr>
<tr><td>A page that loads in <strong>1 second</strong> converts about <strong>3x</strong> better than one that loads in 5 seconds, and about <strong>5x</strong> better than one that loads in 10 seconds</td><td>Portent site speed study (2022)</td></tr>
<tr><td><strong>53%</strong> of mobile visits are abandoned if a page takes longer than <strong>3 seconds</strong> to load</td><td>Google / DoubleClick (data from 2016)</td></tr>
<tr><td>The probability of a bounce increases <strong>113%</strong> as page load time goes from 1 second to 7 seconds</td><td>Google / SOASTA research (2017)</td></tr>
</tbody>
</table>
<h3>What it means for choosing a host</h3>
<p>The exact percentages vary by site and have shifted since these studies, but the direction is consistent: faster sites keep more visitors and convert more of them. Hosting is not the only factor - page weight, images and scripts matter too - but a host with fast server response times, caching and a data center near your audience gives every page a head start.</p>`,
  },
];

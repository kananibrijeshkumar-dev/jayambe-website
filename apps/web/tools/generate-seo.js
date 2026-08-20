import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products, applications } from '../src/data/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '../public');

const SITE_URL = 'https://jayambefoodmachinery.com';

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/products</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/applications</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/gallery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  // Add products
  products.forEach(product => {
    xml += `  <url>
    <loc>${SITE_URL}/products/${product.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  // Add applications
  applications.forEach(app => {
    xml += `  <url>
    <loc>${SITE_URL}/applications/${app.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log('✅ Generated sitemap.xml');
}

function generateGoogleShoppingFeed() {
  const date = new Date().toUTCString();
  
  let xml = `<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Jay Ambe Food Machinery</title>
    <link>${SITE_URL}</link>
    <description>Direct manufacturer of atta pulverizer, flour mill and masala pulverizer machines in Ahmedabad.</description>
    <pubDate>${date}</pubDate>
`;

  products.forEach(product => {
    // Parse numeric price
    const numericPrice = product.price ? product.price.replace(/[^0-9]/g, '') : '';
    
    xml += `    <item>
      <g:id>${product.model.replace(/[^A-Za-z0-9]/g, '_')}</g:id>
      <g:title><![CDATA[${product.name}]]></g:title>
      <g:description><![CDATA[${product.description}]]></g:description>
      <g:link>${SITE_URL}/products/${product.slug}</g:link>
      <g:image_link>${SITE_URL}${product.image}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      ${numericPrice ? `<g:price>${numericPrice} INR</g:price>` : ''}
      <g:brand>Jay Shree Ambe Food Machinery</g:brand>
      <g:gtin></g:gtin>
      <g:mpn><![CDATA[${product.model}]]></g:mpn>
      <g:product_type>Business &amp; Industrial &gt; Industrial Food &amp; Beverage Equipment &gt; Industrial Food &amp; Beverage Milling &amp; Processing Equipment</g:product_type>
    </item>\n`;
  });

  xml += `  </channel>\n</rss>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'products-feed.xml'), xml);
  console.log('✅ Generated products-feed.xml');
}

try {
  generateSitemap();
  generateGoogleShoppingFeed();
} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1);
}

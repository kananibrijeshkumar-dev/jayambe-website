import WhatsAppIcon from '@/components/WhatsAppIcon';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Check, Phone, MessageCircle, FileText, ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import EnquiryForm from '@/components/EnquiryForm';
import { company, products, waLink } from '@/data/site';

const AOR = 'Available on request';

const NotFound = () => (
  <Layout>
    <Helmet>
      <title>Product Not Found | Jay Ambe Food Machinery</title>
      <meta name="description" content="The machine page you requested was not found. Browse our pulverizer and flour mill machine range." />
    </Helmet>
    <div className="mx-auto max-w-[60rem] px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold uppercase text-brand-blue">Machine not found</h1>
      <p className="mt-3 text-slate-600">The page you were looking for is not available.</p>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase text-white">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>
    </div>
  </Layout>
);

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  if (!product) return <NotFound />;

  const related = products.filter((p) => p.categories[0] === product.categories[0] && p.slug !== product.slug).slice(0, 3);
  const waMsg = `Hello Jay Ambe Food Machinery, I am interested in ${product.name}. Please share price, specifications and availability.`;

  return (
    <Layout>
      <Helmet>
        <title>{`${product.name} ${product.subtitle} | Manufacturer in Ahmedabad, Gujarat`}</title>
        <meta
          name="description"
          content={`${product.name} (${product.model}) manufactured by Jay Ambe Food Machinery, Ahmedabad. ${product.short}`}
        />
        {/* Product Schema for Google Shopping */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": [
              `https://jayambefoodmachinery.com${product.image}`
            ],
            "description": product.description,
            "sku": product.model,
            "brand": {
              "@type": "Brand",
              "name": "Jay Shree Ambe Food Machinery"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://jayambefoodmachinery.com/products/${product.slug}`,
              "priceCurrency": "INR",
              "price": product.price ? product.price.replace(/[^\d]/g, '') : undefined,
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          })}
        </script>
      </Helmet>
      <Seo title={`${product.name} — Jay Ambe Food Machinery`} description={product.short} image={product.image} siteName={company.name} />

      {/* Breadcrumb */}
      <div className="border-b border-brand-beige bg-brand-cream">
        <div className="mx-auto flex max-w-[80rem] flex-wrap items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-brand-coffee">
          <Link to="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-blue">Products</Link>
          <span>/</span>
          <span className="text-brand-blue">{product.name}</span>
        </div>
      </div>

      {/* Top: image left, summary right */}
      <section className="mx-auto max-w-[80rem] px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="h-full">
            <div className="flex h-full flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-slate-200 bg-brand-cream shadow-lg">
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.subtitle}, manufactured in Ahmedabad`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            {product.gallery ? (
              <div className="flex-1 mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((imgSrc, i) => (
                  <div key={i} className="overflow-hidden rounded-sm border border-slate-200 bg-brand-cream">
                    <img src={imgSrc} alt={`${product.name} view ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:brightness-90 transition-all cursor-pointer" onClick={(e) => {
                      const mainImg = e.target.closest('.flex').querySelector('img');
                      if (mainImg) mainImg.src = imgSrc;
                    }} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 mt-4 grid grid-cols-3 gap-3">
                {related.map((r) => (
                  <Link key={r.slug} to={`/products/${r.slug}`} className="overflow-hidden rounded-sm border border-slate-200 bg-brand-cream">
                    <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </Link>
                ))}
              </div>
            )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">{product.subtitle}</p>
            <h1 className="mt-2 font-display text-3xl font-bold uppercase leading-tight text-brand-blue md:text-4xl">
              {product.name}
            </h1>

            {product.price && (
              <div className="mt-3 font-display text-2xl font-bold text-brand-red">
                {product.price}
              </div>
            )}

            {/* Model / Power / Phase summary */}
            <dl className="mt-6 grid grid-cols-3 divide-x divide-brand-beige rounded-md border border-brand-beige bg-brand-cream text-center">
              {[['Model', product.model], ['Power', product.power], ['Phase', product.phase]].map(([k, v]) => (
                <div key={k} className="px-2 py-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-coffee">{k}</dt>
                  <dd className="mt-1 text-sm font-bold leading-snug text-brand-blue">{v}</dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/enquiry?product=${encodeURIComponent(product.name)}`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:brightness-95 active:scale-[0.98]"
              >
                <FileText className="h-4 w-4" strokeWidth={2.5} /> Get Quote
              </Link>
              <a
                href={waLink(`Hi, I want to buy the ${product.name} ${product.price ? `(${product.price})` : ''}. Please share payment details.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-700 active:scale-[0.98]"
              >
                <ShoppingCart className="h-4 w-4" strokeWidth={2.5} /> Buy Now
              </a>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Speak directly with the manufacturer on <span className="font-semibold text-brand-blue">{company.phone}</span>.
            </p>
            
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Engineering Data</p>
              <h2 className="mt-1 font-display text-2xl font-bold uppercase text-brand-blue">Technical Specifications</h2>

              {product.specsNote ? (
                <div className="mt-5 rounded-md border border-brand-beige bg-white p-6 text-center">
                  <p className="font-display text-lg font-semibold uppercase text-brand-blue">{product.specsNote}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Confirm your material, capacity and power supply with us and we will share the exact specification sheet.
                  </p>
                </div>
              ) : (
                <div className="mt-5 overflow-x-auto rounded-md border border-brand-beige bg-white">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-brand-beige bg-brand-blue text-left">
                        <th scope="col" className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide text-white">Specification</th>
                        <th scope="col" className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide text-white">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-beige">
                      {product.specs.map(([k, v]) => (
                        <tr key={k} className="transition-colors hover:bg-brand-cream/60">
                          <th scope="row" className="w-1/2 px-4 py-3 text-left font-semibold text-brand-coffee">
                            {k}
                          </th>
                          <td className={`px-4 py-3 font-medium ${v === AOR ? 'italic text-slate-500' : 'text-slate-800'}`}>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <p className="mt-3 text-xs text-slate-500">
                Specifications marked &quot;Available on request&quot; are confirmed at the time of enquiry against your
                material and required output.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Demonstration Section */}
      {product.video && (
        <section className="bg-brand-dark px-6 py-14">
          <div className="mx-auto max-w-[80rem]">
            <Reveal>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Machine In Action</p>
                <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
                  Watch The {product.name} Work
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl bg-black">
                <video
                  className="h-full w-full object-cover"
                  controls
                  muted
                  poster={product.image}
                >
                  <source src={product.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* About this machine + Technical specifications */}
      <section className="bg-brand-cream py-14">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Overview</p>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase text-brand-blue">About This Machine</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{product.description}</p>

            <h2 className="mt-10 font-display text-2xl font-bold uppercase text-brand-blue">Applications</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="rounded-sm border border-brand-blue/30 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {a}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Built For Continuous Duty</p>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase text-brand-blue">Key Features</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-md border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-brand-red/10 text-brand-red">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-brand-cream py-14">
        <div className="mx-auto max-w-[72rem] px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Request a Quotation</p>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase text-brand-blue">
              Enquiry for {product.name}
            </h2>
            <div className="mt-6 rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <EnquiryForm defaultProduct={product.name} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-brand-beige/40 py-16">
        <div className="mx-auto max-w-[90rem] px-6">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold uppercase text-brand-blue">Related Machines</h2>
              <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-red hover:underline">
                View All <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <ProductCard product={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailPage;

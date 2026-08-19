import WhatsAppIcon from '@/components/WhatsAppIcon';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams } from 'react-router-dom';
import { Phone, MessageCircle, Award, Factory, Wrench, Headset } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import { company, products, categories, trustBlocks, waLink } from '@/data/site';

const trustIcons = {
  award: Award,
  factory: Factory,
  wrench: Wrench,
  headset: Headset,
};

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const isCycloneOnly = searchParams.get('filter') === 'cyclone';

  const displayCategories = categories.filter(c => {
    if (c.slug === 'cyclone-systems') return false;
    if (isCycloneOnly) return c.slug.includes('-with-cyclone');
    return true;
  });

  return (
  <Layout>
    <Helmet>
      <title>Products | Pulverizer, Atta Mill &amp; Flour Mill Machines Manufacturer Ahmedabad</title>
      <meta
        name="description"
        content="Our machine range: 5 HP and 20 HP double stage pulverizers, 10 HP pulverizer, 10 HP dual chamber atta mill pulverizer, flour mill machine and 20 HP pulverizer with cyclone — manufactured in Ahmedabad, Gujarat."
      />
    </Helmet>
    <Seo title="Pulverizer & Flour Mill Machines — Jay Ambe Food Machinery" description="Six machine models manufactured in Ahmedabad for masala, atta and food grinding." siteName={company.name} />

    <PageHeader
      eyebrow="Product Range"
      title={isCycloneOnly ? "Cyclone Systems" : "Our Machines"}
      crumb={isCycloneOnly ? "Cyclone Systems" : "Products"}
      description={isCycloneOnly ? "Explore our complete range of dust-free pulverizers with attached cyclone separators." : "Six models in regular production — pulverizers, atta mill pulverizers, flour mill machines and complete grinding lines with cyclone."}
    />

    {/* Product catalogue by category */}
    <section className="mx-auto max-w-[90rem] px-6 py-16">
      <div className="flex flex-col gap-16">
        {displayCategories.map((c) => {
          const categoryProducts = products.filter(p => p.categories && p.categories.includes(c.slug));
          if (categoryProducts.length === 0) return null;
          
          return (
            <div key={c.slug}>
              <Reveal>
                <div className="mb-6 border-b border-slate-300 pb-3">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-brand-blue">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{c.description}</p>
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.06}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* Trust section — WHY BUY FROM JAY AMBE FOOD MACHINERY? */}
    <section className="border-y border-slate-200 bg-brand-cream py-16">
      <div className="mx-auto max-w-[90rem] px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Manufacturer Promise</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight text-brand-blue">
              Why Buy From Jay Ambe Food Machinery?
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBlocks.map((block, i) => {
            const Icon = trustIcons[block.icon] || Award;
            return (
              <Reveal key={block.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-start rounded-md border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-blue text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold uppercase leading-tight text-brand-blue">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{block.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Full-width CTA */}
    <section className="relative overflow-hidden bg-brand-blue">
      <div className="industrial-stripe absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[72rem] px-6 py-16 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-beige/80">Direct From The Manufacturer</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            Looking for the Right Pulverizer or Flour Mill?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-beige/90">
            Talk directly with Jay Ambe Food Machinery. Tell us what you grind and the output you need — we will
            recommend the right model, mesh and motor rating for your plant.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/enquiry"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-brand-red px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:brightness-95 active:scale-[0.98]"
            >
              Get Quote
            </Link>
            <a
              href={waLink('Hello Jay Ambe Food Machinery, I am looking for the right pulverizer / flour mill for my requirement. Please guide me.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-[#25D366] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:brightness-95 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" strokeWidth={2.5} /> WhatsApp Us
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border-2 border-white/80 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand-blue"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} /> Call Now
            </a>
          </div>
          <p className="mt-6 text-sm font-medium text-brand-beige/80">{company.phone}</p>
        </Reveal>
      </div>
    </section>
  </Layout>
  );
};

export default ProductsPage;

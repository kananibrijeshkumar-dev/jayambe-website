import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import { company, products, categories } from '@/data/site';

const NotFound = () => (
  <Layout>
    <Helmet>
      <title>Category Not Found | {company.name}</title>
    </Helmet>
    <div className="mx-auto max-w-[60rem] px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold uppercase text-brand-blue">Category not found</h1>
      <p className="mt-3 text-slate-600">The machine category you were looking for is not available.</p>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase text-white">
        <ArrowLeft className="h-4 w-4" /> View all products
      </Link>
    </div>
  </Layout>
);

const CategoryPage = () => {
  const { slug } = useParams();
  
  const category = categories.find((c) => c.slug === slug);
  if (!category) return <NotFound />;

  const categoryProducts = products.filter((p) => p.categories && p.categories.includes(slug));

  return (
    <Layout>
      <Helmet>
        <title>{`${category.name} Machines | ${company.name}`}</title>
        <meta name="description" content={category.description} />
      </Helmet>
      <Seo
        title={`${category.name} | ${company.name}`}
        description={category.description}
        siteName={company.name}
      />

      <div className="border-b border-brand-beige bg-brand-cream">
        <div className="mx-auto flex max-w-[80rem] flex-wrap items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-brand-coffee">
          <Link to="/" className="hover:text-brand-blue">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-blue">{category.name}</span>
        </div>
      </div>

      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-[90rem] px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
                  Category
                </p>
                <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-brand-blue md:text-5xl">
                  {category.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {category.description}
                </p>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-brand-blue px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
              >
                View All Products <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProductCard product={p} />
                </Reveal>
              ))
            ) : (
              <p className="text-slate-500 py-10 col-span-full">No products found in this category.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;

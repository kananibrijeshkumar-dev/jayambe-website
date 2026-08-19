import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import { company, reasons, waLink } from '@/data/site';

const WhyChooseUsPage = () => (
  <Layout>
    <Helmet>
      <title>Why Choose Us | 30+ Years Pulverizer Machine Manufacturer Gujarat</title>
      <meta
        name="description"
        content="Why buy from Jay Ambe Food Machinery, Ahmedabad — 30+ years of manufacturing experience, in-house fabrication, machines built around your material, and direct manufacturer support."
      />
    </Helmet>
    <Seo title="Why Choose Jay Ambe Food Machinery" description="30+ years of manufacturing experience and in-house fabrication in Ahmedabad, Gujarat." siteName={company.name} />

    <PageHeader
      eyebrow="30+ Years"
      title="Why Choose Us"
      description="Experience you can see in the machine — how three decades of manufacturing changes what you receive."
    />

    <section className="mx-auto max-w-[80rem] px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="font-display text-7xl font-bold leading-none text-brand-blue">
            <CountUp value={30} suffix="+" />
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight text-brand-blue">
            Years of Manufacturing Experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Over three decades, we have built grinding machinery for masala units, atta chakki shops, flour mills and
            food processing businesses. That experience sits in the details — chamber geometry, beater balance, drive
            alignment and the finish of the fabrication.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src="/media/why-choose-us-main.png"
            alt="Machines ready for dispatch at Jay Ambe Food Machinery, Ahmedabad"
            className="w-full rounded-md object-cover shadow-xl"
            loading="lazy"
          />
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <div className="h-full border-l-4 border-brand-red bg-brand-cream p-6">
              <Check className="h-5 w-5 text-brand-red" strokeWidth={2.5} />
              <h3 className="mt-3 font-display text-lg font-bold uppercase leading-tight text-brand-blue">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-md bg-brand-dark p-8 md:flex-row md:items-center">
          <h2 className="font-display text-2xl font-bold uppercase text-white">
            Talk to the manufacturer directly
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/enquiry" className="rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
              Get Quote
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
              WhatsApp Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  </Layout>
);

export default WhyChooseUsPage;

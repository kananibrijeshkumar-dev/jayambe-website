import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { applications, company } from '@/data/site';

const ApplicationsPage = () => (
  <Layout>
    <Helmet>
      <title>Applications | Masala, Atta &amp; Food Grinding Machinery Uses</title>
      <meta
        name="description"
        content="Applications of Jay Ambe Food Machinery pulverizers and flour mills — masala and spice grinding, atta and flour milling, besan, dry herbs, cattle feed and dry chemicals."
      />
    </Helmet>
    <Seo title="Applications — Jay Ambe Food Machinery" description="Where our pulverizer and flour mill machines are used across Indian food processing." siteName={company.name} />

    <PageHeader
      eyebrow="Applications"
      title="Where Our Machines Are Used"
      crumb="Applications"
      description="From masala units and atta chakki shops to feed mixing and herbal processing — our grinding machinery is built for dry material processing."
    />

    <section className="mx-auto max-w-[80rem] px-6 py-16">
      <div className="space-y-12">
        {applications.map((a, i) => (
          <Reveal key={a.title} delay={0.04}>
            <article className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? 'md:[&>figure]:order-2' : ''}`}>
              <figure className="overflow-hidden rounded-md">
                <img src={a.image} alt={a.title} loading="lazy" className="h-64 w-full object-cover md:h-72" />
              </figure>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-coffee">
                  Application 0{i + 1}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold uppercase leading-tight text-brand-blue md:text-3xl">
                  {a.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{a.body}</p>
                <Link
                  to="/enquiry"
                  className="mt-5 inline-flex rounded-sm bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-red/90"
                >
                  Enquire for this application
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-14 rounded-md border border-brand-beige bg-brand-cream p-6 text-sm leading-relaxed text-slate-600">
        Grinding behaviour depends on the material, its moisture and the mesh you need. Share a sample requirement with
        our team and we will confirm the suitable machine and configuration before quoting.
      </p>
    </section>
  </Layout>
);

export default ApplicationsPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { company, gallery } from '@/data/site';

const sections = [
  { key: 'machinery', title: 'Machinery', note: 'Pulverizers, atta mills and flour mill machines from our production range.' },
  { key: 'manufacturing', title: 'Manufacturing & Dispatch', note: 'Fabrication, machining and assembly work at our own workshop.' },
  { key: 'factory', title: 'Our Manufacturing Units', note: 'Our state-of-the-art Unit 1 and Unit 2 facilities located at Panchamrut Industrial Park-4, Ahmedabad.' },
];

const GalleryPage = () => (
  <Layout>
    <Helmet>
      <title>Gallery | Machinery, Manufacturing &amp; Factory Photos, Ahmedabad</title>
      <meta
        name="description"
        content="Photo gallery of Jay Ambe Food Machinery — pulverizer and flour mill machines, in-house manufacturing work and our factory unit at Dhamatvan, Ahmedabad, Gujarat."
      />
    </Helmet>
    <Seo title="Gallery — Jay Ambe Food Machinery" description="Machinery, manufacturing and factory photographs from our Ahmedabad unit." siteName={company.name} />

    <PageHeader eyebrow="Gallery" title="Machinery, Manufacturing & Factory" crumb="Gallery" description="A look at the machines we build and the unit they are built in." />

    <div className="mx-auto max-w-[90rem] px-6 py-16">
      {sections.map((s, idx) => (
        <section key={s.key} className={idx > 0 ? 'mt-16' : ''}>
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-b-2 border-brand-blue pb-3">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase text-brand-blue md:text-3xl">{s.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{s.note}</p>
              </div>
              <span className="font-display text-3xl font-bold text-brand-beige">0{idx + 1}</span>
            </div>
          </Reveal>
          <div className={`mt-8 grid gap-4 ${s.key === 'machinery' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2'}`}>
            {gallery[s.key].map((g, i) => (
              <Reveal key={g.src} delay={i * 0.06}>
                <figure className="group overflow-hidden rounded-md border border-brand-beige bg-brand-cream">
                  {g.src.endsWith('.mp4') ? (
                    <video
                      src={g.src}
                      controls
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : (
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <figcaption className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-brand-coffee">
                    {g.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  </Layout>
);

export default GalleryPage;

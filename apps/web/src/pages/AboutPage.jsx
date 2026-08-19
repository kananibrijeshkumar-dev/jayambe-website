import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Wrench, ClipboardCheck, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { company } from '@/data/site';

const steps = [
  { icon: Users, title: 'Requirement discussion', body: 'Material, expected output, mesh and available power supply are discussed before anything is quoted.' },
  { icon: Wrench, title: 'Fabrication & machining', body: 'Bodies, base frames, grinding chambers and rotor assemblies are prepared in our own workshop.' },
  { icon: Factory, title: 'Assembly & wiring', body: 'Motor, drive and electricals are fitted and aligned by our own fitters.' },
  { icon: ClipboardCheck, title: 'Trial run & dispatch', body: 'Every machine is trial run before it is packed and dispatched from Dhamatvan, Ahmedabad.' },
];

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About Us | Food Machinery Manufacturer in Ahmedabad, Gujarat</title>
      <meta
        name="description"
        content="About Jay Ambe Food Machinery, Ahmedabad — a direct food processing machinery manufacturer in Gujarat with 30+ years of experience building pulverizers, atta mills and flour mill machines."
      />
    </Helmet>
    <Seo title="About Jay Ambe Food Machinery, Ahmedabad" description="Direct manufacturer of pulverizer, atta and flour mill machinery in Ahmedabad, Gujarat." siteName={company.name} />

    <PageHeader
      eyebrow="Since three decades"
      title="About Jay Ambe Food Machinery"
      description="A direct manufacturing unit for food pulverizer, atta, flour mill and masala grinding machinery, based at Dhamatvan, Ahmedabad, Gujarat."
    />

    <section className="mx-auto max-w-[72rem] px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-brand-blue">
            Machines built by the people who designed them
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              {company.name} has spent over three decades manufacturing grinding machinery for India&apos;s food
              processing trade. Masala units, atta chakki shops, flour mills, namkeen makers and herbal product units
              all need the same thing from a machine — a steady, repeatable output mesh, day after day. That is what our
              machines are built to deliver.
            </p>
            <p>
              We are a direct manufacturer, not a trading firm. Our unit at Plot No. 1, Panchamrut Industrial Park-4,
              Dhamatvan-Vanch Road, Ahmedabad handles fabrication, machining, assembly, electricals and trial running
              in-house. That keeps quality control and delivery in our own hands, and it means the person you speak to
              about a machine is the person who can also help you service it years later.
            </p>
            <p>
              Our regular production range covers double stage pulverizers from 5 HP to 20 HP, 10 HP impact
              pulverizers, dual chamber atta mill pulverizers, flour mill machines and complete 20 HP grinding lines
              with cyclone separators. Where a specification has not been finalised for a model, we state it as
              &quot;available on request&quot; and confirm it with you in writing rather than publishing a number we
              cannot stand behind.
            </p>
          </div>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-red/90 active:scale-[0.98]"
          >
            View our machines <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <img
            src="https://images.hostinger.com/b756166a-cf4c-4f1e-897a-23f180cfb398.png"
            alt="Jay Ambe Food Machinery factory unit at Panchamrut Industrial Park, Dhamatvan, Ahmedabad"
            className="w-full rounded-md object-cover shadow-xl"
            loading="lazy"
          />
          <dl className="mt-6 divide-y divide-brand-beige rounded-md border border-brand-beige bg-brand-cream p-6 text-sm">
            {[
              ['Business type', 'Direct manufacturer'],
              ['Experience', company.experience],
              ['Location', 'Dhamatvan, Ahmedabad, Gujarat'],
              ['Product range', 'Pulverizers, atta mills, flour mills'],
              ['Machine testing', 'Trial run before dispatch'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3 first:pt-0 last:pb-0">
                <dt className="font-semibold uppercase tracking-wide text-brand-coffee">{k}</dt>
                <dd className="text-right font-semibold text-brand-blue">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>

    <section className="bg-brand-cream py-16">
      <div className="mx-auto max-w-[80rem] px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-brand-blue">
            How a machine is built here
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="h-full border-t-4 border-brand-blue bg-white p-6 shadow-sm">
                <s.icon className="h-6 w-6 text-brand-red" strokeWidth={2} />
                <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-coffee">
                  Step 0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;

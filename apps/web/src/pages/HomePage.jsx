import WhatsAppIcon from '@/components/WhatsAppIcon';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, MapPin, Mail, Factory, Wrench, ShieldCheck, Cog } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import EnquiryForm from '@/components/EnquiryForm';
import { applications, company, gallery, products, reasons, waLink } from '@/data/site';

const ticker = [
  'Atta Pulverizer Machines',
  'Masala Pulverizer Machines',
  'Flour Mill Machines',
  'Double Stage Pulverizers',
  'Atta Chakki Machines',
  'Cyclone Grinding Lines',
];

const HomePage = () => (
  <Layout>
    <Helmet>
      <title>Atta & Masala Pulverizer Machine Manufacturer Ahmedabad | Jay Ambe Food Machinery</title>
      <meta
        name="description"
        content="Jay Ambe Food Machinery is a direct manufacturer of atta pulverizer, flour mill and masala pulverizer machines in Ahmedabad, Gujarat with 30+ years of manufacturing experience. Call +91 7201890711."
      />
      <meta
        name="keywords"
        content="Atta Pulverizer Machine Manufacturer Ahmedabad, Flour Mill Machine Manufacturer Ahmedabad, Masala Pulverizer Machine Manufacturer, Pulverizer Machine Manufacturer Gujarat, Food Machinery Manufacturer Ahmedabad, Atta Chakki Manufacturer Ahmedabad, Food Processing Machinery Manufacturer Gujarat"
      />
    </Helmet>
    <Seo
      title="Atta, Flour & Masala Pulverizer Machine Manufacturer in Ahmedabad"
      description="Direct manufacturer of food pulverizer, atta, flour mill and masala grinding machinery in Ahmedabad, Gujarat. 30+ years of manufacturing experience."
      image="https://images.hostinger.com/b192b61e-d9b4-492e-ae13-4852e65d1608.png"
      siteName={company.name}
    />

    {/* HERO */}
    <section className="relative flex min-h-[92dvh] items-center overflow-hidden bg-brand-dark">
      <img
        src="/media/hero-bg.png"
        alt="Pulverizer machine manufacturing workshop of Jay Ambe Food Machinery in Ahmedabad"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
      <div className="relative mx-auto grid w-full max-w-[90rem] gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              <Factory className="h-3.5 w-3.5" strokeWidth={2} /> Direct Manufacturer &middot; Ahmedabad
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.03] text-white sm:text-5xl lg:text-6xl">
              Atta, Flour &amp; Masala Pulverizer Machines
              <span className="mt-2 block text-brand-red">
                <span className="bg-white px-2">Direct Manufacturer</span> in Ahmedabad
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-beige/90 sm:text-lg">
              Food pulverizers, atta mills, flour mill machines and masala grinding machinery — fabricated, assembled
              and trial run at our own unit in Dhamatvan, Ahmedabad, Gujarat.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-blue transition-transform hover:bg-brand-cream active:scale-[0.98]"
              >
                View Products <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                to="/enquiry"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:bg-brand-red/90 active:scale-[0.98]"
              >
                Get Quote
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border-2 border-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" strokeWidth={2} /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="lg:justify-self-end">
          <div className="w-full max-w-sm border-l-4 border-brand-red bg-white/95 p-7 shadow-2xl backdrop-blur">
            <p className="font-display text-6xl font-bold leading-none text-brand-blue">
              <CountUp value={30} suffix="+" />
            </p>
            <p className="mt-2 font-display text-xl font-bold uppercase leading-tight text-brand-blue">
              Years of Manufacturing Experience
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Three decades of building grinding machinery for masala units, flour mills and food processing
              businesses across India.
            </p>
            <div className="mt-5 space-y-2 border-t border-brand-beige pt-4 text-sm">
              <a href={company.phoneHref} className="flex items-center gap-2 font-semibold text-brand-blue">
                <Phone className="h-4 w-4 text-brand-red" strokeWidth={2} /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all text-slate-600">
                <Mail className="h-4 w-4 text-brand-red" strokeWidth={2} /> {company.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* VIDEO DEMONSTRATION */}
    <section className="bg-brand-dark px-6 pb-20 pt-10">
      <div className="mx-auto max-w-[80rem]">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Machine In Action</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
              Watch Our Pulverizers Work
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl">
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              muted
              loop
              poster="/media/company-logo.jpeg"
            >
              <source src="/media/company-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl">
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              muted
              loop
              poster="/media/company-logo.jpeg"
            >
              <source src="/videos/company-intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>
      </div>
    </section>

    {/* TICKER */}
    <div className="overflow-hidden border-y border-brand-beige bg-brand-cream py-3">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...ticker, ...ticker].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue"
          >
            <Cog className="h-4 w-4 text-brand-red" strokeWidth={2} />
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* ABOUT */}
    <section className="mx-auto max-w-[80rem] px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <img
              src="/media/about-factory.jpg"
              alt="Jay Shree Ambe Food Machinery Manufacturing"
              className="w-full rounded-md object-cover shadow-xl"
              loading="lazy"
            />
            <img
              src="https://images.hostinger.com/8bfea4c4-ba0c-4944-a086-86c1e691592f.png"
              alt="Grinding chamber assembly detail"
              className="absolute -bottom-8 -right-4 hidden w-48 rounded-md border-4 border-white object-cover shadow-2xl sm:block"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-brand-blue md:text-4xl">
            Grinding machinery built in Ahmedabad, for Indian food processing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            {company.name} manufactures food pulverizers, atta mills, flour mill machines and masala grinding
            machinery at Panchamrut Industrial Park-4, Dhamatvan, Ahmedabad. We are a direct manufacturing unit — the
            fabrication, machining, assembly, wiring and trial running of every machine happens under our own roof.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Because we build the machines ourselves, we can plan the grinding chamber, mesh, motor rating and layout
            around the material you actually process — whether that is chilli and turmeric, wheat atta, besan or dry
            herbs.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              [Factory, 'Own manufacturing unit'],
              [Wrench, 'In-house fabrication'],
              [ShieldCheck, 'Trial run before dispatch'],
            ].map(([Icon, label]) => (
              <div key={label} className="border-t-2 border-brand-blue pt-3">
                <Icon className="h-5 w-5 text-brand-red" strokeWidth={2} />
                <p className="mt-2 text-sm font-semibold text-brand-blue">{label}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-brand-red"
          >
            More about our company <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* EXPERIENCE BAND */}
    <section className="relative overflow-hidden bg-brand-blue py-16">
      <div className="industrial-stripe absolute inset-x-0 top-0 h-1.5 opacity-70" />
      <div className="mx-auto grid max-w-[80rem] gap-10 px-6 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            <span className="text-brand-beige">30+ Years</span> of Manufacturing Experience
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ['30+', 'Years in machinery manufacturing'],
              ['6', 'Machine models in regular production'],
              ['2', 'Own units at Dhamatvan, Ahmedabad'],
            ].map(([value, label]) => (
              <div key={label} className="border-l-2 border-brand-red pl-4">
                <p className="font-display text-4xl font-bold text-white">{value}</p>
                <p className="mt-1 text-sm leading-snug text-brand-beige/85">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* CATEGORIES */}
    <section className="bg-brand-cream py-20">
      <div className="mx-auto max-w-[90rem] px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Our Specialities</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-brand-blue md:text-4xl">
                Explore our machinery lines
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-brand-blue px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              View Full Catalog <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Atta & Flour Mills',
              description: 'Commercial scale atta chakki machines for wheat, grains and besan.',
              image: '/media/5hp-atta-mill.png',
              link: '/products#atta-chakki'
            },
            {
              name: 'Masala Grinding Plants',
              description: 'Heavy drum pulverizers for coriander, cumin and blended spices.',
              image: '/media/10hp-main.png',
              link: '/products#masala-grinding'
            },
            {
              name: 'Cyclone Systems',
              description: 'Zero-dust grinding lines with attached cyclone separators and blowers.',
              image: '/media/cyclone-system-home.jpg',
              link: '/products?filter=cyclone'
            },
            {
              name: 'Spices & Chilly',
              description: 'Specialized dual-chamber machines for haldi roots and whole chillies.',
              image: '/media/5hp-main.png',
              link: '/products#haldi-grinding'
            }
          ].map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.06}>
              <Link to={cat.link} className="group block overflow-hidden rounded-md border border-brand-beige bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden bg-brand-cream/50">
                  <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="border-t border-brand-beige p-5">
                  <h3 className="font-display text-lg font-bold uppercase leading-tight text-brand-blue group-hover:text-brand-red transition-colors">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-red">Explore Line <ArrowRight className="h-3 w-3" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="mx-auto max-w-[80rem] px-6 py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Why Choose Us</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase leading-tight text-brand-blue md:text-4xl">
          Three decades of building machines, not just selling them
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-brand-beige border-y border-brand-beige">
        {reasons.slice(0, 4).map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <div className="grid gap-4 py-7 md:grid-cols-[6rem_1fr_2fr] md:items-baseline">
              <p className="font-display text-3xl font-bold text-brand-beige">0{i + 1}</p>
              <h3 className="font-display text-xl font-bold uppercase leading-tight text-brand-blue">{r.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Link
        to="/why-choose-us"
        className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-brand-red"
      >
        See all reasons <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </Link>
    </section>

    {/* APPLICATIONS */}
    <section className="bg-brand-beige/50 py-20">
      <div className="mx-auto max-w-[80rem] px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Applications</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-brand-blue md:text-4xl">
            What our machines grind
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="flex gap-4">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-sm object-cover"
                />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase leading-tight text-brand-blue">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Link
          to="/applications"
          className="mt-10 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-brand-red"
        >
          View all applications <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </section>

    {/* DIRECT MANUFACTURER */}
    <section className="bg-brand-dark py-20 text-white">
      <div className="mx-auto max-w-[90rem] px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Direct Manufacturer</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
                Inside our Ahmedabad Units
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand-blue"
            >
              Watch All Videos <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-lg border-4 border-white/10 bg-black shadow-2xl">
              <video
                src="/videos/unit1.mp4"
                controls
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold uppercase tracking-wide text-brand-beige">Unit 1 - Primary Plant</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-lg border-4 border-white/10 bg-black shadow-2xl">
              <video
                src="/videos/unit2.mp4"
                controls
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold uppercase tracking-wide text-brand-beige">Unit 2 - Expansion Plant</p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ENQUIRY + CONTACT */}
    <section className="bg-brand-dark py-20">
      <div className="mx-auto grid max-w-[80rem] gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">Customer Enquiry</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            Tell us what you grind — we will quote the right machine
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-beige/85">
            Share the material, required output and the power supply available at your site. Our team will confirm the
            suitable model, specification and price.
          </p>
          <div className="mt-8 space-y-5 border-t border-white/10 pt-8 text-sm text-brand-beige/85">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              {company.address}
            </p>
            <p className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              <a href={company.phoneHref} className="font-semibold text-white">
                {company.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              <a href={`mailto:${company.email}`} className="break-all">
                {company.email}
              </a>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-md bg-white p-6 shadow-2xl sm:p-8">
            <h3 className="font-display text-xl font-bold uppercase text-brand-blue">Send your enquiry</h3>
            <div className="mt-5">
              <EnquiryForm compact />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default HomePage;

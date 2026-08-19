import WhatsAppIcon from '@/components/WhatsAppIcon';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, MessageCircle, Navigation, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import EnquiryForm from '@/components/EnquiryForm';
import { company, waLink } from '@/data/site';

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>Contact Us | Jay Ambe Food Machinery, Dhamatvan, Ahmedabad</title>
      <meta
        name="description"
        content="Contact Jay Ambe Food Machinery, Plot No. 1, Panchamrut Industrial Park-4, Dhamatvan, Ahmedabad, Gujarat 382435. Phone and WhatsApp +91 7291890711, email supportteam@jayambefoodmachinery.com."
      />
    </Helmet>
    <Seo title="Contact Jay Ambe Food Machinery, Ahmedabad" description="Address, phone, WhatsApp and email for our Dhamatvan, Ahmedabad manufacturing unit." siteName={company.name} />

    <PageHeader eyebrow="Contact" title="Contact Us" crumb="Contact" description="Reach our manufacturing unit at Dhamatvan, Ahmedabad — by phone, WhatsApp, email or in person." />

    <section className="mx-auto max-w-[80rem] px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-2xl font-bold uppercase text-brand-blue">Company Details</h2>
          <ul className="mt-6 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              <span>
                <span className="block font-semibold uppercase tracking-wide text-brand-blue">Factory Address</span>
                <span className="mt-1 block leading-relaxed text-slate-600">{company.address}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              <span>
                <span className="block font-semibold uppercase tracking-wide text-brand-blue">Phone / WhatsApp</span>
                <a href={company.phoneHref} className="mt-1 block text-slate-600 hover:text-brand-blue">
                  {company.phone}
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              <span>
                <span className="block font-semibold uppercase tracking-wide text-brand-blue">Email</span>
                <a href={`mailto:${company.email}`} className="mt-1 block break-all text-slate-600 hover:text-brand-blue">
                  {company.email}
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2} />
              <span>
                <span className="block font-semibold uppercase tracking-wide text-brand-blue">Factory Visits</span>
                <span className="mt-1 block text-slate-600">By appointment — please call before visiting.</span>
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={company.phoneHref}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-brand-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" strokeWidth={2} /> Call Now
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
            >
              <WhatsAppIcon className="h-4 w-4" strokeWidth={2} /> WhatsApp Us
            </a>
            <a
              href={company.mapDirections}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-red/90"
            >
              <Navigation className="h-4 w-4" strokeWidth={2} /> Get Directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-md border border-brand-beige bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold uppercase text-brand-blue">Send an Enquiry</h2>
            <div className="mt-5">
              <EnquiryForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-brand-cream px-6 py-20">
      <div className="mx-auto grid max-w-[80rem] overflow-hidden rounded-lg border border-brand-beige shadow-2xl lg:grid-cols-[1.2fr_1.8fr]">
        <div className="flex flex-col justify-center bg-brand-dark p-10 text-white md:p-14">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight">Visit Our Unit</h2>
          
          <div className="mt-6 space-y-4">
            <p className="flex items-start gap-3 text-sm leading-relaxed text-brand-beige/80">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <span>{company.address}</span>
            </p>
            <p className="flex items-center gap-3 text-sm text-brand-beige/80">
              <Phone className="h-5 w-5 shrink-0 text-brand-red" />
              <a href={company.phoneHref} className="hover:text-white transition-colors">{company.phone}</a>
            </p>
            <p className="flex items-center gap-3 text-sm text-brand-beige/80">
              <Mail className="h-5 w-5 shrink-0 text-brand-red" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-white transition-colors">{company.email}</a>
            </p>
          </div>

          <a
            href={company.mapDirections}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-max items-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:bg-white hover:text-brand-red active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4" strokeWidth={2.5} /> Open in Google Maps
          </a>
        </div>
        {/* Image Composition (Replacing Map) */}
        <div className="relative w-full h-full min-h-[400px]">
          <img 
            src="/media/silver_nut_landscape.jpeg" 
            alt="Manufacturing details" 
            className="absolute inset-0 h-full w-full object-cover" 
          />
          <div className="absolute bottom-0 right-0 w-1/4 sm:w-1/5 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
            <img 
              src="/media/creative_portrait.png" 
              alt="Creative view" 
              className="w-full h-auto object-cover block" 
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;

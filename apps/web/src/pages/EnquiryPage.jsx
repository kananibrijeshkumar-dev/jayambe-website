import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import EnquiryForm from '@/components/EnquiryForm';
import { company, products, waLink } from '@/data/site';

const EnquiryPage = () => {
  const { search } = useLocation();
  const requested = new URLSearchParams(search).get('product') || '';
  const defaultProduct = products.some((p) => p.name === requested) ? requested : '';

  return (
    <Layout>
      <Helmet>
        <title>Enquiry &amp; Quotation | Jay Ambe Food Machinery, Ahmedabad</title>
        <meta
          name="description"
          content="Send an enquiry to Jay Ambe Food Machinery, Ahmedabad for pulverizer, atta mill and flour mill machine quotations. Call or WhatsApp +91 7201890711."
        />
      </Helmet>
      <Seo title="Send an Enquiry — Jay Ambe Food Machinery" description="Request a quotation for pulverizer, atta mill and flour mill machines." siteName={company.name} />

      <PageHeader
        eyebrow="Get Quote"
        title="Customer Enquiry"
        crumb="Enquiry"
        description="Share your grinding requirement and our team will confirm the suitable machine, specification and price."
      />

      <section className="mx-auto max-w-[80rem] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-md border border-brand-beige bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-brand-blue">Enquiry Form</h2>
              <p className="mt-2 text-sm text-slate-600">Fields marked * are required.</p>
              <div className="mt-6">
                <EnquiryForm defaultProduct={defaultProduct} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default EnquiryPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const OrderSuccessPage = () => {
  const location = useLocation();
  const paymentId = location.state?.paymentId || "Demo-Payment-ID";

  return (
    <Layout>
      <Helmet>
        <title>Order Successful - Jay Ambe Food Machinery</title>
      </Helmet>
      
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="rounded-full bg-green-100 p-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        
        <h1 className="mt-8 font-display text-4xl font-bold uppercase text-brand-blue">
          Order Successful!
        </h1>
        
        <p className="mt-4 max-w-md text-lg text-slate-600">
          Thank you for choosing Jay Ambe Food Machinery. Your order has been placed successfully.
        </p>

        <div className="mt-8 w-full max-w-sm rounded-md border border-slate-200 bg-brand-cream p-6 text-left shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-coffee">Payment Reference</p>
          <p className="mt-2 font-mono text-sm font-bold text-brand-blue break-all">
            {paymentId}
          </p>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Our team will contact you shortly to confirm delivery details.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:brightness-95"
        >
          Continue Browsing <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Layout>
  );
};

export default OrderSuccessPage;

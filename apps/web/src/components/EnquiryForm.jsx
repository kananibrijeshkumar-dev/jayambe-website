import WhatsAppIcon from '@/components/WhatsAppIcon';
import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { company, categories, products, waLink } from '@/data/site';
import { supabase } from '@/lib/supabase';

const inputClass =
  'w-full rounded-sm border border-brand-beige bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 disabled:bg-slate-50 disabled:text-slate-500';

const EnquiryForm = ({ defaultProduct = '', compact = false }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: defaultProduct,
    zipcode: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    setForm(prev => ({ ...prev, product: defaultProduct }));
  }, [defaultProduct]);

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [fetchingZip, setFetchingZip] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  useEffect(() => {
    if (form.zipcode.length === 6 && /^\d+$/.test(form.zipcode)) {
      setFetchingZip(true);
      fetch(`https://api.postalpincode.in/pincode/${form.zipcode}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data[0] && data[0].Status === 'Success') {
            const postOffice = data[0].PostOffice[0];
            setForm((f) => ({
              ...f,
              city: postOffice.District || postOffice.Block || postOffice.Region || '',
              state: postOffice.State || '',
            }));
          }
        })
        .catch((err) => console.error('Zip code fetch failed', err))
        .finally(() => setFetchingZip(false));
    }
  }, [form.zipcode]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^[\d\s+()-]{8,}$/.test(form.phone.trim())) next.phone = 'Please enter a valid mobile number';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const summary = () =>
    [
      'Enquiry for Jay Ambe Food Machinery',
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      form.product ? `Category: ${form.product}` : null,
      form.zipcode ? `Zip Code: ${form.zipcode}` : null,
      form.city ? `City: ${form.city}` : null,
      form.state ? `State: ${form.state}` : null,
    ]
      .filter(Boolean)
      .join('\n');

  const submit = (channel) => async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    let insertedId = null;

    // Save to Supabase first
    try {
      const { data, error } = await supabase.from('inquiries').insert([
        {
          name: form.name,
          phone: form.phone,
          product: form.product || null,
          zipcode: form.zipcode || null,
          city: form.city || null,
          state: form.state || null,
          source: 'pending'
        }
      ]).select();

      if (error) throw error;
      if (data && data[0]) {
        insertedId = data[0].id;
      }
    } catch (err) {
      console.error('Error saving to Supabase:', err);
    }

    // Save to Google Sheets / CRM
    let syncSuccess = false;
    try {
      const formData = new URLSearchParams();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("product", form.product || "");
      formData.append("zipcode", form.zipcode || "");
      formData.append("city", form.city || "");
      formData.append("state", form.state || "");
      formData.append("source", channel);

      await fetch('https://script.google.com/macros/s/AKfycbw13ktW_EZU15trRdPYOBxeNffoHUJmtSd9xGDhAkxT6AQQIVP3B34a80oqNZb-kbB_/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      syncSuccess = true;
    } catch (err) {
      console.error('Error saving to Google Sheets:', err);
      syncSuccess = false;
    }

    // Update Supabase with final sync status
    if (insertedId) {
      try {
        await supabase
          .from('inquiries')
          .update({ source: syncSuccess ? 'success' : 'failed' })
          .eq('id', insertedId);
      } catch (err) {
        console.error('Error updating sync status:', err);
      }
    }

    if (channel === 'whatsapp') {
      window.open(waLink(summary()), '_blank', 'noopener');
    } else if (channel === 'email') {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        `Machine Enquiry${form.product ? ` - ${form.product}` : ''}`
      )}&body=${encodeURIComponent(summary())}`;
    }

    setSent(true);
    if (channel === 'online') {
      setForm({ name: '', phone: '', product: defaultProduct, zipcode: '', city: '', state: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <form className="space-y-4" onSubmit={submit('online')} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-name" className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Name *
          </label>
          <input
            id="ef-name"
            className={inputClass}
            value={form.name}
            onChange={setField('name')}
            placeholder="Full name"
          />
          {errors.name && <p className="text-xs text-brand-red">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-phone" className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Mobile Number *
          </label>
          <input
            id="ef-phone"
            className={inputClass}
            value={form.phone}
            onChange={setField('phone')}
            placeholder="+91"
          />
          {errors.phone && <p className="text-xs text-brand-red">{errors.phone}</p>}
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="ef-product" className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Requirement / Machine
          </label>
          <select id="ef-product" className={inputClass} value={form.product} onChange={setField('product')}>
            <option value="">Select a category (optional)</option>
            {defaultProduct && (
              <option value={defaultProduct}>{defaultProduct}</option>
            )}
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other / Custom requirement">Other / Custom requirement</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-zip" className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Zip Code{' '}
            {fetchingZip && <span className="text-xs lowercase text-slate-400 font-normal">(checking...)</span>}
          </label>
          <input
            id="ef-zip"
            maxLength={6}
            className={inputClass}
            value={form.zipcode}
            onChange={setField('zipcode')}
            placeholder="e.g. 380001"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-city" className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            City Name
          </label>
          <input
            id="ef-city"
            className={inputClass}
            value={form.city}
            onChange={setField('city')}
            placeholder="City"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ef-state" className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            State Name
          </label>
          <input
            id="ef-state"
            className={inputClass}
            value={form.state}
            onChange={setField('state')}
            placeholder="State"
          />
        </div>
      </div>

      <div className="grid gap-3 pt-2">
        <button
          type="button"
          onClick={submit('online')}
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:brightness-95 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
        </button>
      </div>

      {sent && (
        <p className="flex items-center gap-2 rounded-sm bg-brand-cream px-4 py-3 text-sm font-medium text-brand-blue">
          <CheckCircle2 className="h-4 w-4 text-[#128C4A]" strokeWidth={2} />
          Your enquiry has been successfully saved. Our team will contact you shortly!
        </p>
      )}
      <p className="text-xs text-slate-500">
        Your enquiry reaches our team directly on {company.phone} and {company.email}.
      </p>
    </form>
  );
};

export default EnquiryForm;


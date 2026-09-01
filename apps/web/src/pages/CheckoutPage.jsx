import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '@/lib/supabase';
import Logo from '@/components/Logo';

// Add Razorpay Script loader
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [form, setForm] = useState({
    emailOrPhone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'Gujarat',
    pinCode: ''
  });

  // Redirect to home if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !isProcessing) {
      navigate('/products');
    }
  }, [cartItems, navigate, isProcessing]);

  const setField = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!form.emailOrPhone || !form.address || !form.pinCode) {
      alert("Please fill all required fields.");
      return;
    }

    setIsProcessing(true);
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setIsProcessing(false);
      return;
    }

    // Full Payment
    const amountInPaisa = cartTotal * 100;

    const options = {
      // Use live key
      key: "rzp_live_TUmhhbbddSN5xH",
      amount: amountInPaisa,
      currency: "INR",
      name: "Jay Ambe Food Machinery",
      description: "Checkout Payment",
      image: "https://jayambefoodmachinery.com/media/company-logo.jpeg",
      handler: async function (response) {
        // Payment successful
        try {
          // Save order to Supabase
          const orderDetails = `Items: ${cartItems.map(i => `${i.quantity}x ${i.name}`).join(', ')} | Total: ₹${cartTotal}`;
          
          await supabase.from('inquiries').insert([
            {
              name: `${form.firstName} ${form.lastName}`,
              phone: form.emailOrPhone,
              product: orderDetails,
              zipcode: form.pinCode,
              city: form.city,
              state: form.state,
              source: `checkout (Payment ID: ${response.razorpay_payment_id})`
            }
          ]);
          
          clearCart();
          navigate('/order-success', { state: { paymentId: response.razorpay_payment_id } });
        } catch (error) {
          console.error("Error saving order:", error);
          alert("Payment was successful but we couldn't save your order automatically. Please contact support with Payment ID: " + response.razorpay_payment_id);
        }
      },
      notes: {
        address: `${form.address}, ${form.city}, ${form.state} - ${form.pinCode}`,
      },
      theme: {
        color: "#c82021",
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (cartItems.length === 0 && !isProcessing) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>Checkout - Jay Ambe Food Machinery</title>
      </Helmet>
      
      <div className="mx-auto flex max-w-6xl flex-col-reverse lg:flex-row">
        {/* Left Side: Form */}
        <div className="flex-1 bg-white p-6 pt-10 shadow-sm lg:p-12 lg:pr-20">
          <div className="mb-8">
            <Logo />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Contact</h2>
            <span className="text-sm text-slate-500">Have an account? <a href="#" className="text-brand-blue hover:underline">Log in</a></span>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                required
                value={form.emailOrPhone}
                onChange={setField('emailOrPhone')}
                className="w-full rounded-md border border-slate-300 p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            <h2 className="pt-6 text-lg font-bold text-slate-800">Delivery</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={setField('firstName')}
                  className="w-full rounded-md border border-slate-300 p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  value={form.lastName}
                  onChange={setField('lastName')}
                  className="w-full rounded-md border border-slate-300 p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                required
                value={form.address}
                onChange={setField('address')}
                className="w-full rounded-md border border-slate-300 p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={form.city}
                  onChange={setField('city')}
                  className="w-full rounded-md border border-slate-300 p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
                <select
                  value={form.state}
                  onChange={setField('state')}
                  className="w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                >
                  <option value="Gujarat">Gujarat</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                </select>
                <input
                  type="text"
                  placeholder="PIN code"
                  required
                  value={form.pinCode}
                  onChange={setField('pinCode')}
                  className="w-full rounded-md border border-slate-300 p-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="pt-6">
              <h2 className="mb-4 text-lg font-bold text-slate-800">Payment</h2>
              <div className="rounded-md border border-slate-300 bg-slate-50 p-4">
                <div className="flex items-center gap-2 font-semibold text-slate-700">
                  <CreditCard className="h-5 w-5 text-slate-500" /> Razorpay Secure
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  After clicking "Pay now", you will be redirected to Razorpay Secure to complete your purchase safely via UPI, Credit/Debit Card, or Netbanking.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button 
                type="button" 
                onClick={() => navigate('/products')}
                className="flex items-center gap-2 text-sm text-brand-blue hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Return to shopping
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="flex items-center gap-2 rounded-md bg-brand-red px-8 py-4 font-bold text-white transition-colors hover:brightness-95 disabled:bg-slate-400"
              >
                {isProcessing ? 'Processing...' : 'Pay now'} <Lock className="h-4 w-4" />
              </button>
            </div>
          </form>
          
          <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
            All rights reserved Jay Ambe Food Machinery
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full bg-slate-50 p-6 pt-10 lg:w-[45%] lg:border-l lg:border-slate-200 lg:p-12 lg:pl-10">
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.slug} className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 rounded-md border border-slate-200 bg-white p-1">
                  <img src={item.image} alt={item.name} className="h-full w-full rounded-sm object-cover" />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-500 text-xs text-white">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800 line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-slate-500">{item.model}</p>
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  ₹{(parseInt(item.price.replace(/[^\d.]/g, ''), 10) * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Total Machine Cost</span>
              <span className="font-semibold text-slate-800">₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">Shipping <Truck className="h-4 w-4" /></span>
              <span className="text-slate-500">Free</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
            <span className="text-lg font-bold text-slate-800">Total Amount Payable</span>
            <span className="text-2xl font-bold text-brand-red">
              <span className="text-sm text-brand-red/70 font-normal mr-2">INR</span>
              ₹{cartTotal.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="mt-2 text-right text-xs text-slate-500">
            This covers the full cost of your machines. Secure payment via Razorpay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

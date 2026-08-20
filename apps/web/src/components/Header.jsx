import WhatsAppIcon from '@/components/WhatsAppIcon';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X, MessageCircle, Mail, MapPin, ChevronDown, Globe, ShoppingBag } from 'lucide-react';
import Logo from '@/components/Logo';
import { company, waLink, categories } from '@/data/site';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products', isDropdown: true },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/applications', label: 'Applications' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const changeLanguage = (langCode) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="hidden bg-brand-dark text-brand-beige md:block">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-brand-red" strokeWidth={2} />
            Dhamatvan, Ahmedabad, Gujarat 382435
          </span>
            <div className="flex items-center gap-6">
            <div id="google_translate_element" className="absolute -top-[9999px] -left-[9999px] w-[1px] h-[1px] overflow-hidden opacity-0"></div>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-brand-red" strokeWidth={2} />
              {company.email}
            </a>
            <span className="font-semibold uppercase tracking-[0.2em] text-white">{company.experience}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-brand-beige bg-white">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.to} className="group relative">
                    <button className="flex items-center gap-1 rounded-sm px-2 py-2 text-[13px] font-semibold uppercase tracking-wide text-slate-600 transition-colors hover:text-brand-blue xl:px-3 xl:text-sm">
                      {item.label} <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    <div className="invisible absolute top-full left-0 z-50 mt-0 flex w-64 flex-col opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:mt-2 group-hover:opacity-100">
                      <div className="rounded-md border border-slate-200 bg-white p-2">
                        <Link
                          to="/products"
                          className="block rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-blue hover:bg-brand-cream"
                        >
                          View All Products
                        </Link>
                        <div className="my-1 border-t border-slate-100" />
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            to={`/category/${c.slug}`}
                            className="block rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 hover:bg-brand-cream hover:text-brand-red"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-sm px-2 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors xl:px-3 xl:text-sm ${
                      isActive ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
            
            <div className="group relative ml-2">
              <button className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-semibold uppercase tracking-wide text-brand-blue bg-brand-cream hover:bg-brand-blue hover:text-white transition-colors">
                <Globe className="h-4 w-4" /> Language <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-0 flex w-36 flex-col opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:mt-2 group-hover:opacity-100">
                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 hover:bg-brand-cream hover:text-brand-blue">English</button>
                  <button onClick={() => changeLanguage('gu')} className="block w-full text-left rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 hover:bg-brand-cream hover:text-brand-blue">ગુજરાતી</button>
                  <button onClick={() => changeLanguage('hi')} className="block w-full text-left rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 hover:bg-brand-cream hover:text-brand-blue">हिन्दी</button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative ml-4 flex h-10 w-10 items-center justify-center rounded-sm bg-brand-cream text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              to="/enquiry"
              className="rounded-sm bg-brand-red px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:bg-brand-red/90 active:scale-[0.98]"
            >
              Get Quote
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm bg-brand-blue px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:bg-brand-dark active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" strokeWidth={2} /> Call Now
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-[#25D366] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#128C4A] transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" strokeWidth={2} /> WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={company.phoneHref}
              className="grid h-10 w-10 place-items-center rounded-sm bg-brand-blue text-white"
              aria-label="Call now"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-sm bg-[#25D366] text-white"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon className="h-4 w-4" strokeWidth={2} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-sm border border-brand-beige text-brand-blue lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-brand-beige bg-white px-4 pb-5 pt-2 lg:hidden">
            <nav className="flex flex-col">
              {nav.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.to} className="flex flex-col border-b border-brand-cream py-1">
                      <button 
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex items-center justify-between py-2 text-sm font-semibold uppercase tracking-wide text-slate-700"
                      >
                        {item.label} <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileProductsOpen && (
                        <div className="ml-4 flex flex-col space-y-3 pb-3 pt-2">
                          <Link to="/products" onClick={() => setOpen(false)} className="text-xs font-bold uppercase tracking-wide text-brand-blue">
                            View All Products
                          </Link>
                          {categories.map(c => (
                            <Link key={c.slug} to={`/category/${c.slug}`} onClick={() => setOpen(false)} className="text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-brand-red">
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `border-b border-brand-cream py-3 text-sm font-semibold uppercase tracking-wide ${
                        isActive ? 'text-brand-red' : 'text-slate-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              
              <div className="flex flex-col border-b border-brand-cream py-1">
                <span className="flex items-center py-2 text-sm font-semibold uppercase tracking-wide text-brand-blue">
                  <Globe className="h-4 w-4 mr-2" /> Select Language
                </span>
                <div className="ml-6 flex flex-col space-y-3 pb-3 pt-2">
                  <button onClick={() => { changeLanguage('en'); setOpen(false); }} className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-brand-red">English</button>
                  <button onClick={() => { changeLanguage('gu'); setOpen(false); }} className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-brand-red">ગુજરાતી</button>
                  <button onClick={() => { changeLanguage('hi'); setOpen(false); }} className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-brand-red">हिन्दी</button>
                </div>
              </div>
            </nav>
            <Link
              to="/enquiry"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-sm bg-brand-red px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
      <div className="industrial-stripe h-1.5 bg-brand-cream" />
      <CartDrawer />
    </header>
  );
};

export default Header;

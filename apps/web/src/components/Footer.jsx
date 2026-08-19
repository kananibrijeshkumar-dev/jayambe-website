import WhatsAppIcon from '@/components/WhatsAppIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';
import { company, categories, waLink } from '@/data/site';

const Footer = () => (
  <footer className="bg-brand-dark text-brand-beige">
    <div className="industrial-stripe h-1.5" />
    <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
      <div>
        <Logo light />
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-beige/80">
          Direct manufacturer of food pulverizer, atta, flour mill and masala grinding machinery from Dhamatvan,
          Ahmedabad — with {company.experience.toLowerCase()}.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={company.social.facebook}
            aria-label="Facebook"
            className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-to-br from-[#1877F2] to-[#1056b3] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_6px_rgba(24,119,242,0.4)] border border-[#1877F2]/50 transition-all hover:-translate-y-1 hover:scale-110"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a
            href={company.social.instagram}
            aria-label="Instagram"
            className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_6px_rgba(220,39,67,0.4)] border border-[#dc2743]/50 transition-all hover:-translate-y-1 hover:scale-110"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a
            href={company.social.youtube}
            aria-label="YouTube"
            className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-to-br from-[#FF0000] to-[#b30000] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_6px_rgba(255,0,0,0.4)] border border-[#FF0000]/50 transition-all hover:-translate-y-1 hover:scale-110"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp us"
            className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_6px_rgba(37,211,102,0.4)] border border-[#25D366]/50 transition-all hover:-translate-y-1 hover:scale-110"
          >
            <WhatsAppIcon className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>

      <div>
        <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Our Products</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link to={`/category/${c.slug}`} className="text-brand-beige/80 hover:text-white">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Company</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {[
            ['/', 'Home'],
            ['/about', 'About Us'],
            ['/products', 'Products'],
            ['/why-choose-us', 'Why Choose Us'],
            ['/applications', 'Applications'],
            ['/gallery', 'Gallery'],
            ['/contact', 'Contact Us'],
            ['/enquiry', 'Send Enquiry'],
          ].map(([to, label]) => (
            <li key={to}>
              <Link to={to} className="text-brand-beige/80 hover:text-white">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Contact</h2>
        <ul className="mt-4 space-y-4 text-sm">
          <li className="flex gap-3 items-start">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(220,38,38,0.4)] border border-red-500/50">
              <MapPin className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-brand-beige/80">{company.address}</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(220,38,38,0.4)] border border-red-500/50">
              <Phone className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
            <a href={company.phoneHref} className="text-brand-beige/80 hover:text-white">
              {company.phone}
            </a>
          </li>
          <li className="flex gap-3 items-start">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(220,38,38,0.4)] border border-red-500/50">
              <Mail className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
            <a href={`mailto:${company.email}`} className="break-all text-brand-beige/80 hover:text-white">
              {company.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-brand-beige/60">
      &copy; {new Date().getFullYear()} {company.name}, Ahmedabad, Gujarat, India. All rights reserved.
    </div>
  </footer>
);

export default Footer;

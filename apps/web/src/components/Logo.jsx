import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ light = false, className = '' }) => (
  <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Jay Ambe Food Machinery home">
    <img src="/media/company-logo.jpeg" alt="Jay Shree Ambe Food Machinery Logo" className="h-12 w-auto object-contain rounded-sm" />
    <span className="leading-tight">
      <span
        className={`block font-display text-lg font-bold uppercase tracking-wide sm:text-xl ${
          light ? 'text-white' : 'text-brand-blue'
        }`}
      >
        Jay Shree Ambe
      </span>
      <span
        className={`block text-[11px] font-medium uppercase tracking-[0.18em] ${
          light ? 'text-brand-beige' : 'text-brand-coffee'
        }`}
      >
        Food Machinery
      </span>
    </span>
  </Link>
);

export default Logo;

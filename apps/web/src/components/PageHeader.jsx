import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ eyebrow, title, description, crumb }) => (
  <section className="relative overflow-hidden bg-brand-blue">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'url(/media/page-header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-[72rem] px-6 py-14 md:py-20">
      <nav className="mb-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-beige/80">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-white">{crumb || title}</span>
      </nav>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          <span className="rounded-sm bg-brand-red px-2 py-1 text-white">{eyebrow}</span>
        </p>
      )}
      <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-white md:text-5xl">{title}</h1>
      {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-beige/90">{description}</p>}
    </div>
  </section>
);

export default PageHeader;

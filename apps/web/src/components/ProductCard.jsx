import WhatsAppIcon from '@/components/WhatsAppIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, FileText, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-[0_18px_36px_-12px_rgba(214,88,27,0.22)]">
      {/* Real machine image — identical ratio across all cards */}
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border-b border-slate-200 bg-brand-cream"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} manufactured by Jay Ambe Food Machinery, Ahmedabad`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-brand-blue/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
          {product.subtitle}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {/* Product name + short description */}
        <h3 className="font-display text-lg font-bold uppercase leading-tight text-brand-blue">
          <Link to={`/products/${product.slug}`} className="transition-colors hover:text-brand-red">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 min-h-[40px] text-[13px] leading-relaxed text-slate-600">
          {product.short}
        </p>

        {product.price && (
          <div className="mt-2 text-base font-bold text-brand-red">
            {product.price}
          </div>
        )}

        {/* Compact professional specification strip */}
        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-slate-200 bg-slate-200">
          {product.cardSpecs.map(([label, value]) => (
            <div key={label} className="bg-slate-50 px-3 py-2.5">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-coffee">{label}</dt>
              <dd className="mt-0.5 text-xs font-bold leading-snug text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Buttons — identical placement across all cards */}
        <div className="mt-5 flex flex-1 flex-col justify-end gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand-blue px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark active:scale-[0.98]"
          >
            View Details <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex w-full items-center justify-center gap-1.5 rounded-sm bg-green-600 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-700 shadow-sm active:scale-[0.98]"
          >
            <ShoppingCart className="h-3.5 w-3.5" strokeWidth={2.5} /> Buy Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

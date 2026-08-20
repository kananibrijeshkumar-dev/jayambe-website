import React from 'react';
import { X, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 z-[110] flex w-full max-w-md flex-col bg-white shadow-2xl sm:max-w-lg animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between border-b border-brand-beige px-6 py-4 bg-brand-cream">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-brand-blue">
            <ShoppingBag className="h-5 w-5 text-brand-red" />
            Shopping Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-slate-500 hover:bg-brand-beige hover:text-brand-red transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-brand-cream p-6">
                <ShoppingBag className="h-12 w-12 text-brand-beige" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-brand-blue">Your cart is empty</p>
                <p className="mt-1 text-sm text-slate-500">Looks like you haven't added any machines yet.</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:brightness-95"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.slug} className="flex gap-4 border-b border-brand-beige pb-6 last:border-0">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-brand-cream">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-display text-sm font-bold uppercase text-brand-blue">
                          <Link to={`/products/${item.slug}`} onClick={() => setIsCartOpen(false)} className="hover:text-brand-red">
                            {item.name}
                          </Link>
                        </h3>
                        <button onClick={() => removeFromCart(item.slug)} className="text-slate-400 hover:text-brand-red">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-1">{item.model}</p>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex items-center gap-3 rounded-sm border border-slate-200 p-1">
                        <button 
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="rounded-sm p-1 text-slate-500 hover:bg-slate-100"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-semibold text-brand-blue">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="rounded-sm p-1 text-slate-500 hover:bg-slate-100"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="font-display text-sm font-bold text-brand-red">
                        ₹{(parseInt(item.price.replace(/[^\d.]/g, ''), 10) * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-brand-beige bg-slate-50 p-6">
            <div className="flex items-center justify-between text-base font-bold text-brand-blue">
              <span>Subtotal:</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Shipping and taxes calculated at checkout.</p>
            <button
              onClick={handleCheckout}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-green-600 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-700 shadow-md"
            >
              Checkout <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

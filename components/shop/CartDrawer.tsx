'use client';

import { useCart } from '@/lib/store';
import { formatINR } from '@/products';

export default function CartDrawer() {
  const { isOpen, items, closeCart, removeItem } = useCart();

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.product.priceINR * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm">
      <div className="ml-auto flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#140c0c] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Your cart</h2>
          <button onClick={closeCart} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80">
            Close
          </button>
        </div>

        <div className="mt-6 flex-1 space-y-4 overflow-auto">
          {items.length === 0 ? (
            <p className="text-white/65">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.selectedColor}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold">{item.product.name}</p>
                <p className="mt-1 text-sm text-white/65">{item.selectedColor} · Qty {item.quantity}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span>{formatINR(item.product.priceINR * item.quantity)}</span>
                  <button
                    onClick={() => removeItem(item.product.id, item.selectedColor)}
                    className="text-sm text-brand-goldLight"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-white/10 pt-4">
          <div className="mb-4 flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatINR(total)}</span>
          </div>
          <button className="btn-primary w-full">Checkout placeholder</button>
        </div>
      </div>
    </div>
  );
}

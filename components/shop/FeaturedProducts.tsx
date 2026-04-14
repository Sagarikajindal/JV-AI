'use client';

import Image from 'next/image';
import { featuredProducts, formatINR } from '@/products';
import { useCart } from '@/lib/store';

export default function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section id="featured" className="py-20">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-goldLight">Featured pieces</p>
            <h2 className="section-title mt-3">A premium first edit for your homepage.</h2>
          </div>
          <p className="max-w-xl text-white/65">
            These are sample products wired into the site. Replace images and copy with your real product shots when ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[4/5] bg-black/20">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-goldLight">{product.category}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{product.name}</h3>
                <p className="mt-2 text-sm text-white/70">{product.shortDesc}</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-lg font-semibold">{formatINR(product.priceINR)}</p>
                  <button onClick={() => addItem(product)} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-black">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

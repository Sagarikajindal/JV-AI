'use client';

import Link from 'next/link';

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

export default function Hero() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    'Hi! I would like to enquire about your sarees and lehengas.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-goldLight">
            Chandni Chowk, Delhi · Est. 2025
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            India&apos;s Finest Sarees &amp; Lehengas, delivered to your door.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Every piece is hand-picked for bridal, festive and statement dressing — with video consultation,
            worldwide shipping, and a premium boutique feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#featured" className="btn-primary">
              Shop Featured Pieces
            </Link>
            <Link href={waLink} className="btn-secondary" target="_blank">
              Free Video Consultation
            </Link>
          </div>
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-goldLight">
            FREE SHIPPING TO UK · UAE · EUROPE · USA · CANADA
          </div>
        </div>

        <div className="gold-border rounded-[2rem] bg-[linear-gradient(180deg,rgba(198,169,107,0.18),rgba(110,31,44,0.16))] p-8 shadow-soft">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-8 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-goldLight">Why customers choose us</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">150+</p>
                <p className="mt-2 text-white/70">5-star Google reviews</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">7.2K</p>
                <p className="mt-2 text-white/70">YouTube subscribers</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">Worldwide</p>
                <p className="mt-2 text-white/70">Shipping support</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">1:1</p>
                <p className="mt-2 text-white/70">Personal styling guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

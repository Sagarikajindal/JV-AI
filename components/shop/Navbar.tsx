'use client';

import Link from 'next/link';
import { Menu, ShoppingBag, X, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/store';

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
const YT_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://www.youtube.com/@JindalVastrakala';

const navLinks = [
  { href: '#collections', label: 'Collections' },
  { href: '#featured', label: 'Featured' },
  { href: '#story', label: 'Story' },
  { href: '#policies', label: 'Policies' }
];

export default function Navbar() {
  const { count, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hi! I would like to join your WhatsApp broadcast list.'
  )}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#130b0b]/90 backdrop-blur-xl">
      <div className="border-b border-white/10 bg-[#1b1111] text-center text-xs uppercase tracking-[0.22em] text-brand-goldLight">
        <div className="container-shell flex min-h-10 items-center justify-center gap-3 py-2 text-center">
          <span>Free worldwide shipping · UK · UAE · Europe · USA</span>
          <Link href={whatsappLink} target="_blank" className="underline underline-offset-4">
            Join WhatsApp Broadcast
          </Link>
        </div>
      </div>

      <div className="container-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-[0.18em] text-brand-goldLight">JINDAL VASTRAKALA</span>
          <span className="text-xs text-white/60">Timeless Sarees. Woven Traditions.</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/80 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={YT_URL} target="_blank" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 lg:inline-flex lg:items-center lg:gap-2">
            <Youtube size={16} /> 7.2K
          </Link>
          <button onClick={toggleCart} className="relative rounded-full border border-white/10 p-3 text-white" aria-label="Open cart">
            <ShoppingBag size={18} />
            {count() > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-xs font-semibold text-black">
                {count()}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen((v) => !v)} className="rounded-full border border-white/10 p-3 text-white lg:hidden" aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container-shell border-t border-white/10 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/80">
                {link.label}
              </Link>
            ))}
            <Link href={whatsappLink} target="_blank" className="text-sm text-brand-goldLight">
              Join WhatsApp Broadcast
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

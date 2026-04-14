import Link from 'next/link';

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hi! I am interested in your collection.'
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-soft"
    >
      WhatsApp Us
    </Link>
  );
}

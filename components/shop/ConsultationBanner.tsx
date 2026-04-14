import Link from 'next/link';

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

export default function ConsultationBanner() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hi! I would like to book a free video consultation for saree or lehenga shopping.'
  )}`;

  return (
    <section className="py-10">
      <div className="container-shell rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(198,169,107,0.22),rgba(110,31,44,0.16))] p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.26em] text-brand-goldLight">Free consultation</p>
            <h2 className="mt-3 text-3xl font-semibold">Need help choosing for your occasion?</h2>
            <p className="mt-3 text-white/75">
              Offer 1:1 WhatsApp or video consultation for bridal shopping, gifting, trousseau planning and international orders.
            </p>
          </div>
          <Link href={waLink} target="_blank" className="btn-primary">
            Book on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

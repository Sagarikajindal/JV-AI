import Link from 'next/link';

const YT_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://www.youtube.com/@JindalVastrakala';

export default function YouTubeBanner() {
  return (
    <section className="py-10">
      <div className="container-shell rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.26em] text-brand-goldLight">Social proof</p>
            <h2 className="mt-3 text-3xl font-semibold">Show the people behind the store.</h2>
            <p className="mt-3 text-white/75">
              Link your YouTube customer reviews, saree drapes, new arrivals and styling reels to make the site feel more trustworthy.
            </p>
          </div>
          <Link href={YT_URL} target="_blank" className="btn-secondary">
            Visit YouTube · 7.2K
          </Link>
        </div>
      </div>
    </section>
  );
}

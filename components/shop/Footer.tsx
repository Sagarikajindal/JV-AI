export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-white/60">
      <div className="container-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-brand-goldLight">Jindal Vastrakala</p>
          <p className="mt-2 text-sm">Chandni Chowk, Delhi · Premium sarees and lehengas.</p>
        </div>
        <p className="text-sm">Built as a fixed, Vercel-ready starter version.</p>
      </div>
    </footer>
  );
}

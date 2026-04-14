import Link from 'next/link';

const categories = [
  {
    name: 'Sarees',
    href: '#featured',
    description: 'Banarasi · Chanderi · Tissue Silk · Patola-inspired styles'
  },
  {
    name: 'Lehengas',
    href: '#featured',
    description: 'Bridal · Sangeet · Reception · Statement festive edits'
  }
];

export default function CategoryGrid() {
  return (
    <section id="collections" className="py-20">
      <div className="container-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-goldLight">Our collections</p>
          <h2 className="section-title mt-3">Curated for bridal, festive and timeless dressing.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="gold-border rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(198,169,107,0.08))] p-8 transition hover:-translate-y-1"
            >
              <p className="text-3xl font-semibold">{category.name}</p>
              <p className="mt-3 max-w-md text-white/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

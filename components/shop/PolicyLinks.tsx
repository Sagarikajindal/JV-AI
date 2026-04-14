const policies = [
  'Worldwide shipping support',
  'WhatsApp consultation before purchase',
  'Clear dispatch and care guidance',
  'Premium support for bridal orders'
];

export default function PolicyLinks() {
  return (
    <section id="policies" className="pb-20 pt-6">
      <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {policies.map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-white/75">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

const segments = [
  "Salons & spas",
  "Real estate agents",
  "Clinics",
  "Boutiques & retail",
  "Car dealerships",
  "Restaurants",
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-cream-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between md:px-10">
        <p className="text-[13px] uppercase tracking-[0.08em] text-ink-soft">
          Built for businesses in the Major Cities of Africa
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-ink-soft md:justify-end">
          {segments.map((segment) => (
            <li key={segment}>{segment}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

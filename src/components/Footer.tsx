import NestMark from "./NestMark";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI receptionist", href: "#services" },
      { label: "AI website builder", href: "#services" },
      { label: "AI lead engine", href: "#services" },
      { label: "High-converting ads", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Founding cohort", href: "#founding" },
      { label: "Book an audit", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <NestMark />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              AI systems for businesses across Africa — built so no lead goes
              cold and no customer waits.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-soft">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-[13px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nest AI. Accra · Lagos.</p>
          <p>hello@nest-ai.co</p>
        </div>
      </div>
    </footer>
  );
}

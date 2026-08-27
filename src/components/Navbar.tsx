import Link from "next/link";
import NestMark from "./NestMark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#founding", label: "Founding cohort" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="#top"
          className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          <NestMark />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] text-ink-soft transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-forest px-5 py-2.5 text-[14px] font-medium text-cream transition-colors hover:bg-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest md:inline-block"
        >
          Book a free audit
        </a>

        <a
          href="#contact"
          className="inline-block rounded-full bg-forest px-4 py-2 text-[13px] font-medium text-cream md:hidden"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}

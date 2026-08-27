import NestWeave from "./NestWeave";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-20 lg:px-10">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-cream-soft px-3.5 py-1.5 text-[13px] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Now taking on founding clients in Ghana &amp; Nigeria
          </p>

          <h1 className="font-display text-[42px] leading-[1.08] tracking-[-0.01em] text-ink sm:text-[52px] lg:text-[58px]">
            Every unanswered message is a customer{" "}
            <span className="italic text-clay">walking to your competitor.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-soft">
            Nest AI builds the systems that catch every lead the moment it
            arrives — a WhatsApp receptionist that replies in seconds, a
            website that converts, and an engine that keeps following up
            until the sale is won.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3.5 text-[15px] font-medium text-cream transition-colors hover:bg-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            >
              Book a free automation audit
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-1.5 px-2 py-3.5 text-[15px] font-medium text-ink transition-colors hover:text-forest"
            >
              See what we build
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-8 text-[13px] text-ink-soft">
            No contract lock-in for pilots. Built around WhatsApp, the way
            African businesses already sell.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md md:max-w-none">
          <NestWeave />
        </div>
      </div>
    </section>
  );
}

const perks = [
  "Founding pricing, locked in for 12 months",
  "You help shape the product — your feedback goes straight into what we build next",
  "First case study featured on our site, with your permission",
  "Direct access to the founder, not a support queue",
];

export default function FoundingCohort() {
  return (
    <section id="founding" className="bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-clay">
              Honest, upfront
            </p>
            <h2 className="mt-4 font-display text-[32px] leading-[1.15] text-ink sm:text-[38px]">
              We&rsquo;re opening a founding cohort of 5 businesses.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              Nest AI is new, and we&rsquo;d rather tell you that directly
              than paste in stats that aren&rsquo;t real yet. What you get
              instead: closer attention, faster changes, and pricing that
              won&rsquo;t be offered again once these five spots are taken.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-cream p-8">
            <p className="text-[13px] uppercase tracking-[0.08em] text-ink-soft">
              What founding clients get
            </p>
            <ul className="mt-5 space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-3 text-[15px] text-ink">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {perk}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-ink-soft">
              First 5 businesses only — after that, founding pricing closes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

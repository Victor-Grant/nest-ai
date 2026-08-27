const steps = [
  {
    n: "01",
    title: "Free automation audit",
    text: "We look at how leads currently reach you — WhatsApp, calls, walk-ins — and find exactly where they're going cold.",
  },
  {
    n: "02",
    title: "We build your system",
    text: "Your AI receptionist, website, or lead engine is built around your real business: your prices, services, and tone.",
  },
  {
    n: "03",
    title: "You test it live",
    text: "We run it alongside how you work today. Nothing switches over until you've seen it handle real conversations.",
  },
  {
    n: "04",
    title: "We tune and expand",
    text: "Once it's catching leads reliably, we layer in ads, nurturing, or reactivation to grow what's already working.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-clay">
        How it works
      </p>
      <h2 className="mt-4 max-w-lg font-display text-[32px] leading-[1.15] text-ink sm:text-[38px]">
        From first conversation to live system in about two weeks.
      </h2>

      <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.n} className="relative">
            <span className="font-display text-[15px] text-gold">
              {step.n}
            </span>
            <h3 className="mt-3 text-[17px] font-medium text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              {step.text}
            </p>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-[-20px] top-1.5 hidden h-px w-10 bg-line md:block"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

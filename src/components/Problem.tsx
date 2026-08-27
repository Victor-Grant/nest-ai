const moments = [
  {
    time: "9:14 am",
    text: "\u201cHi, do you have this in size 42?\u201d",
    outcome: "No reply for 6 hours. Customer buys elsewhere.",
  },
  {
    time: "1:40 pm",
    text: "\u201cHow much for the 3-bedroom in Osu?\u201d",
    outcome: "Seen, not answered. Lead goes cold by evening.",
  },
  {
    time: "7:02 pm",
    text: "\u201cAre you open tomorrow for a haircut?\u201d",
    outcome: "Owner sees it the next morning. Too late.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-clay">
            The real cost
          </p>
          <h2 className="mt-4 font-display text-[32px] leading-[1.15] text-ink sm:text-[38px]">
            You&rsquo;re not losing customers to competitors. You&rsquo;re
            losing them to slow replies.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
            Most businesses lose leads quietly. A message comes in while
            you&rsquo;re with a customer, driving, or asleep. By the time
            you reply, they&rsquo;ve already messaged the next business on
            their list. Nest AI closes that gap.
          </p>
        </div>

        <div className="space-y-4">
          {moments.map((m) => (
            <div
              key={m.text}
              className="rounded-2xl border border-line bg-cream-soft px-6 py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[15px] text-ink">{m.text}</p>
                <span className="shrink-0 text-[12px] text-ink-soft">
                  {m.time}
                </span>
              </div>
              <p className="mt-2.5 text-[13px] text-clay">{m.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

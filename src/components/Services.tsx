type Service = {
  name: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
};

function Icon({ path }: { path: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const services: Service[] = [
  {
    name: "AI receptionist",
    description:
      "Replies to WhatsApp messages in seconds, using your real prices, services, and availability — so a lead never goes cold waiting on you.",
    points: [
      "Answers common questions instantly, day or night",
      "Books appointments and takes orders directly in chat",
      "Hands off to you the moment a conversation needs a human",
    ],
    icon: (
      <Icon path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    name: "AI website builder",
    description:
      "A fast, mobile-first website built to turn visitors into WhatsApp conversations and bookings — not just a digital business card.",
    points: [
      "Live in days, not months",
      "Built to load fast on the networks your customers actually use",
      "Every page pushes toward a call, message, or booking",
    ],
    icon: (
      <Icon path="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 3.5 9 14.5 14.5 0 0 1-3.5 9 14.5 14.5 0 0 1-3.5-9A14.5 14.5 0 0 1 12 3Z" />
    ),
  },
  {
    name: "AI lead engine",
    description:
      "Finds new leads, nurtures the ones sitting quiet in your chats, and reactivates old contacts who went cold months ago.",
    points: [
      "Generates fresh leads from your existing audience and outreach",
      "Follows up automatically until someone books or opts out",
      "Reopens old conversations with the right offer at the right time",
    ],
    icon: (
      <Icon path="M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6M18.5 7.4V4M18.5 7.4H15M5.5 16.6V20M5.5 16.6H9" />
    ),
  },
  {
    name: "High-converting ads",
    description:
      "We plan, launch, and manage ad campaigns built to feed your receptionist and lead engine with people ready to buy.",
    points: [
      "Campaigns built around cost per real lead, not just clicks",
      "Creative and targeting tuned to Ghanaian and Nigerian audiences",
      "Weekly reporting in plain language, no jargon",
    ],
    icon: (
      <Icon path="M3 11l18-7-7 18-3.5-7.5L3 11Z" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-forest-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-gold-soft">
            What we build
          </p>
          <h2 className="mt-4 font-display text-[32px] leading-[1.15] text-cream sm:text-[38px]">
            Four systems. One job: never let a customer slip through.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-cream/12 bg-cream/[0.04] p-7 transition-colors hover:border-cream/25"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                {service.icon}
              </div>
              <h3 className="mt-5 font-display text-[21px] text-cream">
                {service.name}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-cream/70">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-cream/10 pt-5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-[13.5px] leading-relaxed text-cream/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-soft" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

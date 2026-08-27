"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  const handleSubmit = () => {
    // Handle form submission logic here
  };
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
    >
      <div className="rounded-3xl border border-line bg-forest px-8 py-14 text-center sm:px-16 sm:py-20">
        <h2 className="mx-auto max-w-xl font-display text-[32px] leading-[1.15] text-cream sm:text-[40px]">
          Let&rsquo;s find out how many leads you&rsquo;re losing this week.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-cream/70">
          A free 20-minute audit. No pitch deck, no pressure — just a clear look
          at where your business is losing customers, and what fixing it would
          look like.
        </p>

        {/* <form
          className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="hero-email" className="sr-only">
            WhatsApp number or email
          </label>
          <input
            id="hero-email"
            type="text"
            placeholder="WhatsApp number or email"
            className="w-full rounded-full border border-cream/25 bg-cream/10 px-5 py-3.5 text-[15px] text-cream placeholder:text-cream/50 focus:border-gold-soft focus:outline-none"
          />
        </form> */}
        <div className="py-2">
          <button className="shrink-0 rounded-full bg-gold px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">
            <a href="https://wa.me/233593431363">Book my audit</a>
          </button>
        </div>

        <p className="mt-4 text-[13px] text-cream/50">
          We reply on WhatsApp within a few minutes.
        </p>
      </div>
    </section>
  );
}

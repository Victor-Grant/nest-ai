type NestMarkProps = {
  className?: string;
  tone?: "ink" | "cream";
};

export default function NestMark({ className = "", tone = "ink" }: NestMarkProps) {
  const strokeColor = tone === "ink" ? "#21261D" : "#F6F1E4";
  const goldColor = "#B5822C";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 24C6 24 11 16 20 16C29 16 34 24 34 24"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 27C4 27 10.5 19.5 20 19.5C29.5 19.5 36 27 36 27"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M9 22C9 22 13.5 27 20 27C26.5 27 31 22 31 22"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.4"
        />
        <circle cx="17" cy="22.5" r="2.4" fill={goldColor} />
        <circle cx="22.5" cy="21.5" r="2.1" fill={goldColor} opacity="0.75" />
      </svg>
      <span
        className={`font-display text-[19px] leading-none ${
          tone === "ink" ? "text-ink" : "text-cream"
        }`}
      >
        Nest <span className="text-gold">AI</span>
      </span>
    </div>
  );
}

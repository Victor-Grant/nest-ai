export default function NestWeave() {
  const channels = [
    { label: "WhatsApp", x: 60, y: 90, tx: 225, ty: 245 },
    { label: "Website", x: 540, y: 80, tx: 375, ty: 240 },
    { label: "Ads", x: 570, y: 400, tx: 385, ty: 340 },
    { label: "Leads", x: 45, y: 420, tx: 220, ty: 350 },
  ];

  return (
    <svg
      viewBox="0 0 600 500"
      className="w-full h-auto max-w-[520px]"
      role="img"
      aria-label="Illustration of scattered customer channels weaving together into one nest"
    >
      <title>Scattered channels, woven into one system</title>

      {channels.map((c) => (
        <g key={c.label}>
          <line
            x1={c.x}
            y1={c.y}
            x2={c.tx}
            y2={c.ty}
            stroke="#B5822C"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.45"
          />
          <circle cx={c.x} cy={c.y} r="4" fill="#A8552F" opacity="0.8" />
          <text
            x={c.x}
            y={c.y - 14}
            textAnchor="middle"
            className="fill-ink-soft"
            style={{ fontSize: "13px", fontFamily: "var(--font-sans)" }}
          >
            {c.label}
          </text>
        </g>
      ))}

      <g transform="translate(300 300)">
        <path
          d="M-120 40C-120 40 -60 -60 0 -60C60 -60 120 40 120 40"
          stroke="#33513C"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-135 55C-135 55 -66 -35 0 -35C66 -35 135 55 135 55"
          stroke="#B5822C"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M-108 68C-108 68 -54 -6 0 -6C54 -6 108 68 108 68"
          stroke="#33513C"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M-80 78C-80 78 -40 24 0 24C40 24 80 78 80 78"
          stroke="#A8552F"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        <circle
          cx="-18"
          cy="30"
          r="7"
          fill="#B5822C"
          className="motion-safe:animate-[nestpulse_2.8s_ease-in-out_infinite]"
        />
        <circle cx="6" cy="20" r="5.5" fill="#33513C" opacity="0.85" />
        <circle cx="22" cy="34" r="5" fill="#A8552F" opacity="0.85" />
      </g>
    </svg>
  );
}

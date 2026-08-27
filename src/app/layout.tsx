import type { Metadata } from "next";
import "@fontsource-variable/fraunces/standard.css";
import "@fontsource-variable/fraunces/standard-italic.css";
import "@fontsource-variable/inter/standard.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nest AI — AI systems that bring your business home more customers",
  description:
    "Nest AI builds WhatsApp receptionists, websites, and lead engines for businesses across Ghana and Nigeria — so no lead goes cold and no customer waits.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}

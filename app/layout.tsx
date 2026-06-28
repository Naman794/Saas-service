import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Service Studio | Systems, Websites, Backend & Automation",
  description: "We build community systems, websites, backend workflows, automation and growth infrastructure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Hong Kong New Energy & Digital Technology Ecosystem",
    template: "%s | Hong Kong New Energy & Digital Technology Ecosystem",
  },
  description:
    "A professional information platform covering new energy, blockchain infrastructure, green finance and Hong Kong innovation technology.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

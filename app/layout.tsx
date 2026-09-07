import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: {
    default: "TerraHash Energy Hong Kong",
    template: "%s | TerraHash Energy Hong Kong",
  },
  description:
    "TerraHash Energy Hong Kong — Connecting Clean Energy with Trusted Digital Infrastructure. Focus areas include energy storage, smart energy and blockchain infrastructure research.",
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

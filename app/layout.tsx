import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Smart Digital Solutions`,
    template: `%s | ${site.name}`,
  },
  description:
    "Mobile app development and custom WordPress themes for founders, agencies, and growing teams. Clean engineering, fast delivery, and a polished finish.",
  openGraph: {
    title: `${site.name} | Smart Digital Solutions`,
    description:
      "Mobile app development and custom WordPress themes. Clear communication, clean builds, and reliable delivery.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main
          id="content"
          className="dn-page dn-appear min-h-dvh bg-[color:var(--paper)] pt-[76px]"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

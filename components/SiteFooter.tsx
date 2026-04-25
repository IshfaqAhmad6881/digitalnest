import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { PricingPlans } from "@/components/PricingPlans";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5">
      <section className="bg-[color:var(--ink)] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
              Pricing
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight sm:text-4xl">
              Pricing Made Easy
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Pick a starting package, then we refine scope based on your
              requirements. You can also request a custom quote for complex
              builds.
            </p>
          </div>

          <PricingPlans />
        </div>
      </section>

      <section className="bg-[color:var(--shell)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="space-y-3 md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9">
                  <Image
                    src="/brand/logo-mark-256.png"
                    alt={`${site.name} logo`}
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div className="text-sm font-extrabold tracking-tight text-[color:var(--ink)]">
                  {site.name}
                </div>
              </div>
              <p className="max-w-sm text-sm text-[color:var(--muted)]">
                {site.tagline}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <a
                  aria-label="Email"
                  href={`mailto:${site.email}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[color:var(--ink)] hover:bg-black/5"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M2.94 6.34A2 2 0 0 1 4.5 5.5h11a2 2 0 0 1 1.56.84L10 11.13 2.94 6.34Z" />
                    <path d="M2.5 7.9V13.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.9l-7.2 4.98a1 1 0 0 1-1.1 0L2.5 7.9Z" />
                  </svg>
                </a>
                <a
                  aria-label="Work"
                  href="/work"
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[color:var(--ink)] hover:bg-black/5"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M6 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h-2V6H8v1H6V6Z" />
                    <path d="M4 7h12a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-3.5V12h-3v1.5H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
                    <path d="M2 12.5V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5h-3.5V14h-3v-1.5h-3V14H6.5v-1.5H2Z" />
                  </svg>
                </a>
                <a
                  aria-label="Contact"
                  href="/contact"
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[color:var(--ink)] hover:bg-black/5"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M2.5 4.5A2 2 0 0 1 4.5 2.5h6A2 2 0 0 1 12.5 4.5v11a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-11Zm2 0v11h6v-11h-6Z" />
                    <path d="M14 6.5a3.5 3.5 0 1 1 0 7h-1v-2h1a1.5 1.5 0 1 0 0-3h-1v-2h1Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
              <div className="grid gap-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                  Categories
                </div>
                <Link href="/services" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Mobile Development
                </Link>
                <Link href="/services" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  WordPress Themes
                </Link>
                <Link href="/services" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Web Dashboards
                </Link>
              </div>

              <div className="grid gap-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                  For Clients
                </div>
                <Link href="/work" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Case Studies
                </Link>
                <Link href="/reviews" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Reviews
                </Link>
                <Link href="/contact?intent=quote" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Request a Quote
                </Link>
              </div>

              <div className="grid gap-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                  Company
                </div>
                <Link href="/" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Home
                </Link>
                <Link href="/services" className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]">
                  Services
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-semibold text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link href="/privacy-policy" className="font-semibold hover:text-[color:var(--ink)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-semibold hover:text-[color:var(--ink)]">
                Terms of Service
              </Link>
              <span className="font-semibold">Cookies</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

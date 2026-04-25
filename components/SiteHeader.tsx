"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

function BrandMark() {
  return (
    <div aria-hidden="true" className="relative h-10 w-10">
      <Image
        src="/brand/logo-mark-256.png"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[999] isolate border-b border-black/5 bg-[color:var(--paper)]/90 backdrop-blur">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)]"
        >
          <BrandMark />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-[color:var(--ink)]">
              {site.name}
            </div>
            <div className="text-xs text-[color:var(--muted)]">
              {site.tagline}
            </div>
          </div>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-7 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex h-10 items-center text-sm font-semibold leading-none text-[color:var(--ink)]/80 hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?intent=quote"
            className="hidden h-10 items-center justify-center rounded-lg bg-[color:var(--ink)] px-4 text-sm font-bold leading-none text-white shadow-sm transition hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)] md:inline-flex"
          >
            Get a quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-semibold md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-[1440px] px-4 pb-6 sm:px-6">
          <div className="rounded-lg border border-black/10 bg-white p-3 shadow-sm">
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--ink)]/85 hover:bg-black/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact?intent=quote"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg bg-[color:var(--ink)] px-3 py-2 text-center text-sm font-bold text-white"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

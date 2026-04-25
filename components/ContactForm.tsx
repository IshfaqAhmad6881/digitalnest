"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";

type Intent = "general" | "quote";

type QuoteService = "mobile" | "wordpress" | "web" | "maintenance";
type DesignNeed = "have_design" | "need_design" | "not_sure";
type BackendStatus = "have_backend" | "partial_backend" | "need_backend";

function toMailto(params: {
  name: string;
  email: string;
  message?: string;
  intent: Intent;
  quote?: {
    service: QuoteService;
    design: DesignNeed;
    backend: BackendStatus;
    timeline: string;
    budget: string;
    requirements: string;
    links: string;
    attachments: File[];
  };
}) {
  const subject =
    params.intent === "quote"
      ? `Quote request from ${params.name || "Website visitor"}`
      : `Project inquiry from ${params.name || "Website visitor"}`;

  const lines: string[] = [`Name: ${params.name}`, `Email: ${params.email}`];

  if (params.intent === "quote" && params.quote) {
    const serviceLabel: Record<QuoteService, string> = {
      mobile: "Mobile App Development",
      wordpress: "WordPress Custom Theme",
      web: "Web App / Dashboard",
      maintenance: "Maintenance / Support",
    };
    const designLabel: Record<DesignNeed, string> = {
      have_design: "Yes (I have design/UI)",
      need_design: "No (I need design service)",
      not_sure: "Not sure yet",
    };
    const backendLabel: Record<BackendStatus, string> = {
      have_backend: "Yes (I have backend/API)",
      partial_backend: "Partially (needs work/integration)",
      need_backend: "No (please build backend/API too)",
    };

    lines.push("");
    lines.push("Quote details:");
    lines.push(`- Service: ${serviceLabel[params.quote.service]}`);
    lines.push(`- Design: ${designLabel[params.quote.design]}`);
    lines.push(`- Backend/API: ${backendLabel[params.quote.backend]}`);
    lines.push(`- Timeline: ${params.quote.timeline || "Not specified"}`);
    lines.push(`- Budget: ${params.quote.budget || "Not specified"}`);
    lines.push("");
    lines.push("Requirements:");
    lines.push(params.quote.requirements);

    if (params.quote.links.trim()) {
      lines.push("");
      lines.push("Links / references:");
      lines.push(params.quote.links.trim());
    }

    if (params.quote.attachments.length) {
      lines.push("");
      lines.push(
        "Attachments selected (please attach these files in your email app):"
      );
      for (const f of params.quote.attachments) lines.push(`- ${f.name}`);
    }
  } else {
    lines.push("");
    lines.push(params.message || "");
  }

  const body = lines.join("\n");

  const url = new URL(`mailto:${site.email}`);
  url.searchParams.set("subject", subject);
  url.searchParams.set("body", body);
  return url.toString();
}

export function ContactForm({
  intent = "general",
}: {
  intent?: Intent;
  defaultMessage?: string;
}) {
  const isQuote = intent === "quote";
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [service, setService] = useState<QuoteService>("mobile");
  const [design, setDesign] = useState<DesignNeed>("need_design");
  const [backend, setBackend] = useState<BackendStatus>("need_backend");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [links, setLinks] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = toMailto({
          name,
          email,
          message,
          intent,
          quote: isQuote
            ? {
                service,
                design,
                backend,
                timeline,
                budget,
                requirements,
                links,
                attachments,
              }
            : undefined,
        });
      }}
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            Your name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="h-11 rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            placeholder="e.g. Ahmed"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            Email
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            autoComplete="email"
            className="h-11 rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            placeholder="you@company.com"
          />
        </label>
      </div>

      {isQuote ? (
        <>
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid min-w-0 gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Service
              </span>
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value as QuoteService)}
                  className="h-11 w-full appearance-none truncate rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 pr-10 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                >
                  <option value="mobile">Mobile app</option>
                  <option value="wordpress">WordPress theme</option>
                  <option value="web">Web app / dashboard</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]"
                  fill="currentColor"
                >
                  <path d="M5.5 7.5 10 12l4.5-4.5 1 1L10 14 4.5 8.5l1-1Z" />
                </svg>
              </div>
            </label>
            <label className="grid min-w-0 gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Timeline
              </span>
              <input
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="h-11 rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                placeholder="e.g. 2-4 weeks"
              />
            </label>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid min-w-0 gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Design/UI
              </span>
              <div className="relative">
                <select
                  value={design}
                  onChange={(e) => setDesign(e.target.value as DesignNeed)}
                  className="h-11 w-full appearance-none truncate rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 pr-10 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                >
                  <option value="have_design">Have design/UI</option>
                  <option value="need_design">Need design service</option>
                  <option value="not_sure">Not sure</option>
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]"
                  fill="currentColor"
                >
                  <path d="M5.5 7.5 10 12l4.5-4.5 1 1L10 14 4.5 8.5l1-1Z" />
                </svg>
              </div>
              <div className="text-xs text-[color:var(--muted)]">
                If you don&apos;t have design, we can provide UI/UX.
              </div>
            </label>
            <label className="grid min-w-0 gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Backend/API
              </span>
              <div className="relative">
                <select
                  value={backend}
                  onChange={(e) => setBackend(e.target.value as BackendStatus)}
                  className="h-11 w-full appearance-none truncate rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 pr-10 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                >
                  <option value="have_backend">Have backend/API</option>
                  <option value="partial_backend">Partial backend/API</option>
                  <option value="need_backend">Need backend/API</option>
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]"
                  fill="currentColor"
                >
                  <path d="M5.5 7.5 10 12l4.5-4.5 1 1L10 14 4.5 8.5l1-1Z" />
                </svg>
              </div>
              <div className="text-xs text-[color:var(--muted)]">
                If you don&apos;t have backend services, we can build APIs too.
              </div>
            </label>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid min-w-0 gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Budget (optional)
              </span>
              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="h-11 rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                placeholder="e.g. $1k-$3k"
              />
            </label>
            <label className="grid min-w-0 gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                Files (optional)
              </span>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="sr-only"
                onChange={(e) => {
                  const next = Array.from(e.target.files || []);
                  setAttachments(next);
                }}
              />
              <div className="flex h-11 min-w-0 items-center gap-3 rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 shadow-sm">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="shrink-0 rounded-lg bg-black/5 px-3 py-2 text-xs font-bold text-[color:var(--ink)]/80 hover:bg-black/10"
                >
                  Choose files
                </button>
                <div className="min-w-0 text-sm text-[color:var(--muted)]">
                  <div className="truncate">
                    {attachments.length
                      ? attachments.length === 1
                        ? attachments[0]?.name
                        : `${attachments.length} files selected`
                      : "No files selected"}
                  </div>
                </div>
              </div>
            </label>
          </div>

          {attachments.length ? (
            <div className="rounded-lg border border-black/10 bg-white/55 p-4 text-xs text-[color:var(--muted)]">
              <div className="font-bold text-[color:var(--ink)]/80">
                Selected files (will be listed in the email body)
              </div>
              <ul className="mt-2 grid gap-1">
                {attachments.map((f) => (
                  <li key={`${f.name}-${f.size}`}>{f.name}</li>
                ))}
              </ul>
              <div className="mt-2">
                Note: email drafts cannot auto-attach files; please attach them
                manually in your email app.
              </div>
            </div>
          ) : null}

          <label className="grid gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
              Requirements
            </span>
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
              rows={6}
              className="rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
              placeholder="Apni requirements bata dein: features, screens, login, payments, admin panel, etc."
            />
          </label>

          <label className="grid gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
              Links (optional)
            </span>
            <textarea
              value={links}
              onChange={(e) => setLinks(e.target.value)}
              rows={3}
              className="rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
              placeholder="Reference apps/websites, Figma link, docs link, etc."
            />
          </label>
        </>
      ) : (
        <label className="grid gap-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            Message
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="rounded-lg border border-[color:var(--card-border)] bg-white/70 px-3 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            placeholder="Tell us what you want to build, your timeline, and your budget range."
          />
        </label>
      )}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[color:var(--ink)] px-5 py-2.5 text-sm font-bold text-[color:var(--paper)] shadow-sm hover:bg-black/90"
        >
          Open email draft
        </button>
        <p className="text-xs text-[color:var(--muted)]">
          This form opens your email app to send the message to {site.email}.
        </p>
      </div>
    </form>
  );
}

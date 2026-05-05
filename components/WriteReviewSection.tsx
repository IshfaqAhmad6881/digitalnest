"use client";

import { useEffect, useMemo, useState } from "react";

type Review = {
  id: string;
  quote: string;
  name: string;
  meta: string;
  avatar: string;
  service: "Mobile app" | "WordPress theme" | "Web app" | "Bug fixes" | "Other";
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt: string;
};

const LS_KEY = "digitalnest.communityReviews.v1";

function safeParse(json: string | null): Review[] {
  if (!json) return [];
  try {
    const v = JSON.parse(json);
    return Array.isArray(v) ? (v as Review[]) : [];
  } catch {
    return [];
  }
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 ${idx < value ? "text-amber-500" : "text-amber-200"}`}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 0 0-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 0 0-1.176 0l-3.366 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 0 0-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.299-3.958Z" />
        </svg>
      ))}
    </div>
  );
}

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: 1 | 2 | 3 | 4 | 5) => void;
}) {
  return (
    <div className="mt-1 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, idx) => {
        const v = (idx + 1) as 1 | 2 | 3 | 4 | 5;
        const active = v <= value;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 bg-white transition hover:border-black/20"
            aria-label={`${v} star`}
            aria-pressed={active}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-5 w-5 ${active ? "text-amber-500" : "text-amber-200"}`}
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 0 0-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 0 0-1.176 0l-3.366 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 0 0-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.299-3.958Z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

function ServicePill({ service }: { service: Review["service"] }) {
  const tone =
    service === "Bug fixes"
      ? "bg-emerald-500/10 text-emerald-700"
      : service === "Mobile app"
        ? "bg-blue-500/10 text-blue-700"
        : service === "WordPress theme"
          ? "bg-indigo-500/10 text-indigo-700"
          : service === "Web app"
            ? "bg-slate-500/10 text-slate-700"
            : "bg-black/5 text-[color:var(--muted)]";

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${tone}`}>
      {service}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="h-full rounded-[var(--radius-card)] border border-black/5 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={r.avatar}
            alt={`${r.name} profile`}
            className="h-11 w-11 rounded-full border border-black/10 bg-white object-cover shadow-sm"
            loading="lazy"
          />
          <div>
            <div className="text-sm font-black tracking-tight">{r.name}</div>
            <div className="text-xs text-[color:var(--muted)]">{r.meta}</div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <ServicePill service={r.service} />
          <Stars value={r.rating} />
        </div>
      </div>

      <blockquote className="mt-5 text-sm leading-relaxed text-[color:var(--ink)]/85 sm:text-base">
        &ldquo;{r.quote}&rdquo;
      </blockquote>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-xs font-semibold text-[color:var(--muted)]">
          Community review
        </div>
        <div className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-[color:var(--ink)]/75">
          {r.rating}.0
        </div>
      </div>
    </div>
  );
}

export function WriteReviewSection() {
  const [loading, setLoading] = useState(true);
  const [serverDown, setServerDown] = useState(false);
  const [items, setItems] = useState<Review[]>([]);

  const [name, setName] = useState("");
  const [meta, setMeta] = useState("");
  const [service, setService] = useState<Review["service"]>("Mobile app");
  const [rating, setRating] = useState<Review["rating"]>(5);
  const [quote, setQuote] = useState("");

  const canSubmit = useMemo(() => quote.trim().length >= 8, [quote]);

  async function load() {
    setLoading(true);
    setServerDown(false);

    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      if (!res.ok) throw new Error("bad_status");
      const json = await res.json();
      const reviews = Array.isArray(json?.reviews) ? (json.reviews as Review[]) : [];
      setItems(reviews);
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(reviews.slice(0, 50)));
      } catch {}
    } catch {
      setServerDown(true);
      setItems(safeParse(typeof window !== "undefined" ? localStorage.getItem(LS_KEY) : null));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const payload = { name, meta, service, rating, quote };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json?.ok) throw new Error(json?.error || "submit_failed");

      const next = [json.review as Review, ...items].slice(0, 50);
      setItems(next);
      setName("");
      setMeta("");
      setService("Mobile app");
      setRating(5);
      setQuote("");
      setServerDown(false);
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(next));
      } catch {}
    } catch {
      // Fallback: store locally so the user still sees their review.
      setServerDown(true);
      const local: Review = {
        id: `local-${Date.now()}`,
        name: name.trim() || "Anonymous",
        meta: meta.trim() || "Client",
        service,
        rating,
        quote: quote.trim(),
        avatar: "/avatars/alexa.svg",
        createdAt: new Date().toISOString(),
      };
      const next = [local, ...items].slice(0, 50);
      setItems(next);
      setQuote("");
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(next));
      } catch {}
    }
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="rounded-[var(--radius-card)] border border-black/5 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            Write a review
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight">
            Share your experience
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            {serverDown
              ? "Server storage is not available right now, so we will save it in your browser for now."
              : "Your review will be saved and shown below."}
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-[color:var(--muted)]">
                  Your name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Robert T."
                  className="mt-1 h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-[color:var(--muted)] focus:border-black/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-[color:var(--muted)]">
                  Role / Country
                </label>
                <input
                  value={meta}
                  onChange={(e) => setMeta(e.target.value)}
                  placeholder="e.g. Founder, UK"
                  className="mt-1 h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-[color:var(--muted)] focus:border-black/20"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-[color:var(--muted)]">
                  Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value as Review["service"])}
                  className="mt-1 h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/20"
                >
                  <option>Mobile app</option>
                  <option>WordPress theme</option>
                  <option>Web app</option>
                  <option>Bug fixes</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-[color:var(--muted)]">
                  Rating
                </label>
                <StarRating value={rating} onChange={(v) => setRating(v)} />
                <div className="mt-2 text-xs font-semibold text-[color:var(--muted)]">
                  {rating} out of 5
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[color:var(--muted)]">
                Review
              </label>
              <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Write a short review about delivery, communication, quality, etc."
                className="mt-1 min-h-[120px] w-full resize-y rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none placeholder:text-[color:var(--muted)] focus:border-black/20"
              />
              <div className="mt-2 text-xs text-[color:var(--muted)]">
                Minimum 8 characters.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[color:var(--ink)] px-5 text-sm font-black text-white transition disabled:opacity-50"
              >
                Submit review
              </button>
              <button
                type="button"
                onClick={() => void load()}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-black/10 bg-white px-5 text-sm font-bold text-[color:var(--ink)]"
              >
                Refresh
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-7" id="community-reviews">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
              Community
            </div>
            <h3 className="mt-2 text-2xl font-black tracking-tight">
              Latest reviews
            </h3>
          </div>
          <div className="text-xs font-semibold text-[color:var(--muted)]">
            {loading ? "Loading..." : `${items.length} reviews`}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {items.length === 0 && !loading ? (
            <div className="rounded-[var(--radius-card)] border border-black/5 bg-white p-6 text-sm text-[color:var(--muted)] shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              No community reviews yet. Be the first one.
            </div>
          ) : null}
          {items.slice(0, 6).map((r) => (
            <ReviewCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

type StoredReview = {
  id: string;
  quote: string;
  name: string;
  meta: string;
  service: "Mobile app" | "WordPress theme" | "Web app" | "Bug fixes" | "Other";
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
  createdAt: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "reviews.json");

function pickAvatar(seed: string) {
  const pool = [
    "/avatars/alexa.svg",
    "/avatars/brooklyn.svg",
    "/avatars/robert.svg",
    "/avatars/kristin.svg",
    "/avatars/esther.svg",
    "/avatars/devon.svg",
    "/avatars/sofia.svg",
    "/avatars/daniel.svg",
    "/avatars/ayesha.svg",
    "/avatars/hina.svg",
    "/avatars/mark.svg",
  ] as const;

  // Tiny stable hash -> index
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return pool[h % pool.length];
}

async function readAll(): Promise<StoredReview[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredReview[]) : [];
  } catch (e: any) {
    if (e?.code === "ENOENT") return [];
    throw e;
  }
}

async function writeAll(next: StoredReview[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(next, null, 2) + "\n", "utf8");
}

function clampStr(v: unknown, max = 200) {
  const s = String(v ?? "").trim();
  return s.length > max ? s.slice(0, max) : s;
}

function parseRating(v: unknown): StoredReview["rating"] {
  const n = Number(v);
  if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) return n;
  return 5;
}

function parseService(v: unknown): StoredReview["service"] {
  const s = String(v ?? "");
  if (s === "Mobile app" || s === "WordPress theme" || s === "Web app" || s === "Bug fixes")
    return s;
  return "Other";
}

export async function GET() {
  const all = await readAll();
  // newest first
  const reviews = [...all].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return Response.json({ reviews });
}

export async function POST(request: Request) {
  let body: any = null;
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const fd = await request.formData();
    body = Object.fromEntries(fd.entries());
  }

  const name = clampStr(body?.name, 50) || "Anonymous";
  const meta = clampStr(body?.meta, 80) || "Client";
  const quote = clampStr(body?.quote, 800);
  const rating = parseRating(body?.rating);
  const service = parseService(body?.service);

  if (!quote || quote.length < 8) {
    return Response.json(
      { ok: false, error: "Please write a short review (at least 8 characters)." },
      { status: 400 }
    );
  }

  const review: StoredReview = {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    meta,
    quote,
    rating,
    service,
    avatar: pickAvatar(`${name}|${meta}|${quote.slice(0, 40)}`),
    createdAt: new Date().toISOString(),
  };

  try {
    const all = await readAll();
    await writeAll([...all, review]);
    return Response.json({ ok: true, review });
  } catch (e: any) {
    // On some deployments the filesystem is read-only.
    return Response.json(
      { ok: false, error: "Server storage is not available right now." },
      { status: 503 }
    );
  }
}


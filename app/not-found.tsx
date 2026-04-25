import Link from "next/link";
import { Container } from "@/components/Container";
import { Surface } from "@/components/Surface";

export default function NotFound() {
  return (
    <section className="px-2 py-12 sm:px-0 sm:py-14">
      <Container>
        <Surface className="p-10" tone="soft">
          <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
            404
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-lg bg-[color:var(--ink)] px-5 py-2.5 text-sm font-bold text-[color:var(--paper)] shadow-sm hover:bg-black/90"
          >
            Go home
          </Link>
        </Surface>
      </Container>
    </section>
  );
}

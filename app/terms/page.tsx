import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Surface } from "@/components/Surface";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Basic terms for using our website and requesting services.",
};

function Row({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]/85">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="px-2 py-12 sm:px-0 sm:py-14">
      <Container>
        <Surface className="p-8 sm:p-10" tone="soft">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
              Legal
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              These Terms set out the basic rules for using our website and for
              requesting services from {site.name}. If you have questions, reach
              out before starting any work.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[color:var(--muted)]">
              Last updated: <span className="text-[color:var(--ink)]">{updated}</span>
            </div>
          </div>
        </Surface>

        <div className="mt-10 grid gap-4">
          <Row title="Website use">
            You may browse and contact us through this website. Do not misuse
            the site, attempt to disrupt it, or submit unlawful content.
          </Row>

          <Row title="Quotes, scope, and starting work">
            Any quote is an estimate based on the details you provide. Scope,
            timeline, and pricing are confirmed in writing (email or document)
            before work starts. If requirements change, the timeline and cost
            may change accordingly.
          </Row>

          <Row title="Payments (if applicable)">
            For paid work, payment schedule and deliverables are agreed before
            starting. Late payments may pause delivery until resolved.
          </Row>

          <Row title="Revisions and approvals">
            Reasonable revisions are handled according to the agreed scope. You
            are responsible for reviewing deliverables and providing approvals
            in a timely manner. Delays in approvals can affect delivery dates.
          </Row>

          <Row title="Client responsibilities">
            You agree to provide timely feedback, required assets/access, and
            clear requirements. Delays in feedback may affect timeline.
          </Row>

          <Row title="Intellectual property">
            Unless otherwise agreed, code/design deliverables are transferred as
            part of the project handoff after payments are completed. Third
            party licenses (plugins, fonts, stock assets) remain subject to
            their own terms.
          </Row>

          <Row title="Third-party services and accounts">
            Some work may require third-party services (for example hosting,
            app stores, plugins, APIs). Any fees, subscriptions, and compliance
            requirements for those services are the client’s responsibility
            unless explicitly included in scope.
          </Row>

          <Row title="Confidentiality">
            If you share confidential information with us, we will use it only
            for delivering your project and will not disclose it except as
            needed to complete the work (for example with tools/providers) or
            if required by law.
          </Row>

          <Row title="Disclaimer">
            We provide services with professional care, but we do not guarantee
            specific business outcomes (revenue, rankings, etc.). The website is
            provided “as is”.
          </Row>

          <Row title="Limitation of liability">
            To the maximum extent permitted by law, our liability for any claim
            related to services is limited to the amount paid for the specific
            work giving rise to the claim. We are not liable for indirect or
            consequential losses.
          </Row>

          <Row title="Governing law">
            These Terms are governed by the laws of Pakistan, unless otherwise
            agreed in writing.
          </Row>

          <Row title="Contact">
            Questions about these terms? Email{" "}
            <a
              className="font-bold text-[color:var(--accent)] hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>{" "}
            or use the{" "}
            <Link
              className="font-bold text-[color:var(--accent)] hover:underline"
              href="/contact"
            >
              contact page
            </Link>
            .
          </Row>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Surface } from "@/components/Surface";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information.",
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              This Privacy Policy explains how {site.name} collects, uses, and
              protects your information when you visit our website or contact us
              for services.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[color:var(--muted)]">
              Last updated: <span className="text-[color:var(--ink)]">{updated}</span>
            </div>
          </div>
        </Surface>

        <div className="mt-10 grid gap-4">
          <Row title="Information we collect">
            We may collect information you provide directly, such as your name,
            email address, phone number (if provided), project details, links,
            and any files you choose to share (for example requirements
            documents or screenshots). If you contact us by email, your message
            content and metadata may be stored by email providers.
          </Row>

          <Row title="How we use your information">
            We use your information to respond to inquiries, prepare proposals
            and quotes, deliver services, provide support, and maintain business
            records. We do not sell your personal information.
          </Row>

          <Row title="Website data and log information">
            Like most websites, our hosting may automatically collect basic
            technical data such as IP address, browser type, device
            information, pages visited, and timestamps for security,
            performance, and fraud prevention.
          </Row>

          <Row title="Cookies and analytics">
            We may use cookies or similar technologies for basic site
            functionality and analytics. Where analytics are enabled, we aim to
            use privacy-friendly settings and minimize data collection.
          </Row>

          <Row title="Data retention">
            We keep communications and project-related information for as long
            as reasonably necessary for service delivery, support, legal
            compliance, and record-keeping. You may request deletion of your
            information where applicable, subject to legal and operational
            requirements.
          </Row>

          <Row title="Third-party services">
            We may use third-party tools for hosting, email, file storage, or
            analytics. These providers may process limited data on our behalf
            under their own policies. When you email us, your message is handled
            by your email provider and ours.
          </Row>

          <Row title="Security">
            We take reasonable steps to protect data, but no method of
            transmission or storage is 100% secure. Please avoid sending
            sensitive data unless necessary.
          </Row>

          <Row title="International transfers">
            Our tools and service providers may process data in other countries.
            By using our site and services, you understand that your
            information may be transferred and processed outside Pakistan where
            data protection laws may differ.
          </Row>

          <Row title="Your choices">
            You can contact us to request access, correction, or deletion of
            your information where applicable. You may also opt out of
            non-essential cookies in your browser settings.
          </Row>

          <Row title="Contact">
            For privacy questions, contact us at{" "}
            <a
              className="font-bold text-[color:var(--accent)] hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            . You can also use the{" "}
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

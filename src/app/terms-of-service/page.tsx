import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of Service", description: "Website terms for CleanHive Company." };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="A placeholder structure awaiting the owner's confirmed operating policies." cta={false} />
      <article className="page-shell section-pad prose prose-slate max-w-4xl">
        <p><strong>Draft status:</strong> Service, payment, cancellation, guarantee, insurance, and liability terms have not been confirmed and are intentionally not asserted here.</p>
        <h2>Website use</h2><p>This website provides general information and a way to request an estimate. Submitting a request does not create a confirmed appointment or final service agreement.</p>
        <h2>Estimates and scheduling</h2><p>Availability, scope, timing, and pricing are confirmed directly with the client after CleanHive reviews the request.</p>
        <h2>Final terms</h2><p>The complete terms will be added after the owner confirms the company's operating policies and obtains any necessary legal review.</p>
      </article>
    </>
  );
}

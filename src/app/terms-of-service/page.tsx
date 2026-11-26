import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of Service", description: "Website terms for Clean Hive Company." };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Important information about using this website and requesting a quote." cta={false} />
      <article className="page-shell section-pad prose prose-slate max-w-4xl">
        <p><strong>Draft notice:</strong> The company&apos;s service, payment, cancellation, guarantee, insurance, and liability policies still need to be confirmed before launch.</p>
        <h2>Using This Website</h2><p>This website shares general information and lets you request a quote. Sending a request does not confirm an appointment or create a final service agreement.</p>
        <h2>Quotes and Scheduling</h2><p>After reviewing your request, Clean Hive will confirm availability, the scope of work, timing, and pricing directly with you.</p>
        <h2>Final Terms</h2><p>Complete terms will be added after the owner confirms the company&apos;s operating policies and completes any needed legal review.</p>
      </article>
    </>
  );
}

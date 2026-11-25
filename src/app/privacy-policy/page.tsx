import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How CleanHive handles information submitted through this website." };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="A plain-language draft for the local version of the CleanHive website." cta={false} />
      <article className="page-shell section-pad prose prose-slate max-w-4xl">
        <p><strong>Draft status:</strong> This page must be reviewed before publication.</p>
        <h2>Information we collect</h2><p>When you request an estimate, we collect the information you choose to provide, such as your name, phone number, email address, property location, requested service, approximate square footage, and notes.</p>
        <h2>How we use it</h2><p>We use this information to respond to your request, understand the property, prepare an estimate, and communicate about the requested service. We do not use the quote form to create an account.</p>
        <h2>Service providers</h2><p>The website may use hosting, email-delivery, security, and analytics providers. These providers should receive only the information necessary to perform their role.</p>
        <h2>Retention and choices</h2><p>Information should be kept only as long as reasonably needed for business, legal, and support purposes. You may contact us to ask about your information.</p>
        <h2>Contact</h2><p>Questions may be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      </article>
    </>
  );
}

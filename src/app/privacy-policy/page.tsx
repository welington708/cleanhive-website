import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Clean Hive handles information submitted through this website." };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How we collect, use, and protect the information you share with us." cta={false} />
      <article className="page-shell section-pad prose prose-slate max-w-4xl">
        <p><strong>Draft notice:</strong> This policy still needs final review before the website officially launches.</p>
        <h2>Information We Collect</h2><p>When you request a quote, we collect the information you choose to share, including your name, phone number, email address, property address, requested service, approximate square footage, and any notes you provide.</p>
        <h2>How We Use Your Information</h2><p>We use this information to respond to your request, learn about the property, prepare a quote, and contact you about the service you requested. Submitting the form does not create an online account.</p>
        <h2>Service Providers</h2><p>We may use trusted providers for hosting, email delivery, security, and website analytics. During testing, FormSubmit processes form submissions and sends them to our test inbox. Providers should receive only the information they need to perform their services.</p>
        <h2>How Long We Keep It</h2><p>We keep information only as long as reasonably needed for business, legal, and customer support purposes. You may contact us with questions about your information.</p>
        <h2>Contact Us</h2><p>Have a privacy question? Email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      </article>
    </>
  );
}

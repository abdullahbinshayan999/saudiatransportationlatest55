import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { PageHeader } from "./book";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Saudia Transportation" },
      {
        name: "description",
        content:
          "Privacy Policy for Saudia Transportation, explaining how booking, WhatsApp, website usage, and service information is collected, used, and protected.",
      },
      { property: "og:title", content: "Privacy Policy — Saudia Transportation" },
      {
        property: "og:description",
        content:
          "Learn how Saudia Transportation collects, uses, stores, and protects customer information for taxi and transportation services.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const personalInformation = [
  "Full Name",
  "Phone Number / WhatsApp Number",
  "Email Address",
  "Pickup location",
  "Drop-off location",
  "Travel date and time",
  "Number of passengers",
  "Vehicle preference",
  "Any additional details you provide",
];

const automaticallyCollected = [
  "IP address",
  "Browser type",
  "Device information",
  "Pages visited",
  "Website usage data",
  "Cookies and similar technologies",
];

const uses = [
  "To provide taxi and transportation services",
  "To process booking requests",
  "To respond to WhatsApp inquiries and quote requests",
  "To arrange transportation services",
  "To communicate booking updates",
  "To improve our website and services",
  "To provide customer support",
  "To prevent fraudulent or unauthorized activities",
];

const whatsappUses = [
  "Your WhatsApp number and messages may be used to respond to your inquiry",
  "We may use the information you provide to prepare a transportation quote",
  "We may communicate booking details and service updates",
];

const bookingInfo = [
  "Pickup and destination locations",
  "Travel schedule",
  "Passenger details",
  "Vehicle requirements",
];

const cookieUses = [
  "Understand website traffic",
  "Improve website functionality",
  "Remember user preferences",
  "Improve our services",
];

const sharingReasons = [
  "With drivers or service providers responsible for completing your booking",
  "With trusted technology providers helping us operate our website",
  "When required by law or legal authorities",
];

const securityProtection = ["Unauthorized access", "Loss", "Misuse", "Alteration", "Disclosure"];

const rights = [
  "Request access to your personal information",
  "Request correction of inaccurate information",
  "Request deletion of your information",
  "Withdraw consent for certain communications",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/80">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-border py-8 last:border-b-0">
      <h2 className="font-display text-2xl font-extrabold text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-foreground/80">{children}</div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        subtitle="Last Updated: June 2026"
      />

      <main className="bg-background py-12 sm:py-16">
        <article className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-10">
            <div className="space-y-4 leading-relaxed text-foreground/80">
              <p>
                Welcome to Saudi Taxi Services (“we”, “our”, “us”). We respect your privacy and
                are committed to protecting the personal information you share with us.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect your
                information when you visit our website sauditaxiservices.com or use our
                transportation services.
              </p>
              <p>
                By using our website or contacting us, you agree to the practices described in this
                Privacy Policy.
              </p>
            </div>

            <PolicySection title="1. Information We Collect">
              <p>
                When you use our website or request our services, we may collect the following
                information:
              </p>
              <h3 className="font-display text-lg font-bold text-foreground">Personal Information</h3>
              <BulletList items={personalInformation} />
              <h3 className="font-display text-lg font-bold text-foreground">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may collect certain information automatically,
                including:
              </p>
              <BulletList items={automaticallyCollected} />
              <p>This information helps us improve website performance and user experience.</p>
            </PolicySection>

            <PolicySection title="2. How We Use Your Information">
              <p>We use the information collected for the following purposes:</p>
              <BulletList items={uses} />
              <p>We only use your information for legitimate business purposes.</p>
            </PolicySection>

            <PolicySection title="3. WhatsApp Communication">
              <p>Our primary communication method is WhatsApp.</p>
              <p>When you contact us through WhatsApp:</p>
              <BulletList items={whatsappUses} />
              <p>
                We do not sell or share your WhatsApp contact information with third parties for
                marketing purposes.
              </p>
            </PolicySection>

            <PolicySection title="4. Booking Information">
              <p>To provide transportation services, we may require details such as:</p>
              <BulletList items={bookingInfo} />
              <p>
                This information is only used to fulfill your transportation request and ensure a
                smooth travel experience.
              </p>
            </PolicySection>

            <PolicySection title="5. Cookies Policy">
              <p>Our website may use cookies to improve your browsing experience.</p>
              <p>Cookies help us:</p>
              <BulletList items={cookieUses} />
              <p>
                You may disable cookies through your browser settings, although some website
                features may not work properly.
              </p>
            </PolicySection>

            <PolicySection title="6. Sharing Your Information">
              <p>We value your privacy.</p>
              <p>We may share your information only when necessary, such as:</p>
              <BulletList items={sharingReasons} />
              <p>We never sell, rent, or trade your personal information.</p>
            </PolicySection>

            <PolicySection title="7. Payment Information">
              <p>Saudi Taxi Services may not directly process online payments through this website.</p>
              <p>
                If payments are arranged through third-party methods, your payment information will
                be handled according to the privacy policies of those payment providers.
              </p>
              <p>
                We do not store sensitive payment information unless required for legitimate business
                operations.
              </p>
            </PolicySection>

            <PolicySection title="8. Data Security">
              <p>We take reasonable measures to protect your personal information from:</p>
              <BulletList items={securityProtection} />
              <p>
                However, no online transmission method is completely guaranteed to be 100% secure.
              </p>
            </PolicySection>

            <PolicySection title="9. Third-Party Links">
              <p>Our website may contain links or integrations from third-party services.</p>
              <p>
                We are not responsible for the privacy practices or content of external websites.
              </p>
              <p>
                We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </PolicySection>

            <PolicySection title="10. Children’s Privacy">
              <p>Our services are not specifically designed for children.</p>
              <p>
                We do not knowingly collect personal information from children without appropriate
                permission.
              </p>
              <p>
                If you believe a child has provided personal information, please contact us so we can
                take appropriate action.
              </p>
            </PolicySection>

            <PolicySection title="11. Your Rights">
              <p>Depending on applicable laws, you may have the right to:</p>
              <BulletList items={rights} />
              <p>To make a request, contact us using the details below.</p>
            </PolicySection>

            <PolicySection title="12. Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time.</p>
              <p>Any changes will be posted on this page with an updated revision date.</p>
              <p>We encourage you to review this page periodically.</p>
            </PolicySection>

            <PolicySection title="13. Contact Us">
              <p>
                If you have questions about this Privacy Policy or how we handle your information,
                please contact us:
              </p>
              <div className="rounded-2xl bg-surface p-5 text-foreground">
                <p className="font-display text-lg font-extrabold">Saudi Taxi Services</p>
                <p className="mt-2">Website: {site.domain}</p>
                <p className="mt-2 flex flex-wrap items-center gap-2">
                  <Mail className="h-4 w-4 text-brand" />
                  Email: <a className="font-semibold text-brand hover:underline" href={site.emailHref}>{site.email}</a>
                </p>
              </div>
              <p>
                Thank you for trusting Saudi Taxi Services. We are committed to providing safe,
                reliable, and comfortable transportation while protecting your privacy.
              </p>
            </PolicySection>
          </div>
        </article>
      </main>
    </>
  );
}
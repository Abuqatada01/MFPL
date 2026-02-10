"use client";

import { ShieldCheck } from "@phosphor-icons/react";

export default function PrivacyPolicyPage() {
  return (
    <section className="relative py-10 xl:py-24 flex justify-center px-6 overflow-hidden bg-gradient-to-br from-[#effaed] via-white to-[#f6fbf3]">
      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#83A33C]/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[460px] h-[460px] rounded-full bg-[#53945B]/20 blur-3xl" />

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-6xl border-2 border-[var(--clr-secondary)] bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-16">
        <div className="grid grid-cols-1  gap-16">
          {/* LEFT HEADER */}
          <div className="lg:col-span-1">
            <h1 className="text-5xl font-semibold text-[#242424] mb-4">
              Privacy Policy
            </h1>

            <p className="ui-para text-[#242424]/70 leading-relaxed mb-6">
              This Privacy Policy describes how Medicosmo Formulation Pvt. Ltd
              collects, uses, and discloses your Personal Information when you
              visit or make a purchase from our website.
            </p>

            <div className="flex items-center gap-3 text-[#14542B]">
              <ShieldCheck size={22} weight="fill" />
              <span className="text-sm">Your privacy matters to us</span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-10 text-[#242424]/80 leading-relaxed">
            <PolicyBlock title="Contact Us">
              <p>
                If you have any questions, require more information about our
                privacy practices, or would like to make a complaint, please
                contact us:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> info@medicosmoformulations.com
                <br />
                <strong>Phone:</strong> +91 92050 94789
              </p>
            </PolicyBlock>

            <PolicyBlock title="Collecting Personal Information">
              <p>
                When you visit our Site, we collect certain information about
                your device, your interaction with the Site, and information
                necessary to process your purchases. We may also collect
                additional information when you contact us for customer support.
              </p>
              <p className="mt-2">
                “Personal Information” refers to any information that identifies
                an individual.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Device Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Purpose:</strong> To load the Site accurately, improve
                  performance, and understand website usage.
                </li>
                <li>
                  <strong>Source:</strong> Collected automatically through
                  cookies, log files, web beacons, tags, or similar
                  technologies.
                </li>
                <li>
                  <strong>Data Collected:</strong> Browser type, IP address,
                  time zone, cookie information, pages viewed, search terms, and
                  interactions with the Site.
                </li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Order Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Purpose:</strong> To process orders, manage payments,
                  arrange shipping, provide invoices and confirmations,
                  communicate with customers, prevent fraud, and share relevant
                  offers.
                </li>
                <li>
                  <strong>Source:</strong> Collected directly from you.
                </li>
                <li>
                  <strong>Data Collected:</strong> Name, billing and shipping
                  address, payment details, email address, and phone number.
                </li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Customer Support Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Purpose:</strong> To provide customer support and
                  respond to queries.
                </li>
                <li>
                  <strong>Source:</strong> Collected directly from you.
                </li>
                <li>
                  <strong>Data Collected:</strong> Name, contact details, and
                  communication content.
                </li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Sharing Personal Information">
              <p>
                We may share your Personal Information with third-party service
                providers to help operate our business and deliver services.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Analytics services to understand website usage.</li>
                <li>
                  Advertising partners to show relevant ads, subject to your
                  consent.
                </li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Opt-Out of Targeted Advertising">
              <ul className="list-disc pl-5 space-y-2">
                <li>Facebook Ads Settings</li>
                <li>Google Ads Settings</li>
                <li>Digital Advertising Alliance Opt-Out</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Using Personal Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>Offer products for sale</li>
                <li>Process payments</li>
                <li>Ship and fulfill orders</li>
                <li>Communicate with you</li>
                <li>Share updates, promotions, and offers</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Lawful Basis for Processing (GDPR)">
              <ul className="list-disc pl-5 space-y-2">
                <li>Your consent</li>
                <li>Performance of a contract</li>
                <li>Compliance with legal obligations</li>
                <li>Protection of vital interests</li>
                <li>Public interest tasks</li>
                <li>Legitimate business interests</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Data Retention">
              <p>
                We retain Personal Information only as long as necessary to
                fulfill the purposes outlined in this policy or as required by
                law. You may request deletion of your data at any time.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Automatic Decision-Making">
              <p>
                We do not use fully automated decision-making processes with
                legal or significant effects. Limited automation may be used for
                fraud prevention and security.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Your Rights (GDPR & CCPA)">
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your Personal Information</li>
                <li>Request corrections or deletion</li>
                <li>Request data portability</li>
                <li>Designate an authorized agent (California residents)</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Cookies">
              <p>
                We use cookies to enhance browsing experience, remember
                preferences, analyze traffic, and support marketing efforts. You
                can manage cookies through your browser settings. Disabling
                cookies may affect website functionality.
              </p>
            </PolicyBlock>

            {/* <p className="text-sm text-[#242424]/60 pt-4">
              Last updated: <strong>{new Date().getFullYear()}</strong>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* POLICY BLOCK */
function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#14542B] mb-2">{title}</h3>
      {children}
    </div>
  );
}

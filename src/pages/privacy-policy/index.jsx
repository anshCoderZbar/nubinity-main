import React from "react";

import { PageBanner } from "components/ui/PageBanner";
import { LAYOUT_IMG } from "app/images";
import { BottomBanner } from "components/ui/BottomBanner";
import { ContactForm } from "components/contact-form";

import "styles/Terms.css";

export const PrivacyPolicy = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="privacy_policy">
      <PageBanner img={LAYOUT_IMG.privacyBanner} heading="Privacy Policy" />
      <div className="terms_policyies">
        <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div className="terms_lists">
            <h3>1. Introduction</h3>
            <p>
              Welcome to Nubinity! We are committed to protecting your privacy
              and handling your data with transparency and care. This Privacy
              Policy explains how Nubinity ("we", "us", or "our") collects,
              uses, and safeguards the information of our customers and visitors
              ("you", "your").
            </p>
          </div>
          <div className="terms_lists">
            <h3>2. Information Collection</h3>
            <p className="margin_bt">
              We collect information that you provide directly to us, such as
              when you create an account, contact us for support, or use our
              services. This may include:
            </p>
            <p>
              Personal Identification Information: Name, email address, phone
              number, etc.
            </p>
            <p>
              Billing Information: Payment details, transaction history, etc.
            </p>
            <p>
              Usage Data: Information on how you interact with our services.
            </p>
          </div>
          <div className="terms_lists">
            <h3>3. Use of Information</h3>
            <p className="margin_bt">We use your information to:</p>
            <p>Provide, maintain, and improve our services.</p>
            <p>
              Communicate with you, including providing customer support and
              updates about our services.
            </p>
            <p>Enhance the security and integrity of our services.</p>
            <p>Comply with legal obligations.</p>
          </div>
          <div className="terms_lists">
            <h3>4. Data Protection</h3>
            <p>
              We implement robust security measures to protect your data from
              unauthorized access, alteration, or destruction. These include
              encryption and secure server hosting.
            </p>
          </div>
          <div className="terms_lists">
            <h3>5. Non-Disclosure of Information</h3>
            <p className="margin_bt">
              In line with our commitment to your privacy:
            </p>
            <p>
              We will never sell, trade, or rent your personal information to
              third parties.
            </p>
            <p>
              We will resist anti-privacy pressures and only share your data
              when legally required.
            </p>
          </div>
          <div className="terms_lists">
            <h3>6. Transparency and Control</h3>
            <p className="margin_bt">You have the right to:</p>
            <p>Access the personal information we hold about you.</p>
            <p>Request the correction of inaccurate information.</p>
            <p>
              Request the deletion of your information, subject to certain
              exceptions.
            </p>
            <p>Withdraw consent for data processing, where applicable.</p>
          </div>
          <div className="terms_lists">
            <h3>7. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy periodically. The latest version
              will always be posted on our website.
            </p>
          </div>
          <div className="terms_lists">
            <h3>8. Contact Us</h3>
            <p>
              For any questions or concerns about our privacy practices, please
              contact us at legal@nubinity.com
            </p>
          </div>
        </div>
        <div className="contact_mrg">
          <ContactForm />
        </div>
      </div>
      <BottomBanner />
    </div>
  );
};

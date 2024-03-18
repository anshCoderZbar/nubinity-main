import React from "react";

import { ContactForm } from "components/contact-form";
import { PageBanner } from "components/ui/PageBanner";
import { BottomBanner } from "components/ui/BottomBanner";
import { LAYOUT_IMG } from "app/images";

export default function ContactUs() {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="contact_page">
      <PageBanner img={LAYOUT_IMG.contactBanner} heading="Contact Us" />
      <div className="contact-us-form-bg">
        <ContactForm />
      </div>

      <BottomBanner />
    </div>
  );
}

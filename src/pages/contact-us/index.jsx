import React from "react";
import { Helmet } from "react-helmet";

import { ContactForm } from "components/contact-form";
import { PageBanner } from "components/ui/PageBanner";
import { BottomBanner } from "components/ui/BottomBanner";
import { LAYOUT_IMG } from "app/images";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="//fw-cdn.com/11390608/4064650.js" chat="true"></script>
      </Helmet>
      <div data-aos="fade-up" data-aos-duration="500" className="contact_page">
        <PageBanner img={LAYOUT_IMG.contactBanner} heading="Contact Us" />
        <div className="contact-us-form-bg">
          <ContactForm />
        </div>

        <BottomBanner />
      </div>
    </>
  );
}

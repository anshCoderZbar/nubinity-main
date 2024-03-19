import React from "react";
import { Helmet } from "react-helmet";

import { Services } from "app/common/Services";
import { BottomBanner } from "components/ui/BottomBanner";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="//fw-cdn.com/11390608/4064650.js" chat="true"></script>
      </Helmet>
      <div className="pt-2 pt-sm-3 pt-lg-5"></div>
      <div className="services_abt_bg">
        <div id="services" className="container-fluid">
          <h2 className="main_head_1 text-center pt-4">Services</h2>
          <Services />
        </div>
      </div>
      <BottomBanner />
    </>
  );
}

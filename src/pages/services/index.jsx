import { Services } from "app/common/Services";
import { BottomBanner } from "components/ui/BottomBanner";
import React from "react";

export default function ServicesPage() {
  return (
    <>
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

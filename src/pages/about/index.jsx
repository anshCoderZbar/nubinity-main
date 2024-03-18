import { LAYOUT_IMG } from "app/images";
import { BottomBanner } from "components/ui/BottomBanner";
import React from "react";

import "styles/Home.css";

export default function About() {
  return (
    <>
      <div className="pt-2 pt-sm-3 pt-lg-5"></div>
      <div className="services_abt_bg">
        <div className="container-fluid pad_ri_0">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="about_us_content">
                <h2
                  className="main_head_1"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  About Us
                </h2>
                <p
                  className="content_main"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  Founded in 2019 by a seasoned quartet of consulting,
                  cybersecurity, and DevOps experts Pavel Glukhikh, Nicolas
                  Pais, Josh Freedman, and Juan Cortez—Nubinity emerged from the
                  combined expertise and innovation-driven spirits of its
                  creators. As the new face of Universal Hosting, LLC, we
                  proudly stand at the forefront of web hosting and professional
                  services, offering cutting-edge design thinking, consulting,
                  and security solutions. With over a decade's worth of industry
                  experience, our mission is to deliver unparalleled service and
                  insights that empower our clients to thrive in an
                  ever-evolving digital landscape. Nubinity is more than a
                  company; it's a beacon of excellence and a testament to what
                  dedicated professionals can achieve when they come together
                  for a common goal.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={LAYOUT_IMG.aboutBanner}
                alt="about us"
                className="abt_img"
                data-aos="zoom-in-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
      <BottomBanner />
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import "styles/ComponentsUi.css";

export const BottomBanner = () => {
  return (
    <div className="bottom_banner">
      <div className="container-fluid">
        <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          Nubinity is a remote services provider. We deliver our services via
          on-site and off-site automation using various tools. Our professional
          services are also delivered using remote means. On-site consulting and
          implementation is also available. We are available for consultation
          and will create a custom plan to fit your needs.
        </p>
        <Link
          target={"_blank"}
          to={"https://clients.nubinity.com"}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Get started now
        </Link>
        s
      </div>
    </div>
  );
};

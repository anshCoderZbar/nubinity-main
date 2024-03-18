import React from "react";
import { Link } from "react-router-dom";

import "styles/ComponentsUi.css";

export const BottomBanner = () => {
  return (
    <div className="bottom_banner">
      <div className="container-fluid">
        <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          Our implementation and consulting is mostly done remotely. Reach out to
          us or join us on Discord, Telegram, or Apple Chat. We are available
          for free consultation and will create a custom plan to fit your needs.
        </p>
        <Link
          target={"_blank"}
          to={"https://clients.nubinity.com"}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Get started now
        </Link>s
      </div>
    </div>
  );
};

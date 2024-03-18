import React from "react";

import "styles/ComponentsUi.css";

export const PageBanner = ({ img, heading }) => {
  return (
    <div className="page_banner_layout">
      <img src={img} alt="contact-banners" />
      <div className="page_banner_content">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

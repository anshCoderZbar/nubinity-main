import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import "styles/Main.css";
export const Investors = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="//fw-cdn.com/11390608/4064650.js" chat="true"></script>
      </Helmet>
      <div className="hero">
        <div className="front-content">
          <div className="container-mid">
            <div
              className="animation-container animation-fade-right"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h1>Coming Soon..</h1>
            </div>

            <div
              onClick={() => navigate("/")}
              className="animation-container animation-fade-up"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              <div className="open-popup">Home</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

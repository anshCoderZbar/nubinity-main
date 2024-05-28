import React from "react";

import { ServicesData } from "mock/Home";
import { useState } from "react";
import { Modal } from "components/ui/Modal";
import privacyBanner from "assets/privacy.png";
import "styles/Home.css";

export const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalDesc, setModalDesc] = useState([]);
  return (
    <div className="servicees_container">
      {ServicesData?.map((data, i) => {
        return (
          <div key={i} data-toggle="modal" className="service_card">
            <div
              onClick={() => {
                setIsOpen(true);
                setModalHeading(data?.heading);
                setModalDesc(data?.list);
              }}
              className="service-card-body"
            >
              <img
                src={data.icon}
                alt="service icons"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                {data?.heading}
              </p>
            </div>
          </div>
        );
      })}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        extraClass={"modal-dialog-centered"}
      >
        <div className="modal-body d-flex">
          <div className="modal_text">
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              {modalHeading}
            </h1>
            <ul className="list-unstyled ps-0">
              {modalDesc?.map((elm, i) => {
                return (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    {elm}
                  </li>
                );
              })}
            </ul>
            <a
              href="https://clients.nubinity.com/"
              target="_blank"
              rel="noreferrer"
              className="btn_bg ms-0"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Order
            </a>
          </div>
          <div className="modal_img">
            <img
              src={privacyBanner}
              alt="endpoint protection"
              data-aos="zoom-in-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

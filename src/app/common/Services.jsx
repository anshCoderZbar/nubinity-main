import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ServicesData } from "mock/Home";
import { useState } from "react";
import { Modal } from "components/ui/Modal";
import privacyBanner from "assets/privacy.png";

export const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        modules={[Pagination]}
        pagination={{ pagination: true, clickable: true }}
        slidesPerGroup={1}
        className="serrvices"
        breakpoints={{
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          991: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1400: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {ServicesData?.map((data) => {
          return (
            <SwiperSlide key={data?.id}>
              <div
                data-toggle="modal"
                onClick={() => setIsOpen(true)}
                className="service_card"
              >
                <div className="service-card-body">
                  <img
                    src={data.icon1}
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
                    {data?.heading1}
                  </p>
                </div>
                <div className="service-card-body">
                  <img
                    src={data.icon2}
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
                    {data?.heading2}
                  </p>
                </div>
              </div>
            </SwiperSlide>
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
                Managed Endpoint Protection
              </h1>
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  Fully managed endpoint protection services designed to secure
                  devices against the evolving landscape of cyber threats. We
                  provide comprehensive defense and threat analytics for
                  laptops, desktops, and mobile devices, safeguarding them from
                  malware, ransomware, and sophisticated cyber-attacks.
                </li>
              </ul>
              <a
                href="https://clients.nubinity.com/"
                target="_blank"
                rel="noreferrer"
                className="btn_bg"
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
        <h4 className="text-center text-white slider_tetx">
          Slide for more services
        </h4>
      </Swiper>
    </>
  );
};

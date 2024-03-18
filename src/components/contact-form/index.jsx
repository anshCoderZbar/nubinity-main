import { Link } from "react-router-dom";
import { LAYOUT_IMG } from "app/images";
import { FormInput } from "components/ui/FormInput";
import { Textarea } from "components/ui/Textarea";
import { LocateFixedIcon, Mail, PhoneCall } from "lucide-react";
import React, { useState } from "react";

import "styles/Contact.css";
import { formState, validateValues } from "./validation";
import axios from "axios";
import { useNotifications } from "reapop";
export const ContactForm = () => {
  const { notify } = useNotifications();

  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(formState);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validateValues(formData));
    if (Object.keys(validateValues(formData)).length < 1) {
      setLoading(true);
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/mail.php`,
          {
            name: formData?.name,
            email: formData?.email,
            phoneNo: formData?.phoneNo,
            typeOfService: formData?.typeOfService,
            message: formData?.message,
          }
        );
        if (result?.data?.success) {
          setLoading(false);
          setFormData(formState);
          notify("Thanks for connecting with us", "success");
        }
      } catch (error) {
        notify("OOPS! Some error occured", "error");
      }
    }
  };

  return (
    <div className="contactus_form">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6">
            <div className="contact-form-outer">
              <h2
                className="contact_heading_h2"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Get in Touch
              </h2>
              <form
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                onSubmit={handleSubmit}
              >
                <div className="mt-3">
                  <FormInput
                    placeholder="name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                  />
                  {errors?.name && (
                    <span className="text-danger">{errors?.name}</span>
                  )}
                </div>
                <div className="mt-3">
                  <FormInput
                    placeholder="email"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                  {errors?.email && (
                    <span className="text-danger">{errors?.email}</span>
                  )}
                </div>
                <div className="mt-3">
                  <FormInput
                    placeholder="phone number"
                    type="number"
                    name="phoneNo"
                    value={formData?.phoneNo}
                    onChange={handleChange}
                  />
                  {errors?.phoneNo && (
                    <span className="text-danger">{errors?.phoneNo}</span>
                  )}
                </div>
                <div className="mt-3">
                  <FormInput
                    placeholder="type of service"
                    type="text"
                    name="typeOfService"
                    value={formData?.typeOfService}
                    onChange={handleChange}
                  />
                  {errors?.typeOfService && (
                    <span className="text-danger">{errors?.typeOfService}</span>
                  )}
                </div>
                <div className="mt-3">
                  <Textarea
                    placeholder="Message"
                    type="text"
                    name="message"
                    value={formData?.message}
                    onChange={handleChange}
                  />
                  {errors?.message && (
                    <span className="text-danger">{errors?.message}</span>
                  )}
                </div>
                <div className="mt-3">
                  <input
                    type="submit"
                    className={`submit ${loading ? "disabled_class" : ""}`}
                    value="submit"
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_deta">
              <h2
                className="main_head_1"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Contact Us
              </h2>
              <div
                className="contact_details"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <ul>
                  <li>
                    <Link to="/" target="_blank" rel="noreferrer">
                      <span>
                        <LocateFixedIcon />
                      </span>
                      <p> New Orleans, LA</p>
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+18337925683">
                      <span>
                        <PhoneCall />
                      </span>
                      <p>+1 (833) 792-5683</p>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@nubinity.com">
                      <span>
                        <Mail />
                      </span>
                      <p>hello@nubinity.com</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social_icons">
                <h2
                  className="contact_heading_h2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  Social Media
                </h2>
                <ul>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=61553977341391"
                    >
                      <img src={LAYOUT_IMG.facebookImg} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/nubinity_offical/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                    >
                      <img src={LAYOUT_IMG.instagram} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.threads.net/@nubinity_offical"
                    >
                      <img
                        src={LAYOUT_IMG.threads}
                        alt="social images"
                        className="thread_icon"
                      />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/@Nubinity"
                    >
                      <img src={LAYOUT_IMG.telegram} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/nubinity/"
                    >
                      <img src={LAYOUT_IMG.linkedin} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://discord.gg/Xbxdwhwvsp"
                    >
                      <img src={LAYOUT_IMG.discord} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href=" ts3server://voice.nubinity.com"
                    >
                      <img src={LAYOUT_IMG.teamspeak} alt="social images" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

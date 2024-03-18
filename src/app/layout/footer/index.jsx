import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LAYOUT_IMG } from "app/images";
import { FooterLayout } from "mock/Layout";
import Cookies from "js-cookie";
import { ChatWoot } from "./ChatWoot";

export const Footer = () => {
  const [cookieNoti, showCookieNoti] = useState(false);
  useEffect(() => {
    const hasCookie = Cookies.get("session");
    const parsedCookie = hasCookie && JSON.parse(hasCookie);
    setTimeout(() => {
      !parsedCookie && showCookieNoti(true);
    }, 2500);
  }, []);

  const handleCookies = () => {
    Cookies.set("session", JSON?.stringify({ path: window?.location?.href }));
    showCookieNoti(false);
  };

  return (
    <>
      <footer className="footer">
        {cookieNoti && (
          <div className="cookies_btm">
            <p>
              We use cookies to personalize content, provide social media
              features, and to enable interactive functions on this site. By
              clicking 'Accept', you consent to consent to our use of cookies as
              described in our privacy policy.
            </p>

            <div className="cookie_btn">
              <button onClick={handleCookies}>Accept</button>
              <button onClick={() => showCookieNoti(false)}>Cancel</button>
            </div>
          </div>
        )}
        <div className="container-fluid">
          <div className="footer_layout">
            <div className="footer_head">
              <Link to={"/"}>
                <img src={LAYOUT_IMG.headerLogo} alt="logo" />
              </Link>
              <span className="mail">
                <a href="mailto:hello@nubinity.com">hello@nubinity.com</a>
              </span>
              <span className="call">
                <a href="tel:+18337925683">+1 (833) 792-5683</a>
              </span>
              <div className="d-flex  align-items-center card_icons Ftr_icns">
                <a
                  className="footer_icon fb_img"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=61553977341391"
                >
                  <img src={require("assets/facebook.png")} alt="socialmedia" />
                </a>
                <a
                  className="footer_icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/nubinity_offical/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                >
                  <img
                    src={require("assets/instagram.png")}
                    alt="socialmedia"
                  />
                </a>
                <a
                  className="threads_img footer_icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.threads.net/@nubinity_offical"
                >
                  <img src={require("assets/threads.png")} alt="socialmedia" />
                </a>
                <a
                  className=" footer_icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/@Nubinity"
                >
                  <img src={require("assets/telegram.png")} alt="socialmedia" />
                </a>
                <a
                  className="footer_icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/nubinity/"
                >
                  <img
                    src={require("assets/linked_in.png")}
                    alt="socialmedia"
                  />
                </a>
                <a
                  className=" footer_icon "
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/Xbxdwhwvsp"
                >
                  <img src={require("assets/discord.png")} alt="socialmedia" />
                </a>
              </div>
              <a
                className=" footer_icon "
                target="_blank"
                rel="noreferrer"
                href="ts3server://voice.nubinity.com"
              >
                <img src={require("assets/teamspeak.png")} alt="socialmedia" />
              </a>
            </div>
            {FooterLayout?.map((links) => {
              return (
                <div key={links?.id} className="footer_links">
                  <div className="links_f_head">
                    <h4>{links?.heading}</h4>
                    <ul>
                      {links?.menus?.map((elm) => {
                        return (
                          <li key={elm?.id}>
                            <Link
                              target={elm?.target ? "_blank" : ""}
                              to={elm?.slug}
                            >
                              {elm?.link}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    {links?.paymentLinks && (
                      <div className="footer_pymnt">
                        <span>
                          <img src={LAYOUT_IMG.payment1} alt="paymenticons" />
                        </span>
                        <span>
                          <img src={LAYOUT_IMG.payment2} alt="paymenticons" />
                        </span>
                        <span>
                          <img src={LAYOUT_IMG.payment3} alt="paymenticons" />
                        </span>
                        <span>
                          <img src={LAYOUT_IMG.payment4} alt="paymenticons" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2023 Nubinity. All Rights Reserved</p>
        </div>
      </footer>
      <ChatWoot />
    </>
  );
};

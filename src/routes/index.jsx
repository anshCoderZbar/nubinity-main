import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PublicRoutes } from "./public";

import { PrivacyPolicy } from "pages/privacy-policy";
import { TermsServices } from "pages/terms-services";
import Home from "pages/home";
import About from "pages/about";
import ContactUs from "pages/contact-us";
import ServicesPage from "pages/services";
import { ApmRoutes } from "@elastic/apm-rum-react";
import { Investors } from "pages/investors";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <ApmRoutes>
        <Route
          exact
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <PublicRoutes>
              <About />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/services"
          element={
            <PublicRoutes>
              <ServicesPage />
            </PublicRoutes>
          }
        />
        <Route exact path="/Investors" element={<Investors />} />
        <Route
          exact
          path="/contact-us"
          element={
            <PublicRoutes>
              <ContactUs />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/privacy-policy"
          element={
            <PublicRoutes>
              <PrivacyPolicy />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/terms-services"
          element={
            <PublicRoutes>
              <TermsServices />
            </PublicRoutes>
          }
        />
      </ApmRoutes>
    </BrowserRouter>
  );
};

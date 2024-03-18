import React from "react";

import { Layout } from "app/layout";
import { AutoScroll } from "components/auto-scroll";

export const PublicRoutes = ({ children }) => {
  return (
    <Layout>
      <AutoScroll />
      {children}
    </Layout>
  );
};

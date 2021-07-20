import * as React from "react";
import { Container } from "theme-ui";

import Layout from "../components/layout";

const DefaultLayout = ({ children }) => (
  <Layout>
    <Container>{children}</Container>
  </Layout>
);

export default DefaultLayout;

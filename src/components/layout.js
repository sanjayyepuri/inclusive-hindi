import * as React from "react";

import { Box, Flex, Container } from "@theme-ui/components";
import Navbar from "./navbar";
import UtHeader from "./ut-header";
import Footer from "./footer";
import { Divider } from "theme-ui";

const HeaderBox = ({ children }) => (
  <Box
    as="header"
    sx={{
      width: "100%",
      position: "sticky",
      top: 0,
      backgroundColor: "#fff",
      zIndex: 999,
    }}
  >
    {children}
  </Box>
);

const Main = ({ children }) => (
  <Box
    as="main"
    sx={{
      width: "100%",
      flex: "1 1 auto",
    }}
  >
    {children}
  </Box>
);

const FooterBox = ({ children }) => (
  <Box
    as="footer"
    sx={{
      width: "100%",
      backgroundColor: "#333f48",
      color: "white",
    }}
  >
    {children}
  </Box>
);

const Layout = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <HeaderBox>
      <UtHeader />
      <Navbar />
      <Divider mt={0} mb={0} color="muted" />
    </HeaderBox>

    <Main>{children}</Main>
    <Divider color="primary" mb={0} />
    <FooterBox>
      <Footer />
    </FooterBox>
  </Flex>
);

export default Layout;

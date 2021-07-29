import * as React from "react";

import Navbar from "./navbar";
import UtHeader from "./ut-header";
import Footer from "./footer";

import { Box, Flex } from "@theme-ui/components";

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
    </HeaderBox>

    <Main>{children}</Main>
    <FooterBox>
      <Footer />
    </FooterBox>
  </Flex>
);

export default Layout;

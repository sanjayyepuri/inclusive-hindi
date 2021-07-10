import * as React from "react";

import { Box, Flex, Container } from "@theme-ui/components";
import Navbar from "./navbar";
import UtHeader from "./ut-header";
import { Divider } from "theme-ui";

const Header = ({ children }) => (
  <Box
    as="header"
    sx={{
      width: "100%",
      position: "sticky",
      top: 0,
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

const Footer = ({ children }) => (
  <Box
    as="footer"
    sx={{
      width: "100%",
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
    <Header>
      <UtHeader />
      <Container pr={4} pl={4}>
        <Navbar />
      </Container>
    </Header>
    <Divider color="muted" mb={0} />

    <Main>
        {children}
    </Main>

    <Footer>
    </Footer>
  </Flex>
);


export default Layout;
import { Container, Flex, Box, Link, Text } from "@theme-ui/components";
import * as React from "react";

const footerLinks = [
  "Emergency Information",
  "Site Policies",
  "Web Accessibility Policy",
  "Web Privacy Policy",
];

const FooterItem = ({ children }) => (
  <Box
    sx={{
      ml: 4,
      mr: 4,
      display: "flex",
      alignContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);

const Footer = () => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      p: 2,
      variant: "styles.footer",
      height: ["10vh", "15vh"],
    }}
  >
    {footerLinks.map((footerLink) => (
      <FooterItem>
        <Text>{footerLink}</Text>
      </FooterItem>
    ))}

    <Box sx={{ mx: "auto" }} />
    <Box sx={{ p: 4 }}>© 2019 Jane Doe</Box>
  </Box>
);

export default Footer;

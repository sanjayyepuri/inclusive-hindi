import { Container, Flex, Box, Link, Text } from "@theme-ui/components";
import * as React from "react";
import { NavLink } from "theme-ui";

const footerLinks = [
  { label: "Emergency Information", href: "https://emergency.utexas.edu/" },
  { label: "Site Policies", href: "https://www.utexas.edu/site-policies" },
  {
    label: "Web Accessibility Policy",
    href: "https://it.utexas.edu/policies/web-accessibility",
  },
  {
    label: "Web Privacy Policy",
    href: "https://it.utexas.edu/policies/web-privacy",
  },
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
  <Box>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        m: 4,
        variant: "styles.footer",
        minHeight: ["100%", "8vh", "8vh", "10vh"],
      }}
    >
      {footerLinks.map(({ label, href }) => (
        <FooterItem key={label}>
          <NavLink
            href={href}
            sx={{ variant: "styles.navbutton", color: "white" }}
          >
            {label}
          </NavLink>
        </FooterItem>
      ))}

      <Box sx={{ mx: "auto" }} />
      <Box sx={{ p: 4 }}>© 2019 Jane Doe</Box>
    </Box>
  </Box>
);

export default Footer;

/** @jsx jsx */
import { jsx } from "theme-ui";

import { Flex, Box, Heading, Text } from "@theme-ui/components";

const items = ["Home", "Material", "Grammar", "About"];

const NavItem = ({ children }) => (
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

const Navbar = () => (
  <Box
    sx={{
      mt: 3,
      pb: 3,
    }}
  >
    <Flex>
      <Heading
        sx={{
          fontWeight: "bold",
          fontSize: [4, 4, 4, 5],
        }}
      >
        <Text sx={{ color: "text" }}>Inclusive Hindi</Text>
      </Heading>
      <Box sx={{ mx: "auto" }}></Box>
      {items.map((item) => (
        <NavItem>
          <Text>{item}</Text>
        </NavItem>
      ))}
    </Flex>
  </Box>
);

export default Navbar;

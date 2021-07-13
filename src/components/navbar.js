/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

import {
  Flex,
  Box,
  Heading,
  Text,
  Link as NavLink,
} from "@theme-ui/components";
import { Link } from "gatsby";
import AnimateHeight from "react-animate-height";

const items = [
  { key: "Home", path: "/" },
  { key: "Material", path: "/" },
  { key: "Grammar", path: "/" },
  { key: "About", path: "/" },
];

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

const NavMenu = ({ close }) => (
  <Box
    sx={{
      height: "10vh",
      p: 4,
    }}
  >
    <Flex>
      <Box sx={{ mx: "auto" }}></Box>
      <Text onClick={close} >Close</Text>
    </Flex>
  </Box>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
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
            <Link
              as={NavLink}
              to={item.path}
              sx={{ variant: "styles.navlink" }}
              onClick={() => setShowMenu(true)}
            >
              {item.key}
            </Link>
          </NavItem>
        ))}
      </Flex>
      <AnimateHeight height={showMenu ? "auto" : 0}>
        <NavMenu close={() => setShowMenu(false)}></NavMenu>
      </AnimateHeight>
    </Box>
  );
};

export default Navbar;

/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

import { Flex, Box, Heading, Text, Container, Link as NavLink } from "theme-ui";
import { Link } from "gatsby";
import AnimateHeight from "react-animate-height";

const items = [
  { key: "Home", path: "/" },
  {
    key: "Material",
    menu: (
      <Flex>
        <Box sx={{ maxWidth: "45%" }}>
          <Heading>Instructional Material</Heading>
          <Text>Material Found and Curated by Former Students.</Text>
        </Box>
        <Box>
          <ul>
            <li>Colorism</li>
            <li>Gender Roles</li>
            <li>Casteism & Race</li>
            <li>LGBTQIA+</li>
          </ul>
        </Box>
      </Flex>
    ),
  },
  { key: "Grammar", path: "/" },
  { key: "About", path: "/" },
];

const NavItem = ({ children, item, toggleMenu }) => {
  return (
    <li sx={{ variant: "styles.navitem" }}>
      {item.path ? (
        <Link
          as={NavLink}
          to={item.path}
          id={item.key}
          sx={{ variant: "styles.navbutton" }}
        >
          {item.key}
        </Link>
      ) : (
        <a sx={{ variant: "styles.navbutton" }} onClick={toggleMenu}>
          {item.key}
        </a>
      )}
    </li>
  );
};

const NavMenu = ({ close, showMenu, children }) => (
  <AnimateHeight height={showMenu ? "auto" : 0}>
    <Box
      sx={{
        minHeight: "10vh",
        width: "100%",
        background: "white",
      }}
    >
      <Container my={[3, 4, 5, 6]}>
        <Flex>
          {children}
          <Box sx={{ mx: "auto" }}></Box>
          <NavLink sx={{ variant: "styles.navbutton" }} onClick={close}>
            Close
          </NavLink>
        </Flex>
      </Container>
    </Box>
  </AnimateHeight>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const getToggleMenu = (item) => {
    return () => {
      if (showMenu) {
        setShowMenu(false);
        setActiveMenu(null);
      } else {
        if (item.menu) {
          setActiveMenu(item.menu);
          setShowMenu(true);
        }
      }
    };
  };

  return (
    <Container sx={{ py: 3 }}>
      <Flex as="ul" sx={{ height: "4em", p: 0 }}>
        <li sx={{ variant: "styles.navitem" }}>
          <Heading
            sx={{
              fontWeight: "bold",
              fontSize: [4, 4, 4, 5],
              variant: "styles.navbutton",
            }}
          >
            Inclusive Hindi
          </Heading>
        </li>
        <Box sx={{ mx: "auto" }}></Box>
        {items.map((item) => (
          <NavItem item={item} toggleMenu={getToggleMenu(item)} />
        ))}
      </Flex>
      <NavMenu showMenu={showMenu} close={() => setShowMenu(false)}>
        {activeMenu}
      </NavMenu>
    </Container>
  );
};

export default Navbar;

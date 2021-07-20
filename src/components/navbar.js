/** @jsx jsx */
import { InitializeColorMode, jsx } from "theme-ui";
import { useState } from "react";

import { Flex, Box, Heading, Text, Container, Link as NavLink } from "theme-ui";
import { Link } from "gatsby";
import AnimateHeight from "react-animate-height";

const materialLinks = [
  { label: "Colorism", key: "colorism", path: "/" },
  { label: "Gender Roles", key: "gender-roles", path: "/" },
  { label: "Casteism & Race", key: "casteism-race", path: "/" },
  { label: "LGBTQIA+", key: "lgbtqia+", path: "/" },
];

const items = [
  { label: "Home", key: "home", path: "/" },
  {
    label: "Material",
    key: "material",
    menu: (
      <Flex>
        <Box sx={{ width: "65%" }}>
          <Heading>Instructional Material</Heading>
          <Text>Material Found and Curated by Former Students.</Text>
        </Box>
        <Box>
          <ul>
            {materialLinks.map(({ label, key, path }) => (
              <li key={key}>{label}</li>
            ))}
          </ul>
        </Box>
      </Flex>
    ),
  },
  { label: "Grammar", key: "grammar", path: "/" },
  { label: "About", key: "about", path: "/" },
];

const NavItem = ({ children, item, toggleMenu }) => {
  return (
    <li key={item.key} sx={{ variant: "styles.navitem" }}>
      {item.path ? (
        <Link
          as={NavLink}
          to={item.path}
          id={item.key}
          sx={{ variant: "styles.navbutton" }}
        >
          {item.label}
        </Link>
      ) : (
        <NavLink
          sx={{ variant: "styles.navbutton" }}
          onClick={toggleMenu}
          id={item.key}
        >
          {item.label}
        </NavLink>
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
        <li key={"inclusive-hindi"} sx={{ variant: "styles.navitem" }}>
          <Link
            as={NavLink}
            to="/"
            sx={{
              fontWeight: "bold",
              fontSize: [4, 4, 4, 5],
              variant: "styles.navbutton",
            }}
          >
            Inclusive Hindi
          </Link>
        </li>
        <Box key={"space"} sx={{ mx: "auto" }}></Box>
        {items.map((item) => (
          <NavItem key={item.key} item={item} toggleMenu={getToggleMenu(item)} />
        ))}
      </Flex>
      <NavMenu showMenu={showMenu} close={() => setShowMenu(false)}>
        {activeMenu}
      </NavMenu>
    </Container>
  );
};

export default Navbar;

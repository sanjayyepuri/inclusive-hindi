/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

import { Flex, Box, Heading, Text, Container, Link as NavLink } from "theme-ui";
import { graphql, Link, useStaticQuery } from "gatsby";
import AnimateHeight from "react-animate-height";

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

const NavMenuItem = ({ title, subtitle, chidren}) => {
  return (
    <Flex>
      <Box sx={{ width: "65%" }}>
        <Heading>{title}</Heading>
        <Text>{subtitle}</Text>
      </Box>
      <Box>
        <ul>
          {/* {materialLinks.map(({ label, key, path }) => (
            <li key={key}>{label}</li>
          ))} */}
        </ul>
      </Box>
    </Flex>
  );
};

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

  const data = useStaticQuery(graphql`
    query NavbarQuery {
      site: allContentfulPage(filter: { navbarDisplay: { ne: "Disabled" } }) {
        pages: edges {
          link: node {
            slug
            navbarName
            navbarDisplay
            navbarSubtitle {
              navbarSubtitle
            }
          }
        }
      }
    }
  `);

  const items = data.site.pages.map((link) => {
    const { slug, navbarName, navbarDisplay, navbarSubtitle } = link.link;
    return {
      label: navbarName,
      key: slug,
      path: `/${slug}`
    }
  });
  
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
        {items.map((item) => (
          <NavItem
            key={item.key}
            item={item}
            toggleMenu={getToggleMenu(item)}
          />
        ))}
      </Flex>
      <NavMenu showMenu={showMenu} close={() => setShowMenu(false)}>
        {activeMenu}
      </NavMenu>
    </Container>
  );
};

export default Navbar;

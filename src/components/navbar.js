/** @jsx jsx */
import { Button, Divider, IconButton, jsx } from "theme-ui";
import { useState } from "react";

import { Flex, Box, Heading, Text, Container, Link as NavLink, MenuButton } from "theme-ui";
import { graphql, Link, useStaticQuery } from "gatsby";
import AnimateHeight from "react-animate-height";

import { IoChevronForward } from "@react-icons/all-files/io5/IoChevronForward";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { IoMenu } from "@react-icons/all-files/io5/IoMenu";

const getLinks = (links) => {
    return links.map((link) => {
        const slug =
            link.__typename === "ContentfulMaterial"
                ? `/${link.topic[0].slug}/${link.slug}`
                : `/${link.slug}`;

        return { label: link.name, link: slug };
    });
};

const DISPLAY_SMALL = (display) => [display, display, display, "none"];
const DISPLAY_LARGE = (display) => ["none", "none", "none", display];


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
                width: "100%",
                backgroundColor: "beige",
            }}
        >
            <Container py={[3, 4, 5, 6]}>
                <Flex>
                    {children}
                    <Box sx={{ mx: "auto" }}></Box>
                    <NavLink
                        sx={{ fontSize: 4, variant: "styles.navbutton" }}
                        onClick={close}
                    >
                        <IoClose />
                    </NavLink>
                </Flex>
            </Container>
        </Box>
    </AnimateHeight>
);

const NavMenuItem = ({ title, subtitle, links, path }) => {
    return (
        <Flex sx={{ maxHeight: "10em" }}>
            <Box sx={{ width: "65%" }}>
                <Heading
                    sx={{ variant: "styles.navbutton", display: "block", fontSize: 3 }}
                    as={Link}
                    to={path}
                >
                    {title}
                </Heading>
                <Text>{subtitle}</Text>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", }}>
                {links.map(({ label, key, link }) => (
                    <NavLink
                        as={Link}
                        to={link}
                        key={key}
                        id={key}
                        sx={{ variant: "styles.menuitem", px: 2 }}
                    >
                        {label}
                        <IoChevronForward />
                    </NavLink>
                ))}
            </Box>
        </Flex>
    );
};

const Navbar2 = () => {
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

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const data = useStaticQuery(graphql`
    query NavbarQuery2 {
      nav: contentfulNavigationBar(slug: { eq: "main-navigation" }) {
        title
        links {
          name
          navbarName
          navbarDisplay
          slug
          links {
            ... on ContentfulPage {
              slug
              name
              __typename
            }
          }
        }
      }
    }
  `);
    const { title, links } = data.nav;
    const items = links.map((link) => {
        const { slug, navbarName, navbarDisplay, navbarSubtitle, links } =
            link;

        const path = `/${slug}`;


        let behavior;
        if (navbarDisplay === "Only Link") {
            behavior = { path: path };
        } else {
            // behavior determines how the navbar link shows up and whether it opens the menu
            // for the time being, disabling the menu behavior
            throw "Menu navbar items are not supported at the moment";
            //   behavior = {
            //     menu: (
            //       <NavMenuItem
            //         title={navbarName}
            //         subtitle={navbarSubtitle ? navbarSubtitle.navbarSubtitle : ""}
            //         links={links ? getLinks(links) : []}
            //         path={path}
            //       />
            //     ),
            //   };
        }

        return {
            label: navbarName,
            key: slug,
            ...behavior,
        };
    });

    return (
        <Box>
            <Container>
                <Flex as="ul" sx={{ height: "6em ", p: 0 }}>
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
                            {title}
                        </Link>
                    </li>
                    <div sx={{ display: DISPLAY_LARGE("flex") }}>
                        {items.map((item) => (
                            <NavItem
                                key={item.key}
                                item={item}
                                toggleMenu={getToggleMenu(item)}
                            />
                        ))}
                    </div>
                    <li key={"menu"} sx={{ variant: "styles.navitem", marginLeft: "auto", display: DISPLAY_SMALL("flex")}}>
                        <MenuButton onClick={toggleMenu} />
                    </li>
                </Flex>
            </Container>
            <div sx={{display: DISPLAY_SMALL("block")}}>
            <NavMenu showMenu={showMenu} close={() => setShowMenu(false)} >
                <Box as="ul">
                    {items.map((item) => (
                        <div>
                        <NavItem
                            key={item.key}
                            item={item}
                            toggleMenu={getToggleMenu(item)}
                        />
                        <Divider />
                        </div>
                    ))}
                </Box>
            </NavMenu>
            </div>
            <Divider my={0} color={"beige"} />
        </Box>
    );
};

export default Navbar2;

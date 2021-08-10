/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";

import { Container, Card, NavLink, Heading } from "theme-ui";

const SideNav = ({ links }) => {
  return (
    <Container py={[3, 4, 5, 6]}>
      <Heading> Links </Heading>
      <Card>
        {links.map(({ label, link }) => (
          <Link
            to={`${link}`}
            as={NavLink}
            key={link}
            sx={{ display: "block", variant: "styles.navbutton" }}
          >
            {label}
          </Link>
        ))}
      </Card>
    </Container>
  );
};

export default SideNav;

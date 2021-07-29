/** @jsx jsx */
import { jsx } from "theme-ui";

import { Container, Card, NavLink, Box, Heading } from "theme-ui";

const SideNav = ({ links }) => {
  return (
    <Container py={[3, 4, 5, 6]}>
      <Heading> Links </Heading>
      <Card>
        {links.map(({ label, link }) => (
          <NavLink key={link} sx={{ display: "block" }}>
            {label}
          </NavLink>
        ))}
      </Card>
    </Container>
  );
};

export default SideNav;

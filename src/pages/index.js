/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout";
import Splash from "../components/splash";

import { Box, Container, Heading, Text, Button, Divider } from "theme-ui";

const issues = ["Colorism", "Gender Roles", "Casteism & Race", "LGBTQIA+"];
// markup

const Section = ({ title, children, action = null }) => (
  <section>
    <Box mt={4} mb={4}>
      <Heading>{title}</Heading>
      {children}
    </Box>
    {action && <Button>{action}</Button>}
  </section>
);

const IndexPage = () => {
  return (
    <Layout>
      <Splash />
      <Container sx={{my: [3, 4, 5, 6]}}>
        <Section title="Instructional Materials" action="Material">
          <Text>Material found and curated by former students.</Text>
          <ul>
            {issues.map((issue) => (
              <li> {issue} </li>
            ))}
          </ul>
        </Section>

        <Section title="Grammar" action="Grammar">
          <Text>
            A grassroots effort to make Hindi Grammar more inclusive.{" "}
          </Text>
        </Section>

        <Section title="Inclusive Classroom Survey" action="Survey">
          <Text>
            Give feedback about the general classroom climate throughout the
            semester.
          </Text>
        </Section>
      </Container>
    </Layout>
  );
};

export default IndexPage;

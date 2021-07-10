import * as React from "react";

import Layout from "../components/layout";
import Fill from "../components/fill";

import { Box, Container, Heading, Text, Button, Divider } from "@theme-ui/components";

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
      <Box sx={{ height: "15vh" }}>
        <Fill></Fill>
      </Box>
      <Container mr={4} ml={4} p={4}>
        <Heading sx={{
          fontSize:[4, 4, 6, 6]
        }}>
          Hello • नमस्ते
        </Heading>
        <Text sx={{fontSize: [3, 4]}}>
         We are an effort to introduce more inclusive material for teaching and learning Hindi in the classroom.
        </Text>
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

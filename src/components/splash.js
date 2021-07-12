/** @jsx jsx */
import { jsx } from "theme-ui";

import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Container, Box, Flex, Heading, Text } from "@theme-ui/components";

const Splash = () => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "pg-cochn11.JPG" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.background.childImageSharp.fluid;

  return (
      <BackgroundImage Tag="section" fluid={imageData}>
        <Container
          sx={{ minHeight: "35vh", backdropFilter: "blur(2px)" }}
          p={4}
        >
          <Box>
            <Heading
              sx={{
                fontSize: [4, 4, 6, 6],
                color: "white",
              }}
            >
              Hello • नमस्ते
            </Heading>
            <Text sx={{ fontSize: [3, 4], color: "white" }}>
              We are an effort to introduce more inclusive material for teaching
              and learning Hindi in the classroom.
            </Text>
          </Box>
        </Container>
      </BackgroundImage>
  );
};

export default Splash;

/** @jsx jsx */
import { jsx } from "theme-ui";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Box, Heading, Text } from "@theme-ui/components";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";


const Splash = () => {
  const { background } = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "pg-cochn11.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );

  const pluginImage = getImage(background);

  return (
      <BgImage image={pluginImage} Tag="section">
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
      </BgImage>
  );
};

export default Splash;

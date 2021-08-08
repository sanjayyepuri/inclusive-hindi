/** @jsx jsx */
import { jsx } from "theme-ui";

import { Container, Box, Heading, Text } from "theme-ui";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { graphql } from "gatsby";

const Splash = ({ data }) => {
  const { title, subtitle, backgroundImage } = data;
  const pluginImage = getImage(backgroundImage.localFile);

  return (
    <BgImage
      style={{
        backgroundColor: "#bf5700",
        backgroundSize: "contain",
      }}
      image={pluginImage}
      Tag="section"
    >
      <Container sx={{ minHeight: "35vh" }} py={4}>
        <Box sx={{ maxWidth: "50%" }}>
          <Heading
            sx={{
              fontSize: [4, 4, 6, 6],
              color: "white",
            }}
          >
            {title ? title : ""}
          </Heading>
          <Text sx={{ fontSize: [3, 4], color: "white" }}>
            {subtitle ? subtitle : ""}
          </Text>
        </Box>
      </Container>
    </BgImage>
  );
};

const SplashFragment = graphql`
  fragment SplashRenderFields on ContentfulPageSplash {
    id
    title
    subtitle
    backgroundImage {
      localFile {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    __typename
  }
`;

export default Splash;
export { SplashFragment };

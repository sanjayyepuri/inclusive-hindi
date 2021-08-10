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
    <Box>
      <BgImage
        style={{
          backgroundColor: "#bf5700",
          backgroundSize: "contain",
          backgroundPosition: "left",
        }}
        image={pluginImage}
        Tag="section"
      >
        <Container sx={{ minHeight: "35vh" }} pt={4}></Container>
      </BgImage>
      <Container
        sx={{
          py: [1, 2, 2, 2],
          maxWidth: "100%",
          bottom: 0,
          backgroundColor: "primary",
        }}
      >
        <Heading
          sx={{
            fontSize: [4, 4, 6, 6],
          }}
        >
          {title ? title : ""}
        </Heading>
        <Text sx={{ fontSize: [3, 4]  }}>
          {subtitle ? subtitle : ""}
        </Text>
      </Container>
    </Box>
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

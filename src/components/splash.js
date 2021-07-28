/** @jsx jsx */
import { jsx } from "theme-ui";

import { Container, Box, Heading, Text } from "theme-ui";

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const Splash = ({ data }) => {
  const { title, subtitle, backgroundImage } = data;
  const pluginImage = getImage(backgroundImage.localFile);

  return (
    <BgImage image={pluginImage} Tag="section">
      <Container sx={{ minHeight: "35vh", backdropFilter: "blur(2px)" }} py={4}>
        <Box sx={{ maxWidth: "50%" }}>
          <Heading
            sx={{
              fontSize: [4, 4, 6, 6],
              color: "white",
            }}
          >
            {title ? title : ""}
          </Heading>
          <Text sx={{ fontSize: [3, 4], color: "white" }}>{subtitle ? subtitle : ""}</Text>
        </Box>
      </Container>
    </BgImage>
  );
};

export default Splash;

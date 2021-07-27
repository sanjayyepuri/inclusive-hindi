/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import Splash from "../components/splash";

import ContentfulRenderer from "../components/contentfulRenderer";

import { Box, Container, Heading, Text, Button, Divider } from "theme-ui";
import { graphql } from "gatsby";

const issues = ["Colorism", "Gender Roles", "Casteism & Race", "LGBTQIA+"];

const Section = ({ title, children, action = null }) => (
  <section>
    <Box mt={4} mb={4}>
      <Heading>{title}</Heading>
      {children}
    </Box>
    {action && <Button>{action}</Button>}
  </section>
);

const IndexPage = ({ data }) => {
  const { splash, projectDescription } = data.homepage;

  return (
    <Layout>
      <Splash data={splash} />
      <Container sx={{ my: [3, 4, 5, 6] }}>
        <ContentfulRenderer content={projectDescription} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    homepage: contentfulHomePage {
      splash {
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
      }
      projectDescription {
        raw
      }
    }
  }
`;

export default IndexPage;

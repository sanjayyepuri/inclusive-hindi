/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import contentfulMapping from "../components/contentfulMapping";

import { graphql } from "gatsby";
import { Heading, Container } from "theme-ui";

const MaterialPage = ({ data }) => {
  const { name, sections } = data.material;
  return (
    <Layout>
      <Container  sx={{ my: [3, 4, 5, 6] }}>
        <Heading> {name} </Heading>
      </Container>
      {sections.map((section) => {
        const Comp = contentfulMapping[section.__typename];

        return <div>{Comp && <Comp data={section} />}</div>;
      })}
    </Layout>
  );
};

export const query = graphql`
  query MaterialQuery($slug: String!) {
    material: contentfulMaterial(slug: { eq: $slug }) {
      name
      sections {
        ... on ContentfulMaterialTranscript {
          ... TranscriptRenderFields
        }
      }
    }
  }
`;

export default MaterialPage;

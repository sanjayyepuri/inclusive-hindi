/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import contentfulMapping from "../components/contentfulMapping";

import { graphql } from "gatsby";

const MaterialPage = ({ data }) => {
  const { sections } = data.material;
  return (
    <Layout>
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
      sections {
        ... on ContentfulMaterialTranscript {
          id
          description {
            raw
          }
          transcript {
            raw
          }

          vocabularyList {
            raw
          }
          __typename
        }
      }
    }
  }
`;

export default MaterialPage;

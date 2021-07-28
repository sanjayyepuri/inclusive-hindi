/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";

import { graphql } from "gatsby";
import contentfulMapping from "../components/contentfulMapping";

const IndexPage = ({ data }) => {
  const { sections } = data.page;
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
  query PageQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      sections {
        ... on ContentfulPageBlock {
          id
          title
          __typename
          body {
            raw
          }
        }
        ... on ContentfulPageSplash {
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
        ... on ContentfulTopic {
          id
          name
          __typename
        }
      }
      title
    }
  }
`;

export default IndexPage;
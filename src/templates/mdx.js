import * as React from "react";

import Layout from "../components/layout";

import { MDXProvider } from "@theme-ui/mdx";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container  } from "theme-ui";
import { graphql } from "gatsby";

const Material = ({ data }) => {
  const post = data.material.posts[0];

  return (
    <Layout>
      <Container p={4}>
        <MDXProvider>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  );
};

export default Material;
export const query = graphql`
  query MdxQuery($slug: String!) {
    material: allMdx(filter: { slug: { eq: $slug } }) {
      posts: nodes {
        body
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;


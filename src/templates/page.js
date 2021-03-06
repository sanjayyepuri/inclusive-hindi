/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "../components/layout";
import SideNav from "../components/sidenav";
import Splash from "../components/splash";

import contentfulMapping from "../components/contentfulMapping";

import { graphql } from "gatsby";
import { Box, Grid } from "theme-ui";

const getLinks = (links) => {
  return links.map((link) => {
    const slug =
      link.__typename === "ContentfulMaterial"
        ? `/${link.topic[0].slug}/${link.slug}`
        : `/${link.slug}`;

    return { label: link.name, link: slug };
  });
};

const Page = ({ data }) => {
  const { sections, links } = data.page;
  let main = sections[0];

  let splash, content;
  if (main.__typename === "ContentfulPageSplash") {
    splash = <Splash data={main} />;
    content = sections.slice(1);
  } else {
    splash = <div />;
    content = sections;
  }

  return (
    <Layout>
      {splash}
      <Grid columns={[1, null, "2fr 1fr"]}>
        <Box>
          {content.map((section) => {
            const Comp = contentfulMapping[section.__typename];
            return <div>{Comp && <Comp data={section} />}</div>;
          })}
        </Box>
        {links && (
          <Box>
            <SideNav links={getLinks(links)} />
          </Box>
        )}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      sections {
        ... on ContentfulPageBlock {
          ... BlockRenderFields
        }
        
        ... on ContentfulPageSplash {
          ... SplashRenderFields
        }
        ... on ContentfulTopic {
          ... TopicRenderFields
        }
      }
      links {
        ... on ContentfulPage {
          slug
          name
          __typename
        }
      }
    }
  }
`;

export default Page;

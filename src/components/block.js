/** @jsx jsx */
import { graphql } from "gatsby";
import { jsx } from "theme-ui";

import { Container } from "theme-ui";
import ContentfulRenderer from "./contentfulRenderer";

const Block = ({ data }) => {
  const { body } = data;
  return (
    <Container sx={{ my: [3, 4, 5, 6] }}>
      <ContentfulRenderer content={body} />
    </Container>
  );
};

const BlockFragment = graphql`
  fragment BlockRenderFields on ContentfulPageBlock {
    id
    name
    __typename
    body {
      raw
      references {
        ... on ContentfulTeamMember {
          ...TeamMemberRenderFields
        }
      }
    }
  }
`;

export default Block;
export { BlockFragment };

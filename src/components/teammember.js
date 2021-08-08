/** @jsx jsx */
import { graphql } from "gatsby";
import { Box, Container, Card, jsx } from "theme-ui";

const TeamMember = ({ data }) => {
  const { name, blurb, profileImage } = data;

  return (
    <Card>
      <h4> {name} </h4>
      <p> {blurb.blurb} </p>
    </Card>
  );
};

const TeamMemberFragment = graphql`
  fragment TeamMemberRenderFields on ContentfulTeamMember {
    contentful_id
    __typename
    name
    blurb {
      blurb
    }
  }
`;

export default TeamMember;
export { TeamMemberFragment };

/** @jsx jsx */
import { graphql } from "gatsby";
import { Card, jsx } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TeamMember = ({ data }) => {
  const { name, blurb, profileImage } = data;
  const propic = getImage(profileImage.localFile);
  
  return (
    <Card>
      <h4> {name} </h4>
      <p> {blurb.blurb} </p>
      <GatsbyImage image={propic} />
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
    profileImage {
      localFile {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

export default TeamMember;
export { TeamMemberFragment };

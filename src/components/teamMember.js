/** @jsx jsx */
import { graphql } from "gatsby";
import { Box, Grid, Card, jsx } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ data }) => {
  const { name, blurb, profileImage } = data;
  const propic = getImage(profileImage.localFile);

  return (
    <Card sx={{ my: 2 }}>
      <h2> {name} </h2>
      <Grid columns={[2, "2fr 1fr"]}>
        <Box>
          <p> {blurb.blurb} </p>
        </Box>
        <Box>
          <GatsbyImage image={propic} style={{ borderRadius: 4 }} />
        </Box>
      </Grid>
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

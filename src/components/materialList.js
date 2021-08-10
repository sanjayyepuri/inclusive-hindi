/** @jsx jsx */
import { Divider, jsx } from "theme-ui";

import { graphql, Link } from "gatsby";
import { Box, Container } from "theme-ui";

const MaterialHeadline = ({ data }) => {
  const { name, slug } = data;

  return (
    <Box>
      <Link
        to={`${slug}`}
        sx={{ display: "block", variant: "styles.navbutton" }}
      >
        <h3>{name}</h3>
        <p>Description goes here</p>
      </Link>
      <Divider />
    </Box>
  );
};

const TopicList = ({ data }) => {
  const { name, materials } = data;

  return (
    <Container>
      <h2> {`${name} Material` }</h2>
      {materials.map((material) => (
        <MaterialHeadline data={material} />
      ))}
    </Container>
  );
};

const TopicListFragment = graphql`
  fragment TopicRenderFields on ContentfulTopic {
    contentful_id
    __typename

    name
    slug
    materials {
      name
      slug
    }
  }
`;

export default TopicList;
export { TopicListFragment };

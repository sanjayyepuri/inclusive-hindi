/** @jsx jsx */
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

export default Block;

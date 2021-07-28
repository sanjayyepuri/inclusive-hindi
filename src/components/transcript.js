/** @jsx jsx */
import { Heading, jsx } from "theme-ui";

import { Container } from "theme-ui";
import ContentfulRenderer from "./contentfulRenderer";

const Transcript = ({ data }) => {
  const { description, transcript, vocabularyList } = data;
  return (
    <Container sx={{ my: [3, 4, 5, 6] }}>
      <ContentfulRenderer content={description} />
      <Heading>Transcript</Heading>
      <ContentfulRenderer content={transcript} />
      <Heading>Vocabulary</Heading>
      <ContentfulRenderer content={vocabularyList} />
    </Container>
  );
};

export default Transcript;

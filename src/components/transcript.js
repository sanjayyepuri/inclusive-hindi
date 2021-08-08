/** @jsx jsx */
import { graphql } from "gatsby";
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

const TranscriptFragment = graphql`
  fragment TranscriptRenderFields on ContentfulMaterialTranscript {
    id
    description {
      raw
    }
    transcript {
      raw
    }

    vocabularyList {
      raw
    }
    __typename
  }
`;

export default Transcript;
export { TranscriptFragment };

import Block from "./block";
import Splash from "./splash";
import Transcript from "./transcript";
import TopicList from "./materialList";

const contentfulMapping = {
  ContentfulPageBlock: Block,
  ContentfulPageSplash: Splash,
  ContentfulMaterialTranscript: Transcript,
  ContentfulTopic: TopicList,
};

export default contentfulMapping;

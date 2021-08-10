import Block from "./block";
import Splash from "./splash";
import Transcript from "./transcript";
import TopicList from "./materialList";
import TeamMember from "./teamMember";

const contentfulMapping = {
  ContentfulPageBlock: Block,
  ContentfulPageSplash: Splash,
  ContentfulMaterialTranscript: Transcript,
  ContentfulTopic: TopicList,
  ContentfulTeamMember: TeamMember
};

export default contentfulMapping;

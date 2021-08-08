import Block from "./block";
import Splash from "./splash";
import TeamMember from "./teammember";
import Transcript from "./transcript";

const contentfulMapping = {
  ContentfulPageBlock: Block,
  ContentfulPageSplash: Splash,
  ContentfulMaterialTranscript: Transcript,
  ContentfulTeamMember: TeamMember,
};

export default contentfulMapping;

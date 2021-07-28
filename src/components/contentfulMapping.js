/** @jsx jsx */
import { jsx } from "theme-ui";

import Block from "./block";
import Splash from "./splash";
import Transcript from "./transcript";

const contentfulMapping = {
	ContentfulPageBlock: Block,
	ContentfulPageSplash: Splash,
	ContentfulMaterialTranscript: Transcript,
}

export default contentfulMapping;
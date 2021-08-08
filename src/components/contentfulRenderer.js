/** @jsx jsx */
import { jsx } from "theme-ui";

import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import contentfulMapping from "./contentfulMapping";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = node.data.target;  
      const Comp = contentfulMapping[entry.__typename];
      return <Comp data={entry} />;
    },
  },
};

const ContentfulRenderer = ({ content }) => {
  return <div>{content && renderRichText(content, options)}</div>;
};

export default ContentfulRenderer;

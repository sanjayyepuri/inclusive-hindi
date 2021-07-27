/** @jsx jsx */
import { jsx } from "theme-ui";

import { renderRichText } from "gatsby-source-contentful/rich-text";

const options = {};

const ContentfulRenderer = ({ content }) => {
  return <div>{content && renderRichText(content, options)}</div>;
};


export default ContentfulRenderer;
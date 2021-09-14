/** @jsx jsx */
import { graphql } from "gatsby";
import { jsx } from "theme-ui";
import {IoDocumentText }from "@react-icons/all-files/io5/IoDocumentText"

const Asset = ({ data }) => {
  return (
      <p> 
        <a href={data.localFile.publicURL}> 
         <IoDocumentText /> { " " } { data.title} 
        </a>
      </p>
  );
};

const AssetFragment = graphql`
  fragment AssetRenderFields on ContentfulAsset {
    contentful_id
    __typename
    title
    localFile {
        publicURL
    }
  }
`;

export default Asset;
export { AssetFragment };

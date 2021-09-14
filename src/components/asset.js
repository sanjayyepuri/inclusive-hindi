/** @jsx jsx */
import { graphql } from "gatsby";
import { Box, Grid, Card, Button, jsx } from "theme-ui";
import {IoDownloadSharp }from "@react-icons/all-files/io5/IoDownloadSharp"

const Asset = ({ data }) => {
  return (
    <Card>
     
      <p> 
        {data.title} { " " }(
        <a href={data.localFile.publicURL}> 
          Download <IoDownloadSharp />
        </a>
        )
      </p>
        
    </Card>);
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

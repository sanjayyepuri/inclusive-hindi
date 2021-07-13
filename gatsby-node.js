const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      material: allMdx {
        posts: nodes {
          slug
        }
      }
    }
  `);

  result.data.material.posts.forEach((post) => {
    createPage({
      path: `/material/${post.slug}`,
      component: path.resolve("src/templates/material.js"),
      context: {
        slug: post.slug,
      },
    });
  });
};

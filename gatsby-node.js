const path = require("path");

const getAllMdx = async (graphql) => {
  const mdxPages = await graphql(`
    {
      site: allMdx {
        posts: nodes {
          slug
        }
      }
    }
  `);
  return mdxPages.data.site.posts.map((post) => {
    return {
      path: `/material/${post.slug}`,
      component: path.resolve("src/templates/mdx.js"),
      context: {
        slug: post.slug,
      },
    };
  });
};

const getAllPages = async (graphql) => {
  const contentfulPages = await graphql(`
    {
      site: allContentfulPage {
        pages: edges {
          post: node {
            slug
          }
        }
      }
    }
  `);

  return contentfulPages.data.site.pages.map((data) => {
    const { post } = data;
    const slug = post.slug === "home-page" ? "" : post.slug;
    return {
      path: `/${slug}`,
      component: path.resolve("src/templates/page.js"),
      context: {
        slug: post.slug,
      },
    };
  });
};

const getAllMaterials = async (graphql) => {
  const materialPages = await graphql(`
    {
      site: allContentfulTopic {
        topics: edges {
          topic: node {
            slug
            materials {
              slug
            }
          }
        }
      }
    }
  `);

  return materialPages.data.site.topics.map((data) => {
    const { topic } = data;
    return topic.materials.map((mat) => {
      return {
        path: `/${topic.slug}/${mat.slug}`,
        component: path.resolve("src/templates/material.js"),
        context: {
          slug: mat.slug,
        },
      };
    });
  }).flat();
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = [
    ...await getAllMaterials(graphql),
    ...await getAllMdx(graphql),
    ...await getAllPages(graphql),
  ]

  pages.forEach((page) => {
    createPage(page);
  });
};

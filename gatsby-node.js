/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query {
    allContentfulBlogPost {
      nodes {
        summary {
          internal {
            content
          }
        }
        body {
          raw
        }
        title
        slug
        updatedAt
        coverImage {
          fixed(width: 300) {
            src
            srcSet
            srcSetWebp
            srcWebp
            width
            height
            base64
            aspectRatio
          }
        }
      }
    }
  }`)

  const res = raw.data.allContentfulBlogPost.nodes

  res.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/blog.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `posts/${e.slug}`,
    slug: `posts/${e.slug}`
  }))
}
const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const blogLimit = 6;
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create blog
      createPage({
        path: `/blog/`,
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          limit: blogLimit,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create additional pagination on blog page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/blog/${i + 2}/`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = node.post !== null ? node.post.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/blog/tag/${node.slug}/` : `blog/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadListings = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulListing {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulListing.edges
      const homePageLimit = 3;
      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: homePageLimit,
          skip: 0,
        },
      })

      pages.map(({ node }) => {
        createPage({
          path: `/listings/${node.slug}/`,
          component: path.resolve(`./src/templates/listing.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
              community
              about
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        if (node.about) {
          createPage({
            path: `/about/${node.slug}/`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug: node.slug,
            },
          })
        } else if (node.community) {
          createPage({
            path: `/communities/${node.slug}/`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug: node.slug,
            },
          })
        } else {
          createPage({
            path: `/${node.slug}/`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug: node.slug,
            },
          })
        }
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags, loadPages, loadListings])
}

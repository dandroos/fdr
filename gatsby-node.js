/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/article.js');
    const dogTemplate = path.resolve('src/templates/dog.js');

    const articles = graphql(`
    {
        articles: allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}) {
            edges {
                node {
                html
                id
                frontmatter {
                path
                title
                date
                author
                }
                excerpt
            }
            }
        }
        dogs: allMarkdownRemark(filter: {frontmatter: {type: {eq: "dog"}}}) {
            edges {
              node {
                frontmatter {
                  lang {
                      en
                      es
                  }
                  dob
                  date_entered
                  breed
                  name
                  path
                  adopted
                }
              }
            }
          }
    }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors);
        }
        res.data.articles.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
        res.data.dogs.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: dogTemplate
            })
        })
    })
}
import React from "react"
import Img from "gatsby-image"
import SEO from "../components/SEO"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Fade from "react-reveal/Fade"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

import { Container, Row, Col } from "reactstrap"

function ArticlePage(props) {
  const post = props.data.main

  const mobileImage =
    props.data.main.frontmatter.cover_image.childImageSharp.fluid

  const desktopImage =
    props.data.desktop.frontmatter.cover_image.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Fade down>
        <Img
          fluid={mobileImage}
          className="d-block d-sm-none"
          style={{ marginTop: "-1.5rem" }}
        ></Img>
        <Img
          fluid={desktopImage}
          className="d-none d-sm-block"
          style={{ marginTop: "-1.5rem" }}
        ></Img>
      </Fade>

      <Fade left>
        <Container className="mt-3">
          <Row>
            <Col className="text-center">
              <AniLink
                fade
                to="/articles"
                className="btn btn-sm btn-primary"
                duration={0.25}
              >
                Back
              </AniLink>
            </Col>
          </Row>
          <h1 className="display-3 font-weight-bold text-center">
            {post.frontmatter.title}
          </h1>
          <div>
            <div className="mb-2 text-center">
              <small>{post.frontmatter.date}</small>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="text-justify"
            />
          </div>
        </Container>
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  query myTest($path: String!) {
    desktop: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "dddd DD MMMM YYYY", locale: "en")
        title
        author
        cover_image {
          childImageSharp {
            fluid(
              maxWidth: 2000
              maxHeight: 600
              fit: COVER
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    main: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "dddd DD MMMM YYYY", locale: "en")
        title
        author
        cover_image {
          childImageSharp {
            fluid(
              maxWidth: 900
              maxHeight: 800
              fit: COVER
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ArticlePage
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import AniLink from "gatsby-plugin-transition-link"

import { connect } from "react-redux"

import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap"


const ArticlesData = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "article"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              author
              date(formatString: "dddd DD MMMM YYYY", locale: "en")
              path
              cover_image {
                publicURL
                childImageSharp {
                  fluid(
                    maxWidth: 550
                    maxHeight: 350
                    fit: COVER
                    cropFocus: CENTER
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  moment.locale(props.lang)

  return data.allMarkdownRemark.edges.map(post => (
    <Col md={12} lg={6} key={post.node.id}>
      <Card className="text-dark mb-3">
        <AniLink fade="true" to={post.node.frontmatter.path}>
          <Img
            fluid={post.node.frontmatter.cover_image.childImageSharp.fluid}
          ></Img>
        </AniLink>
        <CardBody>
          <CardTitle className="display-4">
            {post.node.frontmatter.title}
          </CardTitle>
          <CardSubtitle>{moment(post.node.frontmatter.date).fromNow()}</CardSubtitle>
          <hr />
          <CardText className="text-justify">{post.node.excerpt}</CardText>
          <AniLink
            fade="true"
            to={post.node.frontmatter.path}
            className="btn btn-primary text-right"
          >
            Read more
          </AniLink>
        </CardBody>
      </Card>
    </Col>
  ))
}

const mapStateToProps = state =>({
  lang: state.app.lang
})

export default connect(mapStateToProps)(ArticlesData)
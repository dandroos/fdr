import React from "react"
import SEO from "../components/SEO"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import { FormattedMessage } from "react-intl"
import Layout from "../components/Layout"
import Dog from "../components/Dog"
import ShareBar from "../components/ShareBar"
import language from "../components/Language"

function DogsPage(props) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "dog" } } }
        sort: { fields: frontmatter___date_entered }
      ) {
        edges {
          node {
            frontmatter {
              lang {
                en
                es
              }
              breed
              name
              date_entered
              dob
              ppp
              reserved
              status
              path
              adopted
              image {
                childImageSharp {
                  fluid(
                    maxWidth: 550
                    maxHeight: 550
                    fit: COVER
                    cropFocus: CENTER
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 1200, height: 630, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
            parent {
              ... on File {
                mtime
              }
            }
          }
        }
      }
    }
  `)

  const modifiedDate = data.allMarkdownRemark.edges.reduce((pre, curr) => {
    if (moment(curr.node.parent.mtime).isAfter(moment(pre))) {
      return curr.node.parent.mtime
    } else {
      return pre
    }
  }, new Date("1990-01-01"))

  moment.locale(props.lang)

  return (
    <Layout>
      <SEO
        title={language[props.lang].meet_the_dogs}
        description={language[props.lang].they_cant_wait}
        image={data.allMarkdownRemark.edges[0].node.frontmatter.image[0].childImageSharp.fixed.src}
      />
      <div className="min-vh-100">
        <Container className="" style={{ paddingTop: "6rem" }}>
          <Row className="d-flex align-items-center">
            <Col lg={7}>
              <h1 className="display-3 mb-0">
                <FormattedMessage id="meet_the_dogs" defaultMessage="en" />
              </h1>
              <p className="lead mb-1">
                <FormattedMessage id="they_cant_wait" defaultMessage="en" />
              </p>
            </Col>
            <Col lg={5} className="text-lg-right">
              <ShareBar />
            </Col>
          </Row>
          <Row clasName="text-center">
            {data.allMarkdownRemark.edges.map((dog, i) => {
              if (!dog.node.frontmatter.adopted) {
                return (
                  <Col sm={12} md={6} xl={4}>
                    <Dog data={dog.node.frontmatter} />
                  </Col>
                )
              } else {
                return null
              }
            })}
          </Row>
          <div className="text-center pb-2">
            <p className="text-center">
              <FormattedMessage id="info_disclaimer" defaultMessage="en" />
            </p>
            <p className="text-center pb-4">
              <small>
                <span className="font-weight-bold">
                  <FormattedMessage id="last_updated" defaultMessage="en" />:
                </span>{" "}
                {moment(modifiedDate).fromNow()}
              </small>
            </p>
          </div>
          {/* <Dog /> */}
        </Container>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  lang: state.app.lang,
})

export default connect(mapStateToProps)(DogsPage)

import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import PhotoGallery from "../components/PhotoGallery"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Container, Row, Col, Table, Badge, Alert, Tooltip } from "reactstrap"

import { FormattedMessage } from "react-intl"
import moment from "moment"

const remark = require("remark")
const html = require("remark-html")

function DogPage(props) {
  const [biog, setBiog] = useState()
  useEffect(() => {
    let data = {}
    for (let language in props.data.dogdata.frontmatter.lang) {
      remark()
        .use(html)
        // eslint-disable-next-line
        .process(props.data.dogdata.frontmatter.lang[language], (err, file) => {
          if (err) {
            console.log(err)
          }
          data = {
            ...data,
            [language]: file.contents,
          }
        })
    }
    setBiog(data)
  }, [])

  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen)
  }

  moment.locale(props.lang)
  const { frontmatter } = props.data.dogdata
  const age = moment(frontmatter.dob).fromNow(true)
  const time_in_care = moment(frontmatter.date_entered).fromNow()

  let status
  switch (props.data.dogdata.frontmatter.status) {
    case "shelter":
      status = "in_the_shelter"
      break
    case "foster":
      status = "in_foster"
      break
    case "preadoption":
      status = "in_preadoption"
      break
    default:
      break
  }
  return (
    <Layout>
      <Container style={{ paddingTop: "6rem" }}>
        <Row className="d-flex align-items-center">
          <Col
            xs={{ size: 12, order: "last" }}
            sm={{ size: 6, order: "first" }}
          >
            <h1 className="display-3 font-weight-bold mb-0">
              {frontmatter.name}
            </h1>
          </Col>
          <Col xs={12} sm={6} className="text-sm-right">
            <AniLink fade to="/dogs" className="btn btn-sm btn-outline-light">
              <FormattedMessage id="back" defaultMessage="en" />
            </AniLink>
          </Col>
        </Row>
        <div className="pb-2">
          {frontmatter.reserved ? (
            <Badge color="info" className="p-1">
              <FormattedMessage id="reserved" defaultMessage="en" />
            </Badge>
          ) : (
            <Badge color="success" className="p-1">
              <FormattedMessage id="available" defaultMessage="en" />
            </Badge>
          )}
          {frontmatter.ppp ? (
            <Badge
              color="warning"
              className="p-1 ml-1"
              id="ppp-tooltip"
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
              onTouchStart={() => {
                if (!tooltipOpen) {
                  setTooltipOpen(true)
                }
              }}
              onTouchEnd={() => {
                if (tooltipOpen) {
                  setTooltipOpen(false)
                }
              }}
            >
              <FormattedMessage id="licence_required" defaultMessage="en" />
              <Tooltip
                placement="bottom"
                fade={false}
                isOpen={tooltipOpen}
                target="ppp-tooltip"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur molestiae praesentium, alias porro assumenda
                repudiandae ipsum sed ea ullam perspiciatis.
              </Tooltip>
            </Badge>
          ) : null}
        </div>
        <Row>
          <Col sm={12} md={5}>
            <Img fluid={frontmatter.image[0].childImageSharp.fluid} />
          </Col>
          <Col sm={12} md={7}>
            <Alert color="secondary">
              <FormattedMessage id={status} defaultMessage="en" />
            </Alert>
            <Table bordered style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th
                    className="bg-light text-secondary"
                    style={{
                      width: "27.5%",
                    }}
                  >
                    <FormattedMessage id="breed" defaultMessage="en" />
                  </th>
                  <td style={{}}>{frontmatter.breed}</td>
                </tr>
                <tr>
                  <th className="bg-light text-secondary" style={{}}>
                    <FormattedMessage id="age" defaultMessage="en" />
                  </th>
                  <td style={{}}>{age}</td>
                </tr>
                <tr>
                  <th className="bg-light text-secondary" style={{}}>
                    <FormattedMessage id="time_in_care" defaultMessage="en" />
                  </th>
                  <td style={{}}>{time_in_care}</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <PhotoGallery photos={frontmatter.image} />
          </Col>
        </Row>
        <Row>
          <Col>
            {biog ? (
              <div
                dangerouslySetInnerHTML={{ __html: biog[props.lang] }}
                className="pt-3"
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col className="text-center p-4">
            <h3 className="display-5 font-weight-bold">
              <FormattedMessage id="know_more" defaultMessage="en" />
            </h3>
            <AniLink fade to="contact" className="btn btn-primary">
              <FormattedMessage id="contact_us" defaultMessage="en" />
            </AniLink>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query dog($path: String!) {
    dogdata: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        name
        breed
        dob
        date_entered
        adopted
        reserved
        ppp
        status
        image {
          childImageSharp {
            fluid(
              maxWidth: 1200
              maxHeight: 1200
              fit: COVER
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        lang {
          en
          es
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  lang: state.app.lang,
})

export default connect(mapStateToProps)(DogPage)

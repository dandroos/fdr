import React from "react"
import Img from "gatsby-image"
import Layout from "./Layout"
import { Container, Row, Col } from "reactstrap"
import { FormattedMessage } from "react-intl"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share"

export default function StaticPage(props) {
  console.log(props)

  return (
    <Layout>
      <Row>
        <Col
          widths={["xs", "sm", "md", "lg", "xxl"]}
          lg={6}
          xxl={7}
          className="shadow pb-3 mb-5 bg-light"
          style={{
            transform: "rotate(1deg)",
            zIndex: 5000,
            height: "fit-content",
          }}
        >
          <div className="position-relative">
            <Img
              fluid={props.image}
              style={{
                height: "90vh",
              }}
            />
            <h1
              className="display-4 font-weight-bold p-4 bg-light text-primary"
              style={{
                position: "absolute",
                bottom: "2rem",
                right: 0,
                zIndex: 50,
              }}
            >
              <FormattedMessage id={props.title_id} defaultMessage="en" />
            </h1>
          </div>
          <div className="text-center pt-3 bg-light text-dark d-flex align-items-center justify-content-center justify-content-sm-end">
            <span className="mr-4">
              <FormattedMessage id="share" defaultMessage="en" />
            </span>
            <div>
              <FacebookShareButton className="d-inline-block">
                <FacebookIcon size={32} />
              </FacebookShareButton>
              <TwitterShareButton className="d-inline-block">
                <TwitterIcon size={32} />
              </TwitterShareButton>
              <WhatsappShareButton className="d-inline-block">
                <WhatsappIcon size={32} />
              </WhatsappShareButton>
              <EmailShareButton className="d-inline-block">
                <EmailIcon size={32} />
              </EmailShareButton>
            </div>
          </div>
        </Col>
        <Col widths={["xs", "md", "lg", "xxl"]} lg={6} xxl={5}>
          <Container className="content-margin">
            {props.children}
            {props.cta ? (
              <div>
                <hr />
                <div className="text-center pb-3">
                  <p>
                    <FormattedMessage id={props.cta.text} defaultMessage="en" />
                  </p>
                  <AniLink to={props.cta.link} className="btn btn-primary">
                    <FormattedMessage
                      id={props.cta.btn_text}
                      defaultMessage="en"
                    />
                  </AniLink>
                </div>
              </div>
            ) : null}
          </Container>
        </Col>
      </Row>
    </Layout>
  )
}

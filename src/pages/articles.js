import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container, Row, Col } from "reactstrap"

import Fade from "react-reveal/Fade"

import Articles from "../components/ArticlesData"

import { FormattedMessage } from "react-intl"

const ArticlesPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Fade left>
        <div className="min-vh-100">
          <Container style={{ paddingTop: '6rem' }}>
            <div className="text-center" >
              <h1 className="display-4 font-weight-bold p-4 bg-light text-primary d-inline-block" style={{
              transform: 'rotate(2deg)'
            }}>
                <FormattedMessage id="articles" defaultMessage="en" />
              </h1>
              <p className="lead">Read about what has been happening at the sheter and helpful advice articles!</p>
            </div>
            <Row>
              <Articles />
            </Row>
          </Container>
        </div>

      </Fade>
    </Layout>
  )
}

export default ArticlesPage

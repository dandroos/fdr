import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "reactstrap"

import Fade from "react-reveal/Fade"

const SecondPage = props => {
  return (
    <Layout>
      <SEO title="Second Page" />
      <div style={{ overflow: "hidden" }}>
        <Fade left>
          <Container className="text-center">
            <h1 className="display-3 font-weight-bold">
              This is the second page!
            </h1>
            <p className="lead">How exciting?!</p>
          </Container>
        </Fade>
      </div>
    </Layout>
  )
}

export default SecondPage

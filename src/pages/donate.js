import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import StaticPage from '../components/StaticPage'
import { FormattedMessage } from 'react-intl'

import { Row, Col, Button } from 'reactstrap'

function DonatePage(props) {

  const cta = {
    text: 'donation_query',
    link: '/contact',
    btn_text: 'contact_us'
  }

    return (
        <StaticPage title_id="donate" image={props.data.imageSharp.fluid} cta={cta}>
            <p className="lead"><FormattedMessage id="DONATE_paragraph" defaultMessage="en" /></p>
            <p className="lead"><FormattedMessage id="DONATE_MONEY_paragraph" defaultMessage="en" /></p>
            
            <h3 className="display-5"><FormattedMessage id="DONATE_MONEY_title_1" /></h3>
            <p><FormattedMessage id="DONATE_MONEY_info_1" defaultMessage="en" /></p>
            <Row className="pb-4">
                <Col>
                    <Button color="light" block><FormattedMessage id="to_paypal" defaultMessage="en" /></Button>
                </Col>
                <Col>
                    <Button color="light" block><small><FormattedMessage id="how_paypal" defaultMessage="en" /></small></Button>
                </Col>
            </Row>
            <h3 className="display-5"><FormattedMessage id="DONATE_MONEY_title_2" /></h3>
            <p><FormattedMessage id="DONATE_MONEY_info_2" defaultMessage="en" /></p>
            <ul>
                <li><span className="font-weight-bold">IBAN:</span> ES34 0081 0545 5500 0141 9442</li>
                <li><span className="font-weight-bold">SWIFT/BIC:</span> BSAB ESBB</li>
            </ul>

            <h3 className="display-5"><FormattedMessage id="DONATE_MONEY_title_3" /></h3>
            <p><FormattedMessage id="DONATE_MONEY_info_3" defaultMessage="en" /></p>

            <h4><FormattedMessage id="DONATE_OTHER_title" /></h4>
            <p><FormattedMessage id="DONATE_OTHER_info" defaultMessage="en" /></p>
        </StaticPage>
    )
}

export const query = graphql`
    query donateQuery {
        imageSharp(original: {src: {regex: "/donate/"}}) {
          fluid (
            fit: COVER
            cropFocus: CENTER
        ){
            ...GatsbyImageSharpFluid
          }
        }
      }
    `

export default DonatePage; 
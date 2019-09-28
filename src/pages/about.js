import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import StaticPage from '../components/StaticPage'
import { FormattedMessage } from 'react-intl'

function AboutPage(props) {

  const cta = {
    text: 'get_involved',
    link: '/volunteer',
    btn_text: 'volunteer'
  }

    return (
        <StaticPage title_id="who_are_we" image={props.data.imageSharp.fluid} cta={cta}>
            <p className="lead"><FormattedMessage id="WHO_ARE_WE_main_paragraph" defaultMessage="en" /></p>
            <h2 className="display-5"><FormattedMessage id="WHO_ARE_WE_our_beginnings" defaultMessage="en" /></h2>
            <p><FormattedMessage id="WHO_ARE_WE_our_beginnings_paragraph" defaultMessage="en" /></p>
            <h2 className="display-5"><FormattedMessage id="WHO_ARE_WE_our_objectives" defaultMessage="en" /></h2>
            <p><FormattedMessage id="WHO_ARE_WE_our_objectives_paragraph" defaultMessage="en" /></p>
        </StaticPage>
    )
}

export const query = graphql`
    query pageQuery {
        imageSharp(original: {src: {regex: "/about/"}}) {
          fluid (
            maxWidth: 2000
            maxHeight: 2000
            fit: COVER
            cropFocus: ENTROPY
            quality: 100
        ){
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    `

export default AboutPage; 
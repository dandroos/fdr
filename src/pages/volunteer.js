import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import StaticPage from '../components/StaticPage'
import { FormattedMessage } from 'react-intl'

function VolunteerPage(props) {

  const cta = {
    text: 'join_our_team',
    link: '/contact',
    btn_text: 'contact_us'
  }

    return (
        <StaticPage title_id="volunteer" image={props.data.imageSharp.fluid} cta={cta}>
            <p className="lead"><FormattedMessage id="VOLUNTEER_paragraph" defaultMessage="en" /></p>
            <h2 className="display-5"><FormattedMessage id="VOLUNTEER_how_can_i_help" defaultMessage="en" /></h2>
            <p><FormattedMessage id="VOLUNTEER_how_can_i_help_paragraph_1" defaultMessage="en" /></p>
            <p><FormattedMessage id="VOLUNTEER_how_can_i_help_paragraph_2" defaultMessage="en" /></p>
        </StaticPage>
    )
}

export const query = graphql`
    query volunteerQuery {
        imageSharp(original: {src: {regex: "/volunteer/"}}) {
          fluid (
            fit: COVER
            cropFocus: CENTER
        ){
            ...GatsbyImageSharpFluid
          }
        }
      }
    `

export default VolunteerPage; 
import React from 'react'
import { graphql } from 'gatsby'
import StaticPage from '../components/StaticPage'
import { FormattedMessage } from 'react-intl'

function FosterPage(props) {

  const cta = {
    text: 'opportunity',
    link: '/dogs',
    btn_text: 'meet_the_dogs'
  }

    return (
        <StaticPage title_id="foster" image={props.data.imageSharp.fluid} cta={cta}>
            <p className="lead"><FormattedMessage id="FOSTER_paragraph" defaultMessage="en" /></p>
            <h2 className="display-5"><FormattedMessage id="FOSTER_why_foster" defaultMessage="en" /></h2>
            <p><FormattedMessage id="FOSTER_why_foster_intro" defaultMessage="en" /></p>
            <ul>
                <li><FormattedMessage id="FOSTER_why_foster_list_1" defaultMessage="en" /></li>
                <li><FormattedMessage id="FOSTER_why_foster_list_2" defaultMessage="en" /></li>
                <li><FormattedMessage id="FOSTER_why_foster_list_3" defaultMessage="en" /></li>
            </ul>
        </StaticPage>
    )
}

export const query = graphql`
    query fosterQuery {
        imageSharp(original: {src: {regex: "/foster/"}}) {
          fluid (
            fit: COVER
            cropFocus: CENTER
        ){
            ...GatsbyImageSharpFluid
          }
        }
      }
    `

export default FosterPage; 
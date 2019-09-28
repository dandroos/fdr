import React from 'react'
import { graphql } from 'gatsby'
import StaticPage from '../components/StaticPage'
import { FormattedMessage } from 'react-intl'

function AdoptPage(props) {

  const cta = {
    text: 'best_friend',
    link: '/dogs',
    btn_text: 'meet_the_dogs'
  }

    return (
        <StaticPage title_id="adopt" image={props.data.imageSharp.fluid} cta={cta}>
            <p className="lead"><FormattedMessage id="ADOPT_paragraph" defaultMessage="en" /></p>
            <h2 className="display-5"><FormattedMessage id="ADOPT_adopting_a_rescue_dog" defaultMessage="en" /></h2>
            <p><FormattedMessage id="ADOPT_adopting_a_rescue_dog_paragraph" defaultMessage="en" /></p>
            <ul>
                <li><FormattedMessage id="ADOPT_adopting_a_rescue_dog_list_1" defaultMessage="en" /></li>
                <li><FormattedMessage id="ADOPT_adopting_a_rescue_dog_list_2" defaultMessage="en" /></li>
                <li><FormattedMessage id="ADOPT_adopting_a_rescue_dog_list_3" defaultMessage="en" /></li>
                <li><FormattedMessage id="ADOPT_adopting_a_rescue_dog_list_4" defaultMessage="en" /></li>
                <li><FormattedMessage id="ADOPT_adopting_a_rescue_dog_list_5" defaultMessage="en" /></li>
            </ul>
        </StaticPage>
    )
}

export const query = graphql`
    query adoptQuery {
        imageSharp(original: {src: {regex: "/adopt/"}}) {
          fluid (
            maxWidth: 2000
            maxHeight: 1000
            fit: COVER
            cropFocus: CENTER
        ){
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    `

export default AdoptPage; 
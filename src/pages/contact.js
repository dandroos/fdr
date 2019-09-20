import React from 'react'
import StaticPage from '../components/StaticPage'
import { Container } from 'reactstrap'
import { graphql } from 'gatsby'
import ContactMethod from '../components/ContactMethod'

function ContactPage(props) {
    return (
        <StaticPage title_id="contact_us" image={props.data.imageSharp.fluid} cta={null}>
            <p className="lead">Whether you're intested in adopting, fostering, donating or volunteering, you can contact us the following ways:</p>
            <ContactMethod icon="fab fa-facebook-messenger" title="Messenger" />
            
        </StaticPage>            

    )
}

export const query = graphql`
    query contactQuery {
        imageSharp(original: {src: {regex: "/contact/"}}) {
          fluid (
            fit: COVER
            cropFocus: CENTER
        ){
            ...GatsbyImageSharpFluid
          }
        }
      }
    `

export default ContactPage

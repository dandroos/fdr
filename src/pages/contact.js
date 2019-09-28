import React from 'react'
import StaticPage from '../components/StaticPage'
import { Container, Row } from 'reactstrap'
import { graphql } from 'gatsby'
import ContactMethod from '../components/ContactMethod'
import ContactForm from '../components/ContactForm'
import { FormattedMessage } from 'react-intl'

function ContactPage(props) {
    return (
        <StaticPage title_id="contact_us" image={props.data.imageSharp.fluid} cta={null}>
            <p className="lead"><FormattedMessage id="CONTACT_intro" /></p>
            <Container>
              <Row>
                <ContactMethod icon="fab fa-facebook-messenger" title="CONTACT_messenger" />
                <ContactMethod icon="fab fa-whatsapp" title="CONTACT_whatsapp" />
                <ContactMethod icon="fas fa-phone" title="CONTACT_phone_us" />
                <ContactMethod icon="fas fa-envelope" title="CONTACT_email" />
              </Row>
            </Container>
            
        <ContactForm/>
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

import React from "react"
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap"
import { FormattedMessage } from 'react-intl'

export default function ContactForm() {
  return (
    <Form className="m-4">
      <p>
        <FormattedMessage id="CONTACT_form_intro" />
      </p>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label for="name"><FormattedMessage id="CONTACT_form_name" /></Label>
            <Input type="text" name="name" id="name" required />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label for="email"><FormattedMessage id="CONTACT_form_email" /></Label>
            <Input type="email" name="email" id="email" required />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="message"><FormattedMessage id="CONTACT_form_message" /></Label>
            <Input type="textarea" name="message" id="message" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block color="primary">
          <FormattedMessage id="CONTACT_form_submit" />
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

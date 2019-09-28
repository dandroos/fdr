import React from "react"
import { Button, Col } from "reactstrap"
import { FormattedMessage } from "react-intl"

export default function ContactMethod(props) {
  return (
      <Col sm={12} md={6}>
        <Button
          block
          color="dark"
          style={{
            fontSize: "1.5rem",
            padding: ".5rem",
            marginBottom: ".25rem"
          }}
        >
          <span className="mb-0">
            <i class={`${props.icon} bg-secondary border border-dark`} style={{
                padding: '1rem',
                borderRadius: '50%'
            }}/>{' '}<FormattedMessage id={props.title} /> 
          </span>
        </Button>
      </Col>
  )
}

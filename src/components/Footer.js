import React from 'react'
import Map from './LocationMap'
import { FormattedMessage } from 'react-intl'
import { Container, Row, Col } from "reactstrap"

export default function Footer() {
    return (
        <footer className="text-center text-light bg-primary py-3" style={{
            lineHeight: '1.5rem'
        }}>
            <h2 className="display-5 font-weight-bold">
                <FormattedMessage id="where_are_we" defaultMessage="en" />
            </h2>
            <Container className="bg-light text-dark p-3 shadow-sm">
                <Row className="d-flex align-items-center">
                    <Col sm={12} md={6}>
                        <Map />
                    </Col>
                    <Col sm={12} md={6} className="p-2">
                        <p>
                            <span className="font-weight-bold">Fuerteventura Dog Rescue</span><br />
                            Ayuntamiento de la Oliva<br />
                            La Oliva<br /> Fuerteventura<br />
                            <FormattedMessage id="spain" defaultMessage="en" />
                        </p>
                        <hr/>
                        <div>
                            <span className="font-weight-bold lead"><FormattedMessage id="hours" defaultMessage="en" /></span>
                            <dl className="row pt-3">
                                <dt className="col-sm-6"><FormattedMessage id="thursday" defaultMessage="en" /></dt>
                                <dd className="col-sm-6">8.00 - 9.30</dd>
                                <dt className="col-sm-6"><FormattedMessage id="saturday" defaultMessage="en" />
                                <FormattedMessage id="and" defaultMessage="en" />
                                <FormattedMessage id="sunday" defaultMessage="en" /></dt>
                                <dd className="col-sm-6">9.00 - 10.30</dd>
                                <dt className="col-sm-6"><FormattedMessage id="public_holidays" defaultMessage="en" />
                               </dt>
                                <dd className="col-sm-6">9.00 - 10.30</dd>
                            </dl>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="p-4">
                <small><FormattedMessage id="site_design" defaultMessage="en" /> © {new Date().getFullYear()} David Andrews</small>
            </div>
        </footer>
    )
}

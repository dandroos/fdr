import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

export default function ContactMethod(props) {
    return (
        <Button block color="light" style={{
            fontSize: '4rem',
            padding: '2rem'
        }}>
            <Row>
                <Col>
                    <h3 className="display-5 mb-0"><i class={props.icon} />
                         {' '}{props.title}</h3>

                </Col>
            </Row>
        </Button>
        // <Container className="bg-primary text-light p-3">
        //     <Row className="d-flex justify-content-center align-items-center">
        //         <Col>
        //             <h3 className="display-5 mb-0"><i class={props.icon}></i> Messenger</h3>
        //         </Col>
        //         <Col>
        //             <span>fuerteventuradogrescue</span>
        //         </Col>
        //     </Row>
        // </Container>
    )
}

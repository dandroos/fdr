import React, { useState } from "react"
import { connect } from 'react-redux'
import Img from "gatsby-image"

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Table, Badge
} from 'reactstrap';

import AniLink from "gatsby-plugin-transition-link"

import { FormattedMessage } from 'react-intl'
import 'moment/locale/es'

const moment = require('moment')

function DogData(props) {

  moment.locale(props.lang)
  const time_in_shelter = moment(props.data.date_entered).fromNow();
  const age = moment(props.data.dob).fromNow(true);

  let status;

  switch (props.data.status) {
    case 'shelter':
      status = 'in_the_shelter';
      break;
    case 'foster':
      status = 'in_foster';
      break;
    case 'preadoption':
      status = 'in_preadoption';
      break;
  }

  const [pushUp, setPushUp] = useState(null)
  const handleMouseEnter = () => {
    setPushUp("push-up")
  }
  const handleMouseLeave = () => {
    setPushUp(null)
  }

  return (
    <div>
      <AniLink fade to={props.data.path} className="no-underline">
        <Card className={`${pushUp} mb-4 text-dark shadow-sm text-center`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
          transition: 'all .25s',
          // maxWidth: '24rem'
        }}>
          <span style={{
            backgroundColor: 'rgba(255,255,255,.75)',
            position: 'absolute',
            top: '0',
            right: '0',
            zIndex: 1000,
            padding: '.5rem'
          }}><small><FormattedMessage id={status} defaultMessage="en" /></small></span>
          <Img fluid={props.data.image[0].childImageSharp.fluid} />
          <CardBody>
            <CardTitle><h2 className="display-4 font-weight-bold">
              {props.data.name}
            </h2>

              {props.data.reserved ? (
                <Badge color="info" className="p-1 m-1"><FormattedMessage id="reserved" defaultMessage="en" /></Badge>
              ) : (
                  <Badge color="success" className="p-1 m-1"><FormattedMessage id="available" defaultMessage="en" /></Badge>
                )
              }
              {props.data.ppp ? (
                <Badge color="warning" className="p-1 m-1"><FormattedMessage id="licence_required" defaultMessage="en" /></Badge>
              ) : null
              }
            </CardTitle>
            <Table bordered size="sm" className="text-dark text-center" style={{
              fontSize: '.9rem'
            }}>
              <thead className="thead-dark">
                <tr >
                  <th style={{
                    width: '33.33%',
                    verticalAlign: 'middle'
                  }}><FormattedMessage id="breed" defaultMessage="en" /></th>
                  <th style={{
                    width: '33.33%',
                    verticalAlign: 'middle'
                  }}><FormattedMessage id="age" defaultMessage="en" /></th>
                  <th style={{
                    width: '33.33%',
                    verticalAlign: 'middle'
                  }}><FormattedMessage id="time_in_care" defaultMessage="en" /></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.data.breed}</td>
                  <td>{age}</td>
                  <td>{time_in_shelter}</td>
                </tr>
              </tbody>
            </Table>
            {/* <AniLink fade to={props.data.path} className="btn btn-primary mt-2"><FormattedMessage id="more_info" defaultMessage="en" /></AniLink> */}
          </CardBody>
        </Card>
      </AniLink>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.app.lang
})

export default connect(mapStateToProps)(DogData)
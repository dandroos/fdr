import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share"
import { FormattedMessage } from 'react-intl'
import { Button } from "reactstrap"

export default function ShareBar(props) {
  const url = window.location.href
  const iconSize = 32

  return (
    <div className="py-2 px-1 my-2 text-dark">
        <span className="mr-3">
            <FormattedMessage id="share" />:
        </span>
      <FacebookShareButton url={url} className="d-inline-block">
        <Button color="primary" className="p-0 mr-1">
          <FacebookIcon size={iconSize} iconBgStyle={{
              fill: 'transparent'
          }} className="share-btn" />
        </Button>
      </FacebookShareButton>
      <TwitterShareButton url={url} className="d-inline-block">
        <Button color="primary" className="p-0 mr-1">
          <TwitterIcon size={iconSize} iconBgStyle={{
              fill: 'transparent'
          }} className="share-btn" />
        </Button>
      </TwitterShareButton>
      <WhatsappShareButton url={url} className="d-inline-block">
        <Button color="primary" className="p-0 mr-1">
          <WhatsappIcon size={iconSize} iconBgStyle={{
              fill: 'transparent'
          }} className="share-btn" />
        </Button>
      </WhatsappShareButton>
      <EmailShareButton url={url} className="d-inline-block">
        <Button color="primary" className="p-0">
          <EmailIcon size={iconSize} iconBgStyle={{
              fill: 'transparent'
          }} className="share-btn" />
        </Button>
      </EmailShareButton>
    </div>
  )
}

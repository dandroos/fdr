import React, { useState } from 'react'
import Img from 'gatsby-image'
import PhotoViewer from '../components/PhotoViewer'
import { Row, Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'

export default function PhotoGallery(props) {

    // const fullSizeImages = props.photos.map((i, ind) => {
    //     return (

    //     )
    // })
    const [imageLoaded, setImageLoaded] = useState(null)
    const handleClick = (e) => {
        setImageLoaded(e.target.src)
    }

    const unmountCurrentImage = () => {
        setImageLoaded(null)
    }
    return (
        <>
            <h3 className="display-5 font-weight-bold"><FormattedMessage id="photos" defaultMessage="en" /></h3>
            <Row>
                <PhotoViewer current={imageLoaded} unmount={unmountCurrentImage} />
                {props.photos.map((i, ind) => {
                    return (
                        <Col xs={6} md={3}>
                            <div onClick={handleClick} key={ind} className="p-3" style={{ cursor: 'pointer' }}>
                                <Img fluid={i.childImageSharp.fluid} source={i.childImageSharp.fluid.src} onClick={handleClick} key={ind} />
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

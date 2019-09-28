import React, { useEffect, useState } from 'react'

export default function PhotoViewer(props) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (props.current) {
            setIsOpen(true)
        }
    }, [props.current])

    const handleClick = () => {
        setIsOpen(false)
        props.unmount()
    }

    return isOpen ? (
        <div className="position-fixed vh-100 vw-100 justify-content-center align-items center d-flex justify-content-center bg-dark pb-3" style={{ top: 0, left: 0, right: 0, zIndex: 50000, paddingTop: '6rem' }} onClick={handleClick}>
            <img src={props.current} alt="Dog" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            <span className="btn btn-secondary text-light d-flex justify-content-center align-items-center shadow font-weight-bold" style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                position: 'fixed',
                top: '6rem',
                right: 15,
                cursor: 'pointer'
            }}>X</span>
        </div>
    ) : null


}

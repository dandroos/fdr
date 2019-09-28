import React, { useState } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../state/app"
import Helmet from 'react-helmet'
import { TransitionPortal } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "jquery"
import "popper.js"
import { FormattedMessage } from "react-intl"
import Logo from '../images/fdr-logo.png'

function SiteNav(props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const animationDuration = .25;

  const getFlag = (lang) => {
    switch (lang) {
      case 'en':
        return 'gb'
      case 'es':
        return 'es'
      default: return 'en'
    }
  }

  return (
    <div>
      <TransitionPortal>
        <Helmet>
          <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.css" />
        </Helmet>
        <Navbar expand="lg" color="light" light fixed="top" className="shadow">
          <AniLink fade to="/" className="navbar-brand text-primary font-weight-bold" duration={animationDuration}>
            <img src={Logo} alt="FDR logo" className="pr-2" style={{
              maxHeight: '2.5rem'
            }} />
            {props.siteTitle}
          </AniLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AniLink fade to="/dogs" className="nav-link" duration={animationDuration}>
                  <FormattedMessage id="meet_the_dogs" defaultMessage="en" />
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink fade to="/about" className="nav-link" duration={animationDuration}>
                  <FormattedMessage id="who_are_we" defaultMessage="en" />
                </AniLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret>
                  <FormattedMessage id="help_us" defaultMessage="eng" />
                </DropdownToggle>

                <DropdownMenu right style={{
                }} >
                  <DropdownItem>
                    <AniLink to="/adopt" className="btn btn-block btn-link no-underline">
                      <FormattedMessage id="adopt" defaultMessage="en" />
                    </AniLink>
                  </DropdownItem>
                  <DropdownItem>
                  <AniLink to="/foster" className="btn btn-block btn-link no-underline">
                  <FormattedMessage id="foster" defaultMessage="en" />
                    </AniLink>
                  </DropdownItem>
                  <DropdownItem>
                  <AniLink to="/volunteer" className="btn btn-block btn-link no-underline">
                  <FormattedMessage id="volunteer" defaultMessage="en" />
                    </AniLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <AniLink to="/donate" className="btn btn-block btn-primary no-underline">
                      Donate
                    </AniLink>
                  </DropdownItem>
                </DropdownMenu>

              </UncontrolledDropdown>
              <NavItem>
                <AniLink fade to="/articles" className="nav-link" duration={animationDuration}>
                  <FormattedMessage id="articles" defaultMessage="en" />
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink fade to="/contact" className="nav-link" duration={animationDuration}>
                  <FormattedMessage id="contact_us" defaultMessage="en" />
                </AniLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="ml-2 mt-1">
                <small>
                  <DropdownToggle nav caret>
                    <span className={`flag-icon flag-icon-${getFlag(props.lang)}`} />
                    {/* {props.lang.toUpperCase()} */}
                  </DropdownToggle>
                </small>

                <DropdownMenu right style={{
                }} >
                  <DropdownItem onClick={() => props.dispatch(setLanguage('en'))}><span className="flag-icon flag-icon-gb mr-3" /><small>English</small></DropdownItem>
                  <DropdownItem onClick={() => props.dispatch(setLanguage('es'))}><span className="flag-icon flag-icon-es mr-3" /><small>Español</small></DropdownItem>
                </DropdownMenu>

              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </TransitionPortal>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.app.lang
})

export default connect(mapStateToProps)(SiteNav)
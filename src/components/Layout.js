/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setLanguage } from "../state/app"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl'
import messages from './Language'
import Fade from "react-reveal/Fade"

import SiteNav from "./SiteNav"
import Footer from "./Footer"

import "./styles.scss"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    if (localStorage.getItem('fdr_lang')) {
      props.dispatch(setLanguage(localStorage.getItem('fdr_lang')))
    } 
  }, [])

  return (
    <IntlProvider locale={props.lang} messages={messages[props.lang]}>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
          integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
          crossorigin=""></script>
<script src="https://kit.fontawesome.com/e6cbd84bc2.js" crossorigin="anonymous"></script>
      </Helmet>
      <SiteNav siteTitle={data.site.siteMetadata.title} />
      <main>{props.children}</main>
      <div style={{ overflow: 'hidden' }}>
        <Fade up>
          <Footer />
        </Fade>
      </div>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  lang: state.app.lang
})

export default connect(mapStateToProps)(Layout)

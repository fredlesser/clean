import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

import '../css/main.scss'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <section className="cover">
          <div className="curtain" />
          <h1>The Bolshoi Theatre</h1>
        </section>
        <Link to={prefixLink('/about/')}>About</Link>
      </div>
    )
  }
}
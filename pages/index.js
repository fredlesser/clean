import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import BodyClassName from 'react-body-classname'
import Transition from '../components/Transition'

import '../css/main.scss'

export default class Index extends React.Component {
  render () {
    return (
      <BodyClassName className='home'>
        <section className="cover">
          <Link to={prefixLink('/about/')}><h1>The Bolshoi Theatre</h1></Link>
          <Transition />
        </section>
      </BodyClassName>
    )
  }
}

import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import BodyClassName from 'react-body-classname'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Headroom from 'react-headroom'
import Bio from '../../components/Bio'
import Transition from '../../components/Transition'
import './about.scss'


import { rhythm } from '../../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <BodyClassName className='about'>
      <section className="about">
        <Bio />

          {this.props.children}

        <Transition />
      </section>
      </BodyClassName>
    )
  },
})

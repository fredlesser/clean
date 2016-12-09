import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
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
      <section className="about">
        <Bio />
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={500}
        transitionLeave={500}>
          {this.props.children}
        </ReactCSSTransitionGroup>
        <Transition />
      </section>
    )
  },
})

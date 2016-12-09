import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Navigation from '../components/Navigation'
import { rhythm } from '../utils/typography'

import '../css/main.scss'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Navigation />
        <main className="main">
        <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={500} transitionLeave={500}>
                  {this.props.children}
        </ReactCSSTransitionGroup>
        <span className="graystripe" />
        <span className="redsquare" />
        <span className="redcircle" />
        </main>
      </div>
    )
  },
})

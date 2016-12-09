import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './navigation.scss'

const Navigation = () => (
 <nav>
  <ul>
    <li><Link to={prefixLink('/about/')} activeClassName="active">About</Link></li>
    <li><Link to={prefixLink('/about/')} activeClassName="active">Gallery</Link></li>
    <li><Link to={prefixLink('/about/')} activeClassName="active">Resources</Link></li>
    <li><Link to={prefixLink('/')}>B</Link></li>
  </ul>
 </nav>
);

export default Navigation

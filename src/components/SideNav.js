import React from 'react'
import { connect } from 'react-redux'
import { triggerSideNav } from '../actions/sideNav'
import classnames from 'classnames'


const SideNav = ({ sideNavActive, triggerSideNav }) => (
  <nav className={classnames({
    "side-nav": true,
    "active": sideNavActive
  })}>
    <ul>
      <li>
        <div className="side-nav__user">
          <div>
          </div>
        </div>
      </li>
      <li></li>
      <li></li>
    </ul>
    <div 
      className="side-nav__overlay"
      onClick={triggerSideNav}
    />
  </nav>
)

export default connect(
  ({ sideNav }) => ({ //mapStateToProps
    sideNavActive: sideNav.active
  }),
  { triggerSideNav }
)(SideNav)

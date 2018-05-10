import React from 'react'
import { connect } from 'react-redux'
import { triggerSideNav } from '../actions/sideNav'
import { NavLink } from 'react-router-dom'
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
      <li><NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink></li>
      <li><NavLink to="/lessons" activeClassName="active-link">Lessons</NavLink></li>
      <li><NavLink to="/editor" activeClassName="active-link">Editor</NavLink></li>
      <li><NavLink to="/forms" activeClassName="active-link">Forms</NavLink></li>
      <li><NavLink to="/typing" activeClassName="active-link">Typing</NavLink></li>
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
  { triggerSideNav } //mapDispatchToProps
)(SideNav)

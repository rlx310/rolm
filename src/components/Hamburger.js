import React from 'react'
import { connect } from 'react-redux'
import { triggerSideNav } from '../actions/sideNav'
import classnames from 'classnames'


const Hamburger = ({ sideNavActive, triggerSideNav }) => (
  <div
    onClick={triggerSideNav}
    className={classnames({
      "hamburger-icon": true,
      "active": sideNavActive
    })}
  >
    <i></i>
  </div>
)


export default connect(
  ({ sideNav }) => ({ // mapStateToProps
    sideNavActive: sideNav.active
  }),
  { triggerSideNav } // mapDispatchToProps
)(Hamburger)
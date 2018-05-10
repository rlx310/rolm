import React from 'react'
import { connect } from 'react-redux'
import { localLogout } from '../actions/user'
import Hamburger from './Hamburger'
import classnames from 'classnames'

class Navbar extends React.Component {
  state = {
    dropdownActive: false
  }

  openDropdown = () => {
    this.setState(() => ({dropdownActive: true }))
  }

  closeDropdown = () => {
    this.setState(() => ({dropdownActive: false }))
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <Hamburger />
          <a href="#" className="brand-logo">
            UCode
          </a>
          <ul className="right">
            <li><a>Coins</a></li>
            <li className="username"
              onMouseEnter={this.openDropdown}
              onMouseLeave={this.closeDropdown}
            >
              <a>
                <div>{this.props.user.name}</div>
              </a>
              <div className={classnames({
                logout: true,
                active: this.state.dropdownActive
              })}><a onClick={this.props.localLogout}>Logout</a></div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect(
  ({ user }) => ({
    user
  }),
  ({ localLogout })
)(Navbar)
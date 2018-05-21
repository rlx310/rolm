import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { localLogin } from '../../actions/user'

class Login extends React.Component {
  constructor(props) {
    super(props)
    const {user, history} = props
    if (user.signedIn === true) {
      history.push('/dashboard')
    }

    this.state = {
      username: '',
      password: '',
    }
  }

  shouldComponentUpdate(nextProps) {
    const { user, history } = nextProps
    if (user.signedIn === true) {
      history.push('/dashboard')
      return false 
    }
    return true
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(() => ({ [name]: value }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.localLogin(username.trim(), password)
  }

  render() {
    const { user, history } = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="username"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name="password" 
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            {user.loginFailed &&
              <p>Login has failed</p>
            }
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(
  ({ user }) => ({ //mapStateToProps
    user: user
  }),
  ({ localLogin }) //mapDispatchToProps
)(Login))

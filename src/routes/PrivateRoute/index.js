import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      rest.user.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
export default connect(
  ({ user }) => ({ 
    user
  })
)(PrivateRoute)
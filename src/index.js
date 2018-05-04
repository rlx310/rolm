import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import Dashboard from './routes/Dashboard'
import NoMatch from './routes/NoMatch'
import rootReducer from './reducers'

import '../styles/styles.scss'

import model from './model/example.js'


// middleware
const middleware = [ thunk ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

// root app
const App = () => (
  <AppRouter />
)
const AppRouter = () => (
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
  </Provider>
)  

// render app
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

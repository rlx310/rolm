import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'

import Login from './routes/Login'
import Dashboard from './routes/Dashboard'
import Typing from './routes/Typing'
import Editor from './routes/Editor'
import Forms from './routes/Forms'
import Lessons from './routes/Lessons'
import NoMatch from './routes/NoMatch'
import rootReducer from './reducers'

import exampleStore from './model/exampleStore.js'
// import './firebase/firebase'

import '../styles/styles.scss';


// middleware
const middleware = [ thunk ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// redux persist
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// create store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
const persistor = persistStore(store)

// root app

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/typing" component={Typing} />
          <PrivateRoute path="/editor" component={Editor} />
          <PrivateRoute path="/forms" component={Forms} />
          <PrivateRoute path="/lessons" component={Lessons} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)  

// render app
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

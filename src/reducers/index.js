import { combineReducers } from 'redux'
import sideNav from './sideNav'
import user from './user'

export default combineReducers({
  sideNav,
  user
})
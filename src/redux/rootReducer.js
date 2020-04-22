import { combineReducers } from 'redux'

import userReducers from './user/userReducers'

export default combineReducers({
  user: userReducers,
})

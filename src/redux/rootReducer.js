import { combineReducers } from 'redux'

import userReducers from './user/userReducers'
import cartReducers from './cart/cartReducers'

export default combineReducers({
  user: userReducers,
  cart: cartReducers,
})

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducers from './user/userReducers'
import cartReducers from './cart/cartReducers'
import directoryReducers from './directory/directoryReducers'
import shopReducers from './shop/shopReducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducers = combineReducers({
  user: userReducers,
  cart: cartReducers,
  directory: directoryReducers,
  shop: shopReducers,
})

export default persistReducer(persistConfig, rootReducers)

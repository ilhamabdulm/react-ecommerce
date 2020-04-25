import {
  TOGGLE_CART_DROPDOWN,
  ADD_TO_CART,
  CLEAR_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
} from '../actionTypes'

import {
  addItemToCart,
  removeItemFromCart,
  removeItemQuantity,
} from './cartUtils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload.item),
      }
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload.item),
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemQuantity(state.cartItems, action.payload.item),
      }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}

export default cartReducers

import { TOGGLE_CART_DROPDOWN, ADD_TO_CART } from '../actionTypes'

import { addItemToCart } from './cartUtils'

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
    default:
      return state
  }
}

export default cartReducers

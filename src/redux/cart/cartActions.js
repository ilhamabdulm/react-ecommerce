import { TOGGLE_CART_DROPDOWN, ADD_TO_CART } from '../actionTypes'

export const toggleCartDropdown = () => {
  return {
    type: TOGGLE_CART_DROPDOWN,
  }
}

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
    },
  }
}

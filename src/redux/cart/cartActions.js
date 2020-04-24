import {
  TOGGLE_CART_DROPDOWN,
  ADD_TO_CART,
  CLEAR_ITEM,
  REMOVE_ITEM,
} from '../actionTypes'

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

export const clearItemFromCart = (item) => {
  return {
    type: CLEAR_ITEM,
    payload: {
      item,
    },
  }
}

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      item,
    },
  }
}

import { createSelector } from 'reselect'

// input selector
const selectCart = (state) => state.cart

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectHiddenCart = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accQty, cartItem) => accQty + cartItem.quantity * cartItem.price,
    0
  )
)

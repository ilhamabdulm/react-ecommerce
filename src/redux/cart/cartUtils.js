export const addItemToCart = (cartItems, addedItem) => {
  const isExist = cartItems.find((cartItem) => cartItem.id === addedItem.id)
  if (isExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...addedItem, quantity: 1 }]
}

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

export const removeItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id)
}

export const removeItemQuantity = (cartItems, item) => {
  const isExist = cartItems.find((cartItem) => cartItem.id === item.id)
  if (isExist.quantity === 1) {
    return removeItemFromCart(cartItems, item)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

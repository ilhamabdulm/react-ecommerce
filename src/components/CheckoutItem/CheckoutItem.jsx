import React from 'react'
import { useDispatch } from 'react-redux'

import './CheckoutItem.style.scss'

import {
  clearItemFromCart,
  removeItem,
  addToCart,
} from '../../redux/cart/cartActions'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className={`${quantity === 1 && 'disabled'} arrow`}
          onClick={() => (quantity > 1 ? dispatch(removeItem(cartItem)) : null)}
        >
          &#10094;
        </div>{' '}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addToCart(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </span>
    </div>
  )
}

export default CheckoutItem

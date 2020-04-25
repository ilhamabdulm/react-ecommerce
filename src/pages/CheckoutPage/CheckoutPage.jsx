import React from 'react'
import { useSelector } from 'react-redux'

import './CheckoutPage.style.scss'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors'
import StripeButton from '../../components/StripeButton/StripeButton'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-message">You dont have any items</span>
      )}
      <div className="footer">
        <div className="total">TOTAL: ${cartTotal}</div>
        <div className="stripe">
          <StripeButton price={cartTotal} />
        </div>
        <span>You can use this fake credit card to TEST</span>
        <span>4242 - 4242 - 4242 - 4242 | 12 / 20 | CVV : 123</span>
      </div>
    </div>
  )
}

export default CheckoutPage

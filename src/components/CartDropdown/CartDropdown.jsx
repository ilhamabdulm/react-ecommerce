import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

import './CartDropdown.style.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton style={{ fontSize: 12 }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)

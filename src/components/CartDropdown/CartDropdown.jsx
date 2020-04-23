import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton'

import './CartDropdown.style.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{JSON.stringify(cartItems)}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)

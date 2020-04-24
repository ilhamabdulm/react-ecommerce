import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartDropdown } from '../../redux/cart/cartActions'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

import './CartDropdown.style.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleAction = () => {
    history.push('/checkout')
    dispatch(toggleCartDropdown())
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton style={{ fontSize: 12 }} onClick={handleAction}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

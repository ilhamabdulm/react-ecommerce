import React from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { toggleCartDropdown } from '../../redux/cart/cartActions'

import './CartIcon.style.scss'

const CartIcon = () => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleCartDropdown())
  }

  return (
    <div className="cart-icon" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  )
}

export default CartIcon

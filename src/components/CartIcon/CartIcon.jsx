import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { toggleCartDropdown } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'

import './CartIcon.style.scss'

const CartIcon = () => {
  const dispatch = useDispatch()
  const itemCount = useSelector((state) => selectCartItemsCount(state))

  const handleToggle = () => {
    dispatch(toggleCartDropdown())
  }

  return (
    <div className="cart-icon" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon

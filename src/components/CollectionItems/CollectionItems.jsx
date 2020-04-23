import React from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../redux/cart/cartActions'

import './CollectionItem.style.scss'
import CustomButton from '../CustomButton/CustomButton'

const CollectionItems = ({ item }) => {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(item))
  }

  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={handleAddToCart}
      >
        ADD TO CART
      </CustomButton>
    </div>
  )
}

export default CollectionItems

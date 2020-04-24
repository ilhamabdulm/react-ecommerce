import React from 'react'
import { useSelector } from 'react-redux'

import './CategoryPage.style.scss'

import { selectShopCategory } from '../../redux/shop/shopSelectors'

import CollectionItems from '../../components/CollectionItems/CollectionItems'

const CategoryPage = ({
  match: {
    params: { categoryId },
  },
}) => {
  const { items, title } = useSelector(selectShopCategory(categoryId))
  return (
    <div className="category-page">
      <h2 className="title">{title.toUpperCase()}</h2>.
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage

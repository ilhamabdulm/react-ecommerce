import React from 'react'

import './Collections.style.scss'

import CollectionItems from '../CollectionItems/CollectionItems'

const Collections = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {items
          .filter((_item, idx) => idx < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Collections

import React from 'react'

import './Collections.style.scss'

import CollectionItems from '../CollectionItems/CollectionItems'
import { withRouter } from 'react-router-dom'

const Collections = ({ title, items, history, match }) => {
  const handleClick = () => {
    history.push(`${match.path}/${title.toLowerCase()}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className="collection-preview">
      <h3 className="title" onClick={handleClick}>
        {title.toUpperCase()}
      </h3>
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

export default withRouter(Collections)

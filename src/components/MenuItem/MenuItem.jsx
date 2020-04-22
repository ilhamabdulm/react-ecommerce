import React from 'react'
import { withRouter } from 'react-router-dom'

import './MenuItem.style.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="image-background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)

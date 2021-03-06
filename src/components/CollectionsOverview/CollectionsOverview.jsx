import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './CollectionsOverview.style.scss'

import { selectShopCollectionArray } from '../../redux/shop/shopSelectors'

import Collections from '../Collections/Collections'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <Collections key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionArray,
})

export default connect(mapStateToProps)(CollectionsOverview)

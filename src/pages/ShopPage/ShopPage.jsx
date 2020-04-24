import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CategoryPage from '../CategoryPage/CategoryPage'

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  )
}

export default ShopPage

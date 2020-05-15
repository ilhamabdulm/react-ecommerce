import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
import CategoryPage from '../CategoryPage/CategoryPage'
import { updateCollections } from '../../redux/shop/shopActions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const unsubscribeFromSnapShot = null
  const dispatch = useDispatch()

  useEffect(() => {
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(updateCollections(collectionsMap))
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) => (
          <CategoryPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  )
}

export default ShopPage

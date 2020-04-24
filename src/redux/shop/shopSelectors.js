import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectShopCollectionArray = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
)

export const selectShopCategory = (categoryId) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[categoryId]
  )

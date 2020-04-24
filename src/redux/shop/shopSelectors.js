import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectShopCategory = (categoryId) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find((collection) => collection.routeName === categoryId)
  )
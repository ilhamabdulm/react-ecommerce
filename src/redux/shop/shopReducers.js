import { UPDATE_COLLECTIONS } from '../actionTypes'

const INITIAL_STATE = {
  collections: null,
}

const shopReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload.collections,
      }

    default:
      return state
  }
}

export default shopReducers

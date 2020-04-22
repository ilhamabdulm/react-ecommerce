import { STORE_USER_DATA } from '../actionTypes'

const INITIAL_STATE = {
  currentUser: null,
}

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        currentUser: action.payload.currentUser,
      }
    default:
      return state
  }
}

export default userReducers

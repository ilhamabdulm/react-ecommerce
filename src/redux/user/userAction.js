import { STORE_USER_DATA } from '../actionTypes'

export const storeUserData = (user) => {
  return {
    type: STORE_USER_DATA,
    payload: {
      currentUser: user,
    },
  }
}

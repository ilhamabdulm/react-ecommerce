import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAi7oxGiUYxQvaVsrZ0mdl10Otmj_pDBXM',
  authDomain: 'mashu-crwn.firebaseapp.com',
  databaseURL: 'https://mashu-crwn.firebaseio.com',
  projectId: 'mashu-crwn',
  storageBucket: 'mashu-crwn.appspot.com',
  messagingSenderId: '559298124585',
  appId: '1:559298124585:web:c142e0016281ea7745f538',
}

firebase.initializeApp(config)

export const createUserDocument = async (userData, additionalData) => {
  if (!userData) return
  console.log('HELLO')
  const userRef = firestore.doc(`users/${userData.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exist) {
    const { displayName, email } = userData
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGogle = () => auth.signInWithPopup(provider)

export default firebase

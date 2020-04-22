import React, { Component } from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth, createUserDocument } from './firebase/firebase.utils'
import { storeUserData } from './redux/user/userAction'

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import AuthPage from './pages/AuthPage/AuthPage'

class App extends Component {
  unsubscribeAuth = null

  componentDidMount() {
    const { storeUserData } = this.props
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          storeUserData({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        storeUserData(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthPage} />
        </Switch>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeUserData: (user) => dispatch(storeUserData(user)),
})

export default connect(null, mapDispatchToProps)(withRouter(App))

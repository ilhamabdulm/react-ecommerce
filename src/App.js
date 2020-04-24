import React, { Component } from 'react'
import './App.css'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth, createUserDocument } from './firebase/firebase.utils'
import { storeUserData } from './redux/user/userAction'

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import AuthPage from './pages/AuthPage/AuthPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'

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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  storeUserData: (user) => dispatch(storeUserData(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

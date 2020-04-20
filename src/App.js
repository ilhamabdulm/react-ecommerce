import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { auth, createUserDocument } from './firebase/firebase.utils'

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import AuthPage from './pages/AuthPage/AuthPage'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeAuth = null

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthPage} />
        </Switch>
      </Router>
    )
  }
}

export default App

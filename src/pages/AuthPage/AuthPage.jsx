import React from 'react'

import './AuthPage.style.scss'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const AuthPage = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default AuthPage

import React from 'react'

import './AuthPage.style.scss'

import SignIn from '../../components/SignIn/SignIn'

const AuthPage = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignIn />
    </div>
  )
}

export default AuthPage

import React, { Component } from 'react'

import './SignIn.style.scss'
import { signInWithGogle, auth } from '../../firebase/firebase.utils'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: '',
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            label="Email"
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            required
            label="Password"
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
          />
          <div className="button-container">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGogle} googleSign>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn

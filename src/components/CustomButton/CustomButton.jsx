import React from 'react'

import './CustomButton.style.scss'

const CustomButton = ({ children, googleSign, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        googleSign ? 'google-button' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton

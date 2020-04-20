import React from 'react'

import './CustomButton.style.scss'

const CustomButton = ({ children, googleSign, ...otherProps }) => {
  return (
    <button
      className={`${googleSign ? 'google-button' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton

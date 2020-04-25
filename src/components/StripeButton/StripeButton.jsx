import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'

import { clearCart } from '../../redux/cart/cartActions'

const StripeButton = ({ price }) => {
  const priceFix = price * 100
  const publishableKey = 'pk_test_w7vsWCuEwKCsnMzdwlm0c7el00TaKvhQnf'
  const dispatch = useDispatch()

  const onToken = (token) => {
    console.log(token)
    alert('Payment Success')
    dispatch(clearCart())
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="MRZ Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your cart total is $${price}`}
      amount={priceFix}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton

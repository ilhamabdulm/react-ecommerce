import React, { Component } from 'react'

import { SHOP_DATA } from './Shop.data'
import Collections from '../../components/Collections/Collections'

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state

    return (
      <div>
        <h3>COLLECTIONS</h3>
        {collections.map(({ id, ...otherProps }) => (
          <Collections key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage

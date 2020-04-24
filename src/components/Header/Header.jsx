import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.utils'
import { selectHiddenCart } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelector'

import './Header.style.scss'

import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

const Header = ({ currentUser, hidden }) => {
  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contactme">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleLogout}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHiddenCart,
})

export default connect(mapStateToProps)(Header)

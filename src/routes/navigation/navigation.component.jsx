import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import Cart from '../../components/cart/cart.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className='nav-link' to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <Cart />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation

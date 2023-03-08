import React from 'react'
import header from '../../assets/images/header-top.svg'
import Cart from '../cart/Cart'
import Nav from '../nav/Nav'

export default function Header(props) {
  const { cart = true } = props
  return (
    <header
      className='header__wrapper'
      style={{
        backgroundImage: `url(${header})`,
      }}
    >
      <Nav />
      {cart ? <Cart /> : null}
    </header>
  )
}

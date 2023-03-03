import React from 'react'
import header from '../../assets/images/header-top.svg'
import Cart from '../Cart/Cart'
import Nav from '../Nav/Nav'

export default function Header(props) {
  const { cart = true } = props
  return (
    <header
      className='header__wrapper'
      style={{
        backgroundImage: `url(${header})`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Nav />
      {cart ? <Cart /> : null}
    </header>
  )
}

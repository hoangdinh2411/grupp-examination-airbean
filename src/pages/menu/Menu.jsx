import React from 'react'
import Header from '../../components/header/Header'
import MenuItems from '../../components/Menu/MenuItems'
import Footer from '../../components/Footer/Footer'

export default function Menu() {
  return (
    <article className='menu__wrapper'>
      <Header />
      <h1>Meny</h1>
      <MenuItems />
      <Footer />
    </article>
  )
}

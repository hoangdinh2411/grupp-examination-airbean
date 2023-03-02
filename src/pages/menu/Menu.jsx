import React from 'react'
import Header from '../../components/header/Header'
import MenuItems from '../../components/menucomponents/MenuItems'
import Footer from '../../components/footer/Footer'

export default function Menu() {
  return <article className='menu__wrapper'>
            <Header/>
            <h1>Meny</h1>
            <MenuItems />
            <Footer/>
        </article>
}

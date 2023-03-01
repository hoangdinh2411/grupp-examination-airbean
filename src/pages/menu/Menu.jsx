import React from 'react'
import MenuButton from '../../assets/images/Vector.svg'

export default function Menu() {
  return <article className='menu__wrapper'>
            <h1>Meny</h1>
            
            <section className='menu__section'>
            <img className ="menu__button" src={MenuButton}></img>
            <h2 className='menu__item'>Bryggkaffe</h2>
            <h2>49 kr</h2>
            </section>
            <p className='menu__description'>Bryggd på månadens bönor</p>
            
            <section className='menu__section'>
            <img className ="menu__button" src={MenuButton}></img>
            <h2 className='menu__item'>Caffè Doppio</h2>
            <h2>49 kr</h2>
            </section>
            <p className='menu__description'>Bryggd på månadens bönor</p>
            
            <section className='menu__section'>
            <img className ="menu__button" src={MenuButton}></img>
            <h2 className='menu__item'>Cappuccino</h2>
            <h2>49 kr</h2>
            </section>
            <p className='menu__description'>Bryggd på månadens bönor</p>
            
            <section className='menu__section'>
            <img className ="menu__button" src={MenuButton}></img>
            <h2 className='menu__item'>Latte Macchiato</h2>
            <h2>49 kr</h2>
            </section>
            <p className='menu__description'>Bryggd på månadens bönor</p>
            
            <section className='menu__section'>
            <img className ="menu__button" src={MenuButton}></img>
            <h2 className='menu__item'>Kaffe Latte</h2>
            <h2>49 kr</h2>
            </section>
            <p className='menu__description'>Bryggd på månadens bönor</p>
            
            <section className='menu__section'>
            <img className ="menu__button" src={MenuButton}></img>
            <h2 className='menu__item'>Cortado</h2>
            <h2>49 kr</h2>
            </section>
            <p className='menu__description'>Bryggd på månadens bönor</p>
        
        </article>
}

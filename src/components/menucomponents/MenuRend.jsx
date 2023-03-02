import React from "react";
import MenuButton from '../../assets/images/Vector.svg'

export default function MenuRender(props) {
    
    
    return(
        <article className='menu__wrapper'>
        <section className='menu__section'>
        <img className ="menu__button" src={MenuButton}></img>
        <h2 className='menu__item'>{props.ItemName}</h2>
        <h2>{props.price} kr</h2>
        </section>
        <p className='menu__description'>{props.ItemDesc}</p>
        </article>

    )
}
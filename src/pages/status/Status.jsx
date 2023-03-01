import React from 'react'
import drone from './../../assets/images/drone.svg'

export default function Status() {


const orderNr = "ABC123456"
const eta = 15

  return <div className='status-wrapper'>

        <section className='status-wrapper__orderNr'> Ordernummer <b>#{orderNr}</b> </section>
        <img className='status-wrapper__img' src={drone} alt="drone" />
        <h1 className='status-wrapper__h1'> Din beställning är på väg!</h1>
        <section className='status-wrapper__eta'> <b>{eta}</b> minuter </section>
        <a href="/menu">
           <button className='status-wrapper__btn'> Ok, cool! </button>
        </a>
       
        </div>


}

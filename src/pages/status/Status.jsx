import React, { useState } from 'react'
import drone from './../../assets/images/drone.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import fetching from '../../utils/services'
import { getDataOnLocalStorage } from '../../utils/helper'

export default function Status() {
const navigate = useNavigate()
const [eta, setEta] = useState(0)

const orderNR = getDataOnLocalStorage("ordernumber") || ''
useEffect(() => {
   if(!orderNR) {
      navigate('/menu')
   } else {
      getETA(orderNR)
   }},[])
   
   function getETA(orderNR) {
      fetching(`beans/order/status/${orderNR}`, 'GET').then(res => {
         setEta(res.eta)
      }).catch(err => {
         console.log(err);
      })
   }

  return <div className='status-wrapper'>

        <section className='status-wrapper__orderNr'> Ordernummer <b>#{orderNR}</b> </section>
        <img className='status-wrapper__img' src={drone} alt="drone" />
        <h1 className='status-wrapper__h1'> Din beställning är på väg!</h1>
        <section className='status-wrapper__eta'> <b>{eta}</b> minuter </section>
        <Link to='/menu'>
           <button className='status-wrapper__btn'> Ok, cool! </button>
        </Link>
       
        </div>


}

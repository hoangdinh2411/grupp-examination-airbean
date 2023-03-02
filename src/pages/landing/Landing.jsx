import React from 'react'
import headerLeft from './../../assets/images/header-left.svg'
import headerRight from './../../assets/images/header-right.svg'
import vector from './../../assets/images/vector.svg'

export default function Landing() {
  return (
    <div className='landing-page__wrapper'>
      <img
        className='landing-page__wrapper__headerLeft'
        src={headerLeft}
        alt='left'
      />

      <section className='landing-page__wrapper__middle'>
        <a href='/menu'>
          <div className='landing-page__wrapper__middle__vector'>
            <img
              className='landing-page__wrapper__middle__vector__img'
              src={vector}
              alt=''
            />
          </div>
        </a>
        <h1 className='name'>AIR BEAN</h1>
        <p>DRONEDELIVERED COFFEE</p>
      </section>
      <img
        className='landing-page__wrapper__headerRight'
        src={headerRight}
        alt='right'
      />
    </div>
  )
}

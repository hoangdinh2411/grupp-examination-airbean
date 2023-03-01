import React from 'react'
import logo from '../../../assets/images/logo-dark.svg'

export default function Heading(props) {
  const { children } = props
  return (
    <article className='auth__heading'>
      <img src={logo} alt='logo' />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>{children}</p>
    </article>
  )
}

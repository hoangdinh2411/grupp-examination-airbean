import React, { useEffect } from 'react'
import Heading from './heading'
import Textfield from '../../../components/Textfield'
import Button from '../../../components/Button'
import { LOGIN_FORM } from '../Profile'
import fetching from '../../../utils/services'

export default function RegisterForm(props) {
  const {
    formData,
    handleUpdateFormData,
    messages,
    setMessages,
    handleToggleSide,
  } = props
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetching('user/signup', 'POST', {
      username: formData.name,
      password: formData.password,
    })
    if (!res.success) {
      setMessages(res.message)
      return
    }
    setMessages('Registrering lyckades!')
    handleToggleSide(LOGIN_FORM)
  }

  return (
    <>
      <Heading>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </Heading>
      {messages ? <p className='message'>{messages}</p> : ''}
      <form autoComplete='on' className='form' onSubmit={handleSubmit}>
        <Textfield
          value={formData.name}
          label='Namn'
          name='name'
          type='text'
          onChange={(e) => handleUpdateFormData(e.target.name, e.target.value)}
        />
        <Textfield
          value={formData.password}
          label='Lösenord'
          name='password'
          type='password'
          onChange={(e) => handleUpdateFormData(e.target.name, e.target.value)}
        />
        <div className='form__link'>
          Redan medlem? Logga in{' '}
          <span className='link' onClick={() => handleToggleSide(LOGIN_FORM)}>
            här
          </span>
        </div>
        <Button type='submit' variant='dark'>
          Skapa konto
        </Button>
      </form>
    </>
  )
}

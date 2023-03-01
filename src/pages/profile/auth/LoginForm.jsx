import React, { useEffect } from 'react'
import Heading from './heading'
import Textfield from '../../../components/Textfield'
import Button from '../../../components/Button'
import fetching from '../../../utils/services'
import {
  saveDataOnLocalStorage,
  saveDataOnSession,
} from '../../../utils/helper'
import { ORDER_HISTORY, REGISTER_FORM } from '../Profile'
export default function LoginForm(props) {
  const {
    formData,
    messages,
    setMessages,
    handleUpdateFormData,
    handleToggleSide,
  } = props
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetching('user/login', 'POST', {
      username: formData.name,
      password: formData.password,
    })
    if (!res.success) {
      setMessages(res.message)
      return
    }
    saveDataOnSession('token', res.token)
    saveDataOnLocalStorage('name', formData.name)
    handleToggleSide(ORDER_HISTORY)
  }

  return (
    <>
      <Heading>Logga in nedan för att se din orderhistorik.</Heading>
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
          Inget konto? Skapa ett{' '}
          <span
            className='link'
            onClick={() => handleToggleSide(REGISTER_FORM)}
          >
            här
          </span>
        </div>
        <Button type='submit' variant='dark'>
          Login
        </Button>
      </form>
    </>
  )
}

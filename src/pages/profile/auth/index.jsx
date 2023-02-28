import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { LOGIN_FORM, REGISTER_FORM } from '../Profile'

const formDataInitial = {
  name: '',
  password: '',
}
export default function Auth(props) {
  const { activeSide, handleToggleSide } = props
  const [formData, setFormData] = useState(formDataInitial)
  const [messages, setMessages] = React.useState('')

  const handleUpdateFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }
  useEffect(() => {
    if (!formData.name && !formData.password) return
    setFormData(formDataInitial)
  }, [activeSide])
  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages) {
        setMessages('')
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [messages])
  return (
    <section className='auth'>
      {activeSide === LOGIN_FORM ? (
        <LoginForm
          setMessages={setMessages}
          messages={messages}
          formData={formData}
          handleUpdateFormData={handleUpdateFormData}
          handleToggleSide={handleToggleSide}
        />
      ) : null}
      {activeSide === REGISTER_FORM ? (
        <RegisterForm
          setMessages={setMessages}
          messages={messages}
          formData={formData}
          handleUpdateFormData={handleUpdateFormData}
          handleToggleSide={handleToggleSide}
        />
      ) : null}
    </section>
  )
}

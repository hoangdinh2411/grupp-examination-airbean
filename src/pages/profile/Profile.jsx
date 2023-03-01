import React, { useEffect } from 'react'
import Auth from './auth'
import {
  getDataOnSession,
  removeDataOnLocalStorage,
  removeDataOnSession,
} from '../../utils/helper'
import OrderHistory from './orderHistory/OrderHistory'
import fetching from '../../utils/services'
import { useSelector } from 'react-redux'
export const LOGIN_FORM = 0
export const REGISTER_FORM = 1
export const ORDER_HISTORY = 2
export default function Profile() {
  const [activeSide, setActiveSide] = React.useState(null)
  const handleToggleSide = (form) => {
    setActiveSide(form)
  }

  useEffect(() => {
    const token = getDataOnSession('token')
    if (!token) {
      setActiveSide(LOGIN_FORM)
      return
    }
    handleCheckToken(token)
  }, [])

  const handleCheckToken = async (token) => {
    const res = await fetching('user/status', 'GET', token)
    if (!res.success) {
      setActiveSide(LOGIN_FORM)
      removeDataOnSession('token')
      removeDataOnLocalStorage('name')
      return
    }
    setActiveSide(ORDER_HISTORY)
  }
  return (
    <div className='profile'>
      {activeSide === ORDER_HISTORY ? (
        <OrderHistory />
      ) : (
        <Auth activeSide={activeSide} handleToggleSide={handleToggleSide} />
      )}
    </div>
  )
}

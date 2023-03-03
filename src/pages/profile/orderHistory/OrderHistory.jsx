import React, { useEffect } from 'react'
import avatar from '../../../assets/images/avatar.svg'
import {
  getDataOnLocalStorage,
  saveDataOnLocalStorage,
} from '../../../utils/helper'
import fetching from '../../../utils/services'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrderHistory } from '../../../redux/actions/orderAction'
import { useNavigate } from 'react-router-dom'

export default function OrderHistory() {
  const orders = useSelector((state) => state.orderReducer.orders)
  const dispatch = useDispatch()
  const name = getDataOnLocalStorage('name') || ''
  const navigate = useNavigate()

  useEffect(() => {
    if (orders) return
    getOrderHistory()
  }, [])

  const calculateTotalSpending = () => {
    const totalSpending = orders.reduce(
      (total, order) => total + order.total,
      0
    )
    return totalSpending
  }

  const showOrderStatus = (orderNr) => {
    saveDataOnLocalStorage('ordernumber', orderNr)
    navigate('/status')
  }

  const getOrderHistory = async () => {
    const res = await fetching('user/history', 'GET')
    if (!res.success) return
    dispatch(updateOrderHistory(res.orderHistory))
  }
  return (
    <div className='order-history'>
      <div className='user'>
        <img src={avatar} alt='avatar' className='user__avatar' />
        <article className='user__info'>
          <h3 className='user__name'>{name}</h3>
        </article>
      </div>
      <div className='order-list'>
        {orders ? (
          <>
            <p className='order-list__heading'>Orderhistorik</p>
            <ul className='list'>
              {orders.map((order) => (
                <li
                  className='order'
                  key={order.orderNr}
                  onClick={() => showOrderStatus(order.orderNr)}
                >
                  <div className='order__detail'>
                    <b>{order.orderNr}</b>
                    <p>{order.orderDate}</p>
                  </div>
                  <div className='order__total-sum'>
                    <p>total ordersumma </p>
                    <p>{order.total} kr</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='total-spending'>
              <p className='total-spending__title'>Totalt spenderat</p>
              <p className='total-spending__value'>
                {calculateTotalSpending() + 'kr'}
              </p>
            </div>
          </>
        ) : (
          <h3 className='order-list__not-found'>No order</h3>
        )}
      </div>
    </div>
  )
}

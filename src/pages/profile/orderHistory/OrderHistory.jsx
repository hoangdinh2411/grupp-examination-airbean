import React, { useEffect } from 'react'
import avatar from '../../../assets/images/avatar.svg'
import { getDataOnLocalStorage } from '../../../utils/helper'
import fetching from '../../../utils/services'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrderHistory } from '../../../redux/actions/orderAction'

const orderHistory = [
  {
    total: 300,
    orderNr: 'Order#123',
    orderDate: '20/02/2022',
  },
  {
    total: 200,
    orderNr: 'Order#456',
    orderDate: '20/02/2022',
  },
  {
    total: 100,
    orderNr: 'Order#789',
    orderDate: '20/02/2022',
  },
]
export default function OrderHistory() {
  const orders = useSelector((state) => state.orderReducer.orders)
  const dispatch = useDispatch()
  const name = getDataOnLocalStorage('name') || ''

  useEffect(() => {
    if (orders) return

    getOrderHistory()
  }, [])

  const calculateTotalSpending = () => {
    const totalSpending = orderHistory.reduce(
      (total, order) => total + order.total,
      0
    )
    return totalSpending
  }

  const getOrderHistory = async () => {
    const res = await fetching('user/history', 'GET')
    if (!res.success) return
    dispatch(updateOrderHistory(res.details.order))
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
        {orderHistory.length > 0 ? (
          <>
            <p className='order-list__heading'>Orderhistorik</p>
            <ul className='list'>
              {orderHistory.map((order) => (
                <li className='order' key={order.orderNr}>
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

import React, { useEffect } from 'react'
import avatar from '../../../assets/images/avatar.svg'
import { getDataOnLocalStorage } from '../../../utils/helper'
import fetching from '../../../utils/services'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrderHistory } from '../../../redux/actions/orderAction'
export default function OrderHistory() {
  const orders = useSelector((state) => state.orderReducer.orders)
  const dispatch = useDispatch()
  const name = getDataOnLocalStorage('name') || ''
  const formatNameToEmail = () => {
    const newName = name.split(' ').join('_')
    return newName.toLowerCase() + '@gmail.com'
  }

  useEffect(() => {
    getOrderHistory()
  }, [])

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
          <p className='user__email'>{formatNameToEmail()}</p>
        </article>
      </div>
      <div className='order-list'>
        {orders.length > 0 ? (
          <>
            <p className='order-list__heading'>Orderhistorik</p>
            <ul className='list'>
              <li className='order'>
                <div className='order__detail'>
                  <b>#AB1123282323Z</b>
                  <span>20/03/06</span>
                </div>
                <div className='order__total-sum'>
                  <span>total ordersumma </span>
                  <span>443 kr</span>
                </div>
              </li>
              <li className='order'>
                <div className='order__detail'>
                  <b>#AB1123282323Z</b>
                  <span>20/03/06</span>
                </div>
                <div className='order__total-sum'>
                  <span>total ordersumma </span>
                  <span>443 kr</span>
                </div>
              </li>
            </ul>
          </>
        ) : (
          <h3 className='order-list__not-found'>No order</h3>
        )}
      </div>
    </div>
  )
}

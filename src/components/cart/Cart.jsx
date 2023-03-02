import React from 'react'
import cartIcon from '../../assets/images/bag.svg'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  increaseCartQuantity,
  decreaseCartQuantity,
  updateCart,
} from '../../redux/actions/cartActions'
import { Link, useNavigate } from 'react-router-dom'
import Status from '../../pages/status/Status'
import { saveDataOnLocalStorage } from '../../utils/helper'
import fetching from '../../utils/services'

export default function Cart() {
  const cart = useSelector((state) => state.cartReducers.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function increaseQuantity(id) {
    console.log('increaseQuantity')
    dispatch(increaseCartQuantity(id))
  }

  function decresseQuantity(id) {
    console.log('decresseQuantity')
    dispatch(decreaseCartQuantity(id))
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        if (cart[i].quantity === 0) {
          const newCart = cart.filter((item) => item.id !== id)
          dispatch(updateCart(newCart))
        }
      }
    }
  }

  function calculateTotalCost() {
    let totalCost = 0
    for (let i = 0; i < cart.length; i++) {
      totalCost += cart[i].price * cart[i].quantity
    }
    return totalCost
  }

  function calculateTotalQuantity() {
    let totalQuantity = 0
    for (let i = 0; i < cart.length; i++) {
      totalQuantity += cart[i].quantity
    }
    return totalQuantity
  }

  function renderCartItems() {
    return cart.map((item) => {
      return (
        <div className='cart-item' key={item.id}>
          <div className='cart-item__type'>
            <h3 className='cart-item__type-label'>{item.title}</h3>
            <span className='dots'></span>
            <Button
              onClick={() => {
                return decresseQuantity(item.id)
              }}
              variant='dark'
              className='cart-item__button-minus'
            >
              -
            </Button>
            <p className='cart-item-quantity-label'>{item.quantity}</p>
            <Button
              onClick={() => {
                return increaseQuantity(item.id)
              }}
              variant='light'
              className='cart-item__button-plus'
            >
              +
            </Button>
          </div>
          <div className='cart-item__price'>
            <p className='cart-item__price-label'>
              {item.price * item.quantity}kr ({item.price}kr per st)
            </p>
          </div>
        </div>
      )
    })
  }

  async function createOrder() {
    let masterObject = { order: [] }

    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < cart[i].quantity; j++) {
        let newObject = {}
        newObject.name = cart[i].title
        newObject.price = cart[i].price
        masterObject.order.push(newObject)
      }
    }
    const newOrder = {
      details: masterObject,
    }
    const res = await fetching('beans/order', 'POST', newOrder)
    if (res) {
      saveDataOnLocalStorage('ordernumber', res.orderNr)
      navigate('/status')
      dispatch(updateCart([]))
    }
  }

  return (
    <div className='cart__wrapper'>
      <div className='cart__nav nav'>
        <label
          htmlFor='dropdown-toggle'
          id='dropdown-toggle-label'
          style={{ backgroundImage: `url(${cartIcon})` }}
        ></label>
        <input type='checkbox' id='dropdown-toggle' />
        <div className='cart__total-quantity'>{calculateTotalQuantity()}</div>
        <div className='cart dropdown'>
          <h1>Din beställning</h1>
          <div className='cart-item__wrapper'>
            {renderCartItems()}
            <div className='cart-total'>
              <div className='cart-total__cost'>
                <h3>Total</h3>
                <span className='dots'></span>
                <h3>{calculateTotalCost()}kr</h3>
              </div>
              <div className='cart-total__sub'>
                <p className='cart-total__sub-label'>
                  inkl moms + drönarleverans
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              return createOrder()
            }}
          >
            Take my money!
          </button>
        </div>
      </div>
    </div>
  )
}

import React from "react";
import MenuRender from "./MenuRend";
import fetching from "../../utils/services";
import { updateCart, increaseCartQuantity } from "../../redux/actions/cartActions"
import { useDispatch, useSelector } from "react-redux"

export default function MenuItems() {
  const [meny, setMeny] = React.useState([])
  
  const getItems = async () => {
    const res = await fetching('beans/', 'GET')
    setMeny(res.menu)
  }

  React.useEffect(() => {
    getItems();
  }, [])

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducers.cart)
  
  function addToCart(id) {
    let res = cart.some(x => x.id === id)
    if (res) {
      dispatch(increaseCartQuantity(id))
      return
    }

    let selectedItem = meny.find(item => item.id === id)
    let newCart = [...cart, { ...selectedItem, quantity: 1 }]
    dispatch(updateCart(newCart))
  }

  const mappeditems = meny.map(x => {
      return <MenuRender
      key = {x.id}
      id = {x.id}
      ItemName = {x.title}
      ItemDesc = {x.desc}
      price = {x.price}
      addToCart = {addToCart}
      />
  })

  return (
      <div>
      {mappeditems}
      </div>
  )
}


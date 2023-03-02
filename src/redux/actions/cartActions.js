export const updateCart = (cart) => {
  return {
    type: 'ADD_TO_CART',
    payload: cart,
  }
}

export const increaseCartQuantity = (id) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: id,
  }
}

export const decreaseCartQuantity = (id) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: id,
  }
}
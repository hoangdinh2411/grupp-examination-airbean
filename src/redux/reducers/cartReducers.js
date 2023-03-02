const initialState = {
  cart: [  
    {
      id: "coffee-vxig26my4y",
      title: "Bryggkaffe",
      price: 39,
      quantity: 5,
    },
    {
      id: "coffee-4pdksmrkfa",
      title: "Cappuccino",
      price: 49,
      quantity: 3,
    },
  ],
}

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: action.payload,
      }
    case 'INCREASE_QUANTITY':
      const newCartInc = state.cart.map(item => {
        return (item.id === action.payload) ? {...item, quantity:item.quantity=item.quantity+1} : item
      })
      console.log(newCartInc);
      return {
        ...state,
        cart: newCartInc,
      }
    case 'DECREASE_QUANTITY':
      const newCartDec = state.cart.map(item => {
        return (item.id === action.payload) ? {...item, quantity:item.quantity=item.quantity-1} : item
      })
    return {
      ...state,
      cart: newCartDec,
    }
    default:
      return state
  }
}

export default cartReducers

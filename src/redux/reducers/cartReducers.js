const initialState = {
  cart: [  
  ]
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
      // console.log(newCartInc);
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

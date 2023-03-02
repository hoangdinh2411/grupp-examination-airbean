const initialState = {
  orders: null,
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ORDER_HISTORY':
      return {
        ...state,
        orders: action.payload,
      }
    default:
      return state
  }
}

export default orderReducer

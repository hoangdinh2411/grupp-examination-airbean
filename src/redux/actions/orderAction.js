export const updateOrderHistory = (order) => {
  return {
    type: 'UPDATE_ORDER_HISTORY',
    payload: order,
  }
}

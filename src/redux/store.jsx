import { legacy_createStore } from 'redux'
import orderReducer from './reducers/orderReducer'

export const store = legacy_createStore(
  // reducer here
  orderReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

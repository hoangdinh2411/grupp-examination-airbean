import { combineReducers, legacy_createStore } from 'redux'
import orderReducer from './reducers/orderReducer'

const rootReducer = combineReducers({
  orderReducer: orderReducer,
})
export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

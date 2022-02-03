import {combineReducers, createStore} from 'redux'
import itemReducer from './configurate-item-reducer'
import cartReducer from './cart-reducer'
import settingsReducer from './load-reducer'
import ordersReducer from './orders-reducer'
let reducers=combineReducers({shop:itemReducer,cart:cartReducer,settings:settingsReducer,orders:ordersReducer})


let store = createStore(reducers)



export default store
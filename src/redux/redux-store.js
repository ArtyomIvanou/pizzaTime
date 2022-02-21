import {combineReducers, createStore,applyMiddleware} from 'redux'
import itemReducer from './configurate-item-reducer'
import cartReducer from './cart-reducer'
import settingsReducer from './load-reducer'
import ordersReducer from './orders-reducer'
import thunk from 'redux-thunk'
let reducers=combineReducers({shop:itemReducer,cart:cartReducer,settings:settingsReducer,orders:ordersReducer})


let store = createStore(reducers,applyMiddleware(thunk))



export default store
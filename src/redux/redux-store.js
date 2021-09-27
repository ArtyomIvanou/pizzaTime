import {combineReducers, createStore} from 'redux'
import itemReducer from './configurate-item-reducer'
import cartReducer from './cart-reducer'
let reducers=combineReducers({shop:itemReducer,cart:cartReducer})


let store = createStore(reducers)



export default store
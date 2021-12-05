import {combineReducers, createStore} from 'redux'
import itemReducer from './configurate-item-reducer'
import cartReducer from './cart-reducer'
import settingsReducer from './load-reducer'
let reducers=combineReducers({shop:itemReducer,cart:cartReducer,settings:settingsReducer,})


let store = createStore(reducers)



export default store
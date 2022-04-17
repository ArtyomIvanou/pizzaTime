import {combineReducers, createStore,applyMiddleware} from 'redux'
import itemReducer from './configurate-item-reducer'
import cartReducer from './cart-reducer'
import settingsReducer from './load-reducer'
import ordersReducer from './orders-reducer'
import thunk from 'redux-thunk'
import userReducer from './user-reducer'
import { compose } from 'redux'

let reducers=combineReducers({shop:itemReducer,cart:cartReducer,settings:settingsReducer,orders:ordersReducer,user:userReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)
));


export default store
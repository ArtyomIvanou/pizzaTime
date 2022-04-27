import { ordersAPI } from './../api/api';
import { isLoading } from './load-reducer';


const WATCH_ORDERS = 'WATCH_ORDERS'

const CHANGE_SIZE_FINAL = 'CHANGE_SIZE_FINAL'
const CHANGE_DOUGH_FINAL = 'CHANGE_DOUGH_FINAL'
const ADD_AMOUNT_OF_ORDER = 'ADD_AMOUNT_OF_ORDER'
const REDUCE_AMOUNT_OF_ORDER = 'REDUCE_AMOUNT_OF_ORDER'
const DELETE_ITEM_OF_ORDER = 'DELETE_ITEM_OF_ORDER'
let initialState = { orders: [], summary: 0 }
const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case WATCH_ORDERS:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                ordersCopy = action.res
                stateCopy.orders = ordersCopy
                return stateCopy
            }

        case CHANGE_SIZE_FINAL:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                let foundOrderIndex = ordersCopy.findIndex(i => i.id === action.id)
                ordersCopy[foundOrderIndex] = { ...ordersCopy[foundOrderIndex] }
                let foundPositionIndex = ordersCopy[foundOrderIndex].cart.findIndex(i => i === action.info)
                let foundSize = ordersCopy[foundOrderIndex].cart[foundPositionIndex].config.size.find(i => i.name === action.value)
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].weight = foundSize.weight
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].priceName = foundSize.title
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].price = foundSize.price
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].config.defaultSize = foundSize.name
                stateCopy.orders = ordersCopy
                return stateCopy
            }
        case CHANGE_DOUGH_FINAL:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                let foundOrderIndex = ordersCopy.findIndex(i => i.id === action.id)
                ordersCopy[foundOrderIndex] = { ...ordersCopy[foundOrderIndex] }
                let foundPositionIndex = ordersCopy[foundOrderIndex].cart.findIndex(i => i === action.info)
                let foundDough = ordersCopy[foundOrderIndex].cart[foundPositionIndex].config.dough.find(i => i.name === action.value)
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].config.defaulDough = foundDough.name
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].addedDoughName = foundDough.title
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].addedPrice = foundDough.price
                ordersCopy[foundOrderIndex].cart[foundPositionIndex].addedWeight = foundDough.weight
                stateCopy.orders = ordersCopy
                return stateCopy
            }
        case ADD_AMOUNT_OF_ORDER:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                let foundOrderIndex = ordersCopy.findIndex(i => i.id === action.id)
                ordersCopy[foundOrderIndex] = { ...ordersCopy[foundOrderIndex] }
                let foundPositionIndex = ordersCopy[foundOrderIndex].cart.findIndex(i => i === action.info)
                let foundItem = ordersCopy[foundOrderIndex].cart[foundPositionIndex]
                foundItem.amount++
                ordersCopy[foundOrderIndex].summary += foundItem.price + foundItem.addedPrice
                let resultedSum = Math.floor(ordersCopy[foundOrderIndex].summary * 1000000) / 1000000
                ordersCopy[foundOrderIndex].summary = resultedSum
                stateCopy.orders = ordersCopy
                return stateCopy
            }
        case REDUCE_AMOUNT_OF_ORDER:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                let foundOrderIndex = ordersCopy.findIndex(i => i.id === action.id)
                ordersCopy[foundOrderIndex] = { ...ordersCopy[foundOrderIndex] }
                let foundPositionIndex = ordersCopy[foundOrderIndex].cart.findIndex(i => i === action.info)
                let foundItem = ordersCopy[foundOrderIndex].cart[foundPositionIndex]
                if (foundItem.amount >= 1) {
                    foundItem.amount--
                    ordersCopy[foundOrderIndex].summary = ordersCopy[foundOrderIndex].summary - foundItem.price - foundItem.addedPrice
                    let resultedSum = Math.floor(ordersCopy[foundOrderIndex].summary * 1000000) / 1000000
                    ordersCopy[foundOrderIndex].summary = resultedSum
                }
                stateCopy.orders = ordersCopy
                return stateCopy
            }
        case DELETE_ITEM_OF_ORDER:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                let foundOrderIndex = ordersCopy.findIndex(i => i.id === action.id)
                ordersCopy[foundOrderIndex] = { ...ordersCopy[foundOrderIndex] }
                let qqq = ordersCopy[foundOrderIndex].cart.filter((a, i) => {
                    if (a === action.info) {
                        ordersCopy[foundOrderIndex].summary = ordersCopy[foundOrderIndex].summary - a.price - a.addedPrice
                        let resultedSum = Math.floor(ordersCopy[foundOrderIndex].summary * 1000000) / 1000000
                        ordersCopy[foundOrderIndex].summary = resultedSum
                    }
                    return a !== action.info
                })
                ordersCopy[foundOrderIndex].cart = qqq
                stateCopy.orders = ordersCopy
                return stateCopy
            }
        default:
            return state
    }

}
export const watchOrders = (res) => ({ type: WATCH_ORDERS, res: res })
export const selectSizeFinal = (value, id, info) => ({ type: CHANGE_SIZE_FINAL, value: value, id: id, info: info })
export const selectDoughFinal = (value, id, info) => ({ type: CHANGE_DOUGH_FINAL, value: value, id: id, info: info })
export const addAmountOfOrder = (id, info) => ({ type: ADD_AMOUNT_OF_ORDER, id: id, info: info })
export const reduceAmountOfOrder = (id, info) => ({ type: REDUCE_AMOUNT_OF_ORDER, id: id, info: info })
export const deleteAmountOfOrder = (id, info) => ({ type: DELETE_ITEM_OF_ORDER, id: id, info: info })
export const deleteOrder = (id) => async (dispatch) => {
    try {
        await ordersAPI.deleteOrderApi(id)
        const resp = await ordersAPI.getOrders()
        dispatch(watchOrders(resp))
    } catch (error) {
        console.log(error);
    }
}
export const getOrders = () => async (dispatch) => {
    try {
        dispatch(isLoading(true))
        const res = await ordersAPI.getOrders()
        dispatch(watchOrders(res))
        dispatch(isLoading(false))
    } catch (error) {
        console.log(error)
    }
}

export default ordersReducer
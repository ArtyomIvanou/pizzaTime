const WATCH_ORDERS = 'WATCH_ORDERS'




let initialState = { orders: [], }
const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case WATCH_ORDERS:
            {
                let stateCopy = { ...state }
                let ordersCopy = [...stateCopy.orders]
                ordersCopy=action.res
                stateCopy.orders=ordersCopy
                console.log('ewdux')
                // stateCopy.orders=action.res
                return stateCopy
            }
       
        
      
        default:
            return state

    }

}
export const watchOrders = (res) => {
    return { type: WATCH_ORDERS, res: res }
}




export default ordersReducer
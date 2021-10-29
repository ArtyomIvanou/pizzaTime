const ADD_TO_CART = 'ADD_TO_CART'
const SHOW_CART = 'SHOW_CART'

let initialState = { cart: [], show: false }
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                cartCopy.push(action.product)
                stateCopy.cart = cartCopy

                return stateCopy
            }
            case SHOW_CART:
                {
                    let stateCopy = { ...state }
                    
                    stateCopy.show= !stateCopy.show
    // console.log(stateCopy.show)
                    return stateCopy
                }
        default:
            // console.log('ошибка')
            return state

    }

}
export const addToCartActionCreator = (selected) => {
    return { type: ADD_TO_CART, product: selected }
}
export const showCartActionCreator = (selected) => {
    return { type: SHOW_CART, product: selected }
}
export default cartReducer
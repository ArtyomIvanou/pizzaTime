const ADD_TO_CART = 'ADD_TO_CART'
const SHOW_CART = 'SHOW_CART'
const DELETE_ITEM = 'DELETE_ITEM'

let initialState = { cart: [], show: false, addMode: false, cartLength: 0, }
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                stateCopy.addMode = true
                // let emptyNewCart=[]
                cartCopy.map((i, a) => {

                    if (i.id === action.product.id && i.price === action.product.price && i.addedPrice === action.product.addedPrice && i.weight === action.product.weight && i.addedWeight === action.product.addedWeight) {
                        stateCopy.addMode = false
                        i.amount++
                        return i
                    } else {
                        return i
                    }
                })
                if (stateCopy.addMode === true || cartCopy.length === 0) {
                    cartCopy.push(action.product)
                    stateCopy.addMode = false
                }
                stateCopy.cartLength++
                stateCopy.cart = cartCopy
                return stateCopy
            }
        case SHOW_CART:
            {
                let stateCopy = { ...state }
                stateCopy.show = !stateCopy.show
                return stateCopy
            }
        case DELETE_ITEM:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                let qqq = cartCopy.filter((i, a) => {
                    if (i.amount > 1 && a === action.product) {
                        i.amount--
                        return i
                    } else {
                        return a !== action.product
                    }

                })
                cartCopy = qqq
                stateCopy.cart = qqq
                stateCopy.cartLength--
                return stateCopy
            }
        default:
            return state

    }

}
export const addToCartActionCreator = (selected) => {
    return { type: ADD_TO_CART, product: selected }
}
export const showCartActionCreator = (selected) => {
    return { type: SHOW_CART, product: selected }
}
export const deleteItemActionCreator = (selected) => {
    return { type: DELETE_ITEM, product: selected }
}
export default cartReducer
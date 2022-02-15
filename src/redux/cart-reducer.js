const ADD_TO_CART = 'ADD_TO_CART'
const SHOW_CART = 'SHOW_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const CLEAN_CART = 'CLEAN_CART'
const ADD_AMOUNT = 'ADD_AMOUNT'
const REDUCE_AMOUNT = 'REDUCE_AMOUNT'
let initialState = { cart: [], show: false, addMode: false, cartLength: 0, summary: 0, }
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                stateCopy.addMode = true
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
                stateCopy.summary += action.product.price + action.product.addedPrice
                let resultedSum = Math.floor(stateCopy.summary * 1000000) / 1000000
                stateCopy.summary = resultedSum
                stateCopy.cartLength++
                stateCopy.cart = cartCopy
                return stateCopy
            }
        case ADD_AMOUNT:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                let qqq = cartCopy.map((i, a) => {
                    if (a === action.product) {
                        stateCopy.summary += i.price + i.addedPrice
                        let resultedSum = Math.floor(stateCopy.summary * 1000000) / 1000000
                        stateCopy.summary = resultedSum
                        i.amount++
                        return i
                    } else {
                        return i
                    }
                })
                cartCopy = qqq
                stateCopy.cart = qqq
                stateCopy.cartLength++
                console.log(stateCopy.summary)
                return stateCopy
            }
        case REDUCE_AMOUNT:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                let qqq = cartCopy.filter((i, a) => {
                    if (i.amount > 1 && a === action.product) {
                        let aaa = stateCopy.summary - (i.price + i.addedPrice)
                        let resultedSum = Math.floor(aaa * 1000000) / 1000000
                        stateCopy.summary = resultedSum
                        i.amount--
                        return i
                    } else {
                        return i !== action.product
                    }
                })
                cartCopy = qqq
                stateCopy.cart = qqq
                if (stateCopy.cartLength > 1) {
                    stateCopy.cartLength--
                }
                return stateCopy
            }
        case SHOW_CART:
            {
                let stateCopy = { ...state }
                stateCopy.show = !stateCopy.show
                return stateCopy
            }
        case CLEAN_CART:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                let clean = []
                cartCopy = clean
                stateCopy.cart = cartCopy
                stateCopy.show = false
                stateCopy.cartLength = 0
                stateCopy.summary = 0
                console.log(stateCopy.summary)
                return stateCopy
            }
        case DELETE_ITEM:
            {
                let stateCopy = { ...state }
                let cartCopy = [...stateCopy.cart]
                let qqq = cartCopy.filter((i, a) => {
                    if (a === action.product) {
                        let aaa = stateCopy.summary - (i.price + i.addedPrice)
                        let resultedSum = Math.floor(aaa * 1000000) / 1000000
                        stateCopy.summary = resultedSum
                    }
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
export const addToCart = (selected) => {
    return { type: ADD_TO_CART, product: selected }
}
export const showCart = (selected) => {
    return { type: SHOW_CART, product: selected }
}
export const deleteItem = (selected) => {
    return { type: DELETE_ITEM, product: selected }
}
export const addAmount = (selected) => {
    return { type: ADD_AMOUNT, product: selected }
}
export const reduceAmount = (selected) => {
    return { type: REDUCE_AMOUNT, product: selected }
}
export const cleanCart = (selected) => {
    return { type: CLEAN_CART, product: selected }
}

export default cartReducer
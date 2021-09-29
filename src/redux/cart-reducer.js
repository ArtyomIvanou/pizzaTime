const ADD_TO_CART='ADD_TO_CART'

let initialState= []
const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
           let stateCopy=[...state]
           stateCopy.push(action.product)
           // console.log(stateCopy)
            return stateCopy

        default:
            return state

    }
 
}
export const addToCartActionCreator=(selected)=>{
    return{type: ADD_TO_CART, product: selected}
}
export default cartReducer
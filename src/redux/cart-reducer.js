// const CHANGE_SIZE='CHANGE_SIZE'
// const CHANGE_DOUGH='CHANGE_DOUGH'
const ADD_TO_CART='ADD_TO_CART'
const cartReducer=(state,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            state.push(action.product)
            break;
    
        default:
            break;
    }
    // if (action.type === ADD_TO_CART) {
    //     state.push(action.product)
    //     //this.renderTree()
    // }
   
return state
}
export default cartReducer
const CHANGE_SIZE = 'CHANGE_SIZE'
const CHANGE_DOUGH = 'CHANGE_DOUGH'
//const ADD_TO_CART='ADD_TO_CART'
const itemReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SIZE:
            state.map(i => {
                if (i.type === action.selectedType) {
                    i.products[action.product - 1].price = action.value.price
                    i.products[action.product - 1].weight = action.value.weight
                    return null

                } else {
                    return null
                }
            })
            break;
        case CHANGE_DOUGH:
            state.map(i => {
                if (i.type === action.selectedType) {
                    i.products[action.product - 1].addedPrice = action.value.price
                    i.products[action.product - 1].addedWeight = action.value.weight
                    return null

                } else {
                    return null
                }
            })
            break;
        default:
            break;
    }
    // if (action.type === CHANGE_SIZE) {
    //     state.map(i => {
    //         if (i.type === action.selectedType) {
    //             i.products[action.product - 1].price = action.value.price
    //             i.products[action.product - 1].weight = action.value.weight
    //             return null

    //         } else {
    //             return null
    //         }
    //     })
    //     // this.renderTree()
    // } else if (action.type === CHANGE_DOUGH) {
    //     state.map(i => {
    //         if (i.type === action.selectedType) {
    //             i.products[action.product - 1].addedPrice = action.value.price
    //             i.products[action.product - 1].addedWeight = action.value.weight
    //             return null

    //         } else {
    //             return null
    //         }
    //     })
    //     // this.renderTree()
    // }

    return state
}
export default itemReducer
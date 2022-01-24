const IS_LOAD_CHECK = 'IS_LOAD_CHECK'


let initialState = { isLoading: false }
const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOAD_CHECK:
            {
                let stateCopy = { ...state }
                // console.log('skdjbjksdbfjsdb')
                stateCopy.isLoading = action.answer
                return stateCopy
            }

        default:
            return state

    }

}
export const isLoading = (bool) => {
    return { type: IS_LOAD_CHECK, answer: bool }
}

export default settingsReducer
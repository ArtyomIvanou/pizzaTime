const IS_LOAD_CHECK = 'IS_LOAD_CHECK'
const SELECT_TYPE = 'SELECT_TYPE'

let initialState = { isLoading: false,setSelectType:undefined }
const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOAD_CHECK:
            {
                let stateCopy = { ...state }
                stateCopy.isLoading = action.answer
                return stateCopy
            }
            case SELECT_TYPE:
                {
                    let stateCopy = { ...state }
                    stateCopy.setSelectType = action.answer
                    return stateCopy
                }
        default:
            return state

    }

}
export const isLoading = (bool) => ({ type: IS_LOAD_CHECK, answer: bool })
export const setTypeOfPosition = (type) => ({ type: SELECT_TYPE, answer: type })

export default settingsReducer
import { entryAPI } from "../api/api"
const IS_AUTORIZIED = 'IS_AUTORIZIED'
const IS_ADMIN = 'IS_ADMIN'
const IS_ERROR = 'IS_ERROR'
let initialState = { isAutorizied: false, isAdmin: false, isError: false }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTORIZIED:
            {
                let stateCopy = { ...state }
                stateCopy.isAutorizied = action.answer
                return stateCopy
            }
        case IS_ADMIN:
            {
                let stateCopy = { ...state }
                stateCopy.isAdmin = action.answer
                return stateCopy
            }
        case IS_ERROR:
            {
                let stateCopy = { ...state }

                stateCopy.isError = action.answer
                return stateCopy
            }
        default:
            return state

    }

}
export const isAutorizied = (bool) => {
    return { type: IS_AUTORIZIED, answer: bool }
}
export const isAdmin = (bool) => {
    return { type: IS_ADMIN, answer: bool }
}
export const isError = (bool) => {
    return { type: IS_ERROR, answer: bool }
}
export const loginUser = (form) => (dispatch) => {

    dispatch(isError(false))
    entryAPI.login(form)
        .then(res => {
            console.log(res)
            window.localStorage.clear();
            if (res.isAdmin) {
                dispatch(isAdmin(true))   
            } else {
                dispatch(isAdmin(false))
            } 
            window.localStorage.setItem('currentUser',JSON.stringify([{name:res.username},{telephone:res.telephone},{adress:res.adress}]) );
            // dispatch(isAutorizied(true))

        })
        .catch(error => {
            console.log(error);
            return dispatch(isError(true))
        });
}
export default userReducer
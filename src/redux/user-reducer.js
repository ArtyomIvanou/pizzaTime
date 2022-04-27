import { entryAPI } from "../api/api"
const IS_AUTORIZIED = 'IS_AUTORIZIED'
const IS_ADMIN = 'IS_ADMIN'
const IS_ERROR = 'IS_ERROR'
const SET_USER = 'SET_USER'
let initialState = { isAutorizied: false, isAdmin: false, isError: undefined, user: undefined }
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
        case SET_USER:
            {
                let stateCopy = { ...state }

                stateCopy.user = action.answer
                return stateCopy
            }
        default:
            return state

    }

}
export const isAutorizied = (bool) => ({ type: IS_AUTORIZIED, answer: bool })
export const isAdmin = (bool) => ({ type: IS_ADMIN, answer: bool })
export const isError = (bool) => ({ type: IS_ERROR, answer: bool })
export const setUser = (info) => ({ type: SET_USER, answer: info })
export const loginUser = (form) => async (dispatch) => {
    try {
        dispatch(isError(undefined))
        const res = await entryAPI.login(form)
        window.localStorage.removeItem('currentUser');
        dispatch(setUser({
            email: res.email, name: res.username, telephone: res.telephone, adress: res.adress
        }))
        if (res.isAdmin) {
            dispatch(isAdmin(true))
        } else {
            dispatch(isAdmin(false))
        }
        dispatch(isAutorizied(true))
        window.localStorage.setItem('currentUser', JSON.stringify({
            email: res.email, name: res.username, telephone: res.telephone, adress: res.adress
        }));
        return res
    } catch (error) {
        dispatch(isError('Неверный email или пароль'))
    }

}
export const registrationUser = (form) => async (dispatch) => {
    try {
        dispatch(isError(undefined))
        let res = await entryAPI.register(form)

        console.log(res)
        window.localStorage.removeItem('currentUser');
        dispatch(setUser({
            email: res.email, name: res.username, telephone: res.telephone, adress: res.adress
        }))
        if (res.isAdmin) {
            dispatch(isAdmin(true))
        } else {
            dispatch(isAdmin(false))
        }
        dispatch(isAutorizied(true))
        window.localStorage.setItem('currentUser', JSON.stringify({
            email: res.email, name: res.username, telephone: res.telephone, adress: res.adress
        }));
    } catch (error) {
        dispatch(isError('Такой пользователь уже существует'))
    }

}
export const logout = () => (dispatch) => {
    window.localStorage.removeItem('currentUser');
    dispatch(isAutorizied(false))
    dispatch(isAdmin(false))
    dispatch(setUser(undefined))
}
export const loginUserFromLocalstorage = (form) => (dispatch) => {
    if (form.email === "artemka248944@gmail.com") {
        dispatch(isAutorizied(true))
        dispatch(isAdmin(true))
    }
    else {
        dispatch(isAutorizied(true))
        dispatch(isAdmin(false))
    }
    dispatch(setUser(form))

}
export default userReducer
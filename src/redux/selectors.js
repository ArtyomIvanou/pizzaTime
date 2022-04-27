import { createSelector } from 'reselect'

export const selectUser = state => state.user

export const selectUserInfo = state => state.user.user

export const selectOrders = state => state.orders.orders

export const selectSummary = state => state.cart.summary

export const selectCart = state => state.cart.cart

export const selectCartShow = state => state.cart.show

export const selectCartLength = state => state.cart.cartLength

export const selectValidation = state => state.cart.validation

export const selectSettingsIsLoading = state => state.settings.isLoading

export const selectShop = (state, props) => ({ shop: state.shop, props: props })
export const selectTypeOfPosition = (state) => state.settings.setSelectType
export const selectSelectedTypeOfShop = createSelector(
    selectShop,
    (obj) => obj.shop.find(a => a.type === obj.props)
)

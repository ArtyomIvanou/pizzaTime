import { shopAPI } from './../api/api';
import { isLoading } from './load-reducer';
const CHANGE_SIZE = 'CHANGE_SIZE'
const CHANGE_DOUGH = 'CHANGE_DOUGH'
const ADD_TO_SHOP = 'ADD_TO_SHOP'
let initialState = [  //пицца
    {
        type: 'pizza',
        title: 'Пицца',
        productsType: [
            { type: 'classic', title: 'Классические' },
            { type: 'lovely', title: 'Любимые' },
            { type: 'premium', title: 'Премиум' },
            { type: 'legends', title: 'Легенды' },
            { type: 'redPrice', title: 'Красная цена' }
        ],
        products: []
    },
    //напитки
    {
        type: 'drinks',
        title: 'Напитки',
        productsType: [
            { type: 'hot', title: 'Горячие напитки' },
            { type: 'cold', title: 'Холодные напитки' },
            { type: 'juice', title: 'Соки' },
            { type: 'water', title: 'Вода' },
            { type: 'carbonated', title: 'Газированные напитки' }
        ],
        products: []
    },
    //курица
    {
        type: 'chicken',
        title: 'Курица',
        productsType: [],
        products: []
    },
    //картофель
    {
        type: 'potato',
        title: 'Картофель',
        productsType: [],
        products: []
    },
    //хлебцы
    {
        type: 'bread',
        title: 'Хлебцы',
        productsType: [],
        products: []
    },
    //салаты
    {
        type: 'salad',
        title: 'Салаты',
        productsType: [],
        products: []
    },
    //десерты
    {
        type: 'desserts',
        title: 'Десерты',
        productsType: [],
        products: []
    },
    //соусы
    {
        type: 'sauses',
        title: 'Соусы',
        productsType: [],
        products: []
    },
]
const itemReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_SIZE: {
            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)
            let findItem = stateCopy[ind].products.findIndex(i => i.id === action.value.id)
            stateCopy[ind].products[findItem] = { ...stateCopy[ind].products[findItem] }
            let findInfo = stateCopy[ind].products[findItem].config.size.find(i => i.name === action.product)
            stateCopy[ind].products[findItem].config.defaultSize = findInfo.name
            stateCopy[ind].products[findItem].price = findInfo.price
            stateCopy[ind].products[findItem].priceName = findInfo.title
            stateCopy[ind].products[findItem].weight = findInfo.weight
            return stateCopy
        }
        case CHANGE_DOUGH: {
            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)
            let findItem = stateCopy[ind].products.findIndex(i => i.id === action.value.id)
            stateCopy[ind].products[findItem] = { ...stateCopy[ind].products[findItem] }
            let findInfo = stateCopy[ind].products[findItem].config.dough.find(i => i.name === action.product)
            // console.log(findInfo.name)
            stateCopy[ind].products[findItem].config.defaulDough = findInfo.name
            stateCopy[ind].products[findItem].addedPrice = findInfo.price
            stateCopy[ind].products[findItem].addedDoughName = findInfo.title
            stateCopy[ind].products[findItem].addedWeight = findInfo.weight
            return stateCopy
        }
        case ADD_TO_SHOP: {
            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)
            stateCopy[ind] = { ...stateCopy[ind] }
            let productsCopy = [...stateCopy[ind].products]
            productsCopy = action.value
            stateCopy[ind].products = productsCopy
            return stateCopy
        }
        default:
            return state

    }

}
export const selectSize = (id, type, info) => ({ type: CHANGE_SIZE, product: id, selectedType: type, value: info })
export const selectDough = (id, type, info) => ({ type: CHANGE_DOUGH, product: id, selectedType: type, value: info })
export const addToShop = (selectedType, value) => ({ type: ADD_TO_SHOP, selectedType: selectedType, value: value })
export const getShop = (type) => async (dispatch) => {
    try {
        dispatch(isLoading(true))
        const res = await shopAPI.getProducts(type)
        dispatch(isLoading(false))
        return dispatch(addToShop(type, res))
    } catch (error) {
        console.log(error)
    }
   


}
export default itemReducer
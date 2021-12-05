import React from 'react'
import ProductsClassConteiner from './productsClassContainer'
import { addToShopActionCreator } from '../../../../../redux/configurate-item-reducer';

import { connect } from 'react-redux';
import { isLoadingActionCreator } from './../../../../../redux/load-reducer';
const ProductsFuncConteiner = (props) => {
    return (
        <ProductsClassConteiner content={props.content}
            type={props.selectedType}
            addToShop={props.addToShop}
            isLoading={props.isLoading}
            isLoadingAnswer={props.isLoadingAnswer}
        />
    )
}
let mapStateToProps = (state, props) => {
    let aaa = state.shop.find(a => a.type === props.selectedType)
    let bbb=state.settings.isLoading
    // console.log(aaa)
    return {
        content: aaa,
        type: aaa.type,
        isLoadingAnswer:bbb

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addToShop: (type,value) => {
            dispatch(addToShopActionCreator(type,value))
        },
        isLoading:(value)=>{
            dispatch(isLoadingActionCreator(value))
        }
    }
}
const ConnectedProducts = connect(mapStateToProps, mapDispatchToProps)(ProductsFuncConteiner)
export default ConnectedProducts
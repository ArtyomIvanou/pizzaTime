import React from 'react'
import { addToCartActionCreator } from '../../../../../redux/cart-reducer';
import { selectSizeActionCreator, selectDoughActionCreator } from '../../../../../redux/configurate-item-reducer';

import '../../content.css';
import ProductUnit from './productUnit';
import { connect } from 'react-redux';
const ProductUnitContainer = (props) => {


   // console.log(props.number)

    return <ProductUnit content={props.content} type={props.type} addToCart={props.addToCart} selectSizeToProps={props.selectSizeToProps} selectDoughToProps={props.selectDoughToProps} />



}
// export default ProductUnitContainer
let mapStateToProps = (state, props) => {
    
    let aaa = state.shop.find(a => a.type === props.type)
    //console.log(props.number)
    // console.log(aaa.products[1])
    return {
        content: aaa.products[props.number],
        type: aaa.type,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (content) => {
            dispatch(addToCartActionCreator(content))
        },
        selectSizeToProps: (value, type, content) => {
            content.config.size.map((a, i) => {
                if (a.name === value) {
                    return dispatch(selectSizeActionCreator(content.id, type, a))
                } else {
                    return null
                }
            }
            )
        },
        selectDoughToProps: (value, type, content) => {
            content.config.dough.map((a, i) => {
                if (a.name === value) {
                    return dispatch(selectDoughActionCreator(content.id, type, a))
                } else {
                    return null
                }
            }
            )
        }

    }
}
const SuperPr= connect(mapStateToProps, mapDispatchToProps)(ProductUnitContainer)
export default SuperPr
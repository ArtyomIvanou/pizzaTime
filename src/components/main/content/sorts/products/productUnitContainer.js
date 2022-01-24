import React from 'react'
import { addToCart } from '../../../../../redux/cart-reducer';
import { selectSize, selectDough } from '../../../../../redux/configurate-item-reducer';

import '../../content.css';
import ProductUnit from './productUnit';
import { connect } from 'react-redux';
const ProductUnitContainer = (props) => {

    return <ProductUnit content={props.content}
        type={props.type}
        addToCart={props.addToCart}
        selectSize={props.selectSize}
        selectDough={props.selectDough} />

}

let mapStateToProps = (state, props) => {

    let aaa = state.shop.find(a => a.type === props.type)
    // console.log(aaa)
    let bbb=aaa.products.find(a => a.id === props.number)

    return {
        content: bbb,
        type: aaa.type,

    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (content) => {
//             dispatch(addToCartActionCreator(content))
//         },
//         selectSizeToProps: (value, type, content) => {
//             content.config.size.map((a, i) => {
//                 if (a.name === value) {
//                     return dispatch(selectSizeActionCreator(content.id, type, a))
//                 } else {
//                     return null
//                 }
//             }
//             )
//         },
//         selectDoughToProps: (value, type, content) => {
//             content.config.dough.map((a, i) => {
//                 if (a.name === value) {
//                     return dispatch(selectDoughActionCreator(content.id, type, a))
//                 } else {
//                     return null
//                 }
//             }
//             )
//         }

//     }
// }
const SuperPr = connect(mapStateToProps, {addToCart,selectSize,selectDough})(ProductUnitContainer)
export default SuperPr
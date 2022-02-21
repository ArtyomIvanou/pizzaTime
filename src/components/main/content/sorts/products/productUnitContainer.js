import React from 'react'
import { addToCart } from '../../../../../redux/cart-reducer';
import { selectSize, selectDough } from '../../../../../redux/configurate-item-reducer';
import {compose} from 'redux'
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
// compose(connect(mapStateToProps, {addToCart,selectSize,selectDough}))(ProductUnitContainer)
// const SuperPr = connect(mapStateToProps, {addToCart,selectSize,selectDough})(ProductUnitContainer)
export default compose(connect(mapStateToProps, {addToCart,selectSize,selectDough}))(ProductUnitContainer)
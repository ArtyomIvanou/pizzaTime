import React from 'react'
import { addToCart } from '../../../../../redux/cart-reducer';
import { selectSize, selectDough } from '../../../../../redux/configurate-item-reducer';
import { compose } from 'redux'
import '../../content.css';
import ProductUnit from './productUnit';
import { connect } from 'react-redux';
import { selectSelectedTypeOfShop } from '../../../../../redux/selectors';
const ProductUnitContainer = (props) => {
    // let bbb = props.content.products.find(a => a.id === props.number)
    // console.log(bbb)
    return <ProductUnit  {...props} />

}

let mapStateToProps = (state, props) => {
    //  console.log(props)
    //  console.log(state.shop)
    let ccc = selectSelectedTypeOfShop(state, props.type)
    // console.log(ccc)
    // let aaa = state.shop.find(a => a.type === props.type)
    // console.log(aaa)
    let bbb = ccc.products.find(a => a.id === props.number)
    // console.log(bbb)
    return {
        content: bbb,


    }
}
export default compose(connect(mapStateToProps, { addToCart, selectSize, selectDough }))(ProductUnitContainer)
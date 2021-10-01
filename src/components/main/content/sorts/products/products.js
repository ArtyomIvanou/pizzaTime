import React, { Fragment } from 'react'
import '../../content.css';
import ProductUnit from './productUnit';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { connect } from 'react-redux';
import { addToCartActionCreator } from '../../../../../redux/cart-reducer';
import { selectSizeActionCreator } from '../../../../../redux/configurate-item-reducer';
import { selectDoughActionCreator } from '../../../../../redux/configurate-item-reducer';
const ProductsConteiner = (props) => {



    return (
        <Products content={props.content}
            type={props.selectedType}
            addToCart={props.addToCart}
            selectSizeToProps={props.selectSizeToProps} selectDoughToProps={props.selectDoughToProps} />
    )



}
const Products = (props) => {
    // console.log(props.aaa)
    // let props.content = props.content.find(i => i.type === props.type)
    let productsSort = props.content.productsType.map((a, i) => {
        return <li key={i} ><NavLink
            activeClassName={'active_Link'}
            to={'/' + props.type + '/' + a.type}>{a.title} </NavLink></li>
    })
    let allProducts = props.content.products.map((a, i) => {
        return <Route key={a.id}
            path={'/' + props.type + '/' + a.type}><ProductUnit key={a.id}
                content={a}
                type={props.type}
                store={props.store}
                dispatch={props.dispatch}
                addToCart={props.addToCart}
                selectSizeToProps={props.selectSizeToProps}
                selectDoughToProps={props.selectDoughToProps}></ProductUnit></Route>
    })
    let allProductsShow = props.content.products.map((a, i) => {
        return <ProductUnit key={a.id}
            content={a}
            type={props.type}
            store={props.store}
            dispatch={props.dispatch}
            addToCart={props.addToCart}
            selectSizeToProps={props.selectSizeToProps}
            selectDoughToProps={props.selectDoughToProps}></ProductUnit>
    })
    // console.log(props.content.products)
    return (
        <Fragment>

            <div className={'content_description'}>
                <div className={'content_name'}>{props.content.title}</div>
                <div className={'content_sort'}>
                    <ul>
                        {productsSort}
                    </ul>
                </div>
            </div>
            <div className={'products'}>
                <Switch>
                    <Route exact path={'/'} >{allProductsShow}</Route>
                    <Route exact path={'/' + props.type + '/'} >{allProductsShow}</Route>
                    {allProducts}
                </Switch>
            </div>

        </Fragment>
    );
}

let mapStateToProps = (state,props) => {
console.log(props)
    let aaa = state.shop.find(a => a.type === 'pizza')
    // let props.content = state.shop
    // console.log(props.content)

    return {
        content: aaa,
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
                    // return props.dispatch({ type: 'CHANGE_SIZE', product: props.content.id, selectedType: props.type, value: a })
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
                    //return props.dispatch({ type: 'CHANGE_DOUGH', product: props.content.id, selectedType: props.type, value: a })
                } else {
                    return null
                }
            }
            )
        }

    }
}
const SuperProducts = connect(mapStateToProps, mapDispatchToProps)(ProductsConteiner)
export default SuperProducts
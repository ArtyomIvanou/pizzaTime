import React, { Fragment } from 'react'
import '../../content.css';
// import ProductUnit from './productUnit';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { connect } from 'react-redux';
// import { addToCartActionCreator } from '../../../../../redux/cart-reducer';
// import { selectSizeActionCreator } from '../../../../../redux/configurate-item-reducer';
// import { selectDoughActionCreator } from '../../../../../redux/configurate-item-reducer';
import ProductUnitContainer from './productUnitContainer';
const ProductsConteiner = (props) => {



    return (
        <Products content={props.content}
            type={props.selectedType}
            /*addToCart={props.addToCart}
            selectSizeToProps={props.selectSizeToProps} selectDoughToProps={props.selectDoughToProps}*/ />
    )



}
const Products = (props) => {
//console.log(props.content)
    let productsSort = props.content.productsType.map((a, i) => {
        return <li key={i} ><NavLink
            activeClassName={'active_Link'}
            to={'/' + props.type + '/' + a.type}>{a.title} </NavLink></li>
    })
    let allProducts = props.content.products.map((a, i) => {
        return <Route key={a.id}
            path={'/' + props.type + '/' + a.type}><ProductUnitContainer key={a.id}
                number={i}
                /*content={a}*/
                type={props.type}
                /*addToCart={props.addToCart}
                selectSizeToProps={props.selectSizeToProps}
                selectDoughToProps={props.selectDoughToProps}*//></Route>
    })
    let allProductsShow = props.content.products.map((a, i) => {
        return <ProductUnitContainer key={a.id}
            number={i}
            content={a}
            type={props.type}
            /*addToCart={props.addToCart}
            selectSizeToProps={props.selectSizeToProps}
            selectDoughToProps={props.selectDoughToProps}*//>
    })

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

let mapStateToProps = (state, props) => {
    // console.log(props)
    let aaa = state.shop.find(a => a.type === props.selectedType)

    return {
        content: aaa,
        type: aaa.type,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // addToCart: (content) => {
        //     dispatch(addToCartActionCreator(content))
        // },
        // selectSizeToProps: (value, type, content) => {
        //     content.config.size.map((a, i) => {
        //         if (a.name === value) {
        //             return dispatch(selectSizeActionCreator(content.id, type, a))
        //         } else {
        //             return null
        //         }
        //     }
        //     )
        // },
        // selectDoughToProps: (value, type, content) => {
        //     content.config.dough.map((a, i) => {
        //         if (a.name === value) {
        //             return dispatch(selectDoughActionCreator(content.id, type, a))
        //         } else {
        //             return null
        //         }
        //     }
        //     )
        // }

    }
}
const SuperProducts = connect(mapStateToProps, mapDispatchToProps)(ProductsConteiner)
export default SuperProducts
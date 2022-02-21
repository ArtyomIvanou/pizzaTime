
import React from 'react'
import ProductsClassConteiner from './productsClassContainer'
import { getShop} from '../../../../../redux/configurate-item-reducer';
import {compose} from 'redux'
import { connect } from 'react-redux';
// import { isLoading } from './../../../../../redux/load-reducer';
import { withRouter } from 'react-router';
const ProductsFuncConteiner = (props) => {
    return (
        <ProductsClassConteiner content={props.content}
            type={props.selectedType}
            addToShop={props.addToShop}
            isLoading={props.isLoading}
            isLoadingAnswer={props.isLoadingAnswer}
            getShop={props.getShop}
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
// compose(connect(mapStateToProps, {getShop}),withRouter)(ProductsFuncConteiner)
// let ProductsConteinerWithRouter=withRouter(ProductsFuncConteiner)
// const ConnectedProducts = connect(mapStateToProps, {getShop})(ProductsConteinerWithRouter)
export default compose(connect(mapStateToProps, {getShop}),withRouter)(ProductsFuncConteiner)
import React from 'react'
import ProductsClassConteiner from './productsClassContainer'
import { addToShop} from '../../../../../redux/configurate-item-reducer';

import { connect } from 'react-redux';
import { isLoading } from './../../../../../redux/load-reducer';
import { withRouter } from 'react-router';
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
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addToShop: (type,value) => {
//             dispatch(addToShopActionCreator(type,value))
//         },
//         isLoading:(value)=>{
//             dispatch(isLoadingActionCreator(value))
//         }
//     }
// }
let ProductsConteinerWithRouter=withRouter(ProductsFuncConteiner)
const ConnectedProducts = connect(mapStateToProps, {addToShop,isLoading})(ProductsConteinerWithRouter)
export default ConnectedProducts
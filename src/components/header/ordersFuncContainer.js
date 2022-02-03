import React from 'react'

import OrdersClassConteiner from './ordersClassContainer';


import { connect } from 'react-redux';
import { watchOrders } from '../../redux/orders-reducer';
import { withRouter } from 'react-router';
import { isLoading } from '../../redux/load-reducer';
// import { isLoading } from './../../redux/load-reducer';
const OrdersFuncConteiner = (props) => {
    return (
        <OrdersClassConteiner
            content={props.content}
            watchOrders={props.watchOrders}
            isLoading={props.isLoading}
            isLoadingAnswer={props.isLoadingAnswer}
        />
    )
}
let mapStateToProps = (state) => {
    let content = state.orders.orders
    let isLoadingAnswer = state.settings.isLoading
    // console.log(aaa)
    return {
        content: content,
        // type: aaa.type,
        isLoadingAnswer: isLoadingAnswer

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
let OrdersConteinerWithRouter = withRouter(OrdersFuncConteiner)
const ConnectedOrders = connect(mapStateToProps, { isLoading, watchOrders })(OrdersConteinerWithRouter)
export default ConnectedOrders
import React from 'react'

import OrdersClassConteiner from './ordersClassContainer';


import { connect } from 'react-redux';
// import { watchOrders } from '../../redux/orders-reducer';
import { watchOrders } from '../../../redux/orders-reducer';
import { withRouter } from 'react-router';
// import { isLoading } from '../../redux/load-reducer';
import { isLoading } from '../../../redux/load-reducer';
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
   
    return {
        content: content,
       
        isLoadingAnswer: isLoadingAnswer

    }

}

let OrdersConteinerWithRouter = withRouter(OrdersFuncConteiner)
const ConnectedOrders = connect(mapStateToProps, { isLoading, watchOrders })(OrdersConteinerWithRouter)
export default ConnectedOrders
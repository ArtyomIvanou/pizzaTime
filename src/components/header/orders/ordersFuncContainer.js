import React from 'react'
import {compose} from 'redux'
import OrdersClassConteiner from './ordersClassContainer';


import { connect } from 'react-redux';
// import { watchOrders } from '../../redux/orders-reducer';

import { withRouter } from 'react-router';
// import { isLoading } from '../../redux/load-reducer';

import { deleteOrder,getOrders} from './../../../redux/orders-reducer';

const OrdersFuncConteiner = (props) => {
    // return (
    //     <OrdersClassConteiner
    //         content={props.content}
            
            
    //         deleteOrder={props.deleteOrder}
    //         getOrders={props.getOrders}
    //     />
    // )
    return (
        <OrdersClassConteiner
            {...props}
        />
    )
}
let mapStateToProps = (state) => {
    let content = state.orders.orders  
    return {
        content: content,
    }

}
// compose(connect(mapStateToProps, { deleteOrder,getOrders }),withRouter)(OrdersFuncConteiner)
// let OrdersConteinerWithRouter = withRouter(OrdersFuncConteiner)
// const ConnectedOrders = connect(mapStateToProps, { deleteOrder,getOrders })(OrdersConteinerWithRouter)
export default compose(connect(mapStateToProps, { deleteOrder,getOrders }),withRouter)(OrdersFuncConteiner)
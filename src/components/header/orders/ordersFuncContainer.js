import React from 'react'
import {compose} from 'redux'
import OrdersClassConteiner from './ordersClassContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteOrder,getOrders} from './../../../redux/orders-reducer';
import { selectOrders } from '../../../redux/selectors';

const OrdersFuncConteiner = (props) => {

    return (
        <OrdersClassConteiner
            {...props}
        />
    )
}
let mapStateToProps = (state) => {
    return {
        content: selectOrders(state),
    }

}

export default compose(connect(mapStateToProps, { deleteOrder,getOrders }),withRouter)(OrdersFuncConteiner)
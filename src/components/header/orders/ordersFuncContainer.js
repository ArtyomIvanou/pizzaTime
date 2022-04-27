import React, { useEffect } from 'react'
import { compose } from 'redux'
import Orders from './orders';
// import OrdersClassConteiner from './ordersClassContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteOrder, getOrders } from './../../../redux/orders-reducer';
import { selectOrders } from '../../../redux/selectors';

const OrdersFuncConteiner = (props) => {

    useEffect(() => {
        props.getOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (props.isLoadingAnswer) {
        return (
            <div>Loading......</div>
        )
    } else {
        return (
            <Orders
                content={props.content}
                deleteOrder={props.deleteOrder}
            />
        )
    }
}
let mapStateToProps = (state) => ({
    content: selectOrders(state),
})

export default compose(connect(mapStateToProps, { deleteOrder, getOrders }), withRouter)(OrdersFuncConteiner)
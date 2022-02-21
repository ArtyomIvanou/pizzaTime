import React from 'react'

// import OrdersClassConteiner from './ordersClassContainer';

import {compose} from 'redux'
import { connect } from 'react-redux';
import OrderUnit from './orderUnit';
import { watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder } from '../../redux/orders-reducer';
// import { isLoading } from './../../redux/load-reducer';

const OrderUnitFuncConteiner = (props) => {
    // return (
    //     <OrderUnit
    //         content={props.content}
    //         selectSize={props.selectSizeFinal}
    //         selectDough={props.selectDoughFinal}
    //         addAmountOfOrder={props.addAmountOfOrder}
    //         reduceAmountOfOrder={props.reduceAmountOfOrder}
    //         deleteAmountOfOrder={props.deleteAmountOfOrder}
    //         id={props.id}
    //     />
    // )
    return (
        <OrderUnit {...props}
        />
    )
}
let mapStateToProps = (state,props) => {
    return {
        id:props.content.id,
        content: props.content,
    }

}

// compose(connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder }))(OrderUnitFuncConteiner)
// const ConnectedOrders = connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder })(OrderUnitFuncConteiner)
export default compose(connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder }))(OrderUnitFuncConteiner)
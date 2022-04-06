// import React from 'react'
import {compose} from 'redux'
import { connect } from 'react-redux';
import OrderUnit from './orderUnit';
import { watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder } from '../../redux/orders-reducer';

// const OrderUnitFuncConteiner = (props) => {

//     return (
//         <OrderUnit {...props}
//         />
//     )
// }
// let mapStateToProps = (state,props) => {
//     return {
//         // id:props.content.id,
//         // content: props.content,
//     }

// }

export default compose(connect(null, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder }))(OrderUnit)
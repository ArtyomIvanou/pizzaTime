import React from 'react'

// import OrdersClassConteiner from './ordersClassContainer';


import { connect } from 'react-redux';
import OrderUnit from './orderUnit';
import { watchOrders } from '../../redux/orders-reducer';
// import { isLoading } from './../../redux/load-reducer';
const OrderUnitFuncConteiner = (props) => {
    return (
        <OrderUnit
            content={props.content}
           
           
        />
    )
}
let mapStateToProps = (state,props) => {
    
    // console.log(aaa)
    return {
        content: props.content,
        // type: aaa.type,
        

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

const ConnectedOrders = connect(mapStateToProps, {watchOrders })(OrderUnitFuncConteiner)
export default ConnectedOrders
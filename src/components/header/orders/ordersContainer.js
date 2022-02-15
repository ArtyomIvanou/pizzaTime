import React from 'react';
import Orders from './orders';
import { connect } from 'react-redux';


const OrdersContainer = (props) => {

    return (
        <Orders
            cart={props.cart}></Orders>
    );

}
let mapStateToProps = (state) => {


    return {
        cart: state.cart.cart,

    }
}
const SuperPr = connect(mapStateToProps, {})(OrdersContainer)
export default SuperPr
import React from 'react';
import Checkout from './checkout';
import { connect } from 'react-redux';
// import Checkout from './checkout';


const ChekoutContainer = (props) => {

    return (
        <Checkout
            cart={props.cart}></Checkout>
    );

}
let mapStateToProps = (state) => {


    return {
        cart: state.cart.cart,

    }
}
const SuperPr = connect(mapStateToProps, {})(ChekoutContainer)
export default SuperPr
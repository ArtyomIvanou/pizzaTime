// import React from 'react';
import Checkout from './checkout';
import { connect } from 'react-redux';
// import Checkout from './checkout';
import { deleteItem, cleanCart} from '../../../redux/cart-reducer';

// const ChekoutContainer = (props) => {

//     return (
//         <Checkout
//             cart={props.cart}></Checkout>
//     );

// }
let mapStateToProps = (state) => {


    return {
        summary:state.cart.summary,
        cart: state.cart.cart,
        validation: state.cart.validation
    }
}
const CheckoutFuncContainer = connect(mapStateToProps, { deleteItem,cleanCart })(Checkout)
export default CheckoutFuncContainer

import Checkout from './checkout';
import { connect } from 'react-redux';
import {compose} from 'redux'
import { deleteItem, sendOrder} from '../../../../redux/cart-reducer';


let mapStateToProps = (state) => {


    return {
        summary:state.cart.summary,
        cart: state.cart.cart,
        validation: state.cart.validation,
        user:state.user.user
    }
}
// compose(connect(mapStateToProps, { deleteItem,sendOrder }))(Checkout)
// const CheckoutFuncContainer = connect(mapStateToProps, { deleteItem,sendOrder })(Checkout)
export default compose(connect(mapStateToProps, { deleteItem,sendOrder }))(Checkout)
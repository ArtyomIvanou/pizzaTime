
import Checkout from './checkout';
import { connect } from 'react-redux';

import { deleteItem, cleanCart} from '../../../../redux/cart-reducer';


let mapStateToProps = (state) => {


    return {
        summary:state.cart.summary,
        cart: state.cart.cart,
        validation: state.cart.validation
    }
}
const CheckoutFuncContainer = connect(mapStateToProps, { deleteItem,cleanCart })(Checkout)
export default CheckoutFuncContainer
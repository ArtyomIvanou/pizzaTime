
import { connect } from 'react-redux';
import { showCart } from '../../../redux/cart-reducer';

import CartButton from './cartButton';


let mapStateToProps = (state) => {
 
  return {
    cart: state.cart.cart,
    show: state.cart.show,
    cartLength:state.cart.cartLength,
  }
}

const Cart = connect(mapStateToProps, {showCart})(CartButton)
export default Cart
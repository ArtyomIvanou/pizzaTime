
import { connect } from 'react-redux';
import { showCart } from '../../../redux/cart-reducer';

import CartButton from './cartButton';
import {compose} from 'redux'

let mapStateToProps = (state) => {
 
  return {
    cart: state.cart.cart,
    show: state.cart.show,
    cartLength:state.cart.cartLength,
  }
}
// compose(connect(mapStateToProps, {showCart}))(CartButton)
// const Cart = connect(mapStateToProps, {showCart})(CartButton)
export default compose(connect(mapStateToProps, {showCart}))(CartButton)
import { connect } from 'react-redux';
import { showCart } from '../../../redux/cart-reducer';
import CartButton from './cartButton';
import {compose} from 'redux'
import { selectCart,selectCartShow,selectCartLength } from './../../../redux/selectors';

let mapStateToProps = (state) => ({
  cart: selectCart(state),
  show: selectCartShow(state),
  cartLength: selectCartLength(state),
})

export default compose(connect(mapStateToProps, {showCart}))(CartButton)
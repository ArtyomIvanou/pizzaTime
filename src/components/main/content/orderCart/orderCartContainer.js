
import { connect } from 'react-redux';
import { deleteItem, showCart } from '../../../../redux/cart-reducer';
import Ordercart from './orderCart'
import {compose} from 'redux'
import { selectCart,selectCartShow } from './../../../../redux/selectors';

let mapStateToProps = (state) => ({
  cart: selectCart(state),
  show: selectCartShow(state)
})

export default compose(connect(mapStateToProps, {showCart,deleteItem}))(Ordercart)
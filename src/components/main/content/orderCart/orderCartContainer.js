
import { connect } from 'react-redux';
import { deleteItem, showCart } from '../../../../redux/cart-reducer';
import Ordercart from './orderCart'
import {compose} from 'redux'

let mapStateToProps = (state) => {
 
  return {
    cart: state.cart.cart,
    show: state.cart.show
  }
}
// compose(connect(mapStateToProps, {showCart,deleteItem}))(Ordercart)
// const OrderCartContainer = connect(mapStateToProps, {showCart,deleteItem})(Ordercart)
export default compose(connect(mapStateToProps, {showCart,deleteItem}))(Ordercart)
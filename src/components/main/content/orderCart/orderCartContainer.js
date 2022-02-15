
import { connect } from 'react-redux';
import { deleteItem, showCart } from '../../../../redux/cart-reducer';
import Ordercart from './orderCart'


let mapStateToProps = (state) => {
 
  return {
    cart: state.cart.cart,
    show: state.cart.show
  }
}

const OrderCartContainer = connect(mapStateToProps, {showCart,deleteItem})(Ordercart)
export default OrderCartContainer
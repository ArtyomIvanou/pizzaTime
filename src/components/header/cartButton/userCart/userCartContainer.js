
import { connect } from 'react-redux';
import { deleteItem, showCart,addAmount } from '../../../../redux/cart-reducer';
import UserCart from './userCart'

import { reduceAmount } from '../../../../redux/cart-reducer';
import {compose} from 'redux'
let mapStateToProps = (state) => {
 
  return {
    summary:state.cart.summary,
    cart: state.cart.cart,
    show: state.cart.show
  }
}
// compose(connect(mapStateToProps, {showCart,deleteItem,addAmount,reduceAmount}))(UserCart)
// const UserCartContainer = connect(mapStateToProps, {showCart,deleteItem,addAmount,reduceAmount})(UserCart)
export default compose(connect(mapStateToProps, {showCart,deleteItem,addAmount,reduceAmount}))(UserCart)

import { connect } from 'react-redux';
import { deleteItem, showCart,addAmount } from '../../../../redux/cart-reducer';
import UserCart from './userCart'

import { reduceAmount } from '../../../../redux/cart-reducer';
import {compose} from 'redux'
import { selectCart, selectCartShow, selectSummary } from '../../../../redux/selectors';
let mapStateToProps = (state) => {
 
  return {
    summary:selectSummary(state),
    cart: selectCart(state),
    show: selectCartShow(state)
  }
}

export default compose(connect(mapStateToProps, {showCart,deleteItem,addAmount,reduceAmount}))(UserCart)
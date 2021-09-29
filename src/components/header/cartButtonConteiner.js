//import React from 'react'

import { connect } from 'react-redux';

import CartButton from './cartButton';

let mapStateToProps = (state) => {
 
 
  
  return {
      cart:state.cart
    
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
     
  }
}
const Cart = connect(mapStateToProps, mapDispatchToProps)(CartButton)
export default Cart
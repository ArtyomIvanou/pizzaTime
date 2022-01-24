import React from 'react'
import './cartButton.css';
import UserCartContainer from './userCartContainer';
const CartButton=(props)=>{
  let showCartClassname
  if (props.show) {
    showCartClassname='cart_enable'
  } else {
    showCartClassname='cart_disable'
  }

  
// console.log(props.show)
    return (
      <div className={'cart'}><div className={showCartClassname}><UserCartContainer/></div><button onClick={() => props.showCart(props.cart)}>Корзина</button><div>{props.cartLength}</div></div>  
    );
    
  }
  export default CartButton
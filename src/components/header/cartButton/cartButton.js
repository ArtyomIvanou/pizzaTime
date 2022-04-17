import React from 'react'
import '../cartButton/cartButton.css';
import UserCartContainer from './userCart/userCartContainer';
const CartButton=(props)=>{
  let showCartClassname
  if (props.show) {
    showCartClassname='cart_enable'
  } else {
    showCartClassname='cart_disable'
  }

    return (
      <div className={'cart'}><div className={showCartClassname}><UserCartContainer/></div><button onClick={() => props.showCart()}>Корзина</button><div>{props.cartLength}</div></div>  
    );
    
  }
  export default CartButton
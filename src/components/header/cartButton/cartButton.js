import React from 'react'
import styles from '../cartButton/cartButton.module.css';
import UserCartContainer from './userCart/userCartContainer';
const CartButton=(props)=>{
  let showCartClassname
  if (props.show) {
    showCartClassname=styles.cart_enable
  } else {
    showCartClassname=styles.cart_disable
  }

    return (
      <div className={styles.cart}><div className={showCartClassname}><UserCartContainer/></div><button onClick={() => props.showCart()}>Корзина</button><div>{props.cartLength}</div></div>  
    );
    
  }
  export default CartButton
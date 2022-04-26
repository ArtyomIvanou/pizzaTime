import React from 'react'
import styles from '../cartButton/cartButton.module.css';
import UserCartContainer from './userCart/userCartContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const CartButton = (props) => {
  let showCartClassname
  if (props.show) {
    showCartClassname = styles.cart_enable
  } else {
    showCartClassname = styles.cart_disable
  }
let icon=<FontAwesomeIcon icon={ faCartArrowDown} />
let counter=<span>{props.cartLength} </span>
  return (
    <div className={styles.cart}>
      <div className={showCartClassname}><UserCartContainer /></div>
      <div className={styles.cart_Button} onClick={() => props.showCart()}>
        <span className={styles.cart_name}>Корзина  </span>  
        <span className={styles.cart_length}><span className={styles.icon_cart}>{icon}</span> {props.cartLength > 0 && counter}</span>
      </div>

    </div>
  );

}
export default CartButton
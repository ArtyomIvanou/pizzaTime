import React from 'react'
import styles from '../cartButton.module.css';
import OrderCartContainer from '../../../main/content/orderCart/orderCartContainer';
import CartListUnit from './CartListUnit';
const UserCart = (props) => {
  // console.log(props)
  let cartList = props.cart.map((i, a) => <li key={a + i.id * i.price + a / i.id * i.weight} >
    <CartListUnit content={i}
      position={a}
      deleteItem={props.deleteItem}
      addAmount={props.addAmount}
      reduceAmount={props.reduceAmount}
      styles={styles} />
  </li>)
  let showOrderButton
  let showSummary
  if (props.cart.length > 0) {
    showSummary = <div> Итого: {props.summary.toFixed(2)} р.</div>
    showOrderButton = <OrderCartContainer isShowing={true} />
  } else {
    showSummary = null
    showOrderButton = <OrderCartContainer isShowing={false} />
  }

  return (
    <div>
      <div className={styles.hide_cart} onClick={() => props.showCart()}> Скрыть корзину</div>
      <ul className={styles.cart_list}>
        {cartList}
      </ul>
      {showSummary}
      {showOrderButton}

    </div>

  );

}
export default UserCart
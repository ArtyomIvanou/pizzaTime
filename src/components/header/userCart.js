import React from 'react'
// import { NavLink } from 'react-router-dom';
import './cartButton.css';

import OrderCartContainer from './orderCartContainer';
const UserCart = (props) => {
  // let showCartClassname
  // if (props.show) {
  //   showCartClassname='cart_enable'
  // } else {
  //   showCartClassname='cart_disable'
  // }

  let cartList = props.cart.map((i, a) => {
    // console.log(i.price)
    // console.log(i)
    // console.log(i)


    return <li key={a + i.id * i.price + a / i.id * i.weight}>{i.title}<br />{i.addedDoughName} {i.priceName}  <button onClick={() => props.addAmount(a)}>+</button> <button onClick={() => props.reduceAmount(a)}>-</button> {i.amount + ' шт.'}<button onClick={() => props.deleteItem(a)}>delete</button></li>
  })
  // console.log(props.cart)
  let showOrderButton
  let showSummary
  if (props.cart.length > 0) {
    showSummary = props.summary.toFixed(2)
    showOrderButton = <OrderCartContainer isShowing={true} />
  } else {
    showSummary = null
    showOrderButton = <OrderCartContainer isShowing={false} />
  }

  return (
    <div>
      <ul>
        {cartList}
      </ul>
      {showSummary}
      {showOrderButton}

    </div>

  );

}
export default UserCart
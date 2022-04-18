import React from 'react'
import '../cartButton.module.css';
import OrderCartContainer from '../../../main/content/orderCart/orderCartContainer';
const UserCart = (props) => {
  // console.log(props)
  let cartList = props.cart.map((i, a) => <li key={a + i.id * i.price + a / i.id * i.weight}>{i.title}<br />{i.addedDoughName} {i.priceName}  <button onClick={() => props.addAmount(a)}>+</button> <button onClick={() => props.reduceAmount(a)}>-</button> {i.amount + ' шт.'}<button onClick={() => props.deleteItem(a)}>delete</button></li>)
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
import React from 'react'
// import { NavLink } from 'react-router-dom';
import './cartButton.css';
import Ordercart from './orderCart';
const UserCart = (props) => {
  // let showCartClassname
  // if (props.show) {
  //   showCartClassname='cart_enable'
  // } else {
  //   showCartClassname='cart_disable'
  // }

  let cartList = props.cart.map((i, a) => {
    // console.log(i)
    return <li key={a + i.id * i.price + a / i.id * i.weight}>{i.title}{i.amount}<button onClick={() => props.deleteItem(a)}>delete</button></li>
  })
  // console.log(props.cart)
  let showOrderButton
  if (props.cart.length>0) {
    showOrderButton=<Ordercart isShowing={true}/>
  } else {
    showOrderButton=<Ordercart isShowing={false}/>
  }
  
  return (
    <div>
      <ul>
        {cartList}
      </ul>
      {showOrderButton}
      
    </div>

  );

}
export default UserCart
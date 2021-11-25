import React from 'react'
import './cartButton.css';
const UserCart = (props) => {
  // let showCartClassname
  // if (props.show) {
  //   showCartClassname='cart_enable'
  // } else {
  //   showCartClassname='cart_disable'
  // }

  let cartList = props.cart.map((i,a) => {
    console.log(i)
    return <li key={a+i.id*i.price+a/i.id*i.weight}>{i.title}{i.amount}<button onClick={() => props.deleteItem(a)}>delete</button></li>
  })
  console.log(props.cart)
  return (
    <ul>
      {cartList}
    </ul>
  );

}
export default UserCart
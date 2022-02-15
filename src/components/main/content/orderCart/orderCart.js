import React from 'react'
import { NavLink } from 'react-router-dom'


const Ordercart = (props) => {
  let showButton
 if (props.isShowing) {
  showButton=<NavLink to={'/checkout/'}><button className={"button_order"} onClick={() => props.showCart()}>Оформить</button></NavLink> 
 
 } else {
  showButton=null
 }
  
  return (
    <div>
      {showButton}
    </div>

  );

}
export default Ordercart
import React from 'react'
import { NavLink } from 'react-router-dom'
// import './orderCartContainer.css'

const Ordercart = (props) => {
  let showButton
 if (props.isShowing) {
  showButton=<NavLink to={'/checkout/'}><button className={"button_order"} onClick={() => props.showCart()}>Оформить</button></NavLink> 
  // showButton=<button>Оформить</button>
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
import React from 'react'
import { NavLink } from 'react-router-dom'


const Ordercart = (props) => (
  <div>
    {props.isShowing && <NavLink to={'/checkout/'}><button className={"button_order"}
      onClick={() => props.showCart()}>Оформить</button></NavLink>}
  </div>

)
export default Ordercart
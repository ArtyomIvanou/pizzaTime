import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './orderCart.module.css'

const Ordercart = (props) => (
  <div>
    {props.isShowing && <NavLink to={'/checkout/'}><div className={styles.button_order}
      onClick={() => props.showCart()}>Оформить</div></NavLink>}
  </div>

)
export default Ordercart
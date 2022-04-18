import React from 'react'
// import '../header/header.css';
import styles from "./header.module.css"
import {
 
  NavLink
} from "react-router-dom";
const NavMenu=()=>(
  <nav className={styles.nav_menu}>
    <ul>
      <li><NavLink activeClassName={styles.activeLink} to={'/pizza/'}>Пицца</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/chicken/'}>Курица</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/potato/'}>Картофель</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/bread/'}>Хлебцы</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/salad/'}>Салаты</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/desserts/'}>Десерты</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/drinks/'}>Напитки</NavLink></li>
      <li><NavLink activeClassName={styles.activeLink} to={'/sauses/'}>Соусы</NavLink></li>
    </ul>
  </nav>





)
  export default NavMenu
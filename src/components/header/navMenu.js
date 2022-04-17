import React from 'react'
import '../header/header.css';
import {
 
  NavLink
} from "react-router-dom";
const NavMenu=()=>(
  <nav className={'nav_menu'}>
    <ul>
      <li><NavLink to={'/pizza/'}>Пицца</NavLink></li>
      <li><NavLink to={'/chicken/'}>Курица</NavLink></li>
      <li><NavLink to={'/potato/'}>Картофель</NavLink></li>
      <li><NavLink to={'/bread/'}>Хлебцы</NavLink></li>
      <li><NavLink to={'/salad/'}>Салаты</NavLink></li>
      <li><NavLink to={'/desserts/'}>Десерты</NavLink></li>
      <li><NavLink to={'/drinks/'}>Напитки</NavLink></li>
      <li><NavLink to={'/sauses/'}>Соусы</NavLink></li>
    </ul>
  </nav>





)
  export default NavMenu
import React from 'react'
import '../header/header.css';
import {
 
  NavLink
} from "react-router-dom";
const NavMenu=()=>{
  
   
    return (
      
      
          <nav className={'nav_menu'}>
            <ul>
              
              <li><NavLink to={'/pizza/'}>Пицца</NavLink></li>
              <li><NavLink to={'/chicken/'}>Курица</NavLink></li>
              <li>Картофель</li>
              <li>Хлебцы</li>
              <li>Салаты</li>
              <li>Десерты</li>
              <li>Напитки</li>
              <li>Соусы</li>
             
            </ul>
          </nav>

        


      
    );
    
  }
  export default NavMenu
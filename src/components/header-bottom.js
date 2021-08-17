import React from 'react'
import './header.css';
const HeaderBottom=()=>{
  
   
    return (
      
        <div className={'header-bottom'}>
          <nav className={'nav-menu'}>
            <ul>
              <li>Пицца</li>
              <li>Курица</li>
              <li>Картофель</li>
              <li>Хлебцы</li>
              <li>Салаты</li>
              <li>Десерты</li>
              <li>Напитки</li>
              <li>Соусы</li>
            </ul>
          </nav>

          <div className={'cart'}><button>Корзина</button></div>
        </div>


      
    );
    
  }
  export default HeaderBottom
import React from 'react'
import './header.css';
import {

  Switch,
  Route,
  NavLink
} from "react-router-dom";
const HeaderTop=()=>{
  
   
    return (
      
        <div className={'header_top'}>
          <div className={'header_logo'}><NavLink to={'/dsfsdf'}><img alt={'dominos'} src={'https://dominos.by/static/images/img-9ef03a.png'}></img></NavLink></div>
          <div className={'delivery_time'}>30 минут доставка </div>
          <div className={'delivery_phone'}>7717</div>
          <div className={'enter_personal'}><button>Войти</button></div>
        </div>
        
    );
    
  }
  export default HeaderTop
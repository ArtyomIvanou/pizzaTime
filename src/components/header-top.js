import React from 'react'
import './header.css';
const HeaderTop=()=>{
  
   
    return (
      
        <div className={'header-top'}>
          <div className={'header_logo'}><img alt={'dominos'} src={'https://dominos.by/static/images/img-9ef03a.png'}></img></div>
          <div className={'delivery-time'}>30 минут доставка </div>
          <div className={'delivery-phone'}>7717</div>
          <div className={'enter-personal'}><button>Войти</button></div>
        </div>
        
    );
    
  }
  export default HeaderTop
import React from 'react'
import './header.css';
import axios from 'axios';
import {

 
  NavLink
} from "react-router-dom";
const HeaderTop=()=>{
  let showOrders=()=>{
    axios.post('http://localhost:3001/orders', {
    id: 6,
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@gmail.com'
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});
  }
   
    return (
      
        <div className={'header_top'}>
          <div className={'header_logo'}><NavLink to={'/'}><img alt={'dominos'} src={'https://dominos.by/static/images/img-9ef03a.png'}></img></NavLink></div>
          <div className={'delivery_time'}>30 минут доставка </div>
          <div className={'delivery_phone'}>7717</div>
          <div className={'enter_personal'}><NavLink to={'/orders/'}><button onClick={() => {showOrders()}}>Заказы</button></NavLink></div>
        </div>
        
    );
    
  }
  export default HeaderTop
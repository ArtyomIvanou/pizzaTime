import React from 'react'
import './header.css';
import {
  NavLink
} from "react-router-dom";
const HeaderTop = (props) => {
  let userName
  if (props.user.user) {
    userName =props.user.user.name
  }
  let entry
  let userInfo
  let isAdmin
  if (props.user.isAutorizied) {
    if (props.user.isAdmin) {
      userInfo = <span>admin</span>
      isAdmin = <NavLink to={'/orders/'}><button >Заказы</button></NavLink>
    } else {
      isAdmin = null
      userInfo = <span>Привет,{userName}</span>
    }
    entry = <div className={'enter_personal'}>{userInfo}{isAdmin}<button onClick={() => props.logout()}>выход</button></div>
  } else {
    userInfo = null
    entry = <div className={'enter_personal'}>{userInfo}{isAdmin}<NavLink to={'/entry/'}><button >Вход</button></NavLink></div>
  }

  return (
    <div className={'header_top'}>
      <div className={'header_logo'}><NavLink to={'/'}><img alt={'dominos'} src={'https://dominos.by/static/images/img-9ef03a.png'}></img></NavLink></div>
      <div className={'delivery_time'}>30 минут доставка </div>
      <div className={'delivery_phone'}>7717</div>
      {entry}
    </div>

  );

}
export default HeaderTop
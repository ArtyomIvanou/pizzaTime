import React from 'react'
import styles from './header.module.css';
import {
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

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
      userInfo = null
      isAdmin = <NavLink to={'/orders/'}><button >Заказы</button></NavLink>
    } else {
      isAdmin = null
      userInfo = <span>Привет,{userName}</span>
    }
    entry = <div className={styles.enter_personal}><div>{userInfo}{isAdmin}</div><div className={styles.login} onClick={() => props.logout()}>Выход</div></div>
  } else {
    userInfo = null
    entry = <div className={styles.enter_personal}>{userInfo}{isAdmin}<NavLink to={'/entry/'}><div className={styles.login} >Вход</div></NavLink></div>
  }

  return (
    <div className={styles.header_top}>
      <div className={styles.header_logo}><NavLink to={'/'}><img alt={'dominos'} src={'https://dominos.by/static/images/img-9ef03a.png'}></img></NavLink></div>
      <div className={styles.delivery_time}><div><FontAwesomeIcon icon={faClock} /> 30 минут доставка</div> </div>
      <div className={styles.delivery_phone}><a href="tel:7717"><FontAwesomeIcon icon={faPhone} /> 7717</a></div>
      {entry}
    </div>

  );

}
export default HeaderTop
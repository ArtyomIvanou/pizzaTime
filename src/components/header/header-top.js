import React ,{useEffect} from 'react'
import './header.css';
// import axios from 'axios';
import {


  NavLink
} from "react-router-dom";
const HeaderTop = (props) => {
  
  // const register=()=> {
  //   return axios.post(`http://localhost:3001/register`, {
  //     email: 'artemka248944@gmail.com',
  //     password: '248944',
  //     username: 'tema',
  //     telephone: '+375292939956',
  //     adress: '8 луговая 5',
  //     isAdmin:"true"
  //   })
  //   .then(function (response) {
     
  //     if (response.status >= 400) {
       
  //       console.log(response.status)
  //         throw new Error("Bad response from server");
  //     }
  //     return response.data;
  // })
  //   .then(user => {
  //     return console.log(user)
  // })
  // }
  // const login=()=> {
  //   return axios.post(`http://localhost:3001/login`, {
  //     email: 'artemka248944@mail.ru',
  //     password: '248944',
     
  //   })
  //   .then(function (response) {
  //     console.log(response.status)
  //     if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //     }
  //     return response.data;
  // })
  //   .then(user => {
  //     return console.log(user)
  // })
  // }
  // const tt = () => {fetch('http://localhost:3001/register', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: 'artemka248944@gmail.com',
  //     password: '248944',
  //     username:'tema',
  //     telephone:'+375292939956',
  //     adress:'8 луговая 5'
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // }).then(response => response.json()).then(user => {
  // console.log(user)
  // })
  // }
  // let info=window.localStorage.getItem('currentUser')
  //   info=JSON.parse(info)
  //   if (info) {
  //     // console.log(props.loginUserFromLocalstorage)
  //     props.loginUserFromLocalstorage()
  //   }
  // console.log(props.user.isAdmin)
  useEffect(() => {
    let info=window.localStorage.getItem('currentUser')
    info=JSON.parse(info)
    if (info&&props.user.isAutorizied===false) {

      props.loginUserFromLocalstorage(info)
    }
    })
  let userInfo
if (props.user.isAutorizied) {
  userInfo=<span>привет</span>
} else {
  userInfo=null
}
  return (

    <div className={'header_top'}>
      <div className={'header_logo'}><NavLink to={'/'}><img alt={'dominos'} src={'https://dominos.by/static/images/img-9ef03a.png'}></img></NavLink></div>
      <div className={'delivery_time'}>30 минут доставка </div>
      <div className={'delivery_phone'}>7717</div>
      <div className={'enter_personal'}>{userInfo}<NavLink to={'/orders/'}><button >Заказы</button></NavLink><NavLink to={'/entry/'}><button >Вход</button></NavLink></div>

    </div>

  );

}
export default HeaderTop
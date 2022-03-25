import React, { useEffect } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import HeaderTop from './header-top';
import { loginUserFromLocalstorage, logout } from './../../redux/user-reducer';

const HeaderTopFuncConteiner = (props) => {

  useEffect(() => {
    let info = window.localStorage.getItem('currentUser')
    info = JSON.parse(info)
    if (info && props.user.isAutorizied === false) {
      props.loginUserFromLocalstorage(info)
    }
  })
  return (
    <HeaderTop
      {...props}
    />
  )
}

let mapStateToProps = (state, props) => {
  return {
    user: state.user
  }
}

export default compose(connect(mapStateToProps, { loginUserFromLocalstorage, logout }))(HeaderTopFuncConteiner)
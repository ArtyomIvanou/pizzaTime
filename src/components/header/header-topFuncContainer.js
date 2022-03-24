import React from 'react'

// import OrdersClassConteiner from './ordersClassContainer';

import { compose } from 'redux'
import { connect } from 'react-redux';
// import OrderUnit from './orderUnit';
// import { watchOrders, selectSizeFinal, selectDoughFinal, addAmountOfOrder, reduceAmountOfOrder, deleteAmountOfOrder } from '../../redux/orders-reducer';
// import {loginUserFromLocalstorage
import HeaderTop from './header-top';
// import { isLoading } from './../../redux/load-reducer';
import {loginUserFromLocalstorage } from './../../redux/user-reducer';

// class HeaderTopClassConteiner extends React.Component {
//   componentDidMount() {
//     // console.log(window.localStorage.currentUser)
//   }
//   render() {
//     // console.log(this.props)
//     return (
//       <HeaderTop
//         {...this.props}
//       />
//     )
//   }

// }
const HeaderTopClassConteiner = (props) => {
  // return (
  //     <OrdersClassConteiner
  //         content={props.content}
          
          
  //         deleteOrder={props.deleteOrder}
  //         getOrders={props.getOrders}
  //     />
  // )
  return (
      <HeaderTop
          {...props}
      />
  )
}
let mapStateToProps = (state, props) => {
  // console.log(state.user)
  return {
    user: state.user
  }
}

// compose(connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder }))(OrderUnitFuncConteiner)
// const ConnectedOrders = connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder })(OrderUnitFuncConteiner)
export default compose(connect(mapStateToProps, { loginUserFromLocalstorage }))(HeaderTopClassConteiner)
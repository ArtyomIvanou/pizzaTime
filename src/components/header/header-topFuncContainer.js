import React from 'react'

// import OrdersClassConteiner from './ordersClassContainer';

import { compose } from 'redux'
import { connect } from 'react-redux';
// import OrderUnit from './orderUnit';
import { watchOrders, selectSizeFinal, selectDoughFinal, addAmountOfOrder, reduceAmountOfOrder, deleteAmountOfOrder } from '../../redux/orders-reducer';
import HeaderTop from './header-top';
// import { isLoading } from './../../redux/load-reducer';

class HeaderTopClassConteiner extends React.Component {
  componentDidMount() {
    console.log(window.localStorage.currentUser)
  }
  render() {
    return (
      <HeaderTop
        {...this.props}
      />
    )
  }

}
let mapStateToProps = (state, props) => {
  return {
  }
}

// compose(connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder }))(OrderUnitFuncConteiner)
// const ConnectedOrders = connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder })(OrderUnitFuncConteiner)
export default compose(connect(mapStateToProps, { watchOrders, selectSizeFinal, selectDoughFinal, addAmountOfOrder, reduceAmountOfOrder, deleteAmountOfOrder }))(HeaderTopClassConteiner)
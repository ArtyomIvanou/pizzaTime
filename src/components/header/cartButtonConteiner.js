
import { connect } from 'react-redux';
import { showCartActionCreator } from '../../redux/cart-reducer';

import CartButton from './cartButton';
// import isoFetch from 'isomorphic-fetch';

let mapStateToProps = (state) => {
  // isoFetch('http://fe.it-academy.by/Examples/net_city/countries.json')
  // .then(function(response) {
  //     if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //     }
  //     return response.json();
  // })
  // .then(function(stories) {
  //     console.log(stories);
  //     console.log('sdvjbdsv');
  // }); 
  return {
    cart: state.cart.cart,
    show: state.cart.show
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    showCart: () => {
      dispatch(showCartActionCreator())
    },
  }
}
const Cart = connect(mapStateToProps, mapDispatchToProps)(CartButton)
export default Cart
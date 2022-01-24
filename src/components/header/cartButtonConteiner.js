
import { connect } from 'react-redux';
import { showCart } from '../../redux/cart-reducer';

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
  // isoFetch('http://localhost:3001/products')
  // .then(function(response) {
  //     if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //     }
  //     return response.json();
  // })
  // .then(function(stories) {
   
  //     console.log(stories);
  //     // console.log('sdvjbdsv');
  // }); 
  return {
    cart: state.cart.cart,
    show: state.cart.show,
    cartLength:state.cart.cartLength,
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     showCart: () => {
//       dispatch(showCartActionCreator())
//     },
//   }
// }
const Cart = connect(mapStateToProps, {showCart})(CartButton)
export default Cart
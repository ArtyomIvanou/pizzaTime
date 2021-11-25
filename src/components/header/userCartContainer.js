
import { connect } from 'react-redux';
import { deleteItemActionCreator, showCartActionCreator } from '../../redux/cart-reducer';
import UserCart from './userCart'
// import CartButton from './cartButton';
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
    deleteItem: (id) => {
      dispatch(deleteItemActionCreator(id))
    },
  }
}
const UserCartContainer = connect(mapStateToProps, mapDispatchToProps)(UserCart)
export default UserCartContainer
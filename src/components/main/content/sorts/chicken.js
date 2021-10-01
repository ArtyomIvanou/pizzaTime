// // import React, { Fragment } from 'react';
// import '../content.css';
// import Products from './products/products';
// import { connect } from 'react-redux'

// import { addToCartActionCreator } from './../../../../redux/cart-reducer';

// import { selectSizeActionCreator } from './../../../../redux/configurate-item-reducer';

// import { selectDoughActionCreator } from './../../../../redux/configurate-item-reducer';

// // const Chicken = (props, state) => {
// //     let addToCart = (content) => {

// //         //props.dispatch({ type: 'ADD_TO_CART', product: props.content })
// //         props.dispatch(addToCartActionCreator(content))
// //     }
// //     let selectSizeToProps = (value, type, content) => {
// //         content.config.size.map((a, i) => {
// //             if (a.name === value) {
// //                 return props.dispatch(selectSizeActionCreator(content.id, type, a))
// //                 // return props.dispatch({ type: 'CHANGE_SIZE', product: props.content.id, selectedType: props.type, value: a })
// //             } else {
// //                 return null
// //             }
// //         }
// //         )
// //     }

// //     let selectDoughToProps = (value, type, content) => {
// //         content.config.dough.map((a, i) => {
// //             if (a.name === value) {
// //                 return props.dispatch(selectDoughActionCreator(content.id, type, a))
// //                 //return props.dispatch({ type: 'CHANGE_DOUGH', product: props.content.id, selectedType: props.type, value: a })
// //             } else {
// //                 return null
// //             }
// //         }
// //         )
// //     }
// //     let selectedChicken = props.content.map((a, i) => {
// //         if (a.type === 'chicken') {
// //             return <Products key={i}
// //                 content={a}
// //                 type={a.type}
// //                 dispatch={props.dispatch}
// //                 addToCart={addToCart}
// //                 selectSizeToProps={selectSizeToProps}
// //                 selectDoughToProps={selectDoughToProps}></Products>
// //         }
// //         else { return null }
// //     })
// //   // console.log(props.cart)
// //     return (
// //         <Fragment>

// //            {selectedChicken}

// //         </Fragment>
// //     );
// // }
// // export default Chicken
// let mapStateToProps = (state) => {
 
//     let qqq = state.shop.find(a => a.type === 'chicken')
//     console.log(qqq)
    
//     return {
//         content: qqq,
//         type: qqq.type,
      
//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (content) => {
//             dispatch(addToCartActionCreator(content))
//         },
//         selectSizeToProps: (value, type, content) => {
//             content.config.size.map((a, i) => {
//                 if (a.name === value) {
//                     return dispatch(selectSizeActionCreator(content.id, type, a))
//                     // return props.dispatch({ type: 'CHANGE_SIZE', product: props.content.id, selectedType: props.type, value: a })
//                 } else {
//                     return null
//                 }
//             }
//             )
//         },
//         selectDoughToProps: (value, type, content) => {
//             content.config.dough.map((a, i) => {
//                 if (a.name === value) {
//                     return dispatch(selectDoughActionCreator(content.id, type, a))
//                     //return props.dispatch({ type: 'CHANGE_DOUGH', product: props.content.id, selectedType: props.type, value: a })
//                 } else {
//                     return null
//                 }
//             }
//             )
//         }

//     }
// }
// const SuperChicken = connect(mapStateToProps, mapDispatchToProps)(Products)
// export default SuperChicken
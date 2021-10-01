// import React from 'react'
// import { addToCartActionCreator } from '../../../../../redux/cart-reducer';
// import { selectSizeActionCreator,selectDoughActionCreator } from '../../../../../redux/configurate-item-reducer';

// import '../../content.css';
// import ProductUnit from './productUnit';

// const ProductUnitContainer = (props) => {
  

//     let addToCart = () => {
 
//        props.store.dispatch(addToCartActionCreator(props.content))
//     }
//     let selectSizeToProps = (value) => {
//         props.content.config.size.map((a, i) => {
//             if (a.name === value) {
//                 return props.store.dispatch(selectSizeActionCreator(props.content.id,props.type,a))
//             } else {
//                 return null
//             }
//         }
//         )
//     }

//     let selectDoughToProps = (value) => {
//         props.content.config.dough.map((a, i) => {
//             if (a.name === value) {
//                 return props.store.dispatch(selectDoughActionCreator(props.content.id,props.type,a))
//             } else {
//                 return null
//             }
//         }
//         )
//     }
    

//     return <ProductUnit content={props.content} type={props.type} addToCart={addToCart} selectSizeToProps={selectSizeToProps} selectDoughToProps={selectDoughToProps}  />



// }
// export default ProductUnitContainer
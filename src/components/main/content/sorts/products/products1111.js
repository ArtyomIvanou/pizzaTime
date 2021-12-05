// import React, { Fragment } from 'react'
// import '../../content.css';

// import {
//     Switch,
//     Route,
//     NavLink
// } from "react-router-dom";

// import { connect } from 'react-redux';
// // import isoFetch from 'isomorphic-fetch';
// import ProductUnitContainer from './productUnitContainer';
// const ProductsConteiner = (props) => {
//     return (
//         <Products content={props.content}
//             type={props.selectedType}
//         />
//     )
// }
// const Products = (props) => {
//     // isoFetch('http://localhost:3001/products')
//     // .then(function(response) {
//     //     if (response.status >= 400) {
//     //         throw new Error("Bad response from server");
//     //     }
//     //     return response.json();
//     // })
//     // .then(function(stories) {
     
//     //     console.log(stories);
//     //     // console.log('sdvjbdsv');
//     // }); 
//     let productsSort = props.content.productsType.map((a, i) => {

//         return <li key={i} ><NavLink
//             activeClassName={'active_Link'}
//             to={'/' + props.type + '/' + a.type}>{a.title} </NavLink></li>
//     })

   
// // console.log('products render')
//     props.content.productsType.map((a) => {
//         a.products = []
//         return a
//     })
//     props.content.products.map((a) => {
//         props.content.productsType.map((b) => {
//             if (b.type === a.type) {
//                 b.products.push(a)
//             }
//             return b
//         })
//         return a
//     })
//     let allProducts
//     if (props.content.productsType.length > 1) {
//         allProducts = props.content.productsType.map((a, i) => {
//             let ccc
//             if (a.products.length >= 1) {
//                 ccc = a.products.map((b, e) => {

//                     return <ProductUnitContainer key={e}
//                         number={b.id}
//                         type={props.type}
//                         content={b}
//                     />
//                 })
//             } else {
//                 ccc = null
//             }
//             return <Route key={i}
//                 path={'/' + props.type + '/' + a.type}>{ccc}</Route>
//         })
//     } else {
//         allProducts = props.content.products.map((a, i) => {
//             return <Route key={a.id}
//                 path={'/' + props.type + '/' + a.type}><ProductUnitContainer key={a.id}
//                     number={a.id}
//                     type={props.type}
//                 /></Route>
//         })
//     }
//     let allProductsShow = props.content.products.map((a, i) => {

//         return <ProductUnitContainer key={a.id}
//             number={a.id}
//             content={a}
//             type={props.type}
//         />
//     })

//     return (
//         <Fragment>
//             <div className={'content_description'}>
//                 <div className={'content_name'}>{props.content.title}</div>
//                 <div className={'content_sort'}>
//                     <ul>
//                         {productsSort}
//                     </ul>
//                 </div>
//             </div>
//             <div className={'products'}>
//                 <Switch>
//                     <Route exact path={'/'} >{allProductsShow}</Route>
//                     <Route exact path={'/' + props.type + '/'} >{allProductsShow}</Route>
//                     {allProducts}
//                 </Switch>
//             </div>
//         </Fragment>
//     );
// }

// let mapStateToProps = (state, props) => {
//     let aaa = state.shop.find(a => a.type === props.selectedType)
    
//     return {
//         content: aaa,
//         type: aaa.type,

//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }
// const SuperProducts = connect(mapStateToProps, mapDispatchToProps)(ProductsConteiner)
// export default SuperProducts
import React from 'react';
import {
    Route
} from "react-router-dom";
import Chicken from './sorts/chicken';
import Pizza from './sorts/pizza';
import Carousel from './carousel/carousel';
import './content.css';
// import { addToCartActionCreator } from '../../../redux/store';
// import { selectDoughActionCreator } from '../../../redux/store';
// import { selectSizeActionCreator } from '../../../redux/store';
// import Products from './sorts/products/products';

const Content = (props) => {
    // let addToCart = (content) => {

    //     //props.dispatch({ type: 'ADD_TO_CART', product: props.content })
    //     props.dispatch(addToCartActionCreator(content))
    // }
    // let selectSizeToProps = (value, type, content) => {
    //     content.config.size.map((a, i) => {
    //         if (a.name === value) {
    //             return props.dispatch(selectSizeActionCreator(content.id, type, a))
    //             // return props.dispatch({ type: 'CHANGE_SIZE', product: props.content.id, selectedType: props.type, value: a })
    //         } else {
    //             return null
    //         }
    //     }
    //     )
    // }

    // let selectDoughToProps = (value, type, content) => {
    //     content.config.dough.map((a, i) => {
    //         if (a.name === value) {
    //             return props.dispatch(selectDoughActionCreator(content.id, type, a))
    //             //return props.dispatch({ type: 'CHANGE_DOUGH', product: props.content.id, selectedType: props.type, value: a })
    //         } else {
    //             return null
    //         }
    //     }
    //     )
    // }
    // let selectedPizza = props.content.map((a, i) => {
    //     if (a.type === 'pizza') {
    //         return <Products key={i}
    //             content={a}
    //             type={a.type}
    //             dispatch={props.dispatch}
    //             addToCart={addToCart}
    //             selectSizeToProps={selectSizeToProps}
    //             selectDoughToProps={selectDoughToProps} ></Products>
    //     }
    //     else { return null }
    // })
    // let selectedChicken = props.content.map((a, i) => {
    //     if (a.type === 'chicken') {
    //         return <Products key={i}
    //             content={a}
    //             type={a.type}
    //             dispatch={props.dispatch}
    //             addToCart={addToCart}
    //             selectSizeToProps={selectSizeToProps}
    //             selectDoughToProps={selectDoughToProps}></Products>
    //     }
    //     else { return null }
    // })
    // var resultedPage = <div className={'content'}>
    //     {/* <Carousel ></Carousel>
    // <Route exact path="/" ><Pizza content={props.content}  dispatch={props.dispatch}/></Route>
    // <Route path={'/pizza/'} ><Pizza content={props.content}dispatch={props.dispatch}/></Route>
    // <Route path={'/chicken/'} ><Chicken content={props.content}  dispatch={props.dispatch}/></Route> */}
    //     <Carousel ></Carousel>
    //     <Route exact path="/" >{selectedPizza}</Route>
    //     <Route path={'/pizza/'} >{selectedPizza}</Route>
    //     <Route path={'/chicken/'} >{selectedChicken}</Route>
    // </div>
    return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Pizza content={props.content}  dispatch={props.dispatch}/></Route>
            <Route path={'/pizza/'} ><Pizza content={props.content}dispatch={props.dispatch}/></Route>
            <Route path={'/chicken/'} ><Chicken content={props.content}  dispatch={props.dispatch}/></Route>
            {/* <Carousel ></Carousel>
            <Route exact path="/" >{selectedPizza}</Route>
            <Route path={'/pizza/'} >{selectedPizza}</Route>
            <Route path={'/chicken/'} >{selectedChicken}</Route> */}
        </div>
    );

}
// let mapStateToProps = (state) => {
//     return { content: state.shop }
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
// const SuperDialogs=connect(mapStateToProps,mapDispatchToProps)(resultedPage)
export default Content
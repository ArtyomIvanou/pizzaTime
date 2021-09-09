import React from 'react';
import {
    Route
} from "react-router-dom";
import Chicken from './sorts/chicken';
import Pizza from './sorts/pizza';
import Carousel from './carousel/carousel';
import './content.css';
//import Products from './sorts/products/products'
const Content = (props) => {
    //let selectedPizza = props.content.find(a =>a.type === 'pizza' )
    //console.log (selectedPizza)
    //let selectedChicken = props.content.find(a =>a.type === 'chicken' )
   return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Pizza content={props.content} addToCart={props.addToCart} changeSize={props.changeSize} cart={props.cart}/></Route>
            <Route path={'/pizza/'} ><Pizza content={props.content} addToCart={props.addToCart} changeSize={props.changeSize} cart={props.cart}/></Route>
            <Route path={'/chicken/'} ><Chicken content={props.content} addToCart={props.addToCart} changeSize={props.changeSize} cart={props.cart}/></Route>

        </div>
    );
    /*return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Products content={selectedPizza}/></Route>
            <Route path={'/pizza/'} ><Products content={selectedPizza}/></Route>
            <Route path={'/chicken/'} ><Products content={selectedChicken}/></Route>

        </div>
    );*/
}

export default Content
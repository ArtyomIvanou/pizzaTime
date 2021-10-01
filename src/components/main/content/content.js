import React from 'react';
import {
    Route
} from "react-router-dom";
// import Chicken from './sorts/chicken';
// import Pizza from './sorts/pizza';
import Carousel from './carousel/carousel';
import './content.css';
import Products from './sorts/products/products';


const Content = (props) => {

    return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Products selectedType={'pizza'}/></Route>
            <Route path={'/pizza/'} ><Products selectedType={'pizza'}/></Route>
            <Route path={'/chicken/'} ><Products selectedType={'chicken'}/></Route>
           
        </div>
    );

}

export default Content
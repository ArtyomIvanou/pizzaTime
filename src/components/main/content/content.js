import React from 'react';
import {
    Route
} from "react-router-dom";

import Carousel from './carousel/carousel';
import './content.css';
import Products from './sorts/products/productsFuncContainer';


const Content = (props) => {

    return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Products selectedType={'pizza'}/></Route>
            <Route path={'/pizza/'} ><Products selectedType={'pizza'}/></Route>
            <Route path={'/chicken/'} ><Products selectedType={'chicken'}/></Route>
            <Route path={'/drinks/'} ><Products selectedType={'drinks'}/></Route>
            <Route path={'/potato/'} ><Products selectedType={'potato'}/></Route>
            <Route path={'/bread/'} ><Products selectedType={'bread'}/></Route>
            <Route path={'/salad/'} ><Products selectedType={'salad'}/></Route>
            <Route path={'/desserts/'} ><Products selectedType={'desserts'}/></Route>
            <Route path={'/sauses/'} ><Products selectedType={'sauses'}/></Route>
        </div>
    );

}

export default Content
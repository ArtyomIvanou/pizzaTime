import React from 'react';
import {
    Route
} from "react-router-dom";
import Carousel from './carousel/carousel';
import './content.css';
import Products from './sorts/products/productsFuncContainer';
import Orders from '../../header/orders/ordersFuncContainer';
import CheckoutContainer from '../content/checkout/checkoutFuncContainer';
import EntryFuncContainer from './login/entryFuncContainer';
import RegistrationFuncContainer from './login/registrationFuncContainer';
const Content = () => {
// console.log('content render')
    return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Products selectedType={'pizza'}/></Route>
            <Route path={'/pizza/:productsType?'} ><Products selectedType={'pizza'}/></Route>
            <Route path={'/chicken/'} ><Products selectedType={'chicken'}/></Route>
            <Route path={'/drinks/'} ><Products selectedType={'drinks'}/></Route>
            <Route path={'/potato/'} ><Products selectedType={'potato'}/></Route>
            <Route path={'/bread/'} ><Products selectedType={'bread'}/></Route>
            <Route path={'/salad/'} ><Products selectedType={'salad'}/></Route>
            <Route path={'/desserts/'} ><Products selectedType={'desserts'}/></Route>
            <Route path={'/sauses/'} ><Products selectedType={'sauses'}/></Route>
            <Route path={'/orders/'} ><Orders/></Route>
            <Route path={'/checkout/'} ><CheckoutContainer/></Route>
            <Route path={'/entry/'} ><EntryFuncContainer/></Route>
            <Route path={'/registration/'} ><RegistrationFuncContainer/></Route>
        </div>
    );

}

export default Content
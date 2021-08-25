import React from 'react'
import './content.css';
import Carousel from './carousel';
//import Products from './products';
import Pizza from './pizza';
import Chicken from './chicken';
import {

   /* Switch,*/
    Route,
    /*NavLink*/
} from "react-router-dom";
//import shop from '../../AppData';

const Content = () => {
    /*let selectedPizza = shop.map((a, i) => {
        if (a.type === 'pizza') {
            return <Products key={i} content={a} type={a.type}></Products>
        }
        else { return null }
    })
    let selectedChicken = shop.map((a, i) => {
        if (a.type === 'chicken') {
            return <Products key={i} content={a} type={a.type}></Products>
        }
        else { return null }
    })*/
    return (
        <div className={'content'}>
            <Carousel ></Carousel>
           <Route path={'/pizza/'} component={Pizza}/>
           <Route path={'/chicken/'} component={Chicken}/>

        </div>
    );

}

export default Content
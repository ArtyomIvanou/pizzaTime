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

const Content = (props) => {
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
    //console.log(props.content)
    return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Pizza content={props.content}/></Route>
            <Route path={'/pizza/'} ><Pizza content={props.content}/></Route>
            <Route path={'/chicken/'} ><Chicken content={props.content}/></Route>

        </div>
    );

}

export default Content
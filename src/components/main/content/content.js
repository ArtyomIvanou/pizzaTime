import React from 'react';
import {
    Route
} from "react-router-dom";
import Chicken from './sorts/chicken';
import Pizza from './sorts/pizza';
import Carousel from './carousel/carousel';
import './content.css';

const Content = (props) => {
   
   return (
        <div className={'content'}>
            <Carousel ></Carousel>
            <Route exact path="/" ><Pizza content={props.content}  dispatch={props.dispatch}/></Route>
            <Route path={'/pizza/'} ><Pizza content={props.content}dispatch={props.dispatch}/></Route>
            <Route path={'/chicken/'} ><Chicken content={props.content}  dispatch={props.dispatch}/></Route>

        </div>
    );
   
}

export default Content
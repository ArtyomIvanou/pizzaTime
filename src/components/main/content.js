import React from 'react';
import {
    Route
} from "react-router-dom";
import Carousel from './carousel/carousel';
import './content.css';
import Chicken from './sorts/chicken';
import Pizza from './sorts/pizza';

const Content = (props) => {
    
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
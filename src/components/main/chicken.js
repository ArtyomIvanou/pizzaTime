import React, { Fragment } from 'react'
import './content.css';
/*import ProductUnit from './productUnit';
import {

    Switch,
    Route,
    NavLink
} from "react-router-dom";*/
//import shop from '../../AppData'
import Products from './products';
const Chicken = (props, state) => {
    let selectedChicken = props.content.map((a, i) => {
        if (a.type === 'chicken') {
            return <Products key={i} content={a} type={a.type}></Products>
        }
        else { return null }
    })
   
    return (
        <Fragment>

           {selectedChicken}

        </Fragment>
    );
}
export default Chicken

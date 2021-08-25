import React, { Fragment } from 'react'
import './content.css';

import shop from '../../AppData'
import Products from './products';
const Pizza = (props, state) => {
    let selectedPizza = shop.map((a, i) => {
        if (a.type === 'pizza') {
            return <Products key={i} content={a} type={a.type}></Products>
        }
        else { return null }
    })
   
    return (
        <Fragment>

           {selectedPizza}

        </Fragment>
    );
}
export default Pizza

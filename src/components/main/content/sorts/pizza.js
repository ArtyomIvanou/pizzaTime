import React, { Fragment } from 'react';
import '../content.css';
import Products from './products/products';

const Pizza = (props, state) => {
   
    let selectedPizza = props.content.map((a, i) => {
        if (a.type === 'pizza') {
            return <Products key={i} content={a} type={a.type} addToCart={props.addToCart} cart={props.cart}></Products>
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

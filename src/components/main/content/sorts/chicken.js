import React, { Fragment } from 'react';
import '../content.css';
import Products from './products/products';

const Chicken = (props, state) => {
    let selectedChicken = props.content.map((a, i) => {
        if (a.type === 'chicken') {
            return <Products key={i} content={a} type={a.type} changeSize={props.changeSize} addToCart={props.addToCart} cart={props.cart}></Products>
        }
        else { return null }
    })
  // console.log(props.cart)
    return (
        <Fragment>

           {selectedChicken}

        </Fragment>
    );
}
export default Chicken

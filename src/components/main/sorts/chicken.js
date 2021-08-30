import React, { Fragment } from 'react';
import '../content.css';
import Products from '../products';

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

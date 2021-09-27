import React, { Fragment } from 'react';
import '../content.css';
import Products from './products/products';
import { addToCartActionCreator, selectSizeActionCreator, selectDoughActionCreator } from '../../../../redux/store';


const Chicken = (props, state) => {
    let addToCart = (content) => {

        //props.dispatch({ type: 'ADD_TO_CART', product: props.content })
        props.dispatch(addToCartActionCreator(content))
    }
    let selectSizeToProps = (value, type, content) => {
        content.config.size.map((a, i) => {
            if (a.name === value) {
                return props.dispatch(selectSizeActionCreator(content.id, type, a))
                // return props.dispatch({ type: 'CHANGE_SIZE', product: props.content.id, selectedType: props.type, value: a })
            } else {
                return null
            }
        }
        )
    }

    let selectDoughToProps = (value, type, content) => {
        content.config.dough.map((a, i) => {
            if (a.name === value) {
                return props.dispatch(selectDoughActionCreator(content.id, type, a))
                //return props.dispatch({ type: 'CHANGE_DOUGH', product: props.content.id, selectedType: props.type, value: a })
            } else {
                return null
            }
        }
        )
    }
    let selectedChicken = props.content.map((a, i) => {
        if (a.type === 'chicken') {
            return <Products key={i}
                content={a}
                type={a.type}
                dispatch={props.dispatch}
                addToCart={addToCart}
                selectSizeToProps={selectSizeToProps}
                selectDoughToProps={selectDoughToProps}></Products>
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

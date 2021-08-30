import React, { Fragment } from 'react'
import './content.css';
import ProductUnit from './productUnit';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const Products = (props, state) => {
    let productsSort = props.content.productsType.map((a, i) => { return <li key={i} ><NavLink activeClassName={'active_Link'} to={'/' + props.type + '/' + a.type}>{a.title} </NavLink></li> })
    let allProducts = props.content.products.map((a, i) => { return <Route key={a.id} path={'/' + props.type + '/' + a.type}><ProductUnit key={a.id} content={a} type={props.type}></ProductUnit></Route> })
    let allProductsShow = props.content.products.map((a, i) => { return <ProductUnit key={a.id} content={a} type={props.type}></ProductUnit> })
    return (
        <Fragment>

            <div className={'content_description'}>
                <div className={'content_name'}>{props.content.title}</div>
                <div className={'content_sort'}>
                    <ul>
                        {productsSort}
                    </ul>
                </div>
            </div>
            <div className={'products'}>
                <Switch>
                    <Route exact path={'/'} >{allProductsShow}</Route>
                    <Route exact path={'/' + props.type + '/'} >{allProductsShow}</Route>
                    {allProducts}
                </Switch>
            </div>

        </Fragment>
    );
}
export default Products

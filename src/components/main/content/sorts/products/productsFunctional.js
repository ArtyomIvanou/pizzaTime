import React, { Fragment } from 'react'
import styles from'./products.module.css';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import ProductUnitContainer from './productUnitContainer';

const ProductsFunctional = (props) => {

    let productsSort = props.content.productsType.map((a, i) => <li key={i}><NavLink
        activeClassName={styles.active_Link}
        to={'/' + props.type + '/' + a.type}>{a.title} </NavLink></li>)

    props.content.productsType.map((a) => {
        a.products = []
        return a
    })
    props.content.products.map((a) => {
        props.content.productsType.map((b) => {
          
            if (b.type === a.type) {
                b.products.push(a)
            }
            return b
        })
        return a
    })
    // console.log( props)
    // console.log( props.content.productsType)
    let allProducts
    if (props.content.productsType.length > 1) {
        allProducts = props.content.productsType.map((a, i) => {
            let ccc =null
            if (a.products.length >= 1) {
                ccc = a.products.map((b, e) => <ProductUnitContainer  key={e}
                    number={b.id}
                    type={props.type}
                    content={b} />)
            } 
            return <Route key={i}
                path={'/' + props.type + '/' + a.type}>{ccc}</Route>
        })
    } else {
        allProducts = props.content.products.map((a) => <Route key={a.id}
            path={'/' + props.type + '/' + a.type}><ProductUnitContainer  key={a.id}
                number={a.id}
                content={a}
                type={props.type} /></Route>)
    }
    let allProductsShow = props.content.products.map((a) => <ProductUnitContainer  key={a.id}
        number={a.id}
        content={a}
        type={props.type} />)

    return (
        <Fragment>
            <div className={styles.content_description}>
                <div className={styles.content_name}>{props.content.title}</div>
                <div className={styles.content_sort}>
                    <ul className={styles.sort_list}>
                        {productsSort}
                    </ul>
                </div>
            </div>
            <div className={styles.products}>
                <Switch>
                    <Route exact path={'/'} >{allProductsShow}</Route>
                    <Route exact path={'/' + props.type + '/'} >{allProductsShow}</Route>
                    {allProducts}
                </Switch>
            </div>
        </Fragment>
    );
}


export default ProductsFunctional
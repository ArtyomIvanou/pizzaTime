import React from 'react'
import styles from './products.module.css';
import classNames from 'classnames';

const ProductUnit = (props) => {
    if (!props.content.addedDoughName) {
        props.content.config.dough.map((a, i) => {
            if (a.name===props.content.config.defaulDough) {
                props.content.addedDoughName=a.title 
            }
            return a
        }) 
    }
    if (!props.content.priceName) {
        props.content.config.size.map((a, i) => {
            if (a.name===props.content.config.defaultSize) {
                props.content.priceName=a.title 
            }
            return a
        }) 
    }
   
    let optionSize
    let optionDough
    let sizeSelect
    let doughSelect
    let totalWeight
    let totalPrice = props.content.price + props.content.addedPrice + ' руб.'
    let description = props.content.content.join(', ')
    let descriptionHeight
    if (props.type === 'pizza') {
        totalWeight = props.content.weight + props.content.addedWeight + ' гр.'
        descriptionHeight=styles.descriptionHeight
    } else {
        totalWeight = props.content.weight+ ' гр.'
        descriptionHeight=null
    }
    

    if (props.content.config.size.length > 0) {
        optionSize = props.content.config.size.map((a, i) => <option value={a.name} info={a.name} key={i}>{a.title}</option>)
        sizeSelect = <select defaultValue={props.content.config.defaultSize} onChange={(event) => props.selectSize(event.target.value, props.type, props.content)} >
            {optionSize}
        </select>
    } else {
        sizeSelect = null
    }

    if (props.content.config.dough.length > 0) {
        optionDough = props.content.config.dough.map((a, i) => <option value={a.name} key={i}>{a.title}</option>)
        doughSelect = <select onChange={(event) => props.selectDough(event.target.value, props.type, props.content)} >
            {optionDough}
        </select>
    } else {
        doughSelect = null
    }

    return (
        <div className={styles.product}>
            <div className={styles.product_logo}>
                <img src={props.content.img} alt={props.content.title}></img>
            </div>
            <div className={styles.product_name}>{props.content.title}</div>
            <div className={classNames(styles.product_description,descriptionHeight)}>{description}</div>
            <div className={styles.product_customize}>
                <div className={styles.product_modification}>
                    {sizeSelect}
                    {doughSelect}
                </div>
            </div>
            <div className={styles.product_result}>
                <div className={styles.product_card_modification_info}>
                    <p className={styles.product_card_modification_info_price}>{totalPrice}</p>
                    <p className={styles.product_card_modification_info_weight}>{totalWeight}</p>
                </div>
                <div className={styles.product_card_actions}>
                     <div className={styles.addToCart} title={"В корзину"} onClick={() => props.addToCart(props.content)}>В корзину</div>   
                </div>
            </div>
        </div>)



}
export default ProductUnit
import React from 'react'
import '../../content.css';

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
    if (props.type === 'pizza') {
        totalWeight = props.content.weight + props.content.addedWeight + ' гр.'
      
    } else {
        totalWeight = props.content.weight+ ' гр.'
  
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
        <div className={'product'}>
            <div className={'product_logo'}>
                <img src={props.content.img} alt={props.content.title}></img>
            </div>
            <div className={'product_name'}>{props.content.title}</div>
            <div className={'product_description'}>{description}</div>
            <div className={'product_customize'}>
                <div className={'product_modification'}>
                    {sizeSelect}
                    {doughSelect}
                </div>
            </div>
            <div className={'product-result'}>
                <div className={"product-card__modification-info"}>
                    <p className={"product-card__modification-info-price"}>{totalPrice}</p>
                    <p className={"product-card__modification-info-weight"}>{totalWeight}</p>
                </div>
                <div className={"product-card__actions"}>
                    <button title={"В корзину"} type={"button"} onClick={() => props.addToCart(props.content)}><span ><span >
                        <span >В корзину</span></span></span></button>
                </div>
            </div>
        </div>)



}
export default ProductUnit
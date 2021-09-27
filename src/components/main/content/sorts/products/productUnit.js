import React from 'react'
// import { addToCartActionCreator,selectSizeActionCreator,selectDoughActionCreator } from '../../../../../redux/store';
import '../../content.css';

const ProductUnit = (props, state) => {
    let optionSize
    let optionDough
    let sizeSelect
    let doughSelect
    let addMozarella
    let totalWeight
    let totalPrice = props.content.price + props.content.addedPrice + ' руб.'

    // let addToCart = () => {
       
    //    //props.dispatch({ type: 'ADD_TO_CART', product: props.content })
    //    props.dispatch(addToCartActionCreator(props.content))
    // }
    // let selectSizeToProps = (value) => {
    //     props.content.config.size.map((a, i) => {
    //         if (a.name === value) {
    //             return props.dispatch(selectSizeActionCreator(props.content.id,props.type,a))
    //            // return props.dispatch({ type: 'CHANGE_SIZE', product: props.content.id, selectedType: props.type, value: a })
    //         } else {
    //             return null
    //         }
    //     }
    //     )
    // }

    // let selectDoughToProps = (value) => {
    //     props.content.config.dough.map((a, i) => {
    //         if (a.name === value) {
    //             return props.dispatch(selectDoughActionCreator(props.content.id,props.type,a))
    //             //return props.dispatch({ type: 'CHANGE_DOUGH', product: props.content.id, selectedType: props.type, value: a })
    //         } else {
    //             return null
    //         }
    //     }
    //     )
    // }
    if (props.type === 'pizza') {
        totalWeight = props.content.weight + props.content.addedWeight + ' гр.'
    } else {
        totalWeight = null
    }
    if (props.type === 'pizza') {
        addMozarella = <div className={"topping-counter__actions"}>
            <button type={"button"} >
                <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
    } else {
        addMozarella = null
    }

    if (props.content.config.size.length > 0) {
        optionSize = props.content.config.size.map((a, i) => {
            return <option value={a.name} info={a} key={i} >{a.title}</option>
        })
        sizeSelect = <select defaultValue={props.content.config.defaultSize} onChange={(event) => props.selectSizeToProps(event.target.value,props.type,props.content)} >
            {optionSize}
        </select>
    } else {
        sizeSelect = null
    }

    if (props.content.config.dough.length > 0) {
        optionDough = props.content.config.dough.map((a, i) => {
            return <option value={a.name} key={i} >{a.title}</option>
        })
        doughSelect = <select onChange={(event) => props.selectDoughToProps(event.target.value,props.type,props.content)} >
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
            <div className={'product_description'}>{props.content.content}</div>
            <div className={'product_customize'}>
                <div className={'product_modification'}>
                    {sizeSelect}
                    {doughSelect}
                </div>
            </div>
            <div className={'product_modification_control'}>
                {addMozarella}
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
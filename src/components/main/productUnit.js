import React from 'react'
import './content.css';

const ProductUnit = (props, state) => {

    let optionSize = props.content.config.size.map((a, i) => {

        return <option value={a.name} key={i} >{a.title}</option>

    }) 
 /*   let optionDough=null
    if (props.content.config.dough) {
        optionDough = props.content.config.dough.map((a, i) => {

            return <option value={a.name} key={i} >{a.title}</option>
    
        })   
    } else {
        return null
    }*/
    let optionDough = props.content.config.dough.map((a, i) => {

        return <option value={a.name} key={i} >{a.title}</option>

    })
    return (
        <div className={'product'}>
            <div className={'product_logo'}>
                <img src={props.content.img} alt={props.content.title}></img>
            </div>
            <div className={'product_name'}>{props.content.title}</div>
            <div className={'product_description'}>{props.content.content}</div>
            <div className={'product_customize'}>
                <div className={'product_modification'}>
                    <select  >
                        {optionSize}
                    </select>
                    <select>
                        {optionDough}
                    </select>
                </div>
            </div>
            <div className={'product_modification_control'}>
                <div className={"topping-counter__actions"}>
                    <button type={"button"} >
                        <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
            </div>
            <div className={'product-result'}>

                <div className={"product-card__modification-info"}>
                    <p className={"product-card__modification-info-price"}>{props.content.price}</p>
                    <p className={"product-card__modification-info-weight"}>585 гр</p>
                </div>
                <div className={"product-card__actions"}>
                    <button title={"В корзину"} type={"button"} ><span ><span >
                        <span >В корзину</span></span></span></button>
                </div>
            </div>
        </div>)



}
export default ProductUnit
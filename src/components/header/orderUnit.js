import React from 'react';



const OrderUnit = (props) => {
    // console.log(props.content)
    let cartItem


    cartItem = props.content.cart.map((a, i) => {
        let optionSize
        let sizeSelect
        let optionDough
        let doughSelect
        if (a.config.size.length > 0) {
            optionSize = a.config.size.map((size, i) => {
                return <option value={size.name} info={size.name} key={i} >{size.title}</option>
            })
            sizeSelect = <select defaultValue={a.config.defaultSize} onChange={(event) => props.selectSize(event.target.value, props.id, a)} >
                {optionSize}
            </select>
        } else {
            sizeSelect = null
        }

        if (a.config.dough.length > 0) {
            optionDough = a.config.dough.map((a, i) => {
                return <option value={a.name} key={i} >{a.title}</option>
            })
            doughSelect = <select defaultValue={a.config.defaulDough} onChange={(event) => props.selectDough(event.target.value, props.id, a)} >
                {optionDough}
            </select>
        } else {
            doughSelect = null
        }
        return <div key={Math.random()}>
            <span>{a.title}</span><span>{'  '}</span>
            <span>{a.priceName}</span><span>{'  '}</span>
            {doughSelect}
            <span>{a.addedDoughName}</span><span>{'  '}</span>
            {sizeSelect}
            <span>{a.weight + a.addedWeight}<span>{'гр'}</span></span><span>{'  '}</span>
            <span>{a.price + a.addedPrice}</span><span>{'р'}</span><span>{'  '}</span>
            <span>{a.amount}</span><span>{'шт'}</span><span>{'  '}</span>
            <button onClick={() => props.addAmountOfOrder(props.id,a)}>+</button>
            <button onClick={() => props.reduceAmountOfOrder(props.id,a)}>-</button>
            <button onClick={() => props.deleteAmountOfOrder(props.id,a)}>delete</button>
        </div>
    })

    return (
        <div >
            {cartItem}
        </div>
    );

}

export default OrderUnit
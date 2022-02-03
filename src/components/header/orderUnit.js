import React from 'react';



const OrderUnit = (props) => {
console.log(props.content)
let cartItem
cartItem = props.content.cart.map((a, i) => {
    return <div key={Math.random()}>
        <span>{a.title}</span><span>{'  '}</span>
        <span>{a.priceName}</span><span>{'  '}</span>
        <span>{a.addedDoughName}</span><span>{'  '}</span>
        <span>{a.weight + a.addedWeight}<span>{'гр'}</span></span><span>{'  '}</span>
        <span>{a.price + a.addedPrice}</span><span>{'р'}</span><span>{'  '}</span>
        <span>{a.amount}</span><span>{'шт'}</span><span>{'  '}</span>
        <button onClick={() => props.deleteItem(i)}>delete</button>
    </div>
})

    return (
        <div >
           {cartItem}
        </div>
    );

}

export default OrderUnit
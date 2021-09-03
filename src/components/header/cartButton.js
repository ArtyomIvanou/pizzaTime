import React from 'react'

const CartButton=(props)=>{
  

  
   console.log(props.cart.length)
    return (
      <div className={'cart'}><button>Корзина</button><div>{props.cart.length}</div></div>  
    );
    
  }
  export default CartButton
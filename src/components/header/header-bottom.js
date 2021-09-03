import React from 'react'
import './header.css';
import NavMenu from './navMenu';
import CartButton from './cartButton';
const HeaderBottom=(props)=>{
  
   
    return (
      
        <div className={'header_bottom'}>
         <NavMenu></NavMenu>

          <CartButton cart={props.cart}></CartButton>
        </div>


      
    );
    
  }
  export default HeaderBottom
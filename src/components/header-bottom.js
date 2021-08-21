import React from 'react'
import './header.css';
import NavMenu from './navMenu';
import CartButton from './cartButton';
const HeaderBottom=()=>{
  
   
    return (
      
        <div className={'header_bottom'}>
         <NavMenu></NavMenu>

          <CartButton></CartButton>
        </div>


      
    );
    
  }
  export default HeaderBottom
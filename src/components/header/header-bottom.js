import React from 'react'
import './header.css';
import NavMenu from './navMenu';
import CartButtonConteiner from './cartButtonConteiner';
const HeaderBottom=(props)=>{
  
   
    return (
      
        <div className={'header_bottom'}>
         <NavMenu></NavMenu>

          <CartButtonConteiner/>
        </div>


      
    );
    
  }
  export default HeaderBottom
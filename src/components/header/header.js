import React from 'react'
import './header.css';
import HeaderTop from './header-top';
import HeaderBottom from './header-bottom';
const Header = (props) => {


    return (
        <header>
            <HeaderTop></HeaderTop>
            <HeaderBottom cart={props.cart}></HeaderBottom>
        </header>
    );

}
export default Header
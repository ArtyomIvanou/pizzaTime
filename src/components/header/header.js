import React from 'react'
import './header.css';
import HeaderTop from './header-topFuncContainer';
import HeaderBottom from './header-bottom';
const Header = (props) => {


    return (
        <header>
            <HeaderTop></HeaderTop>
            <HeaderBottom ></HeaderBottom>
        </header>
    );

}
export default Header
import React from 'react'
 import styles from './header.module.css';
import HeaderTop from './header-topFuncContainer';
import HeaderBottom from './header-bottom';
const Header = () => (
    <header className={styles.header}>
        <HeaderTop></HeaderTop>
        <HeaderBottom></HeaderBottom>
    </header>
)
export default Header
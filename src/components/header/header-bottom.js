import React from 'react'
import styles from './header.module.css';
import NavMenu from './navMenu';
import CartButtonConteiner from './cartButton/cartButtonConteiner';
const HeaderBottom = () => (
  <div className={styles.header_bottom}>
    <NavMenu></NavMenu>
    <CartButtonConteiner />
  </div>
)
export default HeaderBottom

import React  from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Content from './content/content';
import styles from './main.module.css';


const Main = () => (
  <div className={styles.spa}>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
)

export default Main
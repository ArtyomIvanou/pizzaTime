
import React from 'react';
import Content from './content';
//import NavMenu from './navMenu';
import Footer from '../footer/footer';
import Header from '../header/header';
import './main.css';
const Main = () => {


  return (
    <div className={'spa'}>

      <Header></Header>

      <Content></Content>
      <Footer></Footer>
    </div>
  );

}
export default Main
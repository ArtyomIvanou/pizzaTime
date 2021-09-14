
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Content from './content/content';
import './main.css';

const Main = (props) => {


  return (
    <div className={'spa'}>

      <Header cart={props.cart}></Header>

      <Content content={props.content} addToCart={props.addToCart} changeSize={props.changeSize} changeDough={props.changeDough} cart={props.cart}></Content>
      <Footer></Footer>
    </div>
  );

}
export default Main
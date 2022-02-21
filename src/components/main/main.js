
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Content from './content/content';
import './main.css';

const Main = () => {  
  return (
    <div className={'spa'}>
      <Header ></Header>
      <Content ></Content>
      <Footer></Footer>
    </div>
  );

}
export default Main
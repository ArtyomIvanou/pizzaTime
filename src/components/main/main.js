
import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Content from './content';
import './main.css';

const Main = (props) => {


  return (
    <div className={'spa'}>

      <Header></Header>

      <Content content={props.content}></Content>
      <Footer></Footer>
    </div>
  );

}
export default Main

import React from 'react';
import Content from './content';
//import NavMenu from './navMenu';
import Footer from '../footer/footer';
import Header from '../header/header';
import './main.css';
const Main = (props) => {

//console.log(props.content)
  return (
    <div className={'spa'}>

      <Header></Header>

      <Content content={props.content}></Content>
      <Footer></Footer>
    </div>
  );

}
export default Main
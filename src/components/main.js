
import './main.css';
import React from 'react'
import Header from './header';
import Content from './content';
//import NavMenu from './navMenu';
import Footer from './footer';
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
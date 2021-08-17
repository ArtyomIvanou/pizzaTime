
import './main.css';
import React from 'react'
import Header from './header';
import Content from './content';
const Main = () => {


  return (
    <div className={'spa'}>

      <Header></Header>

      <Content></Content>
      <footer>
        <div>about</div>
        <div>menu2</div>
        <div>cards</div>
      </footer>
    </div>
  );

}
export default Main
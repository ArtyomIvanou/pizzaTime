import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from './redux/state';
import {addToCart} from './redux/state'
import { changeSize } from './redux/state';
//console.log(state.cart)

export let renderTree=(state)=> ReactDOM.render(
  <React.StrictMode>
    <App content={state.shop} addToCart={addToCart} changeSize={changeSize} cart={state.cart}/>
  </React.StrictMode>,
  document.getElementById('root')
);
//renderTree()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

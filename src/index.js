import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import {renderTree} from './render'
import state, { addToCart} from './redux/state';
import reportWebVitals from './reportWebVitals';
import { changeSize } from './redux/state';
import { changeDough } from './redux/state';
import { reloadSite } from './redux/state';
//console.log(state.cart)
/*ReactDOM.render(
  <React.StrictMode>
    <App content={state.shop} addToCart={addToCart} cart={state.cart}/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
export let renderTree=(state)=> ReactDOM.render(
  <React.StrictMode>
    <App content={state.shop} addToCart={addToCart} changeSize={changeSize} changeDough={changeDough} cart={state.cart}/>
  </React.StrictMode>,
  document.getElementById('root')
);
renderTree(state)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
reloadSite(renderTree)

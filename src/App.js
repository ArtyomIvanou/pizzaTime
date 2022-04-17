import React from 'react';
import './App.css';
import Main from './components/main/main';
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import store from './redux/redux-store';
const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
      <Main />
    </Router></Provider>

  );
}

export default App

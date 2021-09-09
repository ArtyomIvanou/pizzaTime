//import logo from './logo.svg';
import './App.css';
import Main from './components/main/main';
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
//import shop from './AppData';

const history = createBrowserHistory()

function App(props) {
  return (
    <Router history={history}>
      <Main content={props.content} addToCart={props.addToCart} changeSize={props.changeSize} cart={props.cart}></Main>
    </Router>
  );
}

export default App;

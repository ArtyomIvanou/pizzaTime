//import logo from './logo.svg';
import './App.css';
import Main from './components/main/main';
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Main ></Main>
    </Router>
  );
}

export default App;

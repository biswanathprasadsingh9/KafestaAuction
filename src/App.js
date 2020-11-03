import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'

function App() {
  return (
    <>
   
    <Router>
  
     
      <Switch>
        <Route exact path='/' component={Home} />

    
        <Route path="*" component={() => "404 Page NOT FOUND"} />
      </Switch>
     
    
    </Router>
    </>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import PageRouter from './components/PageRouter.js';
import Circulation from"./components/Circulation.js";

function App() {
  return (
    <div className="App">
      <Router>
              <Switch>              
                <Route exact path="/circulation" component={Circulation}/>           
                <Route path="/" component={PageRouter}/>                  
              </Switch>
      </Router>
    </div>
  );
}

export default App;

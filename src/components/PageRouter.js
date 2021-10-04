import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './HomePage.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import WhitePaper from './WhitePaper.js';
import HowToBuy from './HowToBuy.js';


function PageRouter() {
  return (
    <div className="app-wrapper">
      <Navigation/>
       <Router>                                                          
              <Switch>
                <Route exact path="/" component={HomePage}/>       
                <Route path="/whitepaper" component={WhitePaper}/>                    
                <Route path="/howtobuy" component={HowToBuy}/>
              </Switch>              
      </Router>
      <Footer/>
    </div>
  );
}

export default PageRouter;
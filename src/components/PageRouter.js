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
import NFT from './NFT.js';
import Blog from './Blog.js';


function PageRouter() {
  return (
    <div className="app-wrapper">
      <Navigation/>
       <Router>                                                          
              <Switch>
                <Route exact path="/" component={HomePage}/>       
                <Route path="/whitepaper" component={WhitePaper}/>                    
                <Route path="/nft" component={NFT}/>   
                <Route path="/howtobuy" component={HowToBuy}/>
                {/* <Route path="/Blog" component={Blog}/> */}
              </Switch>              
      </Router>
      <Footer/>
    </div>
  );
}

export default PageRouter;
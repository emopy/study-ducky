import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import SplashPage from './pages/splash'
import ExplorePage from './pages/explore'

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* <div>
            <Link className="App-link" to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link className="App-link" to="/page2">Page2</Link>
          </div> */}
          <Switch>
            <Route exact path="/">
                <p>home</p>
                <SplashPage/>
            </Route>
            <Route path="/explore">
                <ExplorePage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

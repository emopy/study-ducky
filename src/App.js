import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import SplashPage from './pages/splash'
import ExplorePage from './pages/explore'
import AddPage from './pages/add'


import UploadNotesForm from "./components/UploadNotesForm";
import UploadLecturesForm from "./components/UploadLecturesForm";
import './bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <SplashPage/>
            </Route>
            <Route path="/explore">
                {/* <div>
                    <Link className="App-link" to="/">Home</Link>
                    &nbsp;| &nbsp;
                    <Link className="App-link" to="/explore">Explore</Link>
                </div> */}
                <ExplorePage/>
            </Route>
            <Route path="/add">
                {/* <div>
                    <Link className="App-link" to="/">Home</Link>
                    &nbsp;| &nbsp;
                    <Link className="App-link" to="/explore">Explore</Link>
                </div> */}
                <AddPage />
            </Route>
            <Route path="/upload-notes">
              <UploadNotesForm />
            </Route>
            <Route path="/upload-lectures">
              <UploadLecturesForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

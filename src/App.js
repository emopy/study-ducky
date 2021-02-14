import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import SplashPage from './pages/splash'
import ExplorePage from './pages/explore'
import UploadPage from './pages/upload'
import DetailsPage from './pages/details'


import UploadNotesForm from "./components/UploadNotesForm";
import UploadLecturesForm from "./components/UploadLecturesForm";
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
            <Route path="/upload">
                {/* <div>
                    <Link className="App-link" to="/">Home</Link>
                    &nbsp;| &nbsp;
                    <Link className="App-link" to="/explore">Explore</Link>
                </div> */}
                <UploadPage />
            </Route>
            <Route path="/upload-notes">
              <UploadNotesForm />
            </Route>
            <Route path="/upload-lectures">
              <UploadLecturesForm />
            </Route>
            <Route path="/details/:docId">
              <DetailsPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

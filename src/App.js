import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Artists from './containers/Artists'
import Albums from './containers/Albums'
import Tracks from './containers/Tracks'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
      <div className="App">
          <Header />
          <Menu />
          <Switch>
              <Route path="/" exact>
                  <Artists />
              </Route>
              <Route path="/albums/:artist" render={(props) => (<Albums {...props} /> )} />                   
              <Route path="/tracks/:albumId">
                  <Tracks />
              </Route>
          </Switch>
      </div>
  </Router>
)


export default App

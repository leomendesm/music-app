import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Artists from './containers/Artists'
import Albums from './containers/Albums'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <Menu />
            <Switch>
                <Route path="/" exact>
                    <Artists />
                </Route>
                <Route path="/albums" exact>
                    <Albums />
                </Route>
            </Switch>
        </div>
    </Router>
  )
}

export default App

import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Artists from './containers/Artists'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Artists />
    </div>
  )
}

export default App

import React, { Component } from 'react';
// import AppNavBar from './Components/AppNavBar';
// import Header from './Components/Header';
import AppBar from './Components/AppBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Time to redesign my webpage. With Awesomeness</p>
      </div>
    );
  }
}

export default App;

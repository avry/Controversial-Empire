import React, { Component } from 'react';
import logo from '../images/logo.svg';
import theteam from '../images/theteam.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={theteam} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is Controversial Empire, a homie g Dawg production work  
        </p>
      </div>
    );
  }
}

export default App;

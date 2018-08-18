import React, { Component } from 'react';
import logo from '../images/logo.svg';
import theteam from '../images/theteam.jpg';
import './App.css';
import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={theteam} className="App-team-picture" />
        </header>
        <p className="App-intro">
          This is Controversial Empire, a homie g Dawg production work  
        </p>
        <Button color="primary">random button</Button>{' '}
      </div>
    );
  }
}

export default App;

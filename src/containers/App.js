import React, { Component } from 'react';
import Nav from './Nav';
import MainArea from './MainArea';
import Header from './Header';

import model3 from '../images/model3.jpg';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <MainArea />
      </div>
    );
  }
}

export default App;

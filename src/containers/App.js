import React, { Component } from 'react';
import Navigator from './Nav';
import MainArea from './MainArea';
import Header from './Header';
import PropTypes from 'prop-types';

import model3 from '../images/model3.jpg';
import logo from '../images/logo.png';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currPage: ""
    };
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  setCurrentPage = (page) => {
    if (this.state.currPage) {
      this.setState({
        currentPage: page
      })
    };
  }
  render() {
    return (
      <div className="App">
        <Header currPage={this.state.currPage}/> 
        <MainArea endpoint="api/lead/" currPage={this.state.currPage}/>
      </div>
    );
  }
}

export default App;
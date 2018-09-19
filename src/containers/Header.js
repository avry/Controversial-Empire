import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Slider from './Carousel';
import Navigator from './Nav';
import './Header.css'


class Header extends Component {
  constructor(props) {
  	super(props);
  }
  render () {
  	return (
      <Container fluid>
        <div className="header-stuff">
          <Row>
            <Col></Col>
            <Col>
              <div>
                <Slider />
                <p>{ this.props.currPage }</p>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Navigator/>
        </div>
      </Container> 
    );
  };
}

Header.propTypes = {
  currPage: PropTypes.bool.isRequired
};


export default Header ;
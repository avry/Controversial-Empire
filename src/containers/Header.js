import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Slider from './Carousel';
import Navigator from './Nav';


class Header extends Component {
  constructor(props) {
  	super(props);
  }
  render () {
  	return (
      <Container fluid>
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
      </Container> 
    );
  };
}

Header.propTypes = {
  currPage: PropTypes.bool.isRequired
};


export default Header ;
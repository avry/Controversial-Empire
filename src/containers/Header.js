import React, { Component } from 'react';
import Slider from './Carousel';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';



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
      </Container> 
    );
  };
}

Header.propTypes = {
  currPage: PropTypes.bool.isRequired
};


export default Header ;
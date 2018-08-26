import React, { Component } from 'react';
import Slider from './Carousel';
import { Container, Row, Col } from 'reactstrap';



class Header extends Component {
  constructor(props) {
  	super(props);
  }
  render () {
  	return (
      <Container fluid>
        <Row>
          <col></col>
          <Col>
            <div>
              <Slider />
            </div>
          </Col>
          <col></col>
        </Row>
      </Container> 
    );
  };
}

export default Header ;
import React, { Component } from 'react';
import walterdale from '../images/article1.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class GenericCard extends Component {
  constructor(props) {
  	super(props);
  }
  render () {
  	return (
      <div>
        <Card>
        <CardBody>
          <CardTitle>{ this.props.person.name }</CardTitle>
          <CardSubtitle>{ this.props.person.email }</CardSubtitle>
          <CardText>{ this.props.person.message }</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div> 
    );
  };
}

export default GenericCard ;


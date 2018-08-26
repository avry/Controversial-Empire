import React, { Component } from 'react';
import walterdale from '../images/article1.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
  	super(props);
  }
  render () {
  	return (
      <div>
        <Card>
        <CardImg top width="100%" src={ this.props.person.imagesrc } style={{ height: "180px" }}/>
        <CardBody>
          <CardTitle>{ this.props.person.name }</CardTitle>
          <CardSubtitle>{ this.props.person.company }</CardSubtitle>
          <CardText>{ this.props.person.description }</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div> 
    );
  };
}

export default PeopleCard ;
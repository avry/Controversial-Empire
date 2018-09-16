import React, { Component } from 'react';
import walterdale from '../images/article1.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class GenericCard extends Component {
  constructor(props) {
  	super(props);
  }
  handleClick = () => {
    console.log('1curr value of slug');
    console.log(this.props.project.slug);
    console.log('2curr value of slug');
    this.props.onClick(this.props.project.slug);
  }
  render () {
  	return (
      <div>
        <Card>
        <CardBody>
          <CardTitle>{ this.props.project.name }</CardTitle>
          <CardSubtitle>{ this.props.project.github }</CardSubtitle>
          <CardText>{ this.props.project.description }</CardText>
          <Button onClick={this.handleClick}>Button</Button>
        </CardBody>
      </Card>
      </div> 
    );
  };
}

export default GenericCard ;


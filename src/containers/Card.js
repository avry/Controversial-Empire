import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import walterdale from '../images/article1.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class GenericCard extends Component {
  constructor(props) {
  	super(props);
  }
  handleClick = () => {
    console.log('value of slug in Card.js is ' + this.props.project.slug);
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
          <Button onClick={this.handleClick}>
            <Link to={`projects/${this.props.project.slug}/`}>Button</Link>
          </Button>
        </CardBody>
      </Card>
      </div> 
    );
  };
}

export default GenericCard ;


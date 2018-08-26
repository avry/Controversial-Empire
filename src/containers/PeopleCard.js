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
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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